function render() {

    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();
};

spinnerPage.render();

let CATALOG = [];

fetch('/server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(()=> {
            spinnerPage.handleClear();
            render();
        }, 5000);

        // spinnerPage.handleClear();
        // render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });