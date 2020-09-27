import React from 'react';
import UC from './UC';
import GEP from './GEP';

class SelectFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let feature = this.props.featureSelected;

    if(feature === "GEP") {
      return (<GEP />);
    }
    else if(feature === "UC") {
      return (<UC />);
    }
    return <div></div>;
  }
}

export default SelectFeature;