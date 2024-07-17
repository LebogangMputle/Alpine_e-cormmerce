// app.js

// Define Alpine.js data and functions
window.Alpine = require('alpinejs');

Alpine.data('productList', () => ({
    loading: true, // Initially set loading state to true
    error: null, // Placeholder for potential error handling
    products: [], // Placeholder for fetched products data
    async fetchProducts() {
        try {
            // Fetch data from API
            let response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            // Parse JSON response
            let data = await response.json();
            // Update products array with fetched data
            this.products = data.map(product => ({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                rating: { rate: product.rating.rate, count: product.rating.count },
                category: product.category
            }));
        } catch (error) {
            console.error('Error fetching products:', error);
            this.error = error; // Set error state if fetch fails
        } finally {
            this.loading = false; // Set loading state to false after fetch completes
        }
    },
    async init() {
        await this.fetchProducts(); // Initialize fetching of products
    }
}));

// Initialize Alpine.js
Alpine.start();
