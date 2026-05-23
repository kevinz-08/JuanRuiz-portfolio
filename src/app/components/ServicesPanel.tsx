import { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Sparkles, Wand2, Crown, Play, ArrowUp } from 'lucide-react';

export function ServicesPanel() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const services = [
    {
      icon: Film,
      title: 'Edición + Post-producción de audio y color',
      description: 'Montaje, cortes, rótulos, subtítulos, transiciones, diseño de sonido, efectos, post-producción de audio y color para proyectos de alta calidad',
      videoUrl: 'https://player.vimeo.com/video/1181714912',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Creación y animación de elementos gráficos y títulos con un acabado profesional para ejemplificar el mensaje de la forma más detallada posible.',
      videoUrl: 'https://player.vimeo.com/video/1181714913',
    },
    {
      icon: Wand2,
      title: 'Post-producción de Efectos Visuales (VFX)',
      description: 'Integración y manejo de VFX en una composición 3D usando técnicas como el Tracking o Rotoscopia con el objetivo de alterar la realidad visual de un plano grabado.',
      videoUrl: 'https://player.vimeo.com/video/1181714911',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Servicios
          </h2>
          <p className="text-gray-400 text-lg">
            Aspectos de la edición de video
          </p>
        </motion.div>

        {/* Three main services with videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 max-w-[1350px] mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-6 h-full"
              >
                {/* Service Card */}
                <div className="relative group flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-cyan-400/5 rounded-2xl blur-xl" />
                  <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-red-600/20 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-red-600/20 flex flex-col">
                    <motion.div 
                      className="bg-gradient-to-br from-red-600/20 to-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-red-600/40 shadow-[0_0_15px_rgba(239,68,68,0.2)] shrink-0"
                      animate={{ y: [0, -4, 0], scale: [1, 1.05, 1], boxShadow: ['0 0 10px rgba(239,68,68,0.3)', '0 0 20px rgba(239,68,68,0.6)', '0 0 10px rgba(239,68,68,0.3)'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    </motion.div>
                    <h3 className="text-xl text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </div>

                {/* Golden neon label pointing up */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUp className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                  </motion.div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-60" />
                    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 rounded-full">
                      <span className="text-black font-bold text-sm">Mejor ejemplo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Video */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative bg-black/30 backdrop-blur-md border border-yellow-400/30 rounded-xl overflow-hidden aspect-video hover:border-yellow-400/60 transition-all duration-300">
                    {playingVideo !== index ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-black to-gray-900"
                        onClick={() => setPlayingVideo(index)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="bg-yellow-400 text-black p-6 rounded-full inline-flex shadow-lg shadow-yellow-400/50"
                        >
                          <Play size={32} />
                        </motion.div>
                      </div>
                    ) : (
                      <iframe
                        src={`${service.videoUrl}?autoplay=1`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={service.title}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Combo complete - bigger card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto relative group"
        >
          {/* Glowing effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-600 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-500 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-yellow-400/50">
                <Crown className="w-5 h-5 text-black" />
                <span className="text-black font-bold">PREMIUM</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl text-white mb-4 mt-4">
              Servicio Integral
            </h3>
            <motion.p 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-[length:200%_auto] mb-6 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
              animate={{ backgroundPosition: ['0% center', '200% center'], scale: [1, 1.05, 1] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Los 3 servicios en 1
            </motion.p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              La solución técnica definitiva para proyectos que requieren excelencia. Desde el montaje inicial hasta los efectos visuales más complejos, todo integrado para potenciar tu marca.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}