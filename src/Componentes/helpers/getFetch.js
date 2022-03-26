export const getFetch = async () => {
  const url = "../../api/detalleProd.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
