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
    <>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="job-list-div"
          onClick={() => onJobClick(job)}
        >
          <div>
            <Image src={job.logo} width={50} height={50} alt={job.company} />
            <p>
              <strong>Company: </strong>
              {job.company}
            </p>
          </div>
          <div className="position-location">
            <p>
              <strong>Position: </strong>
              {job.position}
            </p>
            <p>
              <strong>Location: </strong>
              {job.location}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobList;
