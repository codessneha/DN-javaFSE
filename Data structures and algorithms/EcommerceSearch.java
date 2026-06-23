// Product class representing each product in the e-commerce platform
class Product {

    // Attributes of a product
    int productId;
    String productName;
    String category;

    // Constructor to initialize product details
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Method to display product information
    @Override
    public String toString() {
        return "Product ID: " + productId +
               ", Product Name: " + productName +
               ", Category: " + category;
    }
}

public class EcommerceSearch {

    /*
     * LINEAR SEARCH
     * Searches each product one by one until the target is found.
     * Works on both sorted and unsorted arrays.
     */
    public static Product linearSearch(Product[] products, int targetId) {

        // Traverse the entire array
        for (Product product : products) {

            // Check if current product ID matches target ID
            if (product.productId == targetId) {
                return product; // Product found
            }
        }

        // Product not found
        return null;
    }

    /*
     * BINARY SEARCH
     * Works only on a sorted array.
     * Repeatedly divides the search space into half.
     */
    public static Product binarySearch(Product[] products, int targetId) {

        // Starting index
        int left = 0;

        // Ending index
        int right = products.length - 1;

        // Continue searching while valid range exists
        while (left <= right) {

            // Calculate middle index
            int mid = left + (right - left) / 2;

            // If target product is found
            if (products[mid].productId == targetId) {
                return products[mid];
            }

            // If target ID is greater, search right half
            if (products[mid].productId < targetId) {
                left = mid + 1;
            }

            // Otherwise search left half
            else {
                right = mid - 1;
            }
        }

        // Product not found
        return null;
    }

    public static void main(String[] args) {

        /*
         * Product array
         * IDs are already sorted for Binary Search.
         */
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Smartphone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        // Product ID to search
        int targetId = 104;

        // ---------------- LINEAR SEARCH ----------------

        Product linearResult = linearSearch(products, targetId);

        System.out.println("=== Linear Search ===");

        if (linearResult != null) {
            System.out.println("Product Found:");
            System.out.println(linearResult);
        } else {
            System.out.println("Product Not Found");
        }

        // ---------------- BINARY SEARCH ----------------

        Product binaryResult = binarySearch(products, targetId);

        System.out.println("\n=== Binary Search ===");

        if (binaryResult != null) {
            System.out.println("Product Found:");
            System.out.println(binaryResult);
        } else {
            System.out.println("Product Not Found");
        }
    }
}