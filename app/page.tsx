import Image from "next/image";
import Background from "@/public/Background.png"
import Profile from "@/public/Profile.png"
import NameTag from "@/public/NameTag.png"
import Button from "@/app/components/Button"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        className="absolute h-full w-full object-cover"
        src={Background}
        alt="8-bit Background Image"
      />

      <div className="flex flex-row">
        <div className="relative w-1/2 flex flex-col items-center justify-center">
            <Image className="mb-3" src={Profile} alt="8-bit profile"/>

            <div className="relative">
              <Image src={NameTag} alt="8-bit name tag"/>
              <div className="absolute inset-0 flex flex-col justify-center px-10 sm:px-12">
                <div className="text-center font-semibold tracking-wide text-black">
                  <div className="text-xl sm:text-2xl leading-none">Avia Bequette</div>
                </div>
              </div>
            </div>
          </div>
        <div className="relative w-1/2 flex flex-col items-start justify-center">
          <div className="text-black text-5xl text-white mb-3">Software Developer</div>
          <div className="text-black text-xl text-white mb-3">Welcome to my Portfolio..! </div>
          <Button>hello</Button>
        </div>
      </div>
    </div>
  );
}
