import axios from 'axios';

export const productsApi = async () => {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');  
    return data;
  } catch (error) {
    alert('상품목록을 가져오지 못했습니다');
    throw error;
  };
};