"use client"
import React from "react";
import Header from "./header";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { SignIn, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Marketing() {
  return (
    <div className=" mx-auto flex-1 w-full flex flex-col lg:flex-row items-center max-w-[988px] p-4 gap-2">
      <div className=" relative w-[240px] h-[240px] lg:w-[988px] lg:h-[424px] mb-32 lg:mb-16 lg:flex lg:justify-center lg:items-center">
  <div>
  <div className=" grid grid-rows-4 grid-flow-col gap-4 ">
          <div className=" mx-auto grid grid-cols-2 grid-flow-col gap-4">
            <Image
              src={"/Planes/planeGreen1.png"}
              alt="blue"
              width={70}
              height={70}
            />
            <Image
              src={"/Planes/planeRed1.png"}
              alt="blue"
              width={70}
              height={70}
            />
          </div>
          <div className="  grid grid-cols-1  grid-flow-col gap-4 ">
            <div className="flex justify-center  ">
              <Image
                src={"/Planes/medalSilver.png"}
                alt="blue"
                width={70}
                height={70}
              />
            </div>
          </div>
          <div className="mx-auto grid grid-cols-2 grid-flow-col gap-4">
            <Image
              src={"/Planes/planeYellow1.png"}
              alt="blue"
              width={70}
              height={70}
            />
            <Image
              src={"/Planes/planeBlue1.png"}
              alt="blue"
              width={70}
              height={70}
            />
          </div>
        </div>
      
  </div>
        <div className="  flex flex-col  gap-y-8 items-center justify-center">
        <h1 className="text-xl  font-bold text-neutral-600 max-w-[488px] text-center">
    Master Languages, One Lesson at a Time: Your Path to Global Communication Starts Here.
    </h1>
        <ClerkLoading>
          <Loader/>  
        </ClerkLoading>
        <ClerkLoaded>
        <SignedOut>
        <SignUpButton mode="modal" signInFallbackRedirectUrl={"/learn"} signInForceRedirectUrl={"/learn"}>
                <Button variant={"default"}>
Get Started
                    </Button>
                </SignUpButton>
                <SignInButton>
                    <Button variant={"outline"}>I already have an account</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <Button>
                    <Link href={"/learn"}>
                        Continue Learning
                    </Link>
                </Button>
            </SignedIn>
        </ClerkLoaded>
    </div>
      </div>
    </div>
  );
}
