"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { BookOpen, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import DialogBox from "../dialogBox"


const NavBar: React.FC = () => {
 
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const LogoStyle = {
            fontSize: '1.75rem', 
            fontWeight: '700',
            margin: 0,
            background: 'linear-gradient(135deg, #6B4E71 0%, #E8927C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }


          const showDialog = () => {
           
          };

  return (
    <section className="w-full h-20 top-0 sticky z-20 bg-white/5 backdrop-blur-md flex justify-between items-center px-5 py-4 border-b-2 border-gray-200">
      <div className="flex shrink-0 items-center gap-3">
        <BookOpen size={32} color="#6B4E71" strokeWidth={2} />
        <h1 style={LogoStyle}>MoodLit</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant={"secondary"} asChild>
          <Link href={"/login"}>Sign In</Link>
        </Button>
        <button className="p-2 rounded-md hover:bg-gray-200/50 transition-colors cursor-pointer" onClick={() => setShowOptions(prev => !prev)}>
          <MoreHorizontal size={24} color="#6B4E71" strokeWidth={2} />
        </button>
        
      </div>
      {showOptions ? <DialogBox /> : null}
    </section>
  )
}

export default NavBar