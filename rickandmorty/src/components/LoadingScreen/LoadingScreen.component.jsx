import React from 'react';
import LoadingSpinner from './LoadingSpinner.component';
import SpinnerContainer from './SpinnerContainer.component';

const LoadingScreen = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
}

export default LoadingScreen;