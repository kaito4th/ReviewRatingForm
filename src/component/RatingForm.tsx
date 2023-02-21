import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

//OTHERS
import { AirbnbRating } from 'react-native-ratings';
import { Button } from 'react-native-paper';
import _ from 'lodash';
//TYPES
import type {
  ReviewRatingDataIn,
  ReviewRatingDataOut,
  ReviewRatingDataLoad,
} from '../types/index';

//MODEL
import useViewModel from './useViewModel';

type Props = {
  dataIn?: ReviewRatingDataIn;
  dataLoad: ReviewRatingDataLoad;
  dataOut: ReviewRatingDataOut;
};

const RatingScreen = ({ dataIn, dataLoad, dataOut }: Props) => {
  const {
    inputError,
    ratingComplete,
    handleSubmitReview,
    inputValue,
    handleBlur,
    remainingInputFields,
  } = useViewModel({
    dataIn,
    dataLoad,
    dataOut,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textTitleStyle, dataIn?.textTitleStyle]}>
            {dataIn?.headerTitle || 'Post Review'}
          </Text>
        </View>
        <View style={{ marginVertical: 25 }}>
          <Text>
            You are reviewing for{' '}
            <Text
              style={[styles.productTitleTextStyle, dataIn?.productTitleStyle]}
            >
              {dataLoad.productName}
            </Text>{' '}
          </Text>
        </View>
        <Text style={[styles.textLabelStyle, dataIn?.textLabelStyle]}>
          {dataIn?.ratingField?.ratingLabel || 'Your Rating'}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <AirbnbRating
            count={
              dataIn?.ratingField?.ratingCount
                ? dataIn?.ratingField?.ratingCount
                : 5
            }
            showRating={false}
            defaultRating={inputValue.reviewRating}
            size={
              dataIn?.ratingField?.ratingSize
                ? dataIn?.ratingField?.ratingSize
                : 28
            }
            onFinishRating={ratingComplete}
          />
        </View>
        {inputError.ratingError ? (
          <Text style={[styles.errorTextStyle, dataIn?.textErrorStyle]}>
            {inputError.ratingError}
          </Text>
        ) : null}
        <View>
          <View>
            <Text style={[styles.textLabelStyle, dataIn?.textLabelStyle]}>
              {remainingInputFields[0]?.label}
            </Text>
            <TextInput
              autoCapitalize={dataIn?.isAutoCapital || 'words'}
              multiline={false}
              style={[
                styles.textInputStyle,
                {
                  height: 45,
                },
                dataIn?.textInputStyle,
              ]}
              value={remainingInputFields[0]?.value}
              onChangeText={text =>
                remainingInputFields[0]?.setValue({
                  ...inputValue,
                  [remainingInputFields[0]?.id === 1
                    ? 'nickname'
                    : remainingInputFields[0]?.id === 2
                    ? 'reviewTitle'
                    : 'reviewDescription']: text,
                })
              }
              placeholder={remainingInputFields[0]?.placeHolder}
              onBlur={() => handleBlur(remainingInputFields[0])}
              numberOfLines={10}
            />
            <Text>
              {remainingInputFields[0]?.error && (
                <Text style={[styles.errorTextStyle, dataIn?.textErrorStyle]}>
                  {remainingInputFields[0].error}
                </Text>
              )}
            </Text>
          </View>

          {remainingInputFields[1] && (
            <View>
              <Text style={[styles.textLabelStyle, dataIn?.textLabelStyle]}>
                {remainingInputFields[1]?.label}
              </Text>
              <TextInput
                autoCapitalize={dataIn?.isAutoCapital || 'words'}
                multiline={false}
                style={[
                  styles.textInputStyle,
                  {
                    height: 45,
                  },
                  dataIn?.textInputStyle,
                ]}
                value={remainingInputFields[1]?.value}
                onChangeText={text =>
                  remainingInputFields[1]?.setValue({
                    ...inputValue,
                    [remainingInputFields[1]?.id === 1
                      ? 'nickname'
                      : remainingInputFields[1]?.id === 2
                      ? 'reviewTitle'
                      : 'reviewDescription']: text,
                  })
                }
                placeholder={remainingInputFields[1]?.placeHolder}
                onBlur={() => handleBlur(remainingInputFields[1])}
                numberOfLines={10}
              />
              <Text>
                {remainingInputFields[1]?.error && (
                  <Text style={[styles.errorTextStyle, dataIn?.textErrorStyle]}>
                    {remainingInputFields[1].error}
                  </Text>
                )}
              </Text>
            </View>
          )}

          {remainingInputFields[2] && (
            <View>
              <Text style={[styles.textLabelStyle, dataIn?.textLabelStyle]}>
                {remainingInputFields[2]?.label}
              </Text>
              <TextInput
                autoCapitalize={dataIn?.isAutoCapital || 'words'}
                multiline={true}
                style={[
                  styles.textInputStyle,
                  {
                    height: 105,
                  },
                  dataIn?.textInputStyle,
                ]}
                value={remainingInputFields[2]?.value}
                onChangeText={text =>
                  remainingInputFields[1]?.setValue({
                    ...inputValue,
                    [remainingInputFields[2]?.id === 1
                      ? 'nickname'
                      : remainingInputFields[2]?.id === 2
                      ? 'reviewTitle'
                      : 'reviewDescription']: text,
                  })
                }
                placeholder={remainingInputFields[2]?.placeHolder}
                onBlur={() => handleBlur(remainingInputFields[2])}
                numberOfLines={10}
              />
              <Text>
                {remainingInputFields[1]?.error && (
                  <Text style={[styles.errorTextStyle, dataIn?.textErrorStyle]}>
                    {remainingInputFields[2].error}
                  </Text>
                )}
              </Text>
            </View>
          )}
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <Button
              style={[styles.buttonStyle, dataIn?.buttonStyle]}
              onPress={() => {
                handleSubmitReview();
              }}
            >
              <Text style={[styles.buttonTextStyle, dataIn?.buttonTextStyle]}>
                {dataIn?.buttonLabel ? dataIn?.buttonLabel : 'Submit Review'}
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 20,
  },
  productTitleTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  textTitleStyle: {
    fontSize: 28,
    color: 'gray',
  },
  textInputStyle: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'lightgray',
    fontSize: 16,
    borderRadius: 10,
  },
  errorTextStyle: {
    color: 'red',
    marginBottom: 15,
  },
  textLabelStyle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  buttonStyle: {
    height: 40,
    width: 165,
    backgroundColor: '#80AF46',
    borderRadius: 5,
    marginVertical: 25,
  },
  buttonTextStyle: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default RatingScreen;
