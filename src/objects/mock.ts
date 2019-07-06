export interface mocks {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const mockArray: mocks[] = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

const Goods: mocks[] = mockArray.filter(
  mock => mock.category === "Sporting Goods"
);
const Electronics: mocks[] = mockArray.filter(
  mock => mock.category === "Electronics"
);

// console.table(Goods);
// console.table(Electronics);

export default {
  Goods,
  Electronics
};
