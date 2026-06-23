/*
=========================================
📌 FINANCIAL FORECASTING USING RECURSION
=========================================

📍 What is Recursion?
Recursion is when a function calls itself to solve a smaller version of the same problem.

👉 It helps break complex problems into simpler subproblems.

Example:
futureValue(n) depends on futureValue(n-1)

-----------------------------------------
📍 PROBLEM IDEA:
We predict future value using:
futureValue = previousValue * (1 + growthRate)

We apply this repeatedly using recursion.
-----------------------------------------
📍 TIME COMPLEXITY:
❌ Without optimization: O(n) (simple recursion depth)

BUT:
❌ If repeated calculations happen → can become exponential in some recursive problems

-----------------------------------------
📍 OPTIMIZATION IDEA:
✔ Use MEMOIZATION (store already computed values)
✔ Or use ITERATIVE approach (best for real finance systems)
*/

import java.util.HashMap;

public class FinancialForecasting {

    // -----------------------------
    // BASIC RECURSIVE METHOD
    // -----------------------------
    public static double forecast(int year, double initialValue, double growthRate) {

        // Base case: year 0
        if (year == 0) {
            return initialValue;
        }

        // Recursive relation:
        return forecast(year - 1, initialValue, growthRate) * (1 + growthRate);
    }

    // -----------------------------
    // OPTIMIZED VERSION (MEMOIZATION)
    // -----------------------------
    static HashMap<Integer, Double> memo = new HashMap<>();

    public static double forecastOptimized(int year, double initialValue, double growthRate) {

        if (year == 0) {
            return initialValue;
        }

        if (memo.containsKey(year)) {
            return memo.get(year);
        }

        double result = forecastOptimized(year - 1, initialValue, growthRate) * (1 + growthRate);

        memo.put(year, result);
        return result;
    }

    // -----------------------------
    // MAIN METHOD
    // -----------------------------
    public static void main(String[] args) {

        double initialValue = 10000;  // initial investment
        double growthRate = 0.10;     // 10% growth

        int years = 5;

        System.out.println("📊 Financial Forecast (Recursive):");
        double result1 = forecast(years, initialValue, growthRate);
        System.out.println("Value after " + years + " years = " + result1);

        System.out.println("\n📊 Financial Forecast (Optimized):");
        double result2 = forecastOptimized(years, initialValue, growthRate);
        System.out.println("Value after " + years + " years = " + result2);
    }
}