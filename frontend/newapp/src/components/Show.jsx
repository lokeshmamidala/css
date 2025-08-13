import React, { useState } from 'react';

const ShowHideComponent = () => {
  const [status, setStatus] = useState(true); 

  const toggleStatus = () => {
    setStatus(!status); 
  };

  return (
    <div>
      <button onClick={toggleStatus}>
        {status ? 'Hide' : 'Show'}
      </button>

      {status && (
        <div>
          <p>new content</p>
        </div>
      )}
    </div>
  );
};

export default ShowHideComponent;
