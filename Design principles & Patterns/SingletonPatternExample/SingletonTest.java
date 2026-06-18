public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();//creating logger instance1
        Logger logger2 = Logger.getInstance();//creating logger instance2
        //both instances should be the same, as only one instance of Logger should exist
        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());

        if (logger1 == logger2) {//checking if both instances are the same
            System.out.println("Singleton Pattern Verified");
        } else {
            System.out.println("Singleton Pattern Failed");
        }
    }
}