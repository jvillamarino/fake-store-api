import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function GridSection() {
    return (
        <section className="flex flex-auto justify-center items-center p-4 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-backgroundElement rounded-lg flex flex-row gap-4 overflow-hidden">
                    <Image
                        src={'/images/fashion-girl.jpg'}
                        alt="Fashion Girl"
                        loading="lazy"
                        width={250}
                        height={200}
                        className="w-36 sm:w-52 md:w-64 transition-all"
                    />
                    <div className="flex flex-auto items-start flex-col justify-between p-4 md:p-8 gap-2">
                        <div className="space-y-2">
                            <h1 className="font-bold text-base sm:text-2xl md:text-3xl">Women Collection</h1>
                            <h2 className="font-semibold text-sm sm:text-lg md:text-xl">Collection</h2>
                            <p className="text-xs sm:text-base line-clamp-2">
                                Explore our empowering Women&apos;s Collection, celebrating grace and confidence.{' '}
                            </p>
                            <p className="text-xs sm:text-base line-clamp-2">
                                Shop now and elevate your wardrobe with fashion-forward ensembles!
                            </p>
                        </div>
                        <Button size="sm" className="">
                            <Link href="/products" className='text-xs sm:text-sm'>
                                See products
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-rows-[150px_200px] gap-4">
                    <div className="bg-backgroundElement rounded-lg flex flex-row gap-4 w-full bg-purple-100">
                        <div className="m-8 flex flex-auto flex-col justify-center">
                            <h2 className="font-semibold text-base text-black">24 Items</h2>
                            <h1 className="font-bold text-xl sm:text-3xl text-black">Betsellers</h1>
                        </div>
                    </div>

                    <div className="bg-backgroundElement rounded-lg bg-[url('/images/water-rockstar.jpg')] bg-cover bg-center bg-no-repeat">
                        <h1 className="font-bold text-lg text-white bg-white bg-opacity-25 inline-flex py-1 px-4 ml-4 mt-16 rounded">
                            New
                        </h1>
                        <h2 className="font-semibold text-xl text-white ml-4">Collection</h2>
                    </div>

                    <div className="bg-backgroundElement rounded-lg col-span-2 bg-[url('/images/colorful-rockstar.jpg')] bg-cover bg-top bg-no-repeat w-full min-h-min">
                    </div>
                </div>
            </div>
        </section>
    );
}
