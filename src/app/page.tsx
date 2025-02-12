"use client";
import { useState, useEffect } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import JobDetails from "./components/JobDetails";
import { AllJobProps } from "../../types/types";
import "./page.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobs, setJobs] = useState<AllJobProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<AllJobProps | null>(null);

  // Fetch jobs data in the parent component
  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data: AllJobProps[]) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading jobs:", error);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return Object.values(job).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleJobClick = (job: AllJobProps) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {selectedJob ? (
        <JobDetails job={selectedJob} onClose={handleCloseDetails} />
      ) : (
        <JobList
          jobs={filteredJobs}
          loading={loading}
          onJobClick={handleJobClick}
        />
      )}
    </>
  );
}

export default Home;
