//const fs = require("fs");

import {promises as fs } from "fs"

class ProductManager {
    constructor() {
        this.path = "./product.json";
        this.products = [];


    }

    static id = 0;

    addProduct = async (title, description, price, url, code, stock) => {

        ProductManager.id++;

        let newProduct = {
            title,
            description,
            price,
            url,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct);

        await fs.writeFile(this.path, JSON.stringify(this.products));

    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.path, "utf-8");
        return JSON.parse(respuesta);
    };

    getProducts = async () => {
        let respuesta2 = await this.readProducts();

        return console.log(respuesta2);
    };

    getProductsById = async (id) => {

        let respuesta3 = await this.readProducts();
        if (!respuesta3.find(product => product.id === id)) {
            console.log("Product not found");
        } else {

            console.log(filter);
        }

    };




}


const productos = new ProductManager();

/*productos.addProduct("Boca indumentaria","Camiseta Titular",140000,"https://www.bocashop.com.ar/camiseta-titular-authentic-23-24-manga-larga-titular/p",1,500)
productos.addProduct("Boca indumentaria","Camiseta Lanzamiento",70000,"https://www.bocashop.com.ar/camiseta-tercer-uniforme-boca-24-25-hombre/p",2,1000)
productos.addProduct("Boca indumentaria","Short", 38000, "https://www.bocashop.com.ar/short-itular-boca-jrs-23-24/p",3, 150)
*/
//productos.addProduct()
//productos.getProducts();

productos.getProductsById(1)


/* async addProduct(title, description, price, url,code, stock) {
        try {
            const product = await this.getProducts(product);
            product.push(title, description, price, url,code, stock);
            await fs.promises.writeFile(this.path, JSON.stringify(product));
            
        } catch (error) {
            console.log(error);
            
            
        }

        if (this.path.some(p => p.code === code)){
            console.log(`El código: ${code} ya existe`);
            return;

        }

        const product = {
            id: this.#getMaxId() + 1,
            title,
            description,
            price,
            url,
            code,
            stock,

        };
        
     }


     #getMaxId() {
        let maxId = 0;
        this.products.map((product) => { 
        if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, "utf8");
                return JSON.parse(products);
            } else return [];

        } catch (error) {
            
        }
        return this.products;
    }

   async getProductsById(productId) {
        return this.products.find(p => p.id === productId);


    }


}



const product1 = {
    title: "Boca indumentaria",
    description: "Camiseta Titular",
    price: 140000,
    url:"https://www.bocashop.com.ar/camiseta-titular-authentic-23-24-manga-larga-titular/p",
    code: 1,
    stock: 500
  };
  
  const product2 = {
    title: "Boca indumentaria",
    description: "Camiseta Lanzamiento",
    price: 70000,
    url:"https://www.bocashop.com.ar/camiseta-tercer-uniforme-boca-24-25-hombre/p",
    code: 2,
    stock: 1500
  };


productManager.addProduct()


//console.log(productManager.getProducts());
//console.log(productManager.getProductsById(2));*/




