'use client'

import { useState, useEffect } from 'react'
import { usePrank } from '../contexts/PrankContext'

export default function LoveModeOverlay() {
  const { isPrankActive, deactivatePrank, prankStats } = usePrank()
  const [resetKey, setResetKey] = useState('')
  const [showResetBox, setShowResetBox] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')

  useEffect(() => {
    if (isPrankActive) {
      // Start annoying popup messages
      const messages = [
        "🤡 SURPRISE! You've been pranked!",
        "😂 Having fun yet?",
        "🎪 Welcome to the circus!",
        "🃏 You fell for it!",
        "🤪 This is what you get!",
        "😜 Gotcha good!",
        "🎭 Hope you're enjoying the show!",
        "🎨 Art attack!",
        "🎯 Bullseye! You're stuck!",
        "🎲 Lucky you!"
      ];
      
      const showRandomPopup = () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setPopupMessage(randomMessage);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      };
      
      // Show popup every 5-10 seconds
      const popupInterval = setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance
          showRandomPopup();
        }
      }, Math.random() * 5000 + 5000);
      
      return () => clearInterval(popupInterval);
    }
  }, [isPrankActive])

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    
    const attempts = parseInt(localStorage.getItem('resetAttempts') || '0');
    
    if (resetKey === 'SORRY') {
      if (attempts < 3) {
        localStorage.setItem('resetAttempts', (attempts + 1).toString());
        const responses = [
          '🤡 Not yet! You need to suffer more!',
          '😂 Almost there! But not quite!',
          '🎪 Third time\'s the charm... maybe!'
        ];
        alert(responses[attempts]);
        setResetKey('');
        return;
      }
      
      // Finally allow reset after 3 attempts
      deactivatePrank(); // This will deactivate for ALL users globally
      setShowResetBox(false);
      setResetKey('');
      alert('🎉 Fine! You win this time! The chaos ends FOR EVERYONE! 😈');
    } else {
      const wrongResponses = [
        '🤡 WRONG! Try harder!',
        '😂 Nope! Keep guessing!',
        '🎭 Not even close!',
        '🃏 You wish it was that easy!',
        '🎪 The circus continues!',
        '🤪 Better luck next time!'
      ];
      alert(wrongResponses[Math.floor(Math.random() * wrongResponses.length)]);
      setResetKey('');
    }
  }

  if (!isPrankActive) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Love overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm">
        {/* Chaotic floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Random jokers and clowns */}
          {[...Array(20)].map((_, i) => {
            const jokers = ['🤡', '🃏', '😂', '🤪', '😜', '🙃', '😵‍💫', '🤯', '🥴', '😵'];
            return (
              <div
                key={`joker-${i}`}
                className="absolute animate-bounce text-3xl cursor-pointer hover:scale-150 transition-transform"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
                onClick={() => alert('GOTCHA! 🤡')}
              >
                {jokers[Math.floor(Math.random() * jokers.length)]}
              </div>
            );
          })}
          
          {/* Spinning random emojis */}
          {[...Array(25)].map((_, i) => {
            const randomEmojis = ['🎪', '🎭', '🎨', '🎯', '🎲', '🎳', '🎮', '🕹️', '🎰', '🎊', '🎉', '🎈', '🎁', '🎀', '🎂'];
            return (
              <div
                key={`random-${i}`}
                className="absolute animate-spin text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                {randomEmojis[Math.floor(Math.random() * randomEmojis.length)]}
              </div>
            );
          })}
          
          {/* Bouncing animals */}
          {[...Array(15)].map((_, i) => {
            const animals = ['🐸', '🦄', '🐙', '🦀', '🐢', '🦆', '🐧', '🦩', '🐨', '🐼', '🦘', '🦥', '🐿️', '🦔', '🐳'];
            return (
              <div
                key={`animal-${i}`}
                className="absolute animate-bounce text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`
                }}
              >
                {animals[Math.floor(Math.random() * animals.length)]}
              </div>
            );
          })}
          
          {/* Flying food items */}
          {[...Array(18)].map((_, i) => {
            const foods = ['🍕', '🍔', '🌭', '🍟', '🍿', '🧀', '🥨', '🥯', '🍩', '🍪', '🎂', '🧁', '🍰', '🍫', '🍬', '🍭'];
            return (
              <div
                key={`food-${i}`}
                className="absolute animate-float-up text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '-50px',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                {foods[Math.floor(Math.random() * foods.length)]}
              </div>
            );
          })}
          
          {/* Pulsing weird faces */}
          {[...Array(12)].map((_, i) => {
            const weirdFaces = ['👹', '👺', '🤖', '👽', '👻', '💀', '🎃', '😈', '👿', '🤠', '🥸', '🤓'];
            return (
              <div
                key={`weird-${i}`}
                className="absolute animate-pulse text-3xl cursor-pointer"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 1.5}s`
                }}
                onClick={() => {
                  const sounds = ['BOOP!', 'HONK!', 'BEEP!', 'WHOOSH!', 'DING!', 'BONK!'];
                  alert(sounds[Math.floor(Math.random() * sounds.length)]);
                }}
              >
                {weirdFaces[Math.floor(Math.random() * weirdFaces.length)]}
              </div>
            );
          })}
          
          {/* Swaying random objects */}
          {[...Array(10)].map((_, i) => {
            const objects = ['🚀', '🛸', '⚡', '🌈', '⭐', '💫', '☄️', '🌟', '✨', '💥'];
            return (
              <div
                key={`object-${i}`}
                className="absolute animate-sway text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2.5 + Math.random() * 1.5}s`
                }}
              >
                {objects[Math.floor(Math.random() * objects.length)]}
              </div>
            );
          })}
        </div>

        {/* Chaotic main message */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative">
            <div className="mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-red-600 dark:text-red-400 animate-bounce mb-2">
                🤡 GOTCHA! 🤡
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 animate-pulse">
                YOU'VE BEEN PRANKED!
              </h2>
            </div>
            
            {/* Chaotic emoji row */}
            <div className="text-3xl md:text-5xl mb-6 flex justify-center gap-2 flex-wrap">
              <span className="animate-spin" style={{ animationDelay: '0s' }}>🎪</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🤡</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🃏</span>
              <span className="animate-heart-beat" style={{ animationDelay: '0.6s' }}>😂</span>
              <span className="animate-sway" style={{ animationDelay: '0.8s' }}>🎭</span>
              <span className="animate-twinkle" style={{ animationDelay: '1s' }}>🎨</span>
            </div>
            
            <div className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 animate-pulse mb-4">
              Hope you're having fun! 😜
            </div>
            
            <div className="text-lg md:text-xl text-orange-600 dark:text-orange-400 mb-2">
              Find the reset button to escape! 🔍
            </div>
            
            {/* Global prank status */}
            <div className="text-sm text-gray-600 dark:text-gray-400 bg-black/20 rounded-lg p-2 mt-4">
              🌍 GLOBAL PRANK ACTIVE FOR ALL USERS! 🌍
              {prankStats.activatedAt && (
                <div className="text-xs mt-1">
                  Active for: {Math.floor((Date.now() - prankStats.activatedAt) / 1000)}s
                </div>
              )}
            </div>
            
            {/* Orbiting chaos around the text */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const chaosEmojis = ['💥', '⚡', '🌪️', '🔥', '💫', '⭐', '🌟', '✨', '💢', '💯', '🎯', '🎲'];
                return (
                  <div
                    key={`chaos-orbit-${i}`}
                    className="absolute text-2xl animate-spin"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-150px) rotate(-${i * 30}deg)`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {chaosEmojis[i % chaosEmojis.length]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Annoying popup messages */}
        {showPopup && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
            <div className="bg-yellow-400 border-4 border-red-500 rounded-2xl p-6 shadow-2xl animate-bounce max-w-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-800 mb-2">
                  {popupMessage}
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors"
                >
                  Close (if you can!) 😏
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hidden/Moving reset button */}
        <div 
          className="absolute pointer-events-auto animate-bounce"
          style={{
            top: `${10 + Math.sin(Date.now() / 1000) * 20}%`,
            right: `${5 + Math.cos(Date.now() / 800) * 15}%`,
            transform: `rotate(${Math.sin(Date.now() / 600) * 15}deg)`
          }}
        >
          <button
            onClick={() => {
              if (Math.random() > 0.7) { // Only 30% chance it works
                setShowResetBox(!showResetBox);
              } else {
                alert('🤡 Nope! Try again! The button is feeling shy!');
              }
            }}
            onMouseEnter={() => {
              if (Math.random() > 0.5) {
                alert('🏃‍♂️ Catch me if you can!');
              }
            }}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition-all text-sm font-bold animate-pulse"
          >
            🎯 Escape?
          </button>
        </div>

        {/* Reset input box */}
        {showResetBox && (
          <div className="absolute top-16 right-4 pointer-events-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 min-w-[250px]">
              <form onSubmit={handleReset} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Enter reset key:
                  </label>
                  <input
                    type="text"
                    value={resetKey}
                    onChange={(e) => setResetKey(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                    placeholder="Reset key..."
                    autoComplete="off"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-pink-500 text-white py-2 px-3 rounded text-sm hover:bg-pink-600 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowResetBox(false)}
                    className="flex-1 bg-gray-500 text-white py-2 px-3 rounded text-sm hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}