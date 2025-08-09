import { BASE_API_URL } from '../constants/Colors'; 
export const fetchBrands = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/Brands`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
};

export const fetchBrandDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_API_URL}/Brands/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching brand details:", error);
    return null;
  }
};