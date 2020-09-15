# eslint-config-react-native-jackyu

開發 React Native 專案所需的 eslint 組態設定，使用的 eslint 版本最低需要 `v6` 以上
本專案設定仿照 [eslint-config-react-native-wcandillon](https://github.com/wcandillon/eslint-config-react-native-wcandillon) 設定建立

因應未來所有 React Native 專案開發使用，不需要再重覆設定

## 使用方式

```
yarn add --dev eslint-config-react-native-jackyu
```

在專案目錄下建立 `.eslintrc`，並加入以下設定:

```json
{
  "extends": "react-native-jackyu",
}
```