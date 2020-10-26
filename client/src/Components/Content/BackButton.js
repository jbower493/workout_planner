import React from 'react';

import { Button } from 'reactstrap';

const BackButton = (props) => {
  return (
    <div className="back-button-container">
      <Button color="primary" className="mb-4" onClick={props.backToDashboard}>Back to dashboard</Button>
    </div>
  )
};

export default BackButton;