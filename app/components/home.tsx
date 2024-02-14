import Code from "@/app/components/code";
import Header from "./header"
import dynamic from 'next/dynamic';
import Result from "./result";




const HomePage = () => {
  return (
    <>
    <Header />
    <Code />
    <Result />
    </>
    
  );
};

export default HomePage;
