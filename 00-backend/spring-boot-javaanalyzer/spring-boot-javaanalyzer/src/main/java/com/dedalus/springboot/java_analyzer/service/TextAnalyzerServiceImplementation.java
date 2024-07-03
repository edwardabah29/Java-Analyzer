package com.dedalus.springboot.java_analyzer.service;

import com.dedalus.springboot.java_analyzer.exception.AnalysisException;
import com.dedalus.springboot.java_analyzer.exception.InvalidInputException;
import org.springframework.stereotype.Service;
import java.util.Map;

/**
 * Implementation of the TextAnalyzerService for analyzing text.
 */
@Service
public class TextAnalyzerServiceImplementation implements TextAnalyzerService {

    /**
     * Analyzes the input text for the specified type (vowels or consonants).
     *
     * @param text the input text to analyze
     * @param type the type of analysis (vowels or consonants)
     * @return a map with the analysis results
     * @throws InvalidInputException if the input text is null or empty, or if the type is invalid
     * @throws AnalysisException if an error occurs during text analysis
     */
    @Override
    public Map<String, Object> analyzeText(String text, String type) {
        if (text == null || text.isEmpty()) {
            throw new InvalidInputException("Input text cannot be null or empty");
        }
        if (type == null || (!type.equals("vowels") && !type.equals("consonants"))) {
            throw new InvalidInputException("Type must be 'vowels' or 'consonants'");
        }
        try {
            return TextAnalyzer.analyze(type, text);
        } catch (Exception e) {
            throw new AnalysisException("Error occurred during text analysis");
        }
    }
}

