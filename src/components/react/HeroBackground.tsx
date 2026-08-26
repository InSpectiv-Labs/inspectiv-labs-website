import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-900">
      {/* Subtle animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800 via-slate-900 to-slate-900 opacity-60"></div>
        
        {/* Animated Geometric Shape 1 */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-secondary-600 blur-[120px]"
        />

        {/* Animated Geometric Shape 2 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[40%] -left-[10%] w-[40%] h-[60%] rounded-full bg-primary-500 blur-[100px]"
        />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}
        />
      </motion.div>
    </div>
  );
}
