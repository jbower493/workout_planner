import React from 'react';

import { Button } from 'reactstrap';

const BackButton = (props) => {
  return (
    <Button className="mb-4" onClick={props.backToDashboard}>Back to dashboard</Button>
  )
};

export default BackButton;