import React from 'react';
import { useSelector } from 'react-redux';
import { TodoState } from '../store/types';

const DebugState: React.FC = () => {
  const state = useSelector((state: TodoState) => state);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h3>Current Redux State:</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default DebugState;