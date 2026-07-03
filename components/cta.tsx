import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <>
        <div className="w-full bg-linear-150 from-red-100 to-green-100 text-center rounded-2xl py-12 px-8 border border-border-light mt-6">
          <Sparkles className="text-plum mb-4 stroke-1 w-8 h-8 md:w-12 md:h-12" />
          <h3 className="text-2xl md:text-4xl font-bold ml-">
            Ready to find your next read?
          </h3>
          <p className="text-light-muted text-xs md:text-lg md:my-8 my-4">
            Join thousands of readers discovering books that match their mood
          </p>
          <Button asChild className="cursor-pointer" size={"xl"}>
            <Link href={"/"}>Get Started Free</Link>
          </Button>
        </div>
    </>
  )
}

export default Cta