import StyledH1 from "../Components/StyledComponents/StyledH1";
import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import JobFocusCard from "../Components/JobFocusCard";

const DomainExpertise = () => {
  return (
    <>
      <Head>
        <title key="title">MuchSkills Challenge</title>
        <meta name="description" content="Application made by Cyrilo" />
      </Head>
      <StyledPageMain>
        <JobFocusCard pageTitle="Domain Expertise" />
      </StyledPageMain>
    </>
  );
};

export default DomainExpertise;
