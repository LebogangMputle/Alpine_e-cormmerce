// app.js
import Alpine from 'alpinejs';

document.addEventListener('DOMContentLoaded', function () {
    Alpine.data('productApp', () => ({
        products: [],
        cartCount: 2, // Example cart count

        async getProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                this.products = await response.json();
            } catch (error) {
                console.error('ERROR:', error);
            }
        },

        // Add more methods or data properties as needed

    }));

    Alpine.start();
});


// const { default: Alpine } = require("alpinejs");

// document.addEventListener('alpine:init', () => {
//     Alpine.data('productApp', () => ({
//         products: Alpine.$persist([]), // Initialize products as an Alpine persistent property
//         category: '',

//         async getProducts() {
//             try {
//                 const response = await fetch('https://fakestoreapi.com/products');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const data = await response.json(); // Corrected: use const data = ...

//                 this.products = data; // Update products with fetched data
//             } catch (error) {
//                 console.error('ERROR:', error);
//             }
//         },

//         // Optional: Uncomment and complete filterByCategory method if needed
//         // async filterByCategory(category) {
//         //     try {
//         //         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//         //         if (!response.ok) {
//         //             throw new Error('Failed to fetch products by category');
//         //         }
//         //         const data = await response.json();

//         //         this.products = data;
//         //     } catch (error) {
//         //         console.error('ERROR:', error);
//         //     }
//         // }
//     }));
// });


// async function fetchData(url = 'https://fakestoreapi.com/products') {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         // Handle the error appropriately (e.g., display an error message)
//         return [];
//     }
// }




// // function fetchData() {
// //     // Simulate fetching data
// //     setTimeout(() => {
// //       // ... update data ...
// //       init() {
// //         fetch('https://fakestoreapi.com/products')
// //             .then(res => res.json())
// //             .then(data => {
// //                 this.products = data;
// //                 this.loading = false;
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching data:', error);
// //                 this.loading = false;
// //             });
// //     }
// //       loading = false; // Set loading to false when data is ready
// //     }, 2000); 
// //   }




