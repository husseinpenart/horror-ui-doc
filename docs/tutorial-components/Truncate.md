---
sidebar_position: 16
---

# Truncate

Truncate making text short as mush as you want for and make short from which line too

# Example

```jsx or tsx or js
const TextTruncate =
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat eaque, repellendus natus assumenda libero error deserunt non. Voluptas cum consectetur quam ipsum, nam hic quisquam non dolore odio unde voluptatibus voluptatem quo laborum velit libero optio magni maxime sint aperiam vero quidem. Hic debitis, a nesciunt exercitationem deleniti, cumque reiciendis accusantium numquam, voluptate dolor sequi ad tempore beatae nulla rerum laudantium asperiores optio illum itaque eos! In dolores modi officiis optio labore ipsum nesciunt explicabo provident perspiciatis, vitae, voluptas vero eos enim, architecto eligendi? Expedita, doloremque iusto earum saepe voluptas voluptates deserunt libero? Enim, velit, expedita, nostrum eos eaque officia minus sequi itaque quidem libero beatae tempore iure. Mollitia amet porro labore vitae id repellendus architecto, quis commodi tempora fuga? Suscipit, culpa. Quia nemo minima labore et enim reprehenderit voluptatibus nulla cumque, provident unde sed repellendus. Assumenda provident maxime ducimus magni vel qui odio, harum voluptate, facere fugit esse minus minima, id iure deleniti corrupti rerum possimus. Beatae accusamus voluptatem debitis corporis quae, id iure maiores eum natus, commodi provident possimus dolore deserunt eaque aliquam minus? Aliquam quod harum labore quia odit praesentium itaque laborum, dolores aut ipsum qui, aperiam optio, voluptatum dolor sint ea assumenda similique atque sed doloribus cum recusandae sequi beatae? Amet rem consequatur et sequi, saepe quaerat, dicta veritatis reiciendis tempore esse necessitatibus unde enim perspiciatis consectetur similique animi doloribus voluptatem optio. Illum consequatur corporis ut ipsum quidem delectus enim quisquam pariatur, sunt aspernatur ad voluptas porro debitis consequuntur dolorum cumque, nesciunt, tempore dolore atque deleniti id praesentium nam soluta. Veritatis pariatur alias qui quas iusto aut ";
const TextTruncate = () => {
  return <Text>{truncate(TextTruncate, 21, 500)}</Text>;
};

export default TextTruncate;
```

# Api References

| Parameter   | Type     | Description                                                                            | default  |
| :---------- | :------- | :------------------------------------------------------------------------------------- | -------- |
| `numLine`   | `number` | number of line you want to show on text                                                | required |
| `propsLine` | `number` | number of line you want to cut for exmpale cute the number if is bigger than 300 lines | required |
