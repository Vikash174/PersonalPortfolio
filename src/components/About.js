import React from "react";
import { CODING_NINJAS_LOGO, TRIPSTACK_LOGO } from "../utils/constant";
import { WORKEXPERIENCEDATA } from "../utils/mockData";

const About = () => {
  return (
    <div className="text-white self-start mt-10">
      <div>
        <h2 className="text-4xl text-center p-2 m-2 bg-green-500 font-bold ">
          Work Experience
        </h2>
        <div className="p-5">
          {WORKEXPERIENCEDATA.map((workExperience) => {
            return <WorkExperienceCard work={workExperience} />;
          })}
        </div>
      </div>
    </div>
  );
};

const WorkExperienceCard = (props) => {
  console.log(props.workExperience);
  const {
    companyLogo,
    designation,
    companyName,
    workingTimeString,
    description,
  } = props.work;
  return (
    <div className="w-[800px] flex p-2 m-2 mt-10 shadow-lg shadow-black gap-5">
      <div>
        <img
          className="rounded-full max-w-12"
          src={companyLogo}
          alt="company logo"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{designation}</h3>
        <h4 className="text-lg font-semibold ">{companyName}</h4>
        <p>{workingTimeString}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About;
