public class SearchTest{

    public static Product linearSearch(Product[] products, int targetId){
        for(Product p:products){
            if(p.productId==targetId){
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId){
        int left=0;
        int right=products.length-1;
        while(left<=right){
            int mid=(left+right)/2;

            if(products[mid].productId==targetId){
                return products[mid];
            }
            else if(products[mid].productId>targetId){
                right=mid-1;
            }
            else{
                left=mid+1;
            }

        }
        return null;
    }
    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Keyboard", "Accessories"),
                new Product(105, "Mouse", "Accessories")
        };

        Product linearResult = linearSearch(products, 104);

        if (linearResult != null) {
            System.out.println("Linear Search Found:");
            System.out.println(linearResult.productId + " "
                    + linearResult.productName + " "
                    + linearResult.category);
        }

        Product binaryResult = binarySearch(products, 104);

        if (binaryResult != null) {
            System.out.println("\nBinary Search Found:");
            System.out.println(binaryResult.productId + " "
                    + binaryResult.productName + " "
                    + binaryResult.category);
        }
    }
}