

import {promises as fs } from "fs"

class ProductManager {
    constructor() {
        this.path = "./product.txt"
        this.products = [];


    }

    static id = 0;
    //INGRESO UN NUEVO PRODUCTO CON SU ID CORRESPONDIENTE
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

        //console.log(newProduct);

    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.path, "utf-8");
        return JSON.parse(respuesta);
    };

    getProducts = async () => {
        let respuesta2 = await this.readProducts();

        return console.log(respuesta2);
    };
    //GENERO FUNCION ASINCRONA PARA BUSCAR PRODUCTO POR SU ID
    getProductsById = async (id) => {

        let respuesta3 = await this.readProducts();
        
        if (!respuesta3.find((product) => product.id === id)) {
            console.log("Product not found");
        } else {
            console.log(respuesta3.find((product) => product.id === id));
        }

    };

    //ELIMINO UN PRODUCTO CON EL ID QUE LE PASO

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.path, JSON.stringify(productFilter));
        //console.log("Product deleted successfully")
    }

    //MODIFICO UN PRODUCTO SIN CAMBIAR SU ID

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductsById(id);
        let productOld = await this.readProducts()
        

        let productModif = [
            {...producto,id}, ...productOld ];

            await fs.writeFile(this.path, JSON.stringify(productModif));
    };


}


const productos = new ProductManager();

//productos.addProduct("Boca indumentaria","Camiseta Titular",140000,"https://www.bocashop.com.ar/camiseta-titular-authentic-23-24-manga-larga-titular/p",1,500)
//productos.addProduct("Boca indumentaria","Camiseta Lanzamiento",70000,"https://www.bocashop.com.ar/camiseta-tercer-uniforme-boca-24-25-hombre/p",2,1000)
//productos.addProduct("Boca indumentaria","Short", 38000, "https://www.bocashop.com.ar/short-itular-boca-jrs-23-24/p",3, 150)


//productos.addProduct("Boca Accesorios", "Kit pampera", 50000, "https://www.bocashop.com.ar/kit-pampera-xeneize/p",4, 300);



productos.getProducts();

productos.getProductsById(1)

productos.deleteProductsById(2)


//MODIFICO EL STOCK POR EJEMPLO
productos.updateProducts({
    title: "Boca indumentaria",
    description: "Short",
    price: 38000,
    url:  "https://www.bocashop.com.ar/short-itular-boca-jrs-23-24/p",
    code: 3,
    stock: 140,
    id:3
    })


