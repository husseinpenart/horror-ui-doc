---
sidebar_position: 2
---

## blog card

```jsx or tsx or js
const BlogCard = () => {
  return (
    <Layout>
      <Heading txp="center">blog Cards</Heading>

      <CardView
        bg={Theme.activeColors.light}
        ws={200}
        hs={200}
        el={10}
        sR={5}
        sc="red"
        style={{ margin: 10, alignSelf: "center" }}
      >
        <Images
          uri={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          imgS={150}
          imgH={100}
          style={{ margin: 10 }}
        />
        <Heading txp="center" cl={Theme.activeColors.success}>
          beauty of nature
        </Heading>
        <TextView
          numLine={1}
          cl={Theme.activeColors.primary}
          style={{ padding: 10 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur
          officiis consequatur necessitatibus veritatis natus sit adipisci nisi
          enim quos!
        </TextView>
        <RoundedButton
          align="center"
          bw={0.2}
          bc={Theme.activeColors.info}
          Pressing={() => console.log("helllooooo")}
        >
          <TextView>more...</TextView>
        </RoundedButton>
      </CardView>
    </Layout>
  );
};

export default BlogCard;
```



## product card

```jsx or tsx or js
//PRODUCT CARD

const SmallCard = () => {
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
  return (
    <Layout>
      <Heading txp="center">Flash Screen and Small Cards</Heading>
      <FlashScreen
        data={product}
        horizontal
        disableHorizontal={false}
        renderItem={(item) => (
          <CardView el={4} sc="black" ws={100} ht="auto" style={{ margin: 10 }}>
            <Images
              uri={item.image}
              imgS={80}
              imgH={80}
              style={{ margin: 10 }}
            />
            <TextView txp="center" fs={14}>
              {item.name}
            </TextView>
            <TextView txp="center" fs={12}>
              {item.price}
            </TextView>
          </CardView>
        )}
      />
    </Layout>
  );
};

export default SmallCard;
```

# Api References 

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `bg`      | `string` | background color    |
| `ws`      | `number` | width               |
| `ht`      | `number` | height              |
| `bd`      | `number` | borderRadius        |
| `el`      | `string` | elevation           |
| `sc`      | `string` | shadowColor         |
| `sfw`     | `number` | shadowOffset Width  |
| `sfh`     | `number` | shadowOffset height |
| `sho`     | `number` | shadowOpacity       |
| `sR`      | `number` | shadowRadius        |
| `style`   | `any`    | your custom styles  |
