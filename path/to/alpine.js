const { default: Alpine } = require("alpinejs");


document.addEventListener('alpine:init', () => {
    Alpine.data('productApp', () => ({
        products: Alpine.$persist([]), // Initialize products as an Alpine persistent property
        category: '',

        async getProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json(); // Corrected: use const data = ...

                this.products = data; // Update products with fetched data
            } catch (error) {
                console.error('ERROR:', error);
            }
        },

        // Optional: Uncomment and complete filterByCategory method if needed
        // async filterByCategory(category) {
        //     try {
        //         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch products by category');
        //         }
        //         const data = await response.json();

        //         this.products = data;
        //     } catch (error) {
        //         console.error('ERROR:', error);
        //     }
        // }
    }));
});