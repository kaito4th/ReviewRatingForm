import React from 'react';

//TYPES
import type {
  ReviewRatingDataIn,
  ReviewRatingDataOut,
  ReviewRatingDataLoad,
} from './types';

//SCREENS
import RatingForm from './component/RatingForm';

type Props = {
  dataIn?: ReviewRatingDataIn;
  dataLoad: ReviewRatingDataLoad;
  dataOut: ReviewRatingDataOut;
};

const RatingMAPP = ({ dataIn, dataLoad, dataOut }: Props) => {
  return <RatingForm dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
};

export default RatingMAPP;
