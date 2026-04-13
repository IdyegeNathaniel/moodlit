import Link from "next/link"
import { Button } from "../ui/button"
import { BookOpen } from "lucide-react"

const NavBar: React.FC = () => {

  const LogoStyle = {
            fontSize: '1.75rem', 
            fontWeight: '700',
            margin: 0,
            background: 'linear-gradient(135deg, #6B4E71 0%, #E8927C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }


  return (
    <section className="w-full h-20 flex justify-between items-center px-5 py-4 border-b-2 border-gray-200">
      <div className="flex shrink-0 items-center gap-3">
        <BookOpen size={32} color="#6B4E71" strokeWidth={2} />
        <h1 style={LogoStyle}>MoodLit</h1>
      </div>
      <div className="">
        <Button variant={"secondary"} asChild>
          <Link href={"/login"}>Sign In</Link>
        </Button>
      </div>
    </section>
  )
}

export default NavBar