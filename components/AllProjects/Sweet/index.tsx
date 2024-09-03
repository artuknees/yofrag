import ProjectLayout from "@/components/Common/Layouts/ProjectLayout";
import Image from "next/image";
import React from "react";
import sweet1 from '../../../public/projects/sweet/sweet-mockup1.png'
import blurBackground from '../../../public/projects/sweet/blurBackground.png'
import desktopOverBlurBackground from '../../../public/projects/sweet/desktopOverBlurBackground.png'


import sweetPaleta from '../../../public/projects/sweet/paleta.png'
import cell1 from '../../../public/projects/sweet/cell1.png'
import cell2 from '../../../public/projects/sweet/cell2.png'
import cell3 from '../../../public/projects/sweet/cell3.png'
import cell4 from '../../../public/projects/sweet/cell4.png'


const Sweet = () => {
    return (
        <ProjectLayout>
            {/* Imagen inicial */}
            <Image
                src={sweet1}
                alt='banner'
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    height: 'auto',
                    width: '100%'
                }}
            />
            {/* Descripcion de proyecto */}
            <div className="flex flex-row w-full justify-center px-[290px] mb-12">
                <div className="w-1/2 flex flex-col items-end px-[65px] pt-4">
                    <p className="font-light">Agencia — <b className="font-semibold">Pow.</b></p>
                    <p className="font-light">Rubo — <b className="font-semibold">Ecomerce</b></p>
                    <p className="font-light">Industria — <b className="font-semibold">Indumentaria</b></p>
                    <p className="font-light">Año — <b className="font-semibold">2021</b></p>
                </div>
                <div className="w-1/2 flex flex-col items-start px-[45px]">
                    <h1 className="text-5xl font-semibold font-jost text-[#CC3366]">Sweet</h1>
                    <p className="font-jost font-light text-xl leading-8">Proyecto de rebranding llevado a cabo con <b className="font-semibold">Camila Lembo</b> para <b className="font-semibold">Pow</b>. El objetivo era darle un aspecto más joven, fresco y minimalista a la marca.</p>
                </div>

            </div>

            {/* Sabanas */}
            <div className="flex flex-row items-center justify-center w-full relative">
                <Image
                    src={blurBackground}
                    alt='blur'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        height: 'auto',
                        width: '100%',
                    }}
                />
                <Image
                    src={desktopOverBlurBackground}
                    alt='desktopOverBlur'
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                        height: '91.5%',
                        width: 'auto',
                        position: 'absolute',
                    }}
                />
            </div>

            {/* Paleta */}
            <div className="px-[275px] mt-[100px] mb-[80px]">
                <Image
                    src={sweetPaleta}
                    alt='banner'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        height: 'auto',
                        width: '100%',
                    }}
                />
            </div>

            {/* Cells */}
            <div className="w-full h-[908px] bg-white flex flex-row items-center justify-center py-[50px]">
                <Image
                    src={cell1}
                    alt='cell1'
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                        height: '100%',
                        width: 'auto',
                    }}
                />
                <Image
                    src={cell2}
                    alt='cell2'
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                        height: '100%',
                        width: 'auto',
                    }}
                />
                <Image
                    src={cell3}
                    alt='cell3'
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                        height: '100%',
                        width: 'auto',
                    }}
                />
                <Image
                    src={cell4}
                    alt='cell4'
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={{
                        height: '100%',
                        width: 'auto',
                    }}
                />

            </div>

        </ProjectLayout>
    )
}


export default Sweet