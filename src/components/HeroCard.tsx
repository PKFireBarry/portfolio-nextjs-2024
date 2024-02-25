"use client";

import desert from "../app/desert .jpg";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";

export function HeroCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-200 relative text-center items-center group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="40"
          className="text-xl text-center flex w-full justify-center font-bold text-neutral-600 dark:text-white"
        >Sometimes you Just Have To Build It
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-center flex w-full justify-center text-sm  mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash my wizard powers
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={desert}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-center flex w-full mt-20 justify-center text-sm  dark:text-neutral-300"
        >
          Explore the frontend for hidden animations! Hunt them down now for an interactive experience!
        </CardItem>
        <div className="flex text-neutral-500 justify-center items-center ">
        
        </div>
      </CardBody>
    </CardContainer>
  );
}
