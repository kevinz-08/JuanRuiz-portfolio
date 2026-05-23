import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function WhyEditingPanel() {
  return (
    <section id="por-que" className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Animated background lights */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
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
            className="text-4xl md:text-5xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Por qué la edición es tan importante?
          </motion.h2>

          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-black/60 backdrop-blur-2xl border border-red-600/20 rounded-3xl overflow-hidden aspect-video flex items-center justify-center hover:border-red-600/50 transition-all duration-500 shadow-2xl">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-red-600 text-white p-6 rounded-full inline-flex mb-4 cursor-pointer shadow-lg shadow-red-600/50"
                >
                  <Play size={32} />
                </motion.div>
                <p className="text-gray-400">Video explicativo</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}