import { useEffect, useState } from "react";

const Loader: React.FC<{ loading: boolean; delay?: number }> = ({
  loading,
  delay = 500,
}) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (loading) {
      timeout = setTimeout(() => setShowLoader(true), delay);
    } else {
      setShowLoader(false);
    }

    return () => clearTimeout(timeout);
  }, [loading, delay]);

  if (!showLoader) return null;

  return (
    <div className="flex justify-center items-center h-16">
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loader;
