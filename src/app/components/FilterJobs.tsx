import { AllJobProps } from "../../../types/types";
import { useReducer, useEffect } from "react";

interface FilterJobsProps {
  jobs: AllJobProps[];
  setFilteredJobs: (jobs: AllJobProps[]) => void;
}

const initialState = {
  filteredJobs: [] as AllJobProps[],
  allJobs: [] as AllJobProps[],
};

type Action =
  | { type: "SET_JOBS"; payload: AllJobProps[] }
  | { type: "FILTER_BY_POSITION"; payload: string }
  | { type: "FILTER_BY_ROLE"; payload: string }
  | { type: "FILTER_BY_LOCATION"; payload: string }
  | { type: "RESET" };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        filteredJobs: action.payload,
        allJobs: action.payload,
      };

    case "FILTER_BY_POSITION":
      return {
        ...state,
        filteredJobs: state.allJobs.filter((job) =>
          job.position.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case "FILTER_BY_ROLE":
      return {
        ...state,
        filteredJobs: state.allJobs.filter((job) =>
          job.role.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case "FILTER_BY_LOCATION":
      return {
        ...state,
        filteredJobs: state.allJobs.filter((job) =>
          job.location.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case "RESET":
      return { ...state, filteredJobs: state.allJobs };

    default:
      return state;
  }
}

export default function FilterJobs({ jobs, setFilteredJobs }: FilterJobsProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_JOBS", payload: jobs });
  }, [jobs]);

  useEffect(() => {
    setFilteredJobs(state.filteredJobs);
  }, [state.filteredJobs, setFilteredJobs]);

  return (
    <div className="p-4">
      <h2 className="text-l font-bold mb-4">Filtered jobs:</h2>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-400 text-white rounded"
          onClick={() =>
            dispatch({ type: "FILTER_BY_POSITION", payload: "Junior" })
          }
        >
          Junior
        </button>
        <button
          className="px-4 py-2 bg-lime-500 text-white rounded"
          onClick={() =>
            dispatch({ type: "FILTER_BY_ROLE", payload: "Frontend" })
          }
        >
          Frontend
        </button>
        <button
          className="px-4 py-2 bg-purple-400 text-white all-rounded"
          onClick={() =>
            dispatch({ type: "FILTER_BY_LOCATION", payload: "Worldwide" })
          }
        >
          Remote
        </button>
        <button
          className="px-2 py-1 bg-gray-500 text-white rounded"
          onClick={() => dispatch({ type: "RESET" })}
        >
          X
        </button>
      </div>
    </div>
  );
}
