import React from "react";
import { AllJobProps } from "../../../types/types";
import Image from "next/image";
interface JobListComponentProps {
  jobs: AllJobProps[];
  loading: boolean;
  onJobClick: (job: AllJobProps) => void;
}

const JobList: React.FC<JobListComponentProps> = ({
  jobs,
  loading,
  onJobClick,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-item" onClick={() => onJobClick(job)}>
          <Image src={job.logo} width={100} height={100} alt={job.company} />
          <p>{job.company}</p>
          <h3>{job.position}</h3>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
