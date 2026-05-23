import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function BestVideosPanel() {
  const videos = [
    {
      title: 'Montaje y Post-producción',
      style: 'Narrativa Fluida',
      thumbnail: 'Video 1',
    },
    {
      title: 'Motion Graphics',
      style: 'Minimalismo Premium',
      thumbnail: 'Video 2',
    },
    {
      title: 'VFX y Composición',
      style: 'Impacto Dinámico',
      thumbnail: 'Video 3',
    },
  ];

  return (
    <section id="videos" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background lights */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-80 h-80 bg-red-600/15 rounded-full blur-[120px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-[120px]"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
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
          <motion.h2 
            className="text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mis mejores videos
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => {
            const colors = [
              { bg: 'from-red-600/20', border: 'border-red-600/30', hover: 'hover:border-red-600/60', shadow: 'shadow-red-600/30' },
              { bg: 'from-cyan-400/20', border: 'border-cyan-400/30', hover: 'hover:border-cyan-400/60', shadow: 'shadow-cyan-400/30' },
              { bg: 'from-purple-500/20', border: 'border-purple-500/30', hover: 'hover:border-purple-500/60', shadow: 'shadow-purple-500/30' },
            ][index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500`} />
                <div className={`relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${colors.shadow} hover:border-white/20`}>
                  {/* Video container */}
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-red-600 text-white p-6 rounded-full inline-flex mb-4 cursor-pointer shadow-lg shadow-red-600/50"
                      >
                        <Play size={32} />
                      </motion.div>
                      <p className="text-gray-400">{video.thumbnail}</p>
                    </div>
                  </div>
                  
                  {/* Info overlay */}
                  <div className="p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="text-sm text-gray-400 mb-2">{video.style}</div>
                    <h3 className="text-xl text-white">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}