import React from "react";
import SectionsAndTags from "./SectionsAndTags";
import whatIDo from "./whatIDo.json"

const WhatIDo = () => {
    return (
        <section className="w-full bg-yofrag-black text-yofrag-white">
            <div className="w-[72%] h-full mx-auto flex flex-col">
                <h1 className="w-full text-6xl font-semibold border-b border-b-yofrag-white mt-[93px] pb-[22px]">¿QUÉ HAGO?</h1>
                {whatIDo.map((item,index) => <SectionsAndTags title={item?.title} tags={item?.tags} columns={item?.columns}/>)}
            </div>
        </section>
    )
};

export default WhatIDo;