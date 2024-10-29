import React from 'react'
import css from '/home/janewmwaura/ecommerce/amazon-starterpack/src/components/Virtual.module.css'
import shade from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/shade.png'
import Before from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/before.png'
import After from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/after.png'
import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
          <span>Virtual Try-On</span>
          <span>Never Buy the Wrong Shade Again!</span>
          <span>Try Now!</span>
          <img src={shade} alt="" />
        </div>
    <div className={css.right}>
      <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} rightImage={After}/>
        </div>
        </div>  
    </div>
  );
};

export default Virtual;