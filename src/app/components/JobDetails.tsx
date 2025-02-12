import React from "react";
import { AllJobProps } from "../../../types/types";
import Image from "next/image";
interface JobDetailsProps {
  job: AllJobProps;
  onClose: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onClose }) => {
  return (
    <div className="job-details">
      <button onClick={onClose}>X</button>
      <h2>{job.position}</h2>
      <Image src={job.logo} width={100} height={100} alt={job.company} />
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Contract: {job.contract}</p>
      <p>Level: {job.level}</p>
      <p>Posted At: {job.postedAt}</p>
      <p>Languages: {job.languages.join(", ")}</p>
      <p>Tools: {job.tools.join(", ")}</p>
    </div>
  );
};

export default JobDetails;
