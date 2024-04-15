class ProductManager {
    constructor(){
        this.products=[];

    }

    addProduct(title, description, price, url,code, stock) {

        if (!title || !description || !price || !url || !code || !stock){
            console.log("Los campos deben completarse");
            return;
        }

        if (this.products.some(p => p.code === code)){
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
        this.products.push(product);
     }


     #getMaxId() {
        let maxId = 0;
        this.products.map((product) => { 
        if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }

    getProducts() {
        return this.products;
    }

    getProductsById(productId) {
        return this.products.find(p => p.id === productId);


    }


}

const productManager = new ProductManager();

productManager.addProduct("Boca indumentaria","Camiseta Titular", 140000,"https://www.bocashop.com.ar/camiseta-titular-authentic-23-24-manga-larga-titular/p", 1, 500);
productManager.addProduct("Boca indumentaria", "Camiseta Lanzamiento", 70000, "https://www.bocashop.com.ar/camiseta-tercer-uniforme-boca-24-25-hombre/p",2, 1500);
productManager.addProduct("Boca indumentaria", "Short", 38000, "https://www.bocashop.com.ar/short-itular-boca-jrs-23-24/p",3, 150);

productManager.addProduct("Boca Accesorios", "Kit pampera", 50000, "https://www.bocashop.com.ar/kit-pampera-xeneize/p",3, 300);


console.log(productManager.getProducts());
console.log(productManager.getProductsById(2));




