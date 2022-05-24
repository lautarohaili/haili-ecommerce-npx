const productos = [
  {
    id: "1",
    categoria: "celulares",
    name: "Samsung Z Flip3",
    price: 154.999,
    stock: 5,
    description:
      "El Samsung Galaxy Z Flip 3 5G es la renovación del smartphone con factor de forma plegable. Con una pantalla interna AMOLED de 6.7 pulgadas a resolución FHD+ y tasa de refresco de 120Hz y una pantalla externa Super AMOLED de 1.9 pulgadas, el Galaxy Z Flip3 está potenciado por un procesador Snapdragon 888 con 8GB de memoria RAM y 128GB o 256GB de almacenamiento interno. En cuanto a cámaras, el Galaxy Z Flip 3 5G cuenta con un dúo de sensores de 12MP en su posterior con OIS, mientras que su cámara frontal es de 10MP. El Galaxy Z Flip3 es alimentado por una batería de 3300 mAh con soporte de carga rápida e inalámbrica y completa sus características con unos parlantes stereo, resistencia al agua, lector de huellas lateral, y corre Android 11.",
    url: "https://depor.com/resizer/AKN5jDzGzV25D6LwdBmATsmtaRc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5GSDHXWTJNBTRK34BNIL27NGXM.jpg",
  },
  {
    id: "2",
    categoria: "celulares",
    name: "Samsung Z Fold 3",
    price: 254.999,
    stock: 10,
    description:
      "El Samsung Galaxy Z Fold 3 5G es la tercera generación del foldable estilo libro de Samsung. Con una pantalla interna AMOLED FHD+ de 7.6 pulgadas y una interna AMOLED FHD+ de 6.2 pulgadas, ambas cuentan con tasa de refresco adaptativa de 120Hz. La pantalla interior oculta una cámara selfie de 4MP, siendo el primer smartphone de Samsung con dicha tecnología. Asimismo, una cámara selfie de 10MP se encuentra en la pantalla externa, complementando el arreglo de cámara principal que consta de tres lentes de 12MP wide, ultrawide y telefoto respectivamente, con OIS. Por dentro del Galaxy Z Fold3 encontramos un procesador Snapdragon 888 acompañado de 12GB de RAM con opciones de 256GB o 512GB de almacenamiento. Completando las características del Galaxy Z Fold 3 encontramos parlantes stereo, una batería de 4400 mAh de carga rápida soportando también carga inalámbrica y carga reversible, lector de huellas montado de costado, resistencia al agua IPX8, soporte para stylus S Pen y Android 11.",

    url: "https://i.blogs.es/9f9251/samsung-galaxy-z-fold3-06/1366_2000.jpg",
  },
  {
    id: "3",
    categoria: "celulares",
    name: "Samsung Galaxy S21 FE 5G",
    price: 124.999,
    stock: 5,
    description:
      "El Samsung Galaxy S21 FE 5G es la edición para fanáticos de la serie Galaxy S21. Se trata de un smartphone Android con una pantalla AMOLED FHD+ de 6.4 pulgadas con tasa de refresco de 120Hz. El Galaxy S21 FE llega en dos variantes: una con procesador Snapdragon 888 - para USA y Europa - y otra con chip Exynos 2100 - para mercados asiáticos - con 6GB o 8GB de RAM y 128GB o 256GB de almacenamiento interno. El conjunto de cámaras dorsal del Galaxy S21 FE consta de un sensor de 12MP con OIS, una cámara ultrawide de 12MP, y una cámara telefoto de 8MP con OIS, mientras que la cámara selfie es de 32MP. Alimentado por una batería de 4500 mAh de carga rápida, el Galaxy S21 FE 5G admite carga inalámbrica, cuenta con lector de huellas debajo de la pantalla, y llega con One UI 4 basado en Android 12 de fábrica.",

    url: "https://www.fayerwayer.com/resizer/OeWII_BsVipddD80YnQOAW1BMAA=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/JOIW5NTBPZEPHOZWQHJG3WOO5U.jpg",
  },
  {
    id: "4",
    categoria: "tablets",
    name: "Tablet Samsung Galaxy Tab A",
    price: 24.998,
    stock: 5,
    description:
      "El Samsung Galaxy Tab A 8.0 (2019) es la actualización del tablet de 8 pulgadas de la serie Galaxy Tab A de Samsung para el 2019. Con una pantalla de 8 pulgadas a 1280 x 800 pixels de resolución, el Galaxy Tab A 8.0 (2019) está disponible en variantes solo Wi-Fi o LTE. El Tab A 8.0 2019 está potenciado por un procesador Snapdragon 429 de cuatro núcleos acompañado de 2GB de memoria RAM y 32GB de almacenamiento interno tiene una cámara posterior de 8 megapixels y una cámara frontal de 2 megapixels, batería de 5100 mAh y corre Android 9.0 Pie.",

    url: "https://s1.eestatic.com/2020/11/27/elandroidelibre/el_androide_libre_539208581_180281555_1200x692.jpg",
  },
  {
    id: "5",
    categoria: "tablets",
    name: "Tablet Samsung Galaxy Tab S6 Lite",
    price: 79.999,
    stock: 10,
    description:
      "El Samsung Galaxy Tab S6 Lite es una variante de menores prestaciones del Galaxy Tab S6. Con una pantalla de 10.4 pulgadas a 1200 x 2000 pixels de resolución, el Galaxy Tab S6 Lite está potenciado por un procesador Exynos 9611 con 4GB de memoria RAM, con opciones de 64GB o 128GB de almacenamiento interno expandible. El Galaxy Tab S6 Lite cuenta con cámaras de 8 megapixels en su posterior, y 5 megapixels al frente, una batería de 7040 mAh con soporte de carga rápida, conectividad LTE y corre One UI 2 basado en Android 10.",

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
