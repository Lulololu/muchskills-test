import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import JobFocusCard from "../Components/JobFocusCard";

const Home = () => {
  return (
    <>
      <Head>
        <title key="title">MuchSkills Challenge</title>
        <meta name="description" content="Application made by Cyrilo" />
      </Head>
      <StyledPageMain>
        <JobFocusCard pageTitle=" 4 Job Focus" />
      </StyledPageMain>
    </>
  );
};

export default Home;
