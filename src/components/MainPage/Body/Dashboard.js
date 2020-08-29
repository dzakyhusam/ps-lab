import React from 'react';

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
            <div className="main-content">
                <div className="Hello">
                    <h1>What do you want to do?</h1>
                    <h2>Dzaky Husam</h2>
                </div>
                <hr className="hello-line"></hr>
                <br></br>
                <div className="container feature-wrapper">
                    <div className="feature-item">
                        <div className="feature-name">
                            <div className="feature-name-box"></div>
                            <h3>Long Term Load Forecasting</h3>
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
                            <h3>Generation Expansion Planning</h3>
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
                        <btn className="btn btn-feature">
                            Mulai
                        </btn>
                    </div>
                </div>
            </div>
        )
    };
};

export default Dashboard;