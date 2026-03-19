import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold tracking-wider mb-6 uppercase text-sm"
          >
            PusH Your Limits
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-tight"
          >
            Transform Your Body <br />
            <span className="text-primary">Transform Your Life</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Join the elite fitness community. Professional trainers, state-of-the-art equipment, and a motivating atmosphere to help you achieve your goals.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-colors"
            >
              Start Your Journey
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
