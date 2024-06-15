---
sidebar_position: 13
---

## BACKGROUND IMAGE

```jsx or tsx or js
//BACKGROUND IMAGE
<Images
  uri={
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
  }
  imgH={300}
  imgS={300}
/>
```

# Api References for  image

##

| Parameter      | Type      | Description                      |
| :------------- | :-------- | :------------------------------- |
| `uri`          | ` object` | uri image link (external)        |
| `imgS`         | `string`  | image width                      |
| `imgH`         | `string`  | image height                     |
| `alignSelf`    | `string`  | alignSelf default is center      |
| `borderRadius` | `string`  | borderRadius                     |
| `mode`         | `string`  | resizeMode types                 |
| `require`      | `string`  | require image address (internal) |
| `blur`         | `number`  | image blur view                  |
| `style`        | `any`     | your custom styles               |
