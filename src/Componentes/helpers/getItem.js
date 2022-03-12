const itemList = [
  { id: 1, categoria: "remeras", name: "chomba", price: 1000, foto: "" },
  { id: 2, categoria: "remeras", name: "remera1", price: 800, foto: "" },
  { id: 3, categoria: "buzos", name: "canguro", price: 1500, foto: "" },
];

export const getItem = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(itemList);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});

export default getItem;
