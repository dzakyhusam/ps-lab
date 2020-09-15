import React from 'react';
import UC from './UC';
import GEP from './GEP';

function SelectFeature(props) {
    const featureSelected = props.featureSelected;
    if(featureSelected === 2) {
        return (<GEP />);
    }
    else if(featureSelected === 4) {
        return (<UC />);
    }
    return <div></div>;
};

export default SelectFeature;