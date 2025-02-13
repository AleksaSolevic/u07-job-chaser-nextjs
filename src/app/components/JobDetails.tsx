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
      <p>
        <strong>Company: </strong> {job.company}
      </p>
      <p>
        <strong>Location: </strong> {job.location}
      </p>
      <p>
        <strong>Contract: </strong> {job.contract}
      </p>
      <p>
        <strong>Level: </strong> {job.level}
      </p>
      <p>
        <strong>Posted at: </strong> {job.postedAt}
      </p>
      <p>
        <strong>Languages: </strong> {job.languages.join(", ")}
      </p>
      <p>
        <strong>Tools: </strong> {job.tools.join(", ")}
      </p>
    </div>
  );
};

export default JobDetails;
