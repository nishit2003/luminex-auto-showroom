// Product Image Configuration
// This file shows you how to add real product images to your products

export const PRODUCT_IMAGE_PATHS = {
  // Example structure for adding real images:
  // "GS-101": "/images/products/headlights/tata-1312.jpg",
  // "GS-102": "/images/products/headlights/tata-1312-mfr.jpg",
  // "GS-132": "/images/products/foglamps/mini-boss-30led.jpg",
  // "GS-186": "/images/products/fans/4inch-cute-fan.jpg",
  // "GS-189": "/images/products/power-chargers/dc-converter-65w.jpg",
};

// To add real images:
// 1. Create a folder structure in your public folder:
//    public/
//    └── images/
//        └── products/
//            ├── headlights/
//            ├── foglamps/
//            ├── spotlights/
//            ├── fans/
//            └── power-chargers/
//
// 2. Add your product images to these folders
// 3. Update the PRODUCT_IMAGE_PATHS object above with the correct paths
// 4. Update your products.ts file to include the image field for each product

// Example of how to update a product in products.ts:
// {
//   code: "GS-101",
//   name: "Tata Head Light Assy.",
//   variant: "1312",
//   category: "Head Lights",
//   tags: ["Tata"],
//   image: "/images/products/headlights/tata-1312.jpg" // Add this line
// }
