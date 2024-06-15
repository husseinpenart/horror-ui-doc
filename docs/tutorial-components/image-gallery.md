---
sidebar_position: 4
---

# image-gallery

```jsx or tsx or js
//IMAGE GALLERY
const GalleryImages = () => {
  const objects = [
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
  ];
  return (
    <Layout>
      <Heading>image gallery</Heading>
      <Gallery
        data={objects}
        renderItem={(item) => (
          <Images
            uri={item.images}
            imgH={100}
            imgS={100}
            style={{ margin: 5 }}
          />
        )}
      />
    </Layout>
  );
};

export default GalleryImages;
```

## Api References image-gallery

| Parameter             | Type      | Description                                                                                                                        |
| :-------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `inverted`            | `boolean` | invert element                                                                                                                     |
| `horizontal`          | `boolean` | make element horizontal                                                                                                            |
| `disableVertical`     | `boolean` | disabling scroll navigator down of element vertically                                                                              |
| `disableHorizontal`   | `boolean` | disabling scroll navigator down of element horizontally                                                                            |
| `data`                | `any`     | data                                                                                                                               |
| `renderItem`          | `boolean` | render item in any form you want                                                                                                   |
| `numColumns`          | `number`  | number of gallery columns                                                                                                          |
| `invertStickyHeaders` | `boolean` | If sticky headers should stick at the bottom instead of the top of the ScrollView. This is usually used with inverted ScrollViews. |
| `style`               | `any`     | your custom styles                                                                                                                 |
