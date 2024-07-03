package com.dedalus.springboot.java_analyzer.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

/**
 * Global exception handler for the application.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles InvalidInputException and returns a BAD_REQUEST response.
     *
     * @param ex the exception
     * @param request the web request
     * @return a ResponseEntity with the error message and BAD_REQUEST status
     */
    @ExceptionHandler(InvalidInputException.class)
    public ResponseEntity<?> handleInvalidInputException(InvalidInputException ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles AnalysisException and returns an INTERNAL_SERVER_ERROR response.
     *
     * @param ex the exception
     * @param request the web request
     * @return a ResponseEntity with the error message and INTERNAL_SERVER_ERROR status
     */
    @ExceptionHandler(AnalysisException.class)
    public ResponseEntity<?> handleAnalysisException(AnalysisException ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handles all other exceptions and returns an INTERNAL_SERVER_ERROR response.
     *
     * @param ex the exception
     * @param request the web request
     * @return a ResponseEntity with the error message and INTERNAL_SERVER_ERROR status
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGlobalException(Exception ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}