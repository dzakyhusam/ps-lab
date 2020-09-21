import React from 'react';
import featureListIcon from '../../../assets/icons/featurelist50.png';
import SelectFeature from "./Dashboard Feature/SelectFeature";

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      choosenFeature: 0
    };
  };

  featureClick(input) {
    this.setState({choosenFeature: input});
  };

  render() {
    return(
      <div className="content-box-container">
        <h2 className="hello-text">Hello <span>{ this.props.accountName }</span>, Welcome Back</h2>

        <div className="feature-header">
          <img src={ featureListIcon }></img>
          <h2>Features List</h2>
        </div>
        <div className="feature-container">
          <div className="feature-item">
            <div className="feature-name">
              <div className="feature-name-box"></div>
              <h3>Long Term Load Forecasting</h3>
            </div>
            <img
              className="feature-image"
              src={"https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-market-forecasting-illustration-concept-flat-design-concept-of-web-page-png-image_1514387.jpg"}
            />
            <h3 className="feature-desc">
              <i>Load forecasting</i> untuk perencanaan jangka panjang menggunakan metode <i>Time Series</i>
            </h3>
            <btn className="btn btn-feature">
              Mulai
            </btn>
          </div>

          <div className="feature-item">
            <div className="feature-name">
              <div className="feature-name-box"></div>
              <h3>Generation Expansion Planning</h3>
            </div>
            <img
              className="feature-image"
              src="https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-market-forecasting-illustration-concept-flat-design-concept-of-web-page-png-image_1514387.jpg"
            />
            <h3 className="feature-desc">
              <i>Load forecasting</i> untuk perencanaan jangka panjang menggunakan metode <i>Time Series</i>
            </h3>
            <btn className="btn btn-feature" onClick={()=>{this.featureClick(2)}}>
              Mulai
            </btn>
          </div>

          <div className="feature-item">
            <div className="feature-name">
              <div className="feature-name-box"></div>
              <h3>Short Term Load Forecasting</h3>
            </div>
            <img
              className="feature-image"
              src="https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-market-forecasting-illustration-concept-flat-design-concept-of-web-page-png-image_1514387.jpg"
            />
            <h3 className="feature-desc">
              <i>Load forecasting</i> untuk perencanaan jangka panjang menggunakan metode <i>Time Series</i>
            </h3>
            <btn className="btn btn-feature">
              Mulai
            </btn>
          </div>

          <div className="feature-item">
            <div className="feature-name">
              <div className="feature-name-box"></div>
              <h3>Unit Commitment (Operation)</h3>
            </div>
            <img
              className="feature-image"
              src="https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-market-forecasting-illustration-concept-flat-design-concept-of-web-page-png-image_1514387.jpg"
            />
            <h3 className="feature-desc">
              <i>Load forecasting</i> untuk perencanaan jangka panjang menggunakan metode <i>Time Series</i>
            </h3>
            <btn className="btn btn-feature" onClick={ () => { this.featureClick(4) } }>
              Mulai
            </btn>
          </div>

        </div>
        
        <SelectFeature featureSelected={this.state.choosenFeature} />

      </div>
    )
  };
};

export default Dashboard;