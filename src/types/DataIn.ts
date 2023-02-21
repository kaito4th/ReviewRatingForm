import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ReviewRatingDataIn = {
  headerTitle?: string;
  buttonLabel?: string;
  textTitleStyle?: StyleProp<TextStyle>;
  productTitleStyle?: StyleProp<TextStyle>;
  textLabelStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  isAutoCapital?: 'none' | 'words' | 'sentences' | 'characters';
  onBlurErrorMessage?: string;
  ratingField?: {
    errorMessageRating?: string;
    ratingCount?: number;
    ratingSize?: number;
    ratingLabel?: string;
  };

  nicknameField?: {
    showNickname?: boolean;
    labelNickname?: string;
    labelNicknameStyle?: StyleProp<TextStyle>;
    placeHolderNickname?: string;
    errorMessageNickname?: string;
  };

  titleField?: {
    showTitle?: boolean;
    labelTitle?: string;
    labelTitleStyle?: StyleProp<TextStyle>;
    placeHolderTitle?: string;
    errorMessageTitle?: string;
  };

  descriptionField?: {
    showDescription?: boolean;
    labelDescription?: string;
    labelDescriptionStyle?: StyleProp<TextStyle>;
    placeHolderDescription?: string;
    errorMessageDescription?: string;
  };
};
