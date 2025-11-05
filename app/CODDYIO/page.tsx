'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePrank } from '../../contexts/PrankContext'

export default function CoddyIOPage() {
  const [inputKey, setInputKey] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const { activatePrank, isPrankActive, prankStats } = usePrank()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (inputKey === 'IAMGOD') {
      // Activate global prank mode for ALL users
      activatePrank()
      setMessage('🎪 GLOBAL PRANK MODE ACTIVATED! 🎪\nEvery visitor will now see the chaos! 🤡')
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        router.push('/')
      }, 3000)
    } else {
      setMessage('Invalid key! Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900 dark:to-red-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            🎭 Secret Portal
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Enter the magic key to unlock something special...
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="secretKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Secret Key
            </label>
            <input
              type="text"
              id="secretKey"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              placeholder="Enter your key..."
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Unlock Magic ✨
          </button>
        </form>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center ${
            message.includes('activated') 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {message}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}