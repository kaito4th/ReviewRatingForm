# Mini App (Base Template)

Mobile Mini App

## Installation

```sh
Update This
```

## Changelogs

See the [Change logs](CHANGELOGS.md)

## Dependecies

"react-native-paper": "^5.2.0",
"react-native-ratings": "^8.1.0",

## (Mini App Name) DataLoad Props

| Prop               | Required | Type     | Description            |
| :----------------- | :------- | :------- | :--------------------- |
| **`id`**           | Yes      | `number` | use for identification |
| **`product name`** | Yes      | `string` | for item to re view    |

## (Mini App Name) DataIn Props

| Prop                     | Required | Type                    | Description                      |
| :----------------------- | :------- | :---------------------- | :------------------------------- |
| **`headerTitle`**        | No       | `string`                | edit the header title text       |
| **`buttonLabel`**        | No       | `string`                | edit the button label text       |
| **`textTitleStyle`**     | No       | `StyleProp<TextStyle>;` | edit the text title name style   |
| **`productTitleStyle`**  | No       | `StyleProp<TextStyle>;` | edit the product name style      |
| **`textLabelStyle`**     | No       | `StyleProp<TextStyle>;` | edit tie label style             |
| **`textInputStyle`**     | No       | `StyleProp<ViewStyle>;` | edit the input box style         |
| **`textErrorStyle`**     | No       | `StyleProp<TextStyle>;` | edit the error message style     |
| **`buttonTextStyle`**    | No       | `StyleProp<TextStyle>;` | edit the button text style       |
| **`buttonStyle`**        | No       | `StyleProp<ViewStyle>;` | edit the button style            |
| **`isAutoCapital`**      | No       | `string`                | to configure auto capitalization |
| **`onBlurErrorMessage`** | No       | `StyleProp<TextStyle>`  | edit the on blur error message   |

| **`ratingField`** | No | `Object` | consist of the following props below |
******\*\*******\*\*******\*\*******\_\_\_\_******\*\*******\*\*******\*\*******|
| **`errorMessageRating?`**| No | `string` |
| **`ratingCount`**| No | `number` |
| **`ratingSize`**| No | `number` |
| **`ratingLabel`**| No | `string` |

---

| **`nicknameField`** | No | `Object` |consist of the following props below |

---

| **`showNickname`**| No | `boolean` |
| **`labelNickname`**| No | `string` |
| **`labelNicknameStyle`**| No | `StyleProp<TextStyle>;` |
| **`placeHolderNickname`**| No | `string` |
| **`errorMessageNickname`**| No | `string` |

---

| **`titleField`** | No | `Object` | consist of the following props below |

---

| **`showTitle`**| No | `boolean` |
| **`labelTitle`**| No | `string` |
| **`labelTitleStyle`**| No | `StyleProp<TextStyle>;` |
| **`placeHolderTitle`**| No | `string` |
| **`errorMessageTitle`**| No | `string` |

---

| **`descriptionField`** | No | `Object` | consist of the following props below |

---

| **`showDescription`**| No | `boolean` |
| **`labelDescription`**| No | `string` |
| **`labelDescriptionStyle`**| No | `StyleProp<TextStyle>;` |
| **`placeHolderDescription`**| No | `string` |
| **`errorMessageDescription`**| No | `string` |

---

## (Mini App Name Other Necessary Type Definition) Props

| Prop           | Required | Type       | Description       |
| :------------- | :------- | :--------- | :---------------- |
| **`propName`** | Yes/No   | `dataType` | Short Description |

## Example

Run the following commands

`npm run boostrap`:setup project by installing all dependencies and pods.
`npm run example run start`: start the Metro server for the example app.
`npm run example run android`: run the example app on Android.
`npm run example run ios`: run the example app on iOS.

## License

MIT
