---
sidebar_position: 5
---

## flashScreen

```jsx or tsx or js
const product = [
  {
    name: "T-shirt",
    price: 100,
    image:
      "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  },
  {
    name: "jeans",
    price: 50,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Souk_in_Tunisia_1.jpg/640px-Souk_in_Tunisia_1.jpg"
  },
  {
    name: "shoes",
    price: 200,
    image:
      "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  },
  {
    name: "Boot",
    price: 300,
    image:
      "https://www.cuddlynest.com/blog/wp-content/uploads/2022/08/shopping-in-san-francisco-scaled.jpg"
  }
];
<FlashScreen
  data={product}
  horizontal
  disableHorizontal={false}
  renderItem={(item) => (
    <CardView el={4} sc="black" ws={100} ht="auto" style={{ margin: 10 }}>
      <Images uri={item.image} imgS={80} imgH={80} style={{ margin: 10 }} />
      <TextView txp="center" fs={14}>
        {item.name}
      </TextView>
      <TextView txp="center" fs={12}>
        {item.price}
      </TextView>
    </CardView>
  )}
/>;
```

# Api References

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
