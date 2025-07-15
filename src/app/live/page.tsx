import React from 'react';
import livePerformances from '../data/livePerfs'; // Import the performance data
import LivePerformanceList from '../components/LivePerfList'; // Import the list component

const LivePage: React.FC = () => {
  return (
    <div>
      <LivePerformanceList performances={livePerformances} />
    </div>
  );
};

export default LivePage;
