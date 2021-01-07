import axios from "axios";

const API_ULR = 'http://localhost:8080';

export function fetchProducts(){
    return axios(`${API_ULR}/products`);
}