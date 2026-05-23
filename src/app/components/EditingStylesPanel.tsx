import { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Film, Wand2, Play, ArrowDown } from 'lucide-react';

export function EditingStylesPanel() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const styles = [
    {
      icon: Zap,
      title: 'Impacto Dinámico',
      description: 'Edición rítmica con cortes rápidos y transiciones de alto impacto para retener la atención.',
      videoUrl: 'https://player.vimeo.com/video/1182270561',
      colors: {
        icon: 'text-blue-500',
        border: 'border-blue-500/30',
        hover: 'hover:border-blue-500/60',
        shadow: 'group-hover:shadow-blue-500/20',
      },
    },
    {
      icon: Film,
      title: 'Narrativa Fluida',
      description: 'Enfoque en la continuidad y el mensaje, usando transiciones suaves y un ritmo constante.',
      videoUrl: 'https://player.vimeo.com/video/1182270605',
      colors: {
        icon: 'text-blue-400',
        border: 'border-blue-400/30',
        hover: 'hover:border-blue-400/60',
        shadow: 'group-hover:shadow-blue-400/20',
      },
    },
    {
      icon: Wand2,
      title: 'Minimalismo Premium',
      description: 'Estética limpia y ordenada, priorizando la claridad del contenido con una estética limpia y elegante.',
      videoUrl: 'https://player.vimeo.com/video/1182270645',
      colors: {
        icon: 'text-blue-300',
        border: 'border-blue-300/30',
        hover: 'hover:border-blue-300/60',
        shadow: 'group-hover:shadow-blue-300/20',
      },
    },
  ];

  return (
    <section id="estilos" className="py-20 md:py-32 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Animated background lights */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[130px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-[130px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">Estilos de edición</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cada proyecto tiene su propia personalidad. Aquí están 3 ejemplos de estilos en la industria de la edición
          </p>
        </motion.div>

          {/* Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {styles.map((style, index) => {
            const Icon = style.icon;
            const { colors } = style;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${colors.icon.split('-')[1]}/10 to-transparent rounded-2xl blur-xl`} />
                  <div className={`relative bg-[#1a1a1a]/80 backdrop-blur-xl border ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl ${colors.shadow}`}>
                    <motion.div 
                      className={`${colors.icon} mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={36} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-xl text-white mb-3">{style.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{style.description}</p>
                    
                    {/* Animated Arrow pointing down */}
                    <motion.div
                      className="mt-6 flex justify-center"
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className={`${colors.icon} drop-shadow-[0_0_15px_currentColor]`}>
                        <ArrowDown size={24} strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative animated text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10 mx-auto max-w-3xl"
        >
          <p className="text-xl md:text-2xl font-semibold text-blue-400">
            "Para mostrar estos ejemplos hice uso únicamente de la Edición + Post-producción de audio y color"
          </p>
        </motion.div>

        {/* 3 Vertical Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-[900px] mx-auto px-4">
          {styles.map((style, index) => {
            const { colors } = style;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative group"
              >
                {/* Neon glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${colors.icon.split('-')[1]}/40 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500`} />
                
                {/* Vertical Video container */}
                <div className={`relative bg-[#050505]/60 backdrop-blur-xl border ${colors.border} rounded-2xl overflow-hidden aspect-[9/16] flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-2xl ${colors.shadow} hover:border-${colors.icon.split('-')[1]}/60`}>
                  {playingVideo !== index ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        onClick={() => style.videoUrl && setPlayingVideo(index)}
                        className={`bg-gradient-to-br from-${colors.icon.split('-')[1]}/80 to-black text-white p-4 md:p-5 rounded-full inline-flex mb-4 ${style.videoUrl ? 'cursor-pointer' : 'cursor-default opacity-50'} shadow-lg`}
                        animate={{
                          boxShadow: [
                            `0 0 10px currentColor`,
                            `0 0 20px currentColor`,
                            `0 0 10px currentColor`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Play size={24} className={colors.icon} />
                      </motion.div>
                      <p className="text-xs md:text-sm text-gray-300 font-medium tracking-wide text-center px-2">{style.title}</p>
                    </>
                  ) : style.videoUrl && (
                    <iframe
                      src={`${style.videoUrl}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={style.title}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing texts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h3
            className="text-3xl md:text-4xl text-white font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ¿Qué estilo prefieres?
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="inline-block text-lg font-medium text-blue-400 cursor-default">
              Si buscas otro estilo solo dímelo
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}