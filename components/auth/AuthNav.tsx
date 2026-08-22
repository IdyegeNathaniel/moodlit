import { BookOpen } from "lucide-react"


const AuthNav = () => {
  return (
    <nav className="w-full h-20 top-0 sticky z-20 bg-white/5 backdrop-blur-md flex justify-center items-center px-5 py-4 border-b-2 border-gray-200">
        <div className="flex shrink-0 items-center gap-3">
        <BookOpen size={32} color="#6B4E71" strokeWidth={2} />
        <h1
          className="text-2xl font-bold bg-linear-to-r from-plum to-coral bg-clip-text text-transparent block">
          MoodLit
        </h1>
      </div>
    </nav>
  )
}

export default AuthNav