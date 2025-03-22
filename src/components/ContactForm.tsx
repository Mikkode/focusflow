"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler un envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all cursor-text"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all cursor-text"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all cursor-text"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formState.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all cursor-pointer"
            disabled={isSubmitting || isSubmitted}
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="coaching">Coaching individuel</option>
            <option value="workshop">Atelier de groupe</option>
            <option value="partnership">Partenariat</option>
            <option value="other">Autre</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none cursor-text"
          disabled={isSubmitting || isSubmitted}
        ></textarea>
      </div>
      
      <div>
        {!isSubmitted ? (
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
                <span>Envoi en cours...</span>
              </div>
            ) : (
              "Envoyer le message"
            )}
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Message envoyé avec succès!</span>
            </div>
          </motion.div>
        )}
      </div>
    </form>
  )
} 