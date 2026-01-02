import React from "react";
import AllSongs from "../components/AllSongs";

const AllSongsPage: React.FC = () => {
  return (
    <div className="bg-black text-white px-8 py-12 max-w-screen-xl mx-auto min-h-screen">
      {/* Song List Component */}
      <AllSongs />
    </div>
  );
};

export default AllSongsPage;
