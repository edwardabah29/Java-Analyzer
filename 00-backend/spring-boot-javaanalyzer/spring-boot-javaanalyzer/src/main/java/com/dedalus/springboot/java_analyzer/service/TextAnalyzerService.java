package com.dedalus.springboot.java_analyzer.service;

import java.util.Map;

/**
 * Service interface for text analysis operations.
 */
public interface TextAnalyzerService {
    /**
     * Analyzes the input text for the specified type (vowels or consonants).
     *
     * @param text the input text to analyze
     * @param type the type of analysis (vowels or consonants)
     * @return a map with the analysis results
     */
    Map<String, Object> analyzeText(String text, String type);
}
