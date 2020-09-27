import React from 'react';

class UC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepSelected: "STEP_1"
    }
  }

  stepHandleClick(input) {
    this.setState({ stepSelected: input });
  }

  render() {
    return(
      <div className="selectedfeature-container">
        <div className="steps-container">
          <h1 className="feature-title">Unit Commitment</h1>
          <h2 className="feature-welcome">Getting Started</h2>
          <p>Complete this steps</p>
          <div className="step data-input" onClick={ () => { this.stepHandleClick("STEP_1") }}>
            <h3>Step 1. Input your data</h3>
            <p>Upload your .csv file</p>
          </div>
          <div className="step constraints-model" onClick={ () => { this.stepHandleClick("STEP_2") }}>
            <h3>Step 2. Model the constraints</h3>
            <p>Choose and/or create your contraints model</p>
          </div>
          <div className="step of-model" onClick={ () => { this.stepHandleClick("STEP_3") }}>
            <h3>Step 3. Model the obj. function</h3>
            <p>Create your objective function</p>
          </div>
          <div className="step save-model" onClick={ () => { this.stepHandleClick("STEP_4") }}>
            <h3>Step 4. Save your model</h3>
            <p>Save your model for future use</p>
          </div>
        </div>
        <div className="modeling-container">
          
        </div>
      </div>
    )
  }
}

export default UC;