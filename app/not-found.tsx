"use client"

import Image from "next/image"
import notFound from "./assets/images/404.png"
import { Button } from "@/components/ui/button"

const notFoundpage = () => {
  return (
    <section className="w-full h-screen md:h-2/3 flex items-center justify-center mb-0  md:mb-20">
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center">
       <Image src={notFound} alt="404 not found" className="w-[400px] h-[400px] mx-auto" />
        <p className="text-center text-light-muted mt-2">The page you are looking for does not exist.</p>
        <Button variant="default" className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
      </div>
    </section>
  )
}

export default notFoundpage
