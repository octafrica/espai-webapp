import React, {PropsWithChildren} from 'react'
import Image from "next/image";
import Link from "next/link";

const DocsLayout = ({children}:PropsWithChildren<any>) => (
    <main className="relative bg-default">
        <Image
            src={"/led-one.svg"}
            alt="header-highlight"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 "
        />
        <div>
            <div className="w-11/12 mx-auto pt-5 md:pt-20">
                <div className=" bg-[url('/starry-bg.svg')] bg-cover">
                    <div className="flex justify-between relative">
                        <Link
                            href={"/"}
                            className="flex gap-2 items-center">
                            <Image
                                src={'/app_logo.svg'}
                                alt="Espai Logo"
                                width={80}
                                height={80}
                            />`
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </main>
)

export default DocsLayout