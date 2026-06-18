public class Logger {

    private static Logger instance;//the instance is private and static so that only one instance can be created

    private Logger() {//private constructor to prevent instantiation from other classes
        System.out.println("Logger Instance Created by client");
    }

    public static synchronized Logger getInstance() {//synchronized method to make it thread-safe
        if (instance == null) {//condition to check if the instance is null, if yes then create a new instance
            instance = new Logger();
        }
        return instance;//otherwise return the existing instance
    }

    public void log(String message) {//method to log the message
        System.out.println("LOG: " + message);
    }
}