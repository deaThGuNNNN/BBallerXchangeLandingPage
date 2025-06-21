'use client';
import Image from "next/image"
import BasketballBackgroundWrapper from "@/components/BasketballBackgroundWrapper"
import Link from "next/link"
import { CheckCircle, Star, Users, Gift, ArrowRight, Sparkles, Trophy, Zap, Heart, Clock, Quote, Volume2, MousePointer } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 45 });
  const [soundWaves, setSoundWaves] = useState(Array(5).fill(0));
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const confettiColors = ['#ffffff', '#f3f4f6', '#e5e7eb', '#d1d5db'];
  
  const steps = [
    { icon: CheckCircle, title: "Subscription Confirmed", description: "You're officially on the list!", color: "from-green-400 to-emerald-500" },
    { icon: Gift, title: "Exclusive Access", description: "Get early access to limited drops", color: "from-purple-400 to-pink-500" },
    { icon: Star, title: "VIP Treatment", description: "Priority notifications and special offers", color: "from-yellow-400 to-orange-500" }
  ];

  const testimonials = [
    { name: "Marcus J.", text: "Got the Jordan 4s before anyone else. BBX is legit!", avatar: "🏀" },
    { name: "Sarah K.", text: "The exclusive drops are fire. Worth every penny!", avatar: "👟" },
    { name: "Alex R.", text: "VIP access changed my sneaker game completely.", avatar: "🔥" },
    { name: "Jordan M.", text: "Early access = guaranteed heat. No more Ls!", avatar: "⚡" }
  ];

  const floatingBubbles = [
    { icon: Heart, delay: 0, x: 20, y: 30 },
    { icon: Star, delay: 0.5, x: 80, y: 20 },
    { icon: Sparkles, delay: 1, x: 15, y: 70 },
    { icon: Trophy, delay: 1.5, x: 85, y: 60 },
    { icon: Zap, delay: 2, x: 50, y: 10 }
  ];

  useEffect(() => {
    setMounted(true);
    setShowConfetti(true);
    
    // Step progression animation
    const stepTimers = [
      setTimeout(() => setCurrentStep(1), 1200),
      setTimeout(() => setCurrentStep(2), 2400),
      setTimeout(() => setCurrentStep(3), 3600),
    ];

    // Testimonial carousel
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Sound wave animation
    const waveTimer = setInterval(() => {
      setSoundWaves(prev => prev.map(() => Math.random()));
    }, 200);

         // Mouse tracking
     const handleMouseMove = (e: MouseEvent) => {
       if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearInterval(testimonialTimer);
      clearInterval(countdownTimer);
      clearInterval(waveTimer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, testimonials.length]);

  if (!mounted) return null;

  const blobX = useTransform(smoothMouseX, [0, 1000], [0, 50]);
  const blobY = useTransform(smoothMouseY, [0, 1000], [0, 50]);

  return (
    <main ref={containerRef} className="min-h-screen bg-black relative overflow-hidden cursor-none">
      <BasketballBackgroundWrapper />
      <div className="absolute inset-0 opacity-8 bg-noise animate-grain"></div>
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-white/20 rounded-full border border-white/40 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      />

      {/* Morphing Blob Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Interactive Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.01 * (i + 1),
              y: (mousePosition.y - window.innerHeight / 2) * 0.01 * (i + 1),
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating Action Bubbles */}
      {floatingBubbles.map((bubble, i) => {
        const Icon = bubble.icon;
        return (
          <motion.div
            key={i}
            className="absolute w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              opacity: [0, 0.8, 0.6],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 1.5, backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Icon className="w-6 h-6 text-white/70" />
          </motion.div>
        );
      })}

      {/* Enhanced Confetti with Physics */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 8 + 4,
                  height: Math.random() * 8 + 4,
                  backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                  left: `${Math.random() * 100}%`,
                  top: '-20px',
                }}
                initial={{ y: -20, rotate: 0, opacity: 1, scale: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                  opacity: [1, 0.8, 0],
                  scale: [0, 1, 0.5],
                  x: Math.sin(i) * 100,
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  delay: Math.random() * 3,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Dynamic Ambient Glow */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          x: blobX,
          y: blobY,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
        
        {/* Main Success Card with Enhanced Glassmorphism */}
        <motion.div
          className="w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          
          {/* Header Section with Interactive Elements */}
          <div className="text-center mb-20">
            {/* Logo with Magnetic Effect */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="relative"
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-white/15 rounded-3xl blur-3xl scale-125 animate-pulse"></div>
                <Image
                  src="/bbx-logo.svg"
                  alt="BBallerXchange"
                  width={350}
                  height={140}
                  className="relative h-28 w-auto filter drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Success Icon with Sound Waves */}
            <motion.div
              className="flex justify-center mb-12 relative"
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 1.2, type: 'spring', stiffness: 150 }}
            >
              <div className="relative">
                {/* Sound Wave Animation */}
                <div className="absolute -inset-20 flex items-center justify-center">
                  {soundWaves.map((wave, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 bg-white/20 rounded-full"
                      style={{
                        height: 20 + wave * 40,
                        left: `${-20 + i * 10}px`,
                      }}
                      animate={{
                        scaleY: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-40 h-40 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 15,
                    boxShadow: '0 0 100px rgba(255,255,255,0.5)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: [-200, 200],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <CheckCircle className="w-20 h-20 text-black relative z-10" strokeWidth={2.5} />
                </motion.div>
                
                {/* Enhanced Celebration Rings */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: `rgba(255,255,255,${0.3 - i * 0.05})`,
                    }}
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ 
                      scale: 1.8 + (i * 0.4), 
                      opacity: 0,
                      rotate: 360,
                    }}
                    transition={{
                      delay: 1 + (i * 0.3),
                      duration: 2.5,
                      ease: 'easeOut',
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Dynamic Typography with Variable Font Effects */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight relative"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,255,255,0.8)',
                    '0 0 20px rgba(255,255,255,0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Welcome to the
                <motion.span 
                  className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Inner Circle
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl lg:text-3xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Your subscription to our list has been confirmed.
                <motion.span 
                  className="block mt-3 text-white/60 text-xl"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Get ready for exclusive drops and VIP access.
                </motion.span>
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Features Grid with Magnetic Hover */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep > index;
              
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1
                  }}
                  transition={{ delay: 2.8 + (index * 0.3), duration: 0.8 }}
                  whileHover={{ 
                    y: -15, 
                    rotateX: 10,
                    rotateY: index % 2 === 0 ? -5 : 5,
                    scale: 1.05,
                  }}
                >
                  {/* Magnetic Field Effect */}
                  <motion.div
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.1), transparent)`,
                      filter: 'blur(10px)',
                    }}
                  />

                  <div className={`relative bg-white/[0.04] backdrop-blur-2xl border rounded-3xl p-10 text-center transition-all duration-700 ${
                    isActive ? 'border-white/30 bg-white/[0.08] shadow-2xl' : 'border-white/15'
                  }`}>
                    
                    {/* Dynamic Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                    />

                    <motion.div
                      className={`w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center transition-all duration-700 relative overflow-hidden ${
                        isActive ? 'bg-white text-black shadow-2xl' : 'bg-white/15 text-white'
                      }`}
                      animate={{ 
                        scale: isActive ? [1, 1.3, 1.1] : 1,
                        rotate: isActive ? [0, 15, 0] : 0
                      }}
                      transition={{ duration: 0.8, delay: isActive ? 0.3 : 0 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                      }}
                    >
                      {/* Icon Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: isActive ? [-100, 100] : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: isActive ? 0.5 : 0,
                        }}
                      />
                      <Icon className="w-12 h-12 relative z-10" strokeWidth={2} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced Stats with Countdown Timer */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-2xl border border-white/15 rounded-3xl p-10 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-10">
              {/* Countdown Timer */}
              <motion.div
                className="md:col-span-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mr-4">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:
                      {String(timeLeft.minutes).padStart(2, '0')}:
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                <p className="text-white/60">Next Drop</p>
              </motion.div>

              {[
                { icon: Users, value: "5,247", label: "Exclusive Members" },
                { icon: Trophy, value: "127", label: "Limited Drops" },
                { icon: Zap, value: "48h", label: "Early Access" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mr-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <motion.span 
                        className="text-4xl font-black text-white"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                    <p className="text-white/60">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Dynamic Testimonials Carousel */}
          <motion.div
            className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-8 h-8 text-white/40 mr-3" />
              <h3 className="text-2xl font-bold text-white">What Members Say</h3>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="text-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <p className="text-xl text-white/80 mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-white/60 font-semibold">
                  — {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="text-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/"
                  className="group inline-flex items-center justify-center gap-4 bg-white hover:bg-white/95 text-black font-black text-2xl px-16 py-8 rounded-3xl transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{
                      x: [-300, 300],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  <span className="relative">EXPLORE DROPS</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.p 
                className="text-white/50 text-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Keep an eye on your inbox for exclusive updates
              </motion.p>
            </div>

            {/* Enhanced Social Proof */}
            <motion.div
              className="flex items-center justify-center gap-4 text-white/40"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 bg-white/20 rounded-full border-2 border-black flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 5 + (i * 0.1), duration: 0.3 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <Star className="w-5 h-5 text-white" fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <span className="ml-4 text-lg">Join thousands of satisfied members</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 