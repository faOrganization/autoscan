import { get } from "./request";
export const getBrands = () => get('brands');
export const getModels = id => get(`model?brandId=${id}`);
// export const newBrand  = data => post('https://194.238.30.103/api', data);
