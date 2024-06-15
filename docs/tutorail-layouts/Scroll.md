---
sidebar_position: 8
---

## SCroll View

```jsx or tsx or js
<Scroll>your elements</Scroll>
```

# Api References for Selection
##
| Parameter                        | Type          | Description                                                                                                                                                                                                            |
| :------------------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `horizontal`                     | ` boolean`    | horizontal items                                                                                                                                                                                                       |
| `fadeEdge`                       | `object item` | fadeEdge end of items                                                                                                                                                                                                  |
| `showsHorizontalScrollIndicator` | `boolean`     | disabling scroll navigator down of element horizontally                                                                                                                                                                |
| `showsVerticalScrollIndicator`   | `boolean`     | disabling scroll navigator down of element vertically                                                                                                                                                                  |
| `onScroll`                       | `void`        | Fires at most once per frame during scrolling                                                                                                                                                                          |
| `endColor`                       | `string`      | Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. |
| `pagingEnabled`                  | `boolean`     | When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.                                                                                    |
| `style`                          | `any`         | your custom styles                                                                                                                                                                                                     |
