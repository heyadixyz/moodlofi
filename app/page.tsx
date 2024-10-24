'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Headphones } from 'lucide-react'

export default function Component() {
  const [feeling, setFeeling] = useState('')
  const [style, setStyle] = useState('')

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-3xl shadow-lg">
      <div className="text-center space-y-2">
        <Headphones className="w-16 h-16 mx-auto text-purple-500" />
        <h1 className="text-4xl font-bold text-purple-500">MoodLofi</h1>
        <p className="text-xl text-gray-500">AI Lofi Beat Generator</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">How are you feeling today?</h2>
        <Textarea 
          placeholder="I'm feeling..." 
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
          className="w-full h-32 p-3 text-lg border rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Select Music Style</h2>
        <Select value={style} onValueChange={setStyle}>
          <SelectTrigger className="w-full p-3 text-lg border rounded-xl">
            <SelectValue placeholder="Choose a style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hiphop">Hiphop</SelectItem>
            <SelectItem value="reverb">Reverb</SelectItem>
            <SelectItem value="hollywood">Hollywood</SelectItem>
            <SelectItem value="retro">Retro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="w-full py-3 text-xl font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-400 rounded-full hover:from-purple-500 hover:to-blue-500"
        onClick={() => console.log('Generating Lofi Beats...')}
      >
        🎵 Generate Lofi Beats
      </Button>
    </div>
  )
}