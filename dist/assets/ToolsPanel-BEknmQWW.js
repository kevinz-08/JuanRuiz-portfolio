import{r as d,j as e}from"./vendor-react-BVujZ77b.js";const E=`<div class="cosmos-stage" id="cosmos-stage">\r
    <div class="cosmos-bg" id="cosmos-bg"></div>\r
    <canvas id="cosmos-stars"></canvas>\r
    <!-- Background drifting space rocks (parallax mid-layer) -->\r
    <div class="cosmos-bgrocks" aria-hidden="true">\r
      <svg class="bgrock bgrock-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\r
        <defs>\r
          <radialGradient id="bgrock-grad-1" cx="35%" cy="35%" r="70%">\r
            <stop offset="0%" stop-color="#3a2a26"/>\r
            <stop offset="60%" stop-color="#1a0e0c"/>\r
            <stop offset="100%" stop-color="#0a0506"/>\r
          </radialGradient>\r
        </defs>\r
        <path d="M52,8 L78,18 L92,42 L86,68 L70,88 L42,92 L18,78 L8,52 L14,28 L34,12 Z" fill="url(#bgrock-grad-1)" stroke="rgba(220,38,38,.15)" stroke-width=".5"/>\r
        <circle cx="38" cy="42" r="4" fill="rgba(0,0,0,.4)"/>\r
        <circle cx="62" cy="58" r="3" fill="rgba(0,0,0,.35)"/>\r
        <circle cx="50" cy="72" r="2" fill="rgba(0,0,0,.3)"/>\r
      </svg>\r
      <svg class="bgrock bgrock-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\r
        <path d="M48,6 L74,14 L90,38 L88,64 L72,86 L46,94 L20,82 L6,56 L12,30 L30,10 Z" fill="url(#bgrock-grad-1)" stroke="rgba(220,38,38,.12)" stroke-width=".5"/>\r
        <circle cx="40" cy="40" r="3.5" fill="rgba(0,0,0,.4)"/>\r
        <circle cx="58" cy="62" r="2.5" fill="rgba(0,0,0,.35)"/>\r
      </svg>\r
      <svg class="bgrock bgrock-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\r
        <path d="M54,10 L82,20 L94,46 L84,70 L66,90 L40,90 L14,76 L6,50 L18,24 L36,10 Z" fill="url(#bgrock-grad-1)" stroke="rgba(220,38,38,.18)" stroke-width=".5"/>\r
        <circle cx="42" cy="45" r="4.5" fill="rgba(0,0,0,.45)"/>\r
        <circle cx="64" cy="55" r="2" fill="rgba(0,0,0,.3)"/>\r
        <circle cx="52" cy="68" r="3" fill="rgba(0,0,0,.35)"/>\r
      </svg>\r
      <svg class="bgrock bgrock-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\r
        <path d="M50,8 L76,16 L90,40 L88,66 L70,88 L44,92 L18,80 L8,54 L16,28 L34,12 Z" fill="url(#bgrock-grad-1)" stroke="rgba(220,38,38,.14)" stroke-width=".5"/>\r
        <circle cx="36" cy="44" r="3" fill="rgba(0,0,0,.4)"/>\r
        <circle cx="60" cy="60" r="3.5" fill="rgba(0,0,0,.35)"/>\r
      </svg>\r
    </div>\r
    <div class="cosmos-comet">\r
      <div class="cosmos-comet-tail"></div>\r
      <div class="cosmos-comet-head"></div>\r
    </div>\r
    <canvas id="cosmos-dust"></canvas>\r
    <div class="cosmos-fog" id="cosmos-fog"></div>\r
    <div class="cosmos-vignette" id="cosmos-vignette"></div>\r
\r
    <div class="cosmos-content" id="cosmos-content">\r
      <div class="cosmos-hdr">\r
        <span class="cosmos-eyebrow">✦ Arsenal Cinematográfico</span>\r
        <h2 class="cosmos-title">Mis herramientas</h2>\r
        <p class="cosmos-sub">Haz click sobre cada una para más información</p>\r
      </div>\r
\r
      <!-- ASTEROID FIELD — image 2 style: dark irregular asteroids + flat logos\r
           Order following boceto: AVID | DAVINCI | AFTER EFFECTS (center) | PREMIERE | AUDITION -->\r
      <div class="asteroid-field">\r
\r
        <!-- AVID — far left -->\r
        <div class="asteroid" data-tool="avid"\r
             style="left:3%;top:56%;\r
                    --rock-w:155px;--rock-h:115px;--logo-w:58px;\r
                    --float-dur:32s;--float-delay:-12s;\r
                    --drift-x:8px;--drift-y:5px;--rot-base:1deg;\r
                    --z-order:11;">\r
          <div class="rock-host"><svg class="rock-img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="ag1" cx="28%" cy="22%" r="65%"> <stop offset="0%" stop-color="#5a4c3c"/> <stop offset="18%" stop-color="#342a1e"/> <stop offset="48%" stop-color="#1c1410"/> <stop offset="100%" stop-color="#080604"/> </radialGradient> <radialGradient id="ah1" cx="24%" cy="18%" r="28%"> <stop offset="0%" stop-color="rgba(200,175,140,0.18)"/> <stop offset="100%" stop-color="rgba(0,0,0,0)"/> </radialGradient> </defs> <path d=" M 38,60 L 24,44 L 30,26 L 48,14 L 66,18 L 80,10 L 98,16 L 114,10 L 130,22 L 144,36 L 136,48 L 152,62 L 155,78 L 145,94 L 128,106 L 106,114 L 80,112 L 56,106 L 40,90 L 28,74 Z " fill="url(#ag1)"/> <path d=" M 38,60 L 24,44 L 30,26 L 48,14 L 66,18 L 80,10 L 98,16 L 114,10 L 130,22 L 144,36 L 136,48 L 152,62 L 155,78 L 145,94 L 128,106 L 106,114 L 80,112 L 56,106 L 40,90 L 28,74 Z " fill="url(#ah1)"/> <!-- surface facets --> <path d="M 56,28 L 76,22 L 88,34 L 78,50 L 58,54 L 46,40Z" fill="rgba(255,255,255,0.04)" stroke="none"/> <path d="M 92,72 L 112,66 L 124,80 L 112,96 L 92,98 L 80,84Z" fill="rgba(0,0,0,0.1)" stroke="none"/> <!-- crater A — large --> <ellipse cx="74" cy="55" rx="16" ry="11" fill="rgba(0,0,0,0.12)" transform="rotate(-20,74,55)"/> <ellipse cx="74" cy="55" rx="13" ry="8.5" fill="rgba(0,0,0,0.35)" transform="rotate(-20,74,55)"/> <ellipse cx="74" cy="55" rx="9" ry="5.8" fill="rgba(0,0,0,0.15)" transform="rotate(-20,74,55)"/> <path d="M 64,48 A 13,8.5 -20 0 1 84,48" fill="none" stroke="rgba(200,175,145,0.14)" stroke-width="1.2" stroke-linecap="round"/> <!-- crater B — medium --> <ellipse cx="118" cy="78" rx="10" ry="6.5" fill="rgba(0,0,0,0.1)" transform="rotate(12,118,78)"/> <ellipse cx="118" cy="78" rx="8" ry="5" fill="rgba(0,0,0,0.3)" transform="rotate(12,118,78)"/> <ellipse cx="118" cy="78" rx="5" ry="3.2" fill="rgba(0,0,0,0.12)" transform="rotate(12,118,78)"/> <!-- crater C — small --> <ellipse cx="85" cy="92" rx="6.5" ry="4" fill="rgba(0,0,0,0.28)" transform="rotate(-8,85,92)"/> <ellipse cx="85" cy="92" rx="3.5" ry="2.2" fill="rgba(0,0,0,0.1)" transform="rotate(-8,85,92)"/> <!-- crater D — tiny --> <ellipse cx="48" cy="76" rx="4" ry="2.5" fill="rgba(0,0,0,0.24)"/> <ellipse cx="138" cy="56" rx="3.5" ry="2" fill="rgba(0,0,0,0.22)" transform="rotate(15,138,56)"/> <!-- fissures --> <path d="M 84,62 L 98,68 L 112,72 L 118,84" fill="none" stroke="rgba(0,0,0,0.45)" stroke-width="1.1" stroke-linecap="round"/> <path d="M 58,76 L 64,88 L 60,102" fill="none" stroke="rgba(0,0,0,0.38)" stroke-width="0.9" stroke-linecap="round"/> <path d="M 94,36 L 102,44 L 108,54" fill="none" stroke="rgba(0,0,0,0.32)" stroke-width="0.8" stroke-linecap="round"/> <!-- metallic glints --> <ellipse cx="60" cy="24" rx="2.5" ry="1.1" fill="rgba(220,200,170,0.35)" transform="rotate(-38,60,24)"/> <ellipse cx="130" cy="36" rx="1.8" ry="0.9" fill="rgba(220,200,170,0.28)"/> <ellipse cx="144" cy="74" rx="1.4" ry="0.7" fill="rgba(220,200,170,0.22)" transform="rotate(22,144,74)"/> <!-- rim light on lit edge --> <path d="M 28,74 L 38,60 L 24,44 L 30,26 L 48,14 L 66,18 L 80,10 L 98,16 L 114,10" fill="none" stroke="rgba(220,150,70,0.08)" stroke-width="2.5" stroke-linecap="round"/> </svg>\r
            <div class="logo-mount">\r
              <div class="logo-3d" style="background:radial-gradient(circle at 35% 30%,#9148ff 0%,#6420d8 100%);border-radius:50%;">\r
                <div class="logo-3d-content">\r
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\r
                    <!-- White outline ring -->\r
                    <circle cx="25" cy="25" r="18" fill="none" stroke="#fff" stroke-width="2"/>\r
                    <!-- Film frame: arched top -->\r
                    <path d="M14 16 Q14 13 18 13 L32 13 Q36 13 36 16 L36 19 L14 19 Z" fill="#fff"/>\r
                    <!-- Film frame: arched bottom -->\r
                    <path d="M14 34 L36 34 L36 37 Q36 40 32 40 L18 40 Q14 40 14 37 Z" fill="#fff"/>\r
                    <!-- Center rectangle (the main "frame") -->\r
                    <rect x="14" y="21" width="22" height="11" fill="#fff"/>\r
                    <!-- Cut out purple from middle to leave the frame visible -->\r
                    <rect x="16.5" y="20.7" width="17" height="11.6" rx=".5" fill="#7028e0"/>\r
                    <!-- Left side hashes (vertical bars) -->\r
                    <rect x="9" y="20.5" width="1.5" height="2.8" fill="#fff"/>\r
                    <rect x="9" y="25.4" width="1.5" height="2.8" fill="#fff"/>\r
                    <rect x="9" y="30.3" width="1.5" height="2.8" fill="#fff"/>\r
                    <!-- Right side hashes -->\r
                    <rect x="39.5" y="20.5" width="1.5" height="2.8" fill="#fff"/>\r
                    <rect x="39.5" y="25.4" width="1.5" height="2.8" fill="#fff"/>\r
                    <rect x="39.5" y="30.3" width="1.5" height="2.8" fill="#fff"/>\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <span class="asteroid-label">Avid</span>\r
        </div>\r
\r
        <!-- DAVINCI — left of center -->\r
        <div class="asteroid" data-tool="dv"\r
             style="left:21%;top:30%;\r
                    --rock-w:180px;--rock-h:135px;--logo-w:72px;\r
                    --float-dur:28s;--float-delay:-4s;\r
                    --drift-x:12px;--drift-y:-5px;--rot-base:-1.5deg;\r
                    --z-order:12;">\r
          <div class="rock-host"><svg class="rock-img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="ag2" cx="26%" cy="20%" r="68%"> <stop offset="0%" stop-color="#544434"/> <stop offset="16%" stop-color="#302418"/> <stop offset="46%" stop-color="#1a100a"/> <stop offset="100%" stop-color="#080604"/> </radialGradient> <radialGradient id="ah2" cx="22%" cy="16%" r="26%"> <stop offset="0%" stop-color="rgba(195,168,132,0.2)"/> <stop offset="100%" stop-color="rgba(0,0,0,0)"/> </radialGradient> </defs> <path d=" M 60,18 L 44,28 L 24,46 L 16,66 L 20,84 L 14,98 L 28,108 L 48,118 L 72,124 L 96,126 L 118,120 L 138,108 L 150,94 L 156,76 L 148,58 L 158,44 L 144,30 L 124,20 L 102,14 L 80,14 Z " fill="url(#ag2)"/> <path d=" M 60,18 L 44,28 L 24,46 L 16,66 L 20,84 L 14,98 L 28,108 L 48,118 L 72,124 L 96,126 L 118,120 L 138,108 L 150,94 L 156,76 L 148,58 L 158,44 L 144,30 L 124,20 L 102,14 L 80,14 Z " fill="url(#ah2)"/> <!-- facets --> <path d="M 70,28 L 92,22 L 104,36 L 94,52 L 72,56 L 60,42Z" fill="rgba(255,255,255,0.045)"/> <path d="M 96,80 L 118,74 L 130,90 L 118,108 L 96,110 L 84,94Z" fill="rgba(0,0,0,0.08)"/> <!-- crater A — large --> <ellipse cx="88" cy="58" rx="18" ry="12" fill="rgba(0,0,0,0.11)" transform="rotate(-16,88,58)"/> <ellipse cx="88" cy="58" rx="14" ry="9.5" fill="rgba(0,0,0,0.36)" transform="rotate(-16,88,58)"/> <ellipse cx="88" cy="58" rx="9" ry="6" fill="rgba(0,0,0,0.14)" transform="rotate(-16,88,58)"/> <path d="M 76,50 A 14,9.5 -16 0 1 100,50" fill="none" stroke="rgba(200,175,145,0.16)" stroke-width="1.3" stroke-linecap="round"/> <!-- crater B --> <ellipse cx="136" cy="84" rx="11" ry="7" fill="rgba(0,0,0,0.1)" transform="rotate(8,136,84)"/> <ellipse cx="136" cy="84" rx="8.5" ry="5.5" fill="rgba(0,0,0,0.3)" transform="rotate(8,136,84)"/> <ellipse cx="136" cy="84" rx="5.5" ry="3.5" fill="rgba(0,0,0,0.12)" transform="rotate(8,136,84)"/> <!-- crater C --> <ellipse cx="62" cy="90" rx="8" ry="5.2" fill="rgba(0,0,0,0.27)" transform="rotate(-20,62,90)"/> <ellipse cx="62" cy="90" rx="4.5" ry="2.8" fill="rgba(0,0,0,0.1)" transform="rotate(-20,62,90)"/> <!-- tiny craters --> <ellipse cx="110" cy="108" rx="5" ry="3" fill="rgba(0,0,0,0.22)"/> <ellipse cx="44" cy="62" rx="3.5" ry="2.2" fill="rgba(0,0,0,0.24)" transform="rotate(12,44,62)"/> <!-- fissures --> <path d="M 90,66 L 106,72 L 120,76 L 128,90" fill="none" stroke="rgba(0,0,0,0.44)" stroke-width="1.1" stroke-linecap="round"/> <path d="M 54,78 L 60,92 L 54,108" fill="none" stroke="rgba(0,0,0,0.36)" stroke-width="0.9" stroke-linecap="round"/> <path d="M 124,38 L 134,48 L 140,62" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="0.8" stroke-linecap="round"/> <!-- glints --> <ellipse cx="68" cy="22" rx="2.8" ry="1.3" fill="rgba(220,200,170,0.36)" transform="rotate(-32,68,22)"/> <ellipse cx="146" cy="38" rx="2" ry="1" fill="rgba(220,200,170,0.28)"/> <ellipse cx="154" cy="72" rx="1.5" ry="0.8" fill="rgba(220,200,170,0.22)" transform="rotate(18,154,72)"/> <!-- rim light --> <path d="M 80,14 L 60,18 L 44,28 L 24,46 L 16,66 L 20,84 L 14,98" fill="none" stroke="rgba(220,150,70,0.08)" stroke-width="3" stroke-linecap="round"/> </svg>\r
            <div class="logo-mount">\r
              <div class="logo-3d" style="background:radial-gradient(circle at 35% 30%,#3a3a3a 0%,#1a1a1a 100%);border-radius:50%;">\r
                <div class="logo-3d-content">\r
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\r
                    <defs>\r
                      <!-- Full conic-like rainbow ring around the circle -->\r
                      <linearGradient id="dvRingT" x1="0" y1="0" x2="1" y2="0">\r
                        <stop offset="0%"  stop-color="#3a8de8"/>\r
                        <stop offset="50%" stop-color="#a230e8"/>\r
                        <stop offset="100%" stop-color="#ee2860"/>\r
                      </linearGradient>\r
                      <linearGradient id="dvRingB" x1="0" y1="0" x2="1" y2="0">\r
                        <stop offset="0%" stop-color="#3ae898"/>\r
                        <stop offset="50%" stop-color="#ffd028"/>\r
                        <stop offset="100%" stop-color="#ee5028"/>\r
                      </linearGradient>\r
                      <!-- Teardrop gradients: bright spot top-left, fading dark to bottom -->\r
                      <radialGradient id="dvBlue" cx="40%" cy="30%" r="65%">\r
                        <stop offset="0%"  stop-color="#e8f4ff"/>\r
                        <stop offset="40%" stop-color="#58a8e8"/>\r
                        <stop offset="100%" stop-color="#1860a8"/>\r
                      </radialGradient>\r
                      <radialGradient id="dvYel" cx="40%" cy="35%" r="65%">\r
                        <stop offset="0%"  stop-color="#fffae8"/>\r
                        <stop offset="50%" stop-color="#fae058"/>\r
                        <stop offset="100%" stop-color="#c89818"/>\r
                      </radialGradient>\r
                      <radialGradient id="dvRed" cx="40%" cy="30%" r="65%">\r
                        <stop offset="0%"  stop-color="#ffe8e8"/>\r
                        <stop offset="45%" stop-color="#f04860"/>\r
                        <stop offset="100%" stop-color="#a01828"/>\r
                      </radialGradient>\r
                    </defs>\r
                    <!-- Top half rainbow ring -->\r
                    <path d="M3 25 A22 22 0 0 1 47 25" fill="none" stroke="url(#dvRingT)" stroke-width="1.8" stroke-linecap="round"/>\r
                    <!-- Bottom half rainbow ring -->\r
                    <path d="M47 25 A22 22 0 0 1 3 25" fill="none" stroke="url(#dvRingB)" stroke-width="1.8" stroke-linecap="round"/>\r
                    <!-- Inner dark gray disc -->\r
                    <circle cx="25" cy="25" r="19.5" fill="#2a2a2a"/>\r
                    <!-- Three teardrops: tip pointing toward center, fat round end outward -->\r
                    <!-- BLUE: top -->\r
                    <path d="M25 24.5 Q22 21 22 16 Q22 11 25 9 Q28 11 28 16 Q28 21 25 24.5 Z" fill="url(#dvBlue)"/>\r
                    <!-- YELLOW: bottom-left -->\r
                    <path d="M24 26.4 Q19.2 27.8 14.5 30.4 Q10 32.8 11.3 36.5 Q14.5 39 19 36.8 Q23.4 34.2 25.4 28.4 Z" fill="url(#dvYel)"/>\r
                    <!-- RED: bottom-right -->\r
                    <path d="M26 26.4 Q30.8 27.8 35.5 30.4 Q40 32.8 38.7 36.5 Q35.5 39 31 36.8 Q26.6 34.2 24.6 28.4 Z" fill="url(#dvRed)"/>\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <span class="asteroid-label">DaVinci Resolve</span>\r
        </div>\r
\r
        <!-- AFTER EFFECTS — DEAD CENTER, highest, biggest -->\r
        <div class="asteroid" data-tool="ae"\r
             style="left:50%;top:18%;margin-left:-100px;\r
                    --rock-w:200px;--rock-h:150px;--logo-w:88px;\r
                    --float-dur:25s;--float-delay:0s;\r
                    --drift-x:10px;--drift-y:-8px;--rot-base:-1.5deg;\r
                    --z-order:15;">\r
          <div class="rock-host"><svg class="rock-img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="ag3" cx="27%" cy="20%" r="70%"> <stop offset="0%" stop-color="#604e3c"/> <stop offset="15%" stop-color="#382a1c"/> <stop offset="44%" stop-color="#1e120a"/> <stop offset="100%" stop-color="#080604"/> </radialGradient> <radialGradient id="ah3" cx="23%" cy="16%" r="26%"> <stop offset="0%" stop-color="rgba(210,182,148,0.2)"/> <stop offset="100%" stop-color="rgba(0,0,0,0)"/> </radialGradient> </defs> <!-- Main body + neck + upper lobe — creates the 67P "rubber duck" feel --> <path d=" M 48,30 L 34,46 L 16,66 L 10,86 L 18,104 L 36,118 L 60,130 L 88,136 L 116,134 L 140,124 L 160,108 L 172,90 L 174,70 L 164,54 L 172,40 L 162,26 L 148,18 L 130,14 L 112,16 L 100,28 L 84,16 L 68,14 L 54,22 Z " fill="url(#ag3)"/> <path d=" M 48,30 L 34,46 L 16,66 L 10,86 L 18,104 L 36,118 L 60,130 L 88,136 L 116,134 L 140,124 L 160,108 L 172,90 L 174,70 L 164,54 L 172,40 L 162,26 L 148,18 L 130,14 L 112,16 L 100,28 L 84,16 L 68,14 L 54,22 Z " fill="url(#ah3)"/> <!-- upper lobe facet --> <path d="M 116,18 L 138,22 L 148,36 L 136,50 L 114,52 L 100,40Z" fill="rgba(255,255,255,0.05)"/> <!-- lower lobe facet --> <path d="M 50,94 L 74,86 L 90,98 L 82,116 L 56,120 L 40,108Z" fill="rgba(255,255,255,0.03)"/> <path d="M 108,76 L 132,70 L 148,86 L 136,104 L 110,106 L 96,90Z" fill="rgba(0,0,0,0.09)"/> <!-- crater A — large, lower lobe --> <ellipse cx="104" cy="56" rx="20" ry="13" fill="rgba(0,0,0,0.1)" transform="rotate(-10,104,56)"/> <ellipse cx="104" cy="56" rx="15" ry="9.5" fill="rgba(0,0,0,0.38)" transform="rotate(-10,104,56)"/> <ellipse cx="104" cy="56" rx="9" ry="5.8" fill="rgba(0,0,0,0.15)" transform="rotate(-10,104,56)"/> <path d="M 90,47 A 15,9.5 -10 0 1 118,47" fill="none" stroke="rgba(200,175,145,0.17)" stroke-width="1.4" stroke-linecap="round"/> <!-- crater B — upper lobe --> <ellipse cx="136" cy="32" rx="10" ry="6.5" fill="rgba(0,0,0,0.1)" transform="rotate(-8,136,32)"/> <ellipse cx="136" cy="32" rx="7.5" ry="5" fill="rgba(0,0,0,0.32)" transform="rotate(-8,136,32)"/> <ellipse cx="136" cy="32" rx="4.5" ry="3" fill="rgba(0,0,0,0.13)" transform="rotate(-8,136,32)"/> <!-- crater C — large, lower lobe right --> <ellipse cx="154" cy="88" rx="13" ry="8.5" fill="rgba(0,0,0,0.1)" transform="rotate(10,154,88)"/> <ellipse cx="154" cy="88" rx="10" ry="6.5" fill="rgba(0,0,0,0.32)" transform="rotate(10,154,88)"/> <ellipse cx="154" cy="88" rx="6.5" ry="4" fill="rgba(0,0,0,0.12)" transform="rotate(10,154,88)"/> <!-- crater D — lower left --> <ellipse cx="62" cy="100" rx="9" ry="6" fill="rgba(0,0,0,0.28)" transform="rotate(-14,62,100)"/> <ellipse cx="62" cy="100" rx="5.5" ry="3.5" fill="rgba(0,0,0,0.11)" transform="rotate(-14,62,100)"/> <!-- tiny craters --> <ellipse cx="120" cy="116" rx="6" ry="3.8" fill="rgba(0,0,0,0.22)"/> <ellipse cx="42" cy="72" rx="4.5" ry="2.8" fill="rgba(0,0,0,0.24)" transform="rotate(10,42,72)"/> <ellipse cx="160" cy="56" rx="3.5" ry="2.2" fill="rgba(0,0,0,0.2)" transform="rotate(-8,160,56)"/> <!-- fissures --> <path d="M 106,64 L 122,72 L 136,76 L 144,92" fill="none" stroke="rgba(0,0,0,0.46)" stroke-width="1.3" stroke-linecap="round"/> <path d="M 56,84 L 66,96 L 60,112" fill="none" stroke="rgba(0,0,0,0.38)" stroke-width="1" stroke-linecap="round"/> <path d="M 134,44 L 144,54 L 152,66" fill="none" stroke="rgba(0,0,0,0.32)" stroke-width="0.9" stroke-linecap="round"/> <path d="M 78,110 L 90,120 L 100,130" fill="none" stroke="rgba(0,0,0,0.28)" stroke-width="0.8" stroke-linecap="round"/> <!-- glints --> <ellipse cx="72" cy="18" rx="3" ry="1.4" fill="rgba(225,205,175,0.38)" transform="rotate(-36,72,18)"/> <ellipse cx="154" cy="28" rx="2.2" ry="1.1" fill="rgba(225,205,175,0.3)"/> <ellipse cx="170" cy="70" rx="1.8" ry="0.9" fill="rgba(225,205,175,0.24)" transform="rotate(20,170,70)"/> <ellipse cx="104" cy="128" rx="1.5" ry="0.8" fill="rgba(225,205,175,0.18)"/> <!-- rim light --> <path d="M 54,22 L 48,30 L 34,46 L 16,66 L 10,86 L 18,104" fill="none" stroke="rgba(220,150,70,0.08)" stroke-width="3.5" stroke-linecap="round"/> </svg>\r
            <div class="logo-mount">\r
              <div class="logo-3d" style="background:linear-gradient(180deg,#1c0f3e 0%,#0d0626 100%)">\r
                <div class="logo-3d-content">\r
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\r
                    <text x="50%" y="71%" text-anchor="middle"\r
                          font-family="'Helvetica Neue',Arial,sans-serif"\r
                          font-weight="800" font-size="24" fill="#c8b8ff" letter-spacing="-1.5">Ae</text>\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <span class="asteroid-label">After Effects</span>\r
        </div>\r
\r
        <!-- PREMIERE — right of center -->\r
        <div class="asteroid" data-tool="pr"\r
             style="left:63%;top:30%;\r
                    --rock-w:180px;--rock-h:135px;--logo-w:72px;\r
                    --float-dur:30s;--float-delay:-9s;\r
                    --drift-x:-10px;--drift-y:-5px;--rot-base:1.5deg;\r
                    --z-order:13;">\r
          <div class="rock-host"><svg class="rock-img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="ag4" cx="30%" cy="24%" r="66%"> <stop offset="0%" stop-color="#564638"/> <stop offset="17%" stop-color="#30201a"/> <stop offset="46%" stop-color="#1a0e0a"/> <stop offset="100%" stop-color="#080604"/> </radialGradient> <radialGradient id="ah4" cx="26%" cy="20%" r="26%"> <stop offset="0%" stop-color="rgba(198,172,138,0.19)"/> <stop offset="100%" stop-color="rgba(0,0,0,0)"/> </radialGradient> </defs> <path d=" M 30,52 L 20,38 L 36,18 L 58,12 L 82,16 L 102,10 L 124,16 L 142,12 L 158,26 L 172,44 L 178,66 L 174,86 L 182,100 L 164,114 L 140,124 L 110,128 L 80,126 L 52,116 L 30,100 L 14,80 L 12,60 Z " fill="url(#ag4)"/> <path d=" M 30,52 L 20,38 L 36,18 L 58,12 L 82,16 L 102,10 L 124,16 L 142,12 L 158,26 L 172,44 L 178,66 L 174,86 L 182,100 L 164,114 L 140,124 L 110,128 L 80,126 L 52,116 L 30,100 L 14,80 L 12,60 Z " fill="url(#ah4)"/> <!-- facets --> <path d="M 58,24 L 84,18 L 98,32 L 86,50 L 60,54 L 46,38Z" fill="rgba(255,255,255,0.042)"/> <path d="M 108,80 L 130,74 L 144,90 L 132,108 L 106,110 L 92,94Z" fill="rgba(0,0,0,0.08)"/> <!-- crater A — large --> <ellipse cx="84" cy="60" rx="17" ry="11" fill="rgba(0,0,0,0.11)" transform="rotate(-14,84,60)"/> <ellipse cx="84" cy="60" rx="13" ry="8.5" fill="rgba(0,0,0,0.37)" transform="rotate(-14,84,60)"/> <ellipse cx="84" cy="60" rx="8" ry="5.2" fill="rgba(0,0,0,0.14)" transform="rotate(-14,84,60)"/> <path d="M 72,51 A 13,8.5 -14 0 1 96,51" fill="none" stroke="rgba(200,175,145,0.15)" stroke-width="1.3" stroke-linecap="round"/> <!-- crater B --> <ellipse cx="142" cy="80" rx="11" ry="7" fill="rgba(0,0,0,0.1)" transform="rotate(9,142,80)"/> <ellipse cx="142" cy="80" rx="8.5" ry="5.5" fill="rgba(0,0,0,0.31)" transform="rotate(9,142,80)"/> <ellipse cx="142" cy="80" rx="5.5" ry="3.5" fill="rgba(0,0,0,0.12)" transform="rotate(9,142,80)"/> <!-- crater C --> <ellipse cx="60" cy="88" rx="8" ry="5" fill="rgba(0,0,0,0.26)" transform="rotate(-18,60,88)"/> <ellipse cx="60" cy="88" rx="4.5" ry="2.8" fill="rgba(0,0,0,0.1)" transform="rotate(-18,60,88)"/> <!-- tiny craters --> <ellipse cx="116" cy="108" rx="5" ry="3.2" fill="rgba(0,0,0,0.22)"/> <ellipse cx="40" cy="60" rx="3.5" ry="2.2" fill="rgba(0,0,0,0.24)" transform="rotate(10,40,60)"/> <ellipse cx="158" cy="50" rx="3" ry="1.8" fill="rgba(0,0,0,0.2)" transform="rotate(-10,158,50)"/> <!-- fissures --> <path d="M 86,68 L 102,76 L 116,80 L 124,94" fill="none" stroke="rgba(0,0,0,0.44)" stroke-width="1.1" stroke-linecap="round"/> <path d="M 52,76 L 58,90 L 52,106" fill="none" stroke="rgba(0,0,0,0.36)" stroke-width="0.9" stroke-linecap="round"/> <path d="M 128,38 L 138,48 L 146,62" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="0.8" stroke-linecap="round"/> <!-- glints --> <ellipse cx="62" cy="20" rx="2.8" ry="1.3" fill="rgba(220,200,170,0.36)" transform="rotate(-34,62,20)"/> <ellipse cx="148" cy="28" rx="2" ry="1" fill="rgba(220,200,170,0.28)"/> <ellipse cx="166" cy="70" rx="1.5" ry="0.8" fill="rgba(220,200,170,0.22)" transform="rotate(18,166,70)"/> <!-- rim light --> <path d="M 12,60 L 30,52 L 20,38 L 36,18 L 58,12 L 82,16 L 102,10 L 124,16 L 142,12" fill="none" stroke="rgba(220,150,70,0.08)" stroke-width="3" stroke-linecap="round"/> </svg>\r
            <div class="logo-mount">\r
              <div class="logo-3d" style="background:linear-gradient(180deg,#1c0f3e 0%,#0d0626 100%)">\r
                <div class="logo-3d-content">\r
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\r
                    <text x="50%" y="71%" text-anchor="middle"\r
                          font-family="'Helvetica Neue',Arial,sans-serif"\r
                          font-weight="800" font-size="24" fill="#c8b8ff" letter-spacing="-1.5">Pr</text>\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <span class="asteroid-label">Premiere</span>\r
        </div>\r
\r
        <!-- AUDITION — far right -->\r
        <div class="asteroid" data-tool="au"\r
             style="right:3%;top:54%;\r
                    --rock-w:155px;--rock-h:115px;--logo-w:58px;\r
                    --float-dur:34s;--float-delay:-18s;\r
                    --drift-x:-8px;--drift-y:6px;--rot-base:-1deg;\r
                    --z-order:11;">\r
          <div class="rock-host"><svg class="rock-img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"> <defs> <radialGradient id="ag5" cx="29%" cy="23%" r="67%"> <stop offset="0%" stop-color="#584838"/> <stop offset="16%" stop-color="#32221a"/> <stop offset="46%" stop-color="#1c1008"/> <stop offset="100%" stop-color="#080604"/> </radialGradient> <radialGradient id="ah5" cx="25%" cy="19%" r="27%"> <stop offset="0%" stop-color="rgba(200,175,140,0.19)"/> <stop offset="100%" stop-color="rgba(0,0,0,0)"/> </radialGradient> </defs> <path d=" M 38,58 L 22,42 L 28,22 L 48,12 L 70,16 L 88,10 L 108,16 L 128,12 L 146,24 L 158,42 L 154,58 L 166,72 L 158,90 L 142,106 L 118,116 L 90,120 L 62,114 L 38,100 L 22,80 Z " fill="url(#ag5)"/> <path d=" M 38,58 L 22,42 L 28,22 L 48,12 L 70,16 L 88,10 L 108,16 L 128,12 L 146,24 L 158,42 L 154,58 L 166,72 L 158,90 L 142,106 L 118,116 L 90,120 L 62,114 L 38,100 L 22,80 Z " fill="url(#ah5)"/> <!-- facets --> <path d="M 64,24 L 88,18 L 100,32 L 88,48 L 64,52 L 50,36Z" fill="rgba(255,255,255,0.042)"/> <path d="M 96,78 L 118,72 L 130,86 L 118,104 L 94,106 L 82,90Z" fill="rgba(0,0,0,0.09)"/> <!-- crater A — large --> <ellipse cx="82" cy="56" rx="16" ry="10.5" fill="rgba(0,0,0,0.11)" transform="rotate(-18,82,56)"/> <ellipse cx="82" cy="56" rx="12" ry="8" fill="rgba(0,0,0,0.36)" transform="rotate(-18,82,56)"/> <ellipse cx="82" cy="56" rx="7.5" ry="5" fill="rgba(0,0,0,0.14)" transform="rotate(-18,82,56)"/> <path d="M 71,47 A 12,8 -18 0 1 93,47" fill="none" stroke="rgba(200,175,145,0.15)" stroke-width="1.3" stroke-linecap="round"/> <!-- crater B --> <ellipse cx="132" cy="76" rx="10" ry="6.5" fill="rgba(0,0,0,0.1)" transform="rotate(8,132,76)"/> <ellipse cx="132" cy="76" rx="7.5" ry="5" fill="rgba(0,0,0,0.3)" transform="rotate(8,132,76)"/> <ellipse cx="132" cy="76" rx="4.8" ry="3.2" fill="rgba(0,0,0,0.12)" transform="rotate(8,132,76)"/> <!-- crater C --> <ellipse cx="70" cy="90" rx="7.5" ry="4.8" fill="rgba(0,0,0,0.26)" transform="rotate(-12,70,90)"/> <ellipse cx="70" cy="90" rx="4.2" ry="2.6" fill="rgba(0,0,0,0.1)" transform="rotate(-12,70,90)"/> <!-- tiny craters --> <ellipse cx="108" cy="104" rx="5" ry="3.2" fill="rgba(0,0,0,0.22)"/> <ellipse cx="44" cy="68" rx="3.5" ry="2.2" fill="rgba(0,0,0,0.24)" transform="rotate(10,44,68)"/> <ellipse cx="150" cy="54" rx="3.2" ry="2" fill="rgba(0,0,0,0.2)" transform="rotate(-12,150,54)"/> <!-- fissures --> <path d="M 84,64 L 100,70 L 114,74 L 122,88" fill="none" stroke="rgba(0,0,0,0.43)" stroke-width="1.1" stroke-linecap="round"/> <path d="M 54,78 L 60,92 L 54,108" fill="none" stroke="rgba(0,0,0,0.36)" stroke-width="0.9" stroke-linecap="round"/> <path d="M 118,36 L 128,46 L 136,58" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="0.8" stroke-linecap="round"/> <!-- glints --> <ellipse cx="66" cy="22" rx="2.6" ry="1.2" fill="rgba(220,200,170,0.35)" transform="rotate(-36,66,22)"/> <ellipse cx="140" cy="32" rx="1.9" ry="1" fill="rgba(220,200,170,0.27)"/> <ellipse cx="152" cy="68" rx="1.5" ry="0.8" fill="rgba(220,200,170,0.22)" transform="rotate(20,152,68)"/> <!-- rim light --> <path d="M 22,80 L 38,58 L 22,42 L 28,22 L 48,12 L 70,16 L 88,10 L 108,16 L 128,12" fill="none" stroke="rgba(220,150,70,0.08)" stroke-width="2.5" stroke-linecap="round"/> </svg>\r
            <div class="logo-mount">\r
              <div class="logo-3d" style="background:linear-gradient(180deg,#1c0f3e 0%,#0d0626 100%)">\r
                <div class="logo-3d-content">\r
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\r
                    <text x="50%" y="71%" text-anchor="middle"\r
                          font-family="'Helvetica Neue',Arial,sans-serif"\r
                          font-weight="800" font-size="24" fill="#c8b8ff" letter-spacing="-1.5">Au</text>\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <span class="asteroid-label">Audition</span>\r
        </div>\r
\r
      </div><!-- /asteroid-field -->\r
\r
    </div><!-- /cosmos-content -->\r
  </div><!-- /cosmos-stage -->\r
`,B=`<svg width="0" height="0" style="position:absolute" aria-hidden="true">\r
    <defs>\r
      <!-- Heavy turbulence creates real rocky surface bumps via displacement -->\r
      <filter id="asteroidDisplace" x="-15%" y="-15%" width="130%" height="130%">\r
        <feTurbulence type="fractalNoise" baseFrequency=".04 .05" numOctaves="5" seed="7" result="noise"/>\r
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>\r
      </filter>\r
      <filter id="asteroidDisplace2" x="-15%" y="-15%" width="130%" height="130%">\r
        <feTurbulence type="fractalNoise" baseFrequency=".055 .045" numOctaves="5" seed="19" result="noise"/>\r
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G"/>\r
      </filter>\r
      <filter id="asteroidDisplace3" x="-15%" y="-15%" width="130%" height="130%">\r
        <feTurbulence type="fractalNoise" baseFrequency=".035 .055" numOctaves="5" seed="31" result="noise"/>\r
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>\r
      </filter>\r
\r
      <!-- Bump-map lighting filter — gives real volumetric 3D shading -->\r
      <filter id="asteroidBump" x="-10%" y="-10%" width="120%" height="120%">\r
        <feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="3" seed="5" result="bumpNoise"/>\r
        <feDiffuseLighting in="bumpNoise" surfaceScale="3" diffuseConstant="1.6" lighting-color="#fff" result="diffLight">\r
          <feDistantLight azimuth="135" elevation="55"/>\r
        </feDiffuseLighting>\r
        <feSpecularLighting in="bumpNoise" surfaceScale="2.5" specularConstant=".7" specularExponent="18" lighting-color="#ffdcb0" result="specLight">\r
          <feDistantLight azimuth="135" elevation="55"/>\r
        </feSpecularLighting>\r
        <feComposite in="diffLight" in2="SourceGraphic" operator="in" result="diffMasked"/>\r
        <feComposite in="specLight" in2="SourceGraphic" operator="in" result="specMasked"/>\r
        <feBlend in="diffMasked" in2="SourceGraphic" mode="multiply" result="shaded"/>\r
        <feBlend in="specMasked" in2="shaded" mode="screen"/>\r
      </filter>\r
\r
      <!-- Realistic asteroid color gradients — gray-brown rock tones (NOT bright orange) -->\r
      <radialGradient id="rockA" cx="32%" cy="28%" r="78%">\r
        <stop offset="0%"  stop-color="#857060"/>\r
        <stop offset="25%" stop-color="#5a4838"/>\r
        <stop offset="55%" stop-color="#332620"/>\r
        <stop offset="85%" stop-color="#181210"/>\r
        <stop offset="100%" stop-color="#0a0708"/>\r
      </radialGradient>\r
      <radialGradient id="rockB" cx="38%" cy="25%" r="80%">\r
        <stop offset="0%"  stop-color="#7a6555"/>\r
        <stop offset="28%" stop-color="#544232"/>\r
        <stop offset="58%" stop-color="#2c2018"/>\r
        <stop offset="88%" stop-color="#161010"/>\r
        <stop offset="100%" stop-color="#080608"/>\r
      </radialGradient>\r
      <radialGradient id="rockC" cx="40%" cy="30%" r="78%">\r
        <stop offset="0%"  stop-color="#8a7565"/>\r
        <stop offset="30%" stop-color="#5e4c3c"/>\r
        <stop offset="60%" stop-color="#352620"/>\r
        <stop offset="88%" stop-color="#1a1414"/>\r
        <stop offset="100%" stop-color="#0a0708"/>\r
      </radialGradient>\r
\r
      <!-- Subtle warm rim light — barely there, indicates the orange ambient -->\r
      <radialGradient id="rimWarm" cx="50%" cy="50%" r="50%">\r
        <stop offset="80%" stop-color="rgba(255,140,60,0)"/>\r
        <stop offset="93%" stop-color="rgba(255,150,70,.28)"/>\r
        <stop offset="100%" stop-color="rgba(255,90,30,0)"/>\r
      </radialGradient>\r
    </defs>\r
  </svg>`,G={avid:{key:"avid",name:"Avid Media Composer",category:"Edición Profesional",description:"Este programa es utilizado por cadenas de televisión, productoras y empresas grandes del sector audiovisual. Es conocido precisamente por eso — es un requisito para trabajar con grandes compañías audiovisuales, aunque no está al nivel de ninguno de los programas mencionados anteriormente.",color:"#7028e0",logoSvg:'<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ml-avid" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#9148ff"/><stop offset="100%" stop-color="#6420d8"/></radialGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-avid)"/><g transform="translate(8 8) scale(1.28)"><circle cx="25" cy="25" r="18" fill="none" stroke="#fff" stroke-width="2"/><path d="M14 16 Q14 13 18 13 L32 13 Q36 13 36 16 L36 19 L14 19 Z" fill="#fff"/><path d="M14 34 L36 34 L36 37 Q36 40 32 40 L18 40 Q14 40 14 37 Z" fill="#fff"/><rect x="14" y="21" width="22" height="11" fill="#fff"/><rect x="16.5" y="20.7" width="17" height="11.6" rx=".5" fill="#7028e0"/><rect x="9" y="20.5" width="1.5" height="2.8" fill="#fff"/><rect x="9" y="25.4" width="1.5" height="2.8" fill="#fff"/><rect x="9" y="30.3" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="20.5" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="25.4" width="1.5" height="2.8" fill="#fff"/><rect x="39.5" y="30.3" width="1.5" height="2.8" fill="#fff"/></g></svg>'},dv:{key:"dv",name:"DaVinci Resolve",category:"Corrección de Color",description:"Este programa me permite trabajar el color de forma ultraprecisa. Es un software creado para coloristas que luego se convirtió también en una potente herramienta de edición completa.",color:"#f97316",logoSvg:'<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ml-dv" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#3a3a3a"/><stop offset="100%" stop-color="#1a1a1a"/></radialGradient><linearGradient id="ml-dvRT" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a8de8"/><stop offset="50%" stop-color="#a230e8"/><stop offset="100%" stop-color="#ee2860"/></linearGradient><linearGradient id="ml-dvRB" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3ae898"/><stop offset="50%" stop-color="#ffd028"/><stop offset="100%" stop-color="#ee5028"/></linearGradient><radialGradient id="ml-dvBl" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#e8f4ff"/><stop offset="40%" stop-color="#58a8e8"/><stop offset="100%" stop-color="#1860a8"/></radialGradient><radialGradient id="ml-dvYl" cx="40%" cy="35%" r="65%"><stop offset="0%" stop-color="#fffae8"/><stop offset="50%" stop-color="#fae058"/><stop offset="100%" stop-color="#c89818"/></radialGradient><radialGradient id="ml-dvRd" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffe8e8"/><stop offset="45%" stop-color="#f04860"/><stop offset="100%" stop-color="#a01828"/></radialGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-dv)"/><g transform="translate(8 8) scale(1.28)"><path d="M3 25 A22 22 0 0 1 47 25" fill="none" stroke="url(#ml-dvRT)" stroke-width="1.8" stroke-linecap="round"/><path d="M47 25 A22 22 0 0 1 3 25" fill="none" stroke="url(#ml-dvRB)" stroke-width="1.8" stroke-linecap="round"/><circle cx="25" cy="25" r="19.5" fill="#2a2a2a"/><path d="M25 24.5 Q22 21 22 16 Q22 11 25 9 Q28 11 28 16 Q28 21 25 24.5 Z" fill="url(#ml-dvBl)"/><path d="M24 26.4 Q19.2 27.8 14.5 30.4 Q10 32.8 11.3 36.5 Q14.5 39 19 36.8 Q23.4 34.2 25.4 28.4 Z" fill="url(#ml-dvYl)"/><path d="M26 26.4 Q30.8 27.8 35.5 30.4 Q40 32.8 38.7 36.5 Q35.5 39 31 36.8 Q26.6 34.2 24.6 28.4 Z" fill="url(#ml-dvRd)"/></g></svg>'},ae:{key:"ae",name:"Adobe After Effects",category:"Motion Graphics & VFX",description:"Es mi mano derecha. Me permite hacer las cosas más increíbles que ves en mis videos — animaciones y efectos visuales específicamente. Sin After Effects, los videos no tendrían el alma suficiente y nunca serían lo mismo.",color:"#9999ff",logoSvg:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-ae" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-ae)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Ae</text></svg>`},pr:{key:"pr",name:"Adobe Premiere Pro",category:"Edición de Video",description:"Mi mano izquierda y el hermano de After Effects. Adobe Premiere trabaja en conjunto con After Effects para llevar a cabo el proceso completo de los videos. Premiere se encarga principalmente de permitirme trabajar clips de video de forma precisa y clips de audio.",color:"#9999ff",logoSvg:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-pr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-pr)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Pr</text></svg>`},au:{key:"au",name:"Adobe Audition",category:"Diseño de Sonido",description:"Es el mejor programa para trabajar sonido — como la versión completa de lo que se puede hacer con audio dentro de Adobe Premiere. Honestamente, muy pocas veces es necesario usarlo, pero cuando se necesita, es insuperable.",color:"#9999ff",logoSvg:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ml-au" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1c0f3e"/><stop offset="100%" stop-color="#0d0626"/></linearGradient></defs><rect width="80" height="80" rx="14" fill="url(#ml-au)"/><text x="50%" y="68%" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="800" font-size="38" fill="#c8b8ff" letter-spacing="-2.5">Au</text></svg>`}};function Z(){const u=d.useRef(null),x=d.useRef(null),[b,y]=d.useState(!1),[L,A]=d.useState(null);return d.useEffect(()=>{const l=u.current,t=x.current;if(!l||!t)return;const r=t.querySelector("#cosmos-stage");if(!r)return;const a=r.querySelector("#cosmos-bg"),c=r.querySelector(".cosmos-fog"),o=r.querySelector(".cosmos-vignette"),i=r.querySelector("#cosmos-stars"),p=r.querySelector("#cosmos-dust"),f=r.querySelector(".cosmos-content");function g(){const h=l.getBoundingClientRect(),s=window.innerHeight,m=l.offsetHeight,w=s*.6,v=Math.max(0,Math.min(1,(w-h.top)/(w+m-s))),n=Math.min(1,v*2.5),k=v>.85?Math.max(0,1-(v-.85)/.15):1,S=n*k;if(r.style.opacity=String(S),a&&(a.style.opacity=String(Math.min(1,n*1.4))),c&&(c.style.opacity=String(Math.min(1,n*1.2))),o&&(o.style.opacity=String(Math.min(1,n*1.5))),i&&(i.style.opacity=String(Math.min(1,n*1.6))),p&&(p.style.opacity=String(Math.min(1,n*1.3))),f){const M=Math.max(0,(n-.3)/.7);f.style.opacity=String(M*k),f.style.transform=`translateY(${(1-M)*40}px)`}n>.6?r.classList.add("interactive","active"):r.classList.remove("interactive","active")}return window.addEventListener("scroll",g,{passive:!0}),g(),()=>window.removeEventListener("scroll",g)},[]),d.useEffect(()=>{const l=x.current;if(!l)return;const t=l.querySelector("#cosmos-stage")??l;function r(a){const o=a.target.closest("[data-tool]");if(o){const i=o.dataset.tool;i&&G[i]&&(A(G[i]),y(!0))}}return t.addEventListener("click",r),()=>t.removeEventListener("click",r)},[]),d.useEffect(()=>{const l=x.current;if(!l)return;const t=l.querySelector("#cosmos-stars");if(!t)return;const r=t.getContext("2d");if(!r)return;let a=0,c=0,o=1,i=0;const p=[];function f(){o=Math.min(window.devicePixelRatio||1,2),a=window.innerWidth,c=window.innerHeight,t.width=a*o,t.height=c*o,t.style.width=a+"px",t.style.height=c+"px",r.setTransform(o,0,0,o,0,0),p.length=0;for(let s=0;s<160;s++)p.push({x:Math.random()*a,y:Math.random()*c,r:Math.random()*1.5+.3,a:Math.random(),v:.3+Math.random()*.8})}f(),window.addEventListener("resize",f,{passive:!0});let g=0;function h(){if(r){i=requestAnimationFrame(h),r.clearRect(0,0,a,c),g+=.008;for(const s of p){const m=.2+.8*(.5+.5*Math.sin(g*s.v+s.x));r.globalAlpha=m,r.fillStyle="#fff",r.beginPath(),r.arc(s.x,s.y,s.r,0,Math.PI*2),r.fill()}r.globalAlpha=1}}return i=requestAnimationFrame(h),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",f)}},[]),e.jsxs("section",{id:"herramientas",ref:u,children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:B}}),e.jsx("div",{ref:x,dangerouslySetInnerHTML:{__html:E}}),e.jsx("div",{className:`tool-modal-bg${b?" open":""}`,onClick:()=>y(!1)}),e.jsxs("div",{className:`tool-modal${b?" open":""}`,role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"tool-modal-close","aria-label":"Cerrar",onClick:()=>y(!1),children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),L&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"tool-modal-head",children:[e.jsx("div",{className:"tool-modal-logo",dangerouslySetInnerHTML:{__html:L.logoSvg}}),e.jsxs("div",{className:"tool-modal-info",children:[e.jsx("div",{className:"tool-modal-tag",children:L.category}),e.jsx("div",{className:"tool-modal-title",children:L.name})]})]}),e.jsx("p",{className:"tool-modal-desc",children:L.description})]})]})]})}export{Z as ToolsPanel};
