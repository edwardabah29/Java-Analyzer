package com.dedalus.springboot.java_analyzer.exception;

/**
 * Custom exception class for analysis errors.
 */
public class AnalysisException extends RuntimeException {

    /**
     * Constructs a new AnalysisException with the specified detail message.
     *
     * @param message the detail message
     */
    public AnalysisException(String message) {
        super(message);
    }
}
