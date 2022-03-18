const productos = [
  {
    id: 1,
    categoria: "Celulares",
    name: "Samsung Z Flip3",
    price: "$154.999",
    foto: "",
  },
  {
    id: 2,
    categoria: "Celulares",
    name: "Samsung Galaxy Z Fold 3",
    price: "$254.999",
    foto: "",
  },
  {
    id: 3,
    categoria: "Celulares",
    name: "Samsung Galaxy S21 FE 5G",
    price: "$124.999",
    foto: "",
  },
  {
    id: 4,
    categoria: "Tablets",
    name: "Tablet Samsung Galaxy Tab A",
    price: "$24.998",
    foto: "",
  },
  {
    id: 5,
    categoria: "Tablets",
    name: "Tablet Samsung Galaxy Tab S6 Lite",
    price: "$79.999",
    foto: "",
  },
  {
    id: 6,
    categoria: "Tablets",
    name: "Tablet Samsung Galaxy Tab A7 Lite",
    price: "$24.999",
    foto: "",
  },
];

export const getItem = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});

export default getItem;
