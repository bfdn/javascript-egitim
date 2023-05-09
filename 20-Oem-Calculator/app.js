// Storage Controller
const StorageController = (function () {

    return {
        storeProduct: (product) => {
            let products;
            if (localStorage.getItem("products") === null) {
                products = [];
                products.push(product);
            } else {
                products = JSON.parse(localStorage.getItem("products"));
                products.push(product);
            }
            localStorage.setItem("products", JSON.stringify(products));
        },
        getProducts: () => {
            let products;
            if (localStorage.getItem("products") === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem("products"));
            }
            return products;
        },
        updateProduct: (product) => {
            let products = JSON.parse(localStorage.getItem("products"));

            products.forEach((prd, index) => {
                if (product.id == prd.id) {
                    products.splice(index, 1, product);
                }
            });
            localStorage.setItem("products", JSON.stringify(products));
        },
        deleteProduct: (id) => {
            let products = JSON.parse(localStorage.getItem("products"));

            products.forEach((prd, index) => {
                if (id == prd.id) {
                    products.splice(index, 1);
                }
            });

            localStorage.setItem("products", JSON.stringify(products));
        }
    }

})();


// Product Controller
const ProductController = (function () {

    // private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        // products: [
        //     // { id: 0, name: "Monitör", price: 100 },
        //     // { id: 1, name: "Ram", price: 30 },
        //     // { id: 2, name: "Klavye", price: 10 },
        //     // { id: 3, name: "Mouse", price: 5 },
        // ],
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice: 0
    }

    //public
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        getProductById: (id) => {
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == id) {
                    product = prd;
                }
            });

            return product;
        },
        setCurrentProduct: (product) => {
            data.selectedProduct = product;
        },
        getCurrentProduct: (product) => {
            return data.selectedProduct;
        },
        addProduct: (name, price) => {
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        updateProduct: (name, price) => {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });

            return product;
        },
        deleteProduct: (product) => {
            data.products.forEach((prd, index) => {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });

        },
        getTotal: () => {
            let total = 0;
            data.products.forEach(item => {
                total += item.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        }
    }

})();

// #

// UI Controller
const UIController = (function () {
    const Selectors = {
        productList: "item-list",
        productListItems: "#item-list tr",
        addButton: ".addBtn",
        updateButton: '.updateBtn',
        cancelButton: '.cancelBtn',
        deleteButton: '.deleteBtn',
        productName: "productName",
        productPrice: "productPrice",
        productCard: "productCard",
        totalTL: "total-tl",
        totalUSD: "total-usd",
    }

    return {
        createProductList: function (products) {
            let html = "";

            products.forEach(prd => {
                html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>
                        <td class="text-right">
                            <i class="far fa-edit edit-product"></i>
                        </td>
                    </tr>
                `;
            });

            document.getElementById(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors;
        },
        addProduct: (prd) => {
            document.getElementById(Selectors.productCard).style.display = "block";
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
            `;
            document.getElementById(Selectors.productList).innerHTML += item;
        },
        updateProduct: (prd) => {
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(item => {
                if (item.classList.contains("bg-warning")) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + " $";
                    updatedItem = item;
                }
            });

            return updatedItem;
        },
        clearInputs: () => {
            document.getElementById(Selectors.productName).value = "";
            document.getElementById(Selectors.productPrice).value = "";
        },
        clearWarnings: () => {
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(item => {
                if (item.classList.contains("bg-warning")) {
                    item.classList.remove("bg-warning");
                }
            });
        },
        hideCard: function () {
            document.getElementById(Selectors.productCard).style.display = "none";
        },
        showTotal: (total) => {
            document.getElementById(Selectors.totalUSD).textContent = total;
            document.getElementById(Selectors.totalTL).textContent = total * 4.5;
        },
        addProductToForm: () => {
            // console.log(ProductController);
            const selectedProduct = ProductController.getCurrentProduct();
            document.getElementById(Selectors.productName).value = selectedProduct.name;
            document.getElementById(Selectors.productPrice).value = selectedProduct.price;
        },
        deleteProduct: () => {
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(item => {
                if (item.classList.contains("bg-warning")) {
                    item.remove();
                }
            });
        },
        addingState: () => {
            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display = "inline";
            document.querySelector(Selectors.updateButton).style.display = "none";
            document.querySelector(Selectors.deleteButton).style.display = "none";
            document.querySelector(Selectors.cancelButton).style.display = "none";
        },
        editState: (tr) => {

            const parent = tr.parentNode;

            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove("bg-warning");
            }

            tr.classList.add("bg-warning");
            document.querySelector(Selectors.addButton).style.display = "none";
            document.querySelector(Selectors.updateButton).style.display = "inline";
            document.querySelector(Selectors.deleteButton).style.display = "inline";
            document.querySelector(Selectors.cancelButton).style.display = "inline";
        },
    }
})();



// App Controller

const App = (function (ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listener
    const loadEventListeners = function () {
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        // edit product click
        document.getElementById(UISelectors.productList).addEventListener("click", productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener("click", editProductSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener("click", cancelUpdate);

        // delete button submit
        document.querySelector(UISelectors.deleteButton).addEventListener("click", deleteProductSubmit);
    }

    const productAddSubmit = (e) => {
        e.preventDefault();

        const productName = document.getElementById(UISelectors.productName).value;
        const productPrice = document.getElementById(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            // Add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // add item to list
            UICtrl.addProduct(newProduct);

            // add product to LocalStorage
            StorageCtrl.storeProduct(newProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // clear form
            UICtrl.clearInputs();
        }
        // console.log(productName, productPrice);
    }

    const productEditClick = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("edit-product")) {
            // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
            // console.log(e.target.parentElement.parentElement.children[0].textContent);
            // console.log(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            // get selected products
            const product = ProductCtrl.getProductById(id);

            // set current product
            ProductCtrl.setCurrentProduct(product);

            // UICtrl.clearWarnings();

            // add product to UI
            UICtrl.addProductToForm();
            //console.log(e.target.parentElement.parentElement);
            UICtrl.editState(e.target.parentNode.parentNode);
        }
    }

    const editProductSubmit = (e) => {
        e.preventDefault();

        const productName = document.getElementById(UISelectors.productName).value;
        const productPrice = document.getElementById(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {

            // update product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            // update ui
            let item = UICtrl.updateProduct(updatedProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // update storage
            StorageCtrl.updateProduct(updatedProduct);

            // Ekle butonu gösterme
            UICtrl.addingState(item);

            // clear form
            //UICtrl.clearInputs();

        }
    }

    const cancelUpdate = (e) => {
        e.preventDefault();

        UICtrl.addingState();
        UICtrl.clearWarnings();

    }

    const deleteProductSubmit = (e) => {
        e.preventDefault();

        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // delete prodcut
        ProductCtrl.deleteProduct(selectedProduct);

        // delete ui product
        UICtrl.deleteProduct();

        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);

        // delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        UICtrl.addingState();

        if (total == 0) {
            UICtrl.hideCard();
        }

    }

    return {
        init: function () {
            console.log("starting app...");

            UICtrl.addingState();
            const products = ProductCtrl.getProducts();
            // console.log(products);
            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }
            // Load event listeners
            loadEventListeners();

        }
    }


})(ProductController, UIController, StorageController);

App.init();