'use client'

import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";


  


function ParticleBackGround() {
    const particlesInit = useCallback(async (engine: Engine) => {
        return await loadFull(engine);
    }, []);

    return (
        <div className="">
        <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>            
        </div>


    );
}

export default ParticleBackGround
