export type Order = {
    id: number;
    address: string;    
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    total:number;
    products: Product[];
}

export type Product ={    
    id: number;
    imageUri: string;
    description: string;
    name: string;
    price: number;
}

