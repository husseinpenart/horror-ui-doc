---
sidebar_position: 17
---

# Paginations 🆕

## simple pagination

```jsx or tsx or js
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Replace with your total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <Paginating
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      pageTextStyle={{ color: "red", fontSize: 10 }}
      currentPageButtonColor="green"
    />
  );
};

export default Pagination;
```

# Api References for simplepagination

##

| Parameter                | Type        | Description                 |
| :----------------------- | :---------- | :-------------------------- |
| `totalPages`             | ` number`   | total number of your pages  |
| `currentPage`            | `string`    | current page number         |
| `borderColor`            | `string`    | borderColor for pagination  |
| `paginationColor`        | `string`    | pagination background color |
| `currentPageButtonColor` | `string`    | current pagination color    |
| `pageTextStyle`          | `styleView` | your custom styles          |

```

```

## ellipse pagination

```jsx or tsx or js
const EllipsePagination = () => {
  const [currentPage, setCurrentPage] = useState < number > 1;
  const totalPages: number = 100; // Replace with your total number of pages

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <EllipsePagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      pageRangeDisplayed={5} // Optional: Adjust the number of pages displayed
    />
  );
};

export default EllipsePagination;
```

# Api References for EllipsePagination

##

| Parameter                | Type        | Description                 |
| :----------------------- | :---------- | :-------------------------- |
| `totalPages`             | ` number`   | total number of your pages  |
| `currentPage`            | `string`    | current page number         |
| `onPageChange`           | `void`      | on page change function     |
| `borderColor`            | `string`    | borderColor for pagination  |
| `paginationColor`        | `string`    | pagination background color |
| `currentPageButtonColor` | `string`    | current pagination color    |
| `pageTextStyle`          | `styleView` | your custom styles          |

```

```

## Button pagination

```jsx or tsx or js
const ButtonPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Total number of pages (adjust as needed)

  const handleNextPage = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <ButtonPagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      pageRangeDisplayed={5} // Optional: Adjust the number of pages displayed
    />
  );
};

export default ButtonPagination;
```

# Api References for ButtonPagination

##

| Parameter                | Type        | Description                                |
| :----------------------- | :---------- | :----------------------------------------- |
| `totalPages`             | ` number`   | total number of your pages                 |
| `currentPage`            | `string`    | current page number                        |
| `onPageChange`           | `void`      | on page change function                    |
| `borderColor`            | `string`    | borderColor for pagination                 |
| `paginationColor`        | `string`    | pagination background color                |
| `currentPageButtonColor` | `string`    | current pagination color                   |
| `pageTextStyle`          | `styleView` | your custom styles                         |
| `onNextPage`             | `void`      | function fo next page action               |
| `onPrevPage`             | `void`      | function fo Previous page action           |
| `prevStyle`              | `styleView` | Previous button style                      |
| `nextStyle`              | `styleView` | next button style                          |
| `PrevTextStyle`          | `styleView` | Previous text in side button or item style |
| `NextTextStyle`          | `styleView` | next text in side button or item style     |
| `prevText`               | `string`    | text inside prev button                    |
| `nextText`               | `string`    | text in side next button                   |

```

```
