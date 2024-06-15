---
sidebar_position: 1
---

# Accordion box

```jsx or tsx or js
//ACCORDION BOX

const data = [
  {
    title: "accordion1",
    name: "Hussein ",
    lastName: "Asadi",
    job: "just nothing",
    jobImage:
      "https://media.licdn.com/dms/image/C4D08AQF7dT4Xu9Mdlw/croft-frontend-shrinkToFit1024/0/1598293904802?e=2147483647&v=beta&t=DNhQO0ro-yffBiu1QvhnBtt5IxzPpFPw19yUZXvE6ZA"
  },
  {
    title: "accordion2",
    name: "John ",
    lastName: "Den",
    job: "just working",
    jobImage:
      "https://assets-global.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png"
  },
  {
    title: "accordion3",
    name: "Sara ",
    lastName: "Alarez",
    job: "just makeup",
    jobImage:
      "https://blog-imgs-169.fc2.com/g/i/a/giadinhdoisongvn/makeup-artist.jpg"
  }
];
const AccordionBox = () => {
  return (
    <Layout>
      <FlashScreen
        data={images}
        disableVertical
        style={{ marginBottom: "15%" }}
        renderItem={(item) => (
          <View style={styles.container}>
            <Accordion
              title={item.title}
              style={styles.accordTitle}
              cl="white"
              icon={<Icon name="down" size={20} style={styles.icon} />}
            >
              <View style={styles.accordionButton}>
                <Images uri={item.image} style={styles.BackImg} />
                <View style={styles.viewInfo}>
                  <TextView style={styles.infoText}>{item.title}</TextView>
                  <TextView style={styles.infoText}>{item.score}</TextView>
                  <TextView style={styles.infoText}> {item.year}</TextView>
                  <TextView style={styles.infoText}>{item.style}</TextView>
                </View>
              </View>
            </Accordion>
          </View>
        )}
      />
    </Layout>
  );
};

export default AccordionBox;
```

## Api References

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `cl`      | `string` | color              |
| `style`   | `any`    | your custom styles |
