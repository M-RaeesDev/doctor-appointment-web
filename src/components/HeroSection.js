import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex md:flex-row flex-col items-center py-3">
    <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-semibold sm:text-4xl text-xl mb-4 text-gray-900">
        DOCTOR APPOINTMENT SYSTEM 
        <br className="hidden lg:inline-block" />
         BY BATCH-11
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="outline">Choose Your Doctor</Button>
        <Button>Apply as a Doctor</Button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={400}
        height={400}
        priority
        src="https://plus.unsplash.com/premium_photo-1681843058031-838bccab8578?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
</section>

    )
}