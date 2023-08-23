import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-10">
      <div
        id="1"
        className="container grid grid-cols-3 gap-6 text-white mx-auto bg-gray-800"
      >
        <div className="col-span-3 md:col-span-2 md:pr-6">
          <h2 className="text-3xl font-bold underline text-yellow-700">
            About Me
          </h2>
          <p className="my-4 leading-relaxed md:leading-loose text-xl">
            Hello I'm Rishna, a frontend engineer at Skillify a Toronto-based
            startup that offers digital media literacy coaching. I am currently
            learning how to become a front-end engineer and looking to grow my
            skills through practical practice, and this is my first React
            Portfolio page. I am hoping to start my own business in which I can
            provide these and in time many more other products and services.
            Below you will find some of the projects I have already completed
            and a way to get in touch with me. I hope you enjoy my work and feel
            free to get into contact with me if you have any questions or would
            like to work with me!
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <img
            src="https://previews-tu.wetransfer.net/file/wetransfer/j1ot/ad9f2115d0025d3d47d13a5a668d40a020230823173034/hl-11041344852?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2l0RmZ1UkFnQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--78a15b03fd5e1f3c931dd55503683083d7bc4af32ae33b59bf675e7552fdbf5d%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmwwUm1aMVVrRm5RVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTc4YTE1YjAzZmQ1ZTFmM2M5MzFkZDU1NTAzNjgzMDgzZDdiYzRhZjMyYWUzM2I1OWJmNjc1ZTc1NTJmZGJmNWQiLCJleHAiOjE2OTI4MjkzMjIsImlhdCI6MTY5MjgyNTcyMiwia2lkIjoiRnIzciJ9.gOzSIsIqwB8XT2tqdmn-5opTq4fhsdQLrKmZa63XjN4&s=37667ea76ab52500bdbc72d6df7bb2a9967017a6&Expires=1692829322&Signature=dk2LDsqcfEGNVmT0IR6EAeu5gSg24Lv5KR-QK70GC1FZeWfNBgir2wx3m0S3LnQZz19h69m3vkIJ0YvngMaA8UqK4feacNSQL4ZrV7~BXwJgtTaZkjfMAArhvJ8sypbZAkz~9Er07MbNbQLnutCRcRo3gQJSRh4Yxks2sL0VB6LAbVEGLCSTuSOtkHp0obRwH8noYzTlPRzG9OTPiZhbwxzWfWDiE8WBa~n0vBzNXlYZNOMrH10RU9MAmTkowhyJI-sU96gX4M8FGxeikkmdffhUG~IP1X9nGIUEzL2-JVplRv7iPiSB2ziMCmTuLTTO4jYNmM9o0JtqgQICXfSAYQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ"
            className="rounded-full mx-auto md:mx-0 mb-4 md:mb-0"
            alt="Profile"
          />
        </div>
        {/* You can add more grid items here */}
      </div>
    </section>
  );
};

export default About;
