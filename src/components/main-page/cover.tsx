import Image from 'next/image'
import { Button } from '../ui/button'

export default function Cover() {
    return (
        <section className="block md:h-[45hv] lg:h-[55hv] xl:h-[70vh] overflow-x-hidden">
            <article className="flex flex-row max-h-full max-w-full w-auto h-auto relative">
                <Image loading='eager' width={1400} height={300} quality={100} priority={true}
                    src="/images/girl-rockstar.jpg" alt="Girl Rockstar" className='max-h-full max-w-full h-auto w-9/12' />
                <Image loading='lazy' width={600} height={450} quality={100}
                    src="/images/rockstar.jpg" alt="Boy Rockstar" className='max-h-full max-w-full h-auto w-3/12' />

                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-1">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-blue-500">Sunner</h1>
                    <h2 className="text-base lg:text-3xl font-bold bg-backgroundElement px-8 lg:px-24">
                        Find everything you need
                    </h2>
                </div>
            </article>

        </section >

    )
}