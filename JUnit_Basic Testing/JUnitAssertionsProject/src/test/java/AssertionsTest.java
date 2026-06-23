import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        Assertions assertions = new Assertions();

        // Assert Equals
        assertEquals(5, assertions.add(2, 3));

        // Assert True
        assertTrue(5 > 3);

        // Assert False
        assertFalse(5 < 3);

        // Assert Null
        String value = null;
        assertNull(value);

        // Assert Not Null
        assertNotNull(assertions);
    }
}