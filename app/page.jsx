// import Feed from "@components/Feed";

import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
      <p className="desc text-center">
        PromptHub is an open-source platform for discovering and sharing AI
        prompts.
      </p>
      <button style={{marginTop:'20px', color:'orange'}} > <Link href="https://github.com/"

      >GITHUB</Link></button>
     
      {/* <Feed /> */}
    </section>
  );
};

export default Home;
