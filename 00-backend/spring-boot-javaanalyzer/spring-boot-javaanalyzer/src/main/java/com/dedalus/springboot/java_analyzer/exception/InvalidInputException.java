package com.dedalus.springboot.java_analyzer.exception;

/**
 * Custom exception class for invalid input errors.
 */
public class InvalidInputException extends RuntimeException {

    /**
     * Constructs a new InvalidInputException with the specified detail message.
     *
     * @param message the detail message
     */
    public InvalidInputException(String message) {
        super(message);
    }
}
