"use client";
import { useState, useEffect } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import JobDetails from "./components/JobDetails";
import { AllJobProps } from "../../types/types";
import "./page.css";
import { useTheme } from "./components/ThemeContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobs, setJobs] = useState<AllJobProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<AllJobProps | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data: AllJobProps[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
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
    <div className={theme}>
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
    </div>
  );
}

export default Home;
