/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/Components/MainLayout";
import Center from "@/Components/Center";
import LineDot from "@/Components/LineDot";

export default function Home() {
    return (
        <MainLayout>
            <Center>
                <section className=" flex gap-1 justify-around h-[32rem]" id="banner">
                    <aside className="h-full w-full px-2 py-1 flex flex-col gap-5 items-center justify-center z-10">
                        <h1 className="text-3xl font-extralight">👋 Welcome to Barun &apos; s Portfolio</h1>
                        <p className="text-sm font-thin text-center">Hello there!, 🌟 and welcome to my portfolio! I &apos; m Barun, a driven and curious computer science student, eager to showcase my journey and passion for technology. Here, you &apos; ll find a collection of my projects, accomplishments, and explorations in the world of computer science.</p>
                        <button className="my-5 shadow-green">Projects</button>
                    </aside>
                    <aside className="h-full w-full justify-center items-center z-10 hidden md:flex">
                        <img className="h-[50%] md:h-[70%] rounded-full" src="/hero.png" alt="logo" />
                    </aside>
                </section>
                <section className="py-5 flex flex-col gap-10" id="about">
                    <div className="flex flex-col gap-5">
                        <h1 className="underline-effect">About Me</h1>
                        <p>I am Barun Tiwary, Computer Science student is on the way of Mastering Computer Science.As a computer science enthusiast, I &apos; m constantly fascinated by the power of technology to solve complex problems and transform lives. Curently I &apos; m pursuing a Diploma in Computer Science, and my goal is to leverage my knowledge and skills to make a meaningful impact in the tech industry.</p>
                        <p>As a lifelong learner, I &apos; m always seeking new knowledge and experiences to broaden my perspective and enhance my skills.</p>
                        <p>Thanks for taking the time to learn a little about me!</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="underline-effect">My Journey</h1>
                        <div className="flex flex-col gap-5 ml-3">
                            <h2>Schooling</h2>
                            <div className="flex flex-col gap-2 ml-5">
                                <LineDot>
                                    <p>Completed Class 10 from Vivekananda English High School (ICSE)</p>
                                </LineDot>
                                <LineDot>
                                    <p>Completed +2 from Central Karimia +2 High School</p>
                                </LineDot>
                                <LineDot>
                                    <p>Currently persuing Diploma in Computer Science from Gov. Polytechinc Adiyapur</p>
                                </LineDot>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 ml-3">
                            <h2>Learning Path</h2>
                            <div className="flex flex-col gap-2 ml-5">
                                <LineDot>
                                    <p>Completed Class 10 from Vivekananda English High School (ICSE)</p>
                                </LineDot>
                                <LineDot>
                                    <p>Completed +2 from Central Karimia +2 High School</p>
                                </LineDot>
                                <LineDot>
                                    <p>Currently persuing Diploma in Computer Science from Gov. Polytechinc Adiyapur</p>
                                </LineDot>
                            </div>
                        </div>
                    </div>
                </section>
            </Center>
        </MainLayout>
    )
}
