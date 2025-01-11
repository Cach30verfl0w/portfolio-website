import Image from 'next/image'
import {Carousel} from "@/app/components/Carousel";
import './globals.css';

export default function Home() {
    return (
        <div className="mt-[10vh] sm:mt-0 relative lg:justify-between w-full flex flex-col sm:flex-row items-center px-[12.5vw] md:px-0 lg:px-[10vw]" style={{ height: '70vh' }}>
            <div className={"flex flex-col sm:flex-row sm:space-x-7 items-center"}>
                <div className="w-36 h-36 sm:w-40 sm:h-40">
                    <Image
                        src={"/me.png"}
                        width={140}
                        height={140}
                        alt={"Picture of the website author"}
                        className={"rounded-full w-full h-auto"}
                    />
                </div>
                <div id={"introduction"} className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl text-[#00FF00]">Cedric Hammes</h1>
                    <p className="text-xl sm:text-2xl">Software Engineer</p>
                    <br/>
                    <p className="text-sm sm:text-base" style={{maxWidth: 450}}>
                        Hello I&#39;m <b className={"text-[#00FF00]"}>Cedric Hammes</b>, a 18 years old self-taught
                        Software Engineer with 6 years of programming experience from Rhineland Palatinate, Germany.
                    </p>
                </div>
            </div>
            <div className={"mt-[5vh] sm:mt-0"}>
                <Carousel>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>Krypton</h1>
                        <div>
                            <a href={"https://github.com/trusted-kotlin/krypton"}
                               className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>A modular and extensible Kotlin library suite for PKI, Cryptography and Keystores</p>
                    </div>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>tpm4k</h1>
                        <div>
                            <a href={"https://github.com/trusted-kotlin/tpm4k"} className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>Kotlin/Native API for interacting with the TPM (Trusted Platform Module)</p>
                    </div>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>Cash3Fl0w</h1>
                        <div>
                            <a href={"https://github.com/Cach30verfl0w/cash3fl0w"}
                               className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>Cash3Fl0w is a finance software based on Kotlin Multiplatform with Support for German
                            banking accounts over FinTS/HBCI (Discontinued)</p>
                    </div>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>React-Native Rust Plugin</h1>
                        <div>
                            <a href={"https://github.com/Cach30verfl0w/react-native-rust-plugin"}
                               className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>Gradle Plugin for compatibility between Rust Code and TypeScript Code for Android</p>
                    </div>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>kstd-platform</h1>
                        <div>
                            <a href={"https://github.com/karmakrafts/kstd-platform"}
                               className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>OS abstractions for various purposes like memory mapping for C++17/20.</p>
                    </div>
                    <div className={"w-[350px] h-[350px] rounded-lg p-4"}
                         style={{background: 'linear-gradient(to top, #003010, #0F190F)'}}>
                        <h1 className={"text-3xl"}>socket-library</h1>
                        <div>
                            <a href={"https://github.com/Cach30verfl0w/socket-library"}
                               className={"text-[#00FF00]"}>GitHub</a>
                        </div>
                        <br/>
                        <p>My try to develop a own socket library with C++ for learning purposes</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
