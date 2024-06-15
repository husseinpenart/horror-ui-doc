---
sidebar_position: 3
---

# avatar

```jsx or tsx or js
const avatar = () => {
  return (
    <Layout>
    <ImageAvatar uri={'https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-intro.jpg'}>
    </Layout>
  );
};

export default avatar;
```

# Api References for avatar

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
