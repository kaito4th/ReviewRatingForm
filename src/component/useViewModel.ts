import { useState } from 'react';

//TYPES
import type {
  ReviewRatingDataIn,
  ReviewRatingDataOut,
  ReviewRatingDataLoad,
} from '../types';

type Props = {
  dataIn?: ReviewRatingDataIn;
  dataLoad: ReviewRatingDataLoad;
  dataOut: ReviewRatingDataOut;
};

const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
  const [inputError, setInputError] = useState<any>({
    nicknameError: '',
    titleError: '',
    descriptionError: '',
    ratingError: '',
  });
  const [inputValue, setInputValue] = useState<any>({
    dataLoad,
    nickname: '',
    reviewTitle: '',
    reviewDescription: '',
    reviewRating: '',
  });

  //INPUT FIELDS
  const inputFields = [
    {
      id: 1,
      label: dataIn?.nicknameField?.labelNickname
        ? dataIn?.nicknameField?.labelNickname
        : 'Nickname',
      placeHolder: dataIn?.nicknameField?.placeHolderNickname
        ? dataIn?.nicknameField?.placeHolderNickname
        : 'Enter nickname',
      value: inputValue?.nickname,
      setValue: setInputValue,
      error: inputError.nicknameError,
      setError: setInputError,
    },
    {
      id: 2,
      label: dataIn?.titleField?.labelTitle
        ? dataIn?.titleField?.labelTitle
        : 'Review Title',
      placeHolder: dataIn?.titleField?.placeHolderTitle
        ? dataIn?.titleField?.placeHolderTitle
        : 'The summary line of your review',
      value: inputValue?.reviewTitle,
      setValue: setInputValue,
      error: inputError.titleError,
      setError: setInputError,
    },
    {
      id: 3,
      label: dataIn?.descriptionField?.labelDescription
        ? dataIn?.descriptionField?.labelDescription
        : 'Review Description',
      placeHolder: dataIn?.descriptionField?.placeHolderDescription
        ? dataIn?.descriptionField?.placeHolderDescription
        : 'Tip: Explain why you liked or disliked the product and if it met your expectations',
      value: inputValue?.reviewDescription,
      setValue: setInputValue,
      error: inputError.descriptionError,
      setError: setInputError,
    },
  ];

  const filteredInputFields = inputFields.filter(inputField => {
    if (
      (dataIn?.nicknameField?.showNickname === false && inputField.id === 1) ||
      (dataIn?.titleField?.showTitle === false && inputField.id === 2) ||
      (dataIn?.descriptionField?.showDescription === false &&
        inputField.id === 3)
    ) {
      return false; // remove the input field
    }
    return true; // keep the input field
  });

  // Use the remaining input fields
  const remainingInputFields = filteredInputFields.map(inputField => {
    return {
      ...inputField,
    };
  });

  //ON BLUR ERROR
  const handleBlur = (field: any) => {
    const value = field?.value?.trim();
    if (value === '') {
      field?.setError({
        ...inputError,
        [field?.id === 1
          ? 'nicknameError'
          : field?.id === 2
          ? 'titleError'
          : 'descriptionError']: dataIn?.onBlurErrorMessage
          ? dataIn?.onBlurErrorMessage
          : `Please enter a ${field?.label.toLowerCase()}`,
      });
    } else {
      field?.setError({
        ...inputError,
        [field?.id === 1
          ? 'nicknameError'
          : field?.id === 2
          ? 'titleError'
          : 'descriptionError']: '',
      });
    }
  };

  //RATING
  const ratingComplete = (rating: string) => {
    setInputValue({ ...inputValue, reviewRating: rating });
  };

  //SUBMIT WITH VALIDATION
  const handleSubmitReview = () => {
    const updatedInputError = { ...inputError };

    if (inputValue?.reviewRating === '') {
      updatedInputError.ratingError = dataIn?.ratingField?.errorMessageRating
        ? dataIn?.ratingField?.errorMessageRating
        : 'Please specify a rating';
    } else {
      updatedInputError.ratingError = '';
    }

    if (
      inputValue?.nickname.trim().length === 0 &&
      dataIn?.nicknameField?.showNickname
    ) {
      updatedInputError.nicknameError = dataIn?.nicknameField
        ?.errorMessageNickname
        ? dataIn?.nicknameField?.errorMessageNickname
        : 'Please enter a nickname';
    } else {
      updatedInputError.nicknameError = '';
    }

    if (
      inputValue?.reviewTitle.trim().length === 0 &&
      dataIn?.titleField?.showTitle
    ) {
      updatedInputError.titleError = dataIn?.titleField?.errorMessageTitle
        ? dataIn?.titleField?.errorMessageTitle
        : 'Please enter a review title';
    } else {
      updatedInputError.titleError = '';
    }

    if (
      inputValue?.reviewDescription.trim().length === 0 &&
      dataIn?.descriptionField?.showDescription
    ) {
      updatedInputError.descriptionError = dataIn?.descriptionField
        ?.errorMessageDescription
        ? dataIn?.descriptionField?.errorMessageDescription
        : 'Please enter a review description';
    } else {
      updatedInputError.descriptionError = '';
    }
    //

    setInputError(updatedInputError);

    const hasErrors = Object.values(updatedInputError).some(
      errorMessage => errorMessage !== ''
    );

    if (!hasErrors) {
      if (!dataIn?.descriptionField?.showDescription) {
        const { reviewDescription, ...rest } = inputValue;
        dataOut(rest);
      } else if (!dataIn?.titleField?.showTitle) {
        const { reviewTitle, ...rest } = inputValue;
        dataOut(rest);
      } else if (!dataIn?.nicknameField?.showNickname) {
        const { nickname, ...rest } = inputValue;
        dataOut(rest);
      }
      setInputValue({
        nickname: '',
        reviewTitle: '',
        reviewDescription: '',
        reviewRating: '',
        productName: '',
      });
      setInputError({
        nicknameError: '',
        titleError: '',
        descriptionError: '',
        ratingError: '',
      });
    } else {
      console.log('error here');
    }
  };

  return {
    inputFields,
    ratingComplete,
    handleSubmitReview,
    inputValue,
    handleBlur,
    remainingInputFields,
    inputError,
  };
};

export default useViewModel;
