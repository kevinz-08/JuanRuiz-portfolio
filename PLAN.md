# Plan de correcciones — CORRECIONES.md

## 1. SFX + Animación de ensamblaje al abrir portafolio

**Problema:** Al hacer clic en "Abrir Portafolio" falta:
- El sonido (`src/assets/sonido_de_boton_para_abrir_portafolio.wav`)
- La animación "gravity assembly": nav pill + elementos del hero (`.hrow`, `.l1`, `.l2`, `.hdesc`, `.hbtns`, `.hvwrap`) deben aparecer con transición suave desde abajo (`.asm-pre` → `.asm-in`) con stagger de 80ms entre elementos

**Archivos a modificar:**
- `src/app/components/IntroOverlay.tsx`

**Lógica original exacta:**
```
click → audio.play() → setBtnClass('clicked')
→ 180ms → introCenter.classList.add('departing') + prepareAssembly()
→ 400ms → stop stars canvas
→ 700ms → body.classList.remove('intro-active') + overlay gone
→ 900ms → triggerAssembly() con stagger 80ms por elemento
```

---

## 2. Distribución del texto hero

**Problema:** El wrapping de "Hagamos de tu idea un / video impactante" es incorrecto.

**Causa probable:** La fuente Inter Tight (`var(--ff-display)`) no se está aplicando, lo que cambia el ancho de los caracteres y por ende el line-break natural.

**Archivos a modificar:**
- `src/app/components/HeroPanel.tsx` — el contenido JSX de `.l1` / `.l2` ya es correcto; si sigue fallando, agregar `<br>` explícitos o forzar el wrapping con CSS
- `src/styles/origin.css` — verificar que la importación de Google Fonts de Inter Tight está al inicio del archivo (no dentro de un selector)

---

## 3. Typewriter — solo "EDITOR Y POSTPRODUCTOR DE VIDEO"

**Problema:** El typewriter cicla entre múltiples frases. El original escribe una sola vez, letra a letra, el texto fijo `"EDITOR Y POSTPRODUCTOR DE VIDEO"` a 42ms por carácter, sin repetir.

**Archivos a modificar:**
- `src/app/components/HeroPanel.tsx` — reemplazar el `useEffect` del typewriter
- `src/app/components/Navigation.tsx` — eliminar el typewriter (no pertenece al nav)

---

## 4. Sección Herramientas — restaurar completamente

**Problema:** La sección aparece vacía. Las causas posibles:
- El `dangerouslySetInnerHTML` del cosmos stage se monta pero los canvas y eventos se inicializan antes de que el DOM esté listo
- Las imágenes de asteroides usan paths que Vite no resuelve como `/src/assets/`
- El scroll listener puede no estar detectando la sección correctamente

**Solución:**
- Hacer que el `useEffect` del canvas y el scroll listener corran con un pequeño delay tras el mount
- Cambiar los paths de imágenes a imports estáticos de Vite
- Verificar que `cosmosStageHTML.ts` contiene el HTML correcto del campo de asteroides

**Archivos a modificar:**
- `src/app/components/ToolsPanel.tsx`
- `src/app/components/cosmosStageHTML.ts`

---

## 5. Foto de perfil en "Formación Autodidacta"

**Problema:** Se muestra un placeholder en lugar de la foto de perfil real.

**Archivo disponible:** `src/assets/foto_de_perfil.png`

**Archivos a modificar:**
- `src/app/components/FormacionPanel.tsx` — tarjeta 4 (Autodidacta): reemplazar el `<div>` placeholder por `<img src="/src/assets/foto_de_perfil.png" alt="Juan Ruiz" />`

---

## 6. FAQ rota

**Problema:** Los paneles desaparecen con su texto al hacer clic. Causa: colisión entre `style={{ maxHeight }}` de React y las transiciones CSS de `.faq-body`.

**Solución:**
- Quitar el `style` inline de `maxHeight` del componente
- Agregar en `origin.css` la regla faltante: `.faq-item.open .faq-body { max-height: 600px }`
- Controlar solo mediante la clase `.open` en `.faq-item`

**Archivos a modificar:**
- `src/app/components/FaqPanel.tsx`
- `src/styles/origin.css` — agregar la regla `max-height` al `.faq-item.open .faq-body`

---

## 7. Halo rojo en el navbar pill

**Problema:** El pill de navegación tenía un leve glow rojo permanente que ya no está.

**Solución:** Agregar `box-shadow: 0 0 28px rgba(220,38,38,.10), 0 8px 32px rgba(0,0,0,.45)` al `.pill` base.

**Archivos a modificar:**
- `src/styles/origin.css` — modificar la regla `.pill`

---

## Orden de ejecución recomendado

| # | Corrección | Archivo(s) | Dificultad |
|---|---|---|---|
| 1 | FAQ rota | `FaqPanel.tsx` + `origin.css` | Baja |
| 2 | Typewriter texto fijo | `HeroPanel.tsx` + `Navigation.tsx` | Baja |
| 3 | Foto perfil Formación | `FormacionPanel.tsx` | Baja |
| 4 | Navbar halo rojo | `origin.css` | Baja |
| 5 | Hero text layout | `HeroPanel.tsx` | Media |
| 6 | SFX + Assembly animation | `IntroOverlay.tsx` | Media |
| 7 | Herramientas restaurar | `ToolsPanel.tsx` + `cosmosStageHTML.ts` | Alta |
