import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up test fixture");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up test fixture");
        calculator = null;
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(5, result);
    }
}