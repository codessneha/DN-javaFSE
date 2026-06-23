import java.util.Arrays;
import java.util.Comparator;

// =======================
// PRODUCT CLASS
// =======================
class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

// =======================
// MAIN CLASS
// =======================
public class EcommerceSearch {

    // -----------------------
    // LINEAR SEARCH
    // -----------------------
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // -----------------------
    // BINARY SEARCH
    // -----------------------
    public static Product binarySearch(Product[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            int compare = products[mid].productName.compareToIgnoreCase(name);

            if (compare == 0) {
                return products[mid];
            } 
            else if (compare < 0) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }
        return null;
    }

    // =======================
    // MAIN METHOD
    // =======================
    public static void main(String[] args) {

        // Unsorted array (for Linear Search)
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        // -----------------------
        // LINEAR SEARCH DEMO
        // -----------------------
        System.out.println("🔍 LINEAR SEARCH RESULT:");
        Product result1 = linearSearch(products, "Phone");
        System.out.println(result1 != null ? result1 : "Not Found");

        // -----------------------
        // SORT ARRAY FOR BINARY SEARCH
        // -----------------------
        Product[] sortedProducts = Arrays.copyOf(products, products.length);

        Arrays.sort(sortedProducts, Comparator.comparing(
            p -> p.productName.toLowerCase()
        ));

        // -----------------------
        // BINARY SEARCH DEMO
        // -----------------------
        System.out.println("\n🔍 BINARY SEARCH RESULT:");
        Product result2 = binarySearch(sortedProducts, "Phone");
        System.out.println(result2 != null ? result2 : "Not Found");
    }
}