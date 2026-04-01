/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

import photo01 from './assets/photos/000751450009-positive.webp';
import photo02 from './assets/photos/00094176_YiZheng_120_Portra400_11596-positive.webp';
import photo03 from './assets/photos/000052010012-positive.webp';
import photo04 from './assets/photos/000051890003-positive.webp';
import photo05 from './assets/photos/000060970026-positive.webp';
import photo06 from './assets/photos/000008810020-positive.webp';
import photo07 from './assets/photos/000047010008-positive.webp';
import photo08 from './assets/photos/000052100011-positive.webp';

const photos = [
  { id: '01', url: photo01, title: 'Consciousness', category: '意识边界 | PERCEPTION' },
  { id: '02', url: photo02, title: 'Still Life', category: '静物 | STILL LIFE' },
  { id: '03', url: photo03, title: 'Documentary', category: '纪实 | DOCUMENTARY' },
  { id: '04', url: photo04, title: 'Portrait', category: '人像 | PORTRAIT' },
  { id: '05', url: photo05, title: 'Moments', category: '趣事 | MOMENTS' },
  { id: '06', url: photo06, title: 'Street', category: '街头 | STREET' },
  { id: '07', url: photo07, title: 'Architecture', category: '建筑 | ARCHITECTURE' },
  { id: '08', url: photo08, title: 'Compartment', category: '区隔 | COMPARTMENT' },
];

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hero-main/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="z-10 flex flex-col items-center mix-blend-difference pointer-events-none w-full px-4">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] font-display leading-[0.85] tracking-tighter text-white m-0 p-0 text-center uppercase"
        >
          Justice Zheng
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full mt-8 text-white font-sans uppercase tracking-[0.2em] text-xs md:text-sm text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span>Selected Works</span>
            <span className="text-[10px] tracking-[0.5em] text-white/60">精选作品</span>
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-white/30" />
          <div className="flex flex-col items-center gap-2">
            <span>I Shoot Film</span>
            <span className="text-[10px] tracking-[0.5em] text-white/60">胶片摄影</span>
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-white/30" />
          <div className="flex flex-col items-center gap-2">
            <span>2026 Collection</span>
            <span className="text-[10px] tracking-[0.5em] text-white/60">二零二六</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest flex flex-col items-center gap-3"
      >
        <div className="flex flex-col items-center gap-1">
          <span>Scroll to explore</span>
          <span className="text-[9px] tracking-[0.5em]">向下滑动</span>
        </div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation.
  // We have 8 items. Adjust the negative percentage to ensure the last item comes into view.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  // Parallax effect for images: move them slightly in the opposite direction of the scroll
  const imageX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background massive text for depth */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-5">
          <h2 className="text-[30vw] font-display whitespace-nowrap leading-none">
            EXHIBITION EXHIBITION EXHIBITION
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-[10vw] pr-[60vw] md:pl-[20vw] md:pr-[50vw] z-10">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative w-[80vw] md:w-[45vw] h-[60vh] md:h-[75vh] shrink-0 group cursor-crosshair"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#111] flex items-center justify-center">
                <motion.div style={{ x: imageX }} className={`absolute w-[130%] h-full ${photo.id === '01' ? '-left-[5%]' : '-left-[15%]'}`}>
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    style={{ objectPosition: photo.id === '01' ? '30% center' : 'center' }}
                    referrerPolicy="no-referrer" 
                    loading="lazy"
                  />
                </motion.div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute -left-4 md:-left-12 top-8 mix-blend-difference pointer-events-none">
                <span className="font-display text-6xl md:text-8xl text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>
                  {photo.id}
                </span>
              </div>
              
              <div className="absolute bottom-8 left-8 mix-blend-difference pointer-events-none">
                <h3 className="text-4xl md:text-6xl font-display text-white uppercase leading-none mb-2">
                  {photo.title}
                </h3>
                <p className="text-white font-sans text-sm uppercase tracking-[0.2em]">
                  {photo.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#050505] py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-[1600px] mx-auto z-10 flex flex-col items-center text-center">
        <p className="font-sans text-gray-400 uppercase tracking-[0.3em] text-sm mb-8">
          Available for commissions
        </p>
        
        <a 
          href="https://ig.me/m/qpskcn1" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block"
        >
          <motion.h2 
            initial={{ color: "rgb(255, 255, 255)" }}
            whileInView={{ color: "rgba(0, 0, 0, 0)" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-[12vw] md:text-[10vw] font-display leading-[0.8] tracking-tighter uppercase" 
            style={{ WebkitTextStroke: '2px white' }}
          >
            Let's Talk
          </motion.h2>
          <ArrowUpRight className="absolute -top-4 -right-8 md:-top-8 md:-right-16 w-12 h-12 md:w-24 md:h-24 text-white opacity-0 -translate-x-8 translate-y-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        </a>

        <div className="mt-32 flex flex-col items-center w-full border-t border-white/10 pt-8 text-xs font-sans uppercase tracking-widest text-gray-500 gap-8">
          <div className="flex gap-8 justify-center">
            <a href="https://www.instagram.com/qpskcn1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://github.com/qpskcn1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Justice Zheng. All rights reserved.</p>
            <div className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="50%" stopColor="#9B72CB" />
                    <stop offset="100%" stopColor="#D96570" />
                  </linearGradient>
                </defs>
                <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="url(#gemini-gradient)"/>
              </svg>
              <span>Generated By Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#050505] text-white font-sans antialiased selection:bg-white selection:text-black">
      <Hero />
      <HorizontalGallery />
      <Footer />
    </div>
  );
}
