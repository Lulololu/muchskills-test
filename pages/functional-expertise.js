import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import JobFocusCard from "../Components/JobFocusCard";

const FunctionalExpertise = () => {
  return (
    <>
      <Head>
        <title key="title">MuchSkills Challenge</title>
        <meta name="description" content="Application made by Cyrilo" />
      </Head>
      <StyledPageMain>
        <JobFocusCard pageTitle="Functional Expertise" />
      </StyledPageMain>
    </>
  );
};

export default FunctionalExpertise;
