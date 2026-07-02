package com.cognizant;

import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    private Calculator calculator;

@BeforeEach
public void setUp() {
    calculator = new Calculator();
    System.out.println("Setup completed");
}

@AfterEach
public void tearDown() {
    calculator = null;
    System.out.println("Teardown completed");
}

    @Test
    public void testAdd() {

        // Arrange
        int a = 5;
        int b = 5;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(10, result);
    }

    @Test
    public void testSubtract() {

        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(2, result);
    }

    @Test
    public void testMultiply() {

        // Arrange
        int a = 3;
        int b = 5;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testDivide() {

        // Arrange
        int a = 10;
        int b = 2;

        // Act
        int result = calculator.divide(a, b);

        // Assert
        assertEquals(5, result);
    }
}