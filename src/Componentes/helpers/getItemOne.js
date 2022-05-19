const productos = [
  {
    id: "1",
    categoria: "celulares",
    name: "Samsung Z Flip3",
    price: 154.999,
    stock: 5,
    description: "",
    url: "https://depor.com/resizer/AKN5jDzGzV25D6LwdBmATsmtaRc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5GSDHXWTJNBTRK34BNIL27NGXM.jpg",
  },
  {
    id: "2",
    categoria: "celulares",
    name: "Samsung Z Fold 3",
    price: 254.999,
    stock: 10,
    description: "",

    url: "https://i.blogs.es/9f9251/samsung-galaxy-z-fold3-06/1366_2000.jpg",
  },
  {
    id: "3",
    categoria: "celulares",
    name: "Samsung Galaxy S21 FE 5G",
    price: 124.999,
    stock: 5,
    description: "",

    url: "https://www.fayerwayer.com/resizer/OeWII_BsVipddD80YnQOAW1BMAA=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/JOIW5NTBPZEPHOZWQHJG3WOO5U.jpg",
  },
  {
    id: "4",
    categoria: "tablets",
    name: "Tablet Samsung Galaxy Tab A",
    price: 24.998,
    stock: 5,
    description: "",

    url: "https://s1.eestatic.com/2020/11/27/elandroidelibre/el_androide_libre_539208581_180281555_1200x692.jpg",
  },
  {
    id: "5",
    categoria: "tablets",
    name: "Tablet Samsung Galaxy Tab S6 Lite",
    price: 79.999,
    stock: 10,
    description: "",

    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7C3KGskmfSpyPYGme0PvStTb1Q6FbA3T_bPKaQwKf0wxxis8n-kG5T6kf9bwH_2Yjb8&usqp=CAU",
  },
  {
    id: "6",
    categoria: "tablets",
    name: "Tablet Samsung Galaxy Tab A7 Lite",
    price: 24.999,
    stock: 10,
    description: "",

    url: "https://cellu.store/wp-content/uploads/2021/10/Samsung-Galaxy-Tab-A7-Lite-LTE-SM-T225-32GB-Grey-8806092230217-01072021-01-p.jpeg  ",
  },
];

const getItemOne = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? productos.find((producto) => producto.id === id)
        : productos;
      resolve(query);
    }, 2000);
  });
};

export default getItemOne;

/* export const getItemOne =  new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});*/
