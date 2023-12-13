import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
    <secotion className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Promptes</span>
      </h1>
      <p className="desc text-center">
        propmtopia is a open source AI prompting tool for modern world o discover, create and share reative prompts  
      </p>
    </secotion>

    {/* Feed */}
    <Feed></Feed>
    </>
  );
};

export default Home;
