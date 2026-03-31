/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Brain, Swords, Trophy, Target, ChevronRight, Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, Music } from 'lucide-react';

const SCENE_DURATION = 3500; // 3.5 seconds per scene

const scenes = [
  {
    id: 0,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-black">
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-4xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Chcesz poznać swoje <span className="text-blue-500">prawdziwe</span> statystyki w LoL-u?
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Target className="w-32 h-32 text-blue-500 animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
        </motion.div>
      </div>
    )
  },
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-gradient-to-b from-purple-950 via-slate-900 to-black">
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Brain className="w-40 h-40 text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]" />
        </motion.div>
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-black text-white mt-8 uppercase italic tracking-tight"
        >
          Głęboka Analiza <span className="text-purple-400">AI</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-purple-200 mt-6 font-medium"
        >
          Sztuczna inteligencja ocenia Twój styl gry.
        </motion.p>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-gradient-to-b from-red-950 via-slate-900 to-black">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          <Swords className="w-40 h-40 text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" />
        </motion.div>
        <motion.h2 
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-black text-white mt-8 uppercase leading-none tracking-tight"
        >
          Live Game <br/><span className="text-red-500">& Historia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-red-200 mt-6 font-medium"
        >
          Śledź mecze na żywo i analizuj przeszłość.
        </motion.p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-gradient-to-b from-yellow-950 via-slate-900 to-black">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Trophy className="w-40 h-40 text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,0.8)]" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-white mt-8 uppercase tracking-tight"
        >
          Szacowana <span className="text-yellow-400">Ranga</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-yellow-200 mt-6 font-medium"
        >
          Odkryj swoje mistrzostwo bohaterów.
        </motion.p>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-gradient-to-b from-blue-900 to-black">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.6)] mb-8"
        >
          <Target className="w-16 h-16 text-white" />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-black text-white uppercase tracking-tighter"
        >
          NEXUS SIGHT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
        >
          <p className="text-xl font-mono text-blue-300">nexus-sight.onrender.com</p>
        </motion.div>
        <motion.a
          href="https://nexus-sight.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-xl uppercase tracking-wider shadow-lg shadow-blue-500/50 flex items-center gap-2"
        >
          Sprawdź teraz <ChevronRight />
        </motion.a>
      </div>
    )
  }
];

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentScene((prev) => {
          if (prev === scenes.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, SCENE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (currentScene === scenes.length - 1 && !isPlaying) {
      setCurrentScene(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center font-sans">
      
      {/* Clean 9:16 Container for Screen Recording */}
      <div className="relative w-full max-w-[450px] aspect-[9/16] bg-black overflow-hidden shadow-2xl">
        
        {/* Scene Content */}
        <div className="relative w-full h-full bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {scenes[currentScene].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Play/Pause Overlay - only visible when paused/stopped */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <button 
              onClick={handlePlayPause}
              className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30 mb-6"
            >
              <Play className="w-10 h-10 text-white ml-2" />
            </button>
            <p className="text-white/70 text-sm font-medium">Kliknij, aby rozpocząć animację</p>
            <p className="text-white/50 text-xs mt-2">(Idealne do nagrywania ekranu)</p>
          </div>
        )}
      </div>
    </div>
  );
}

