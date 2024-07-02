package com.dedalus.springboot.java_analyzer.service;

import com.dedalus.springboot.java_analyzer.exception.InvalidInputException;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Map;

class TextAnalyzerServiceImplementationTest {
    private final TextAnalyzerServiceImplementation textAnalyzerService = new TextAnalyzerServiceImplementation();

    @Test
    void testAnalyzeTextVowels() {
        Map<String, Object> result = textAnalyzerService.analyzeText("hello", "vowels");
        assertTrue(result.containsKey("vowels"));
        assertEquals(2, ((Map<?, ?>) result.get("vowels")).size());
    }

    @Test
    void testAnalyzeTextConsonants() {
        Map<String, Object> result = textAnalyzerService.analyzeText("hello", "consonants");
        assertTrue(result.containsKey("consonants"));
        assertEquals(2, ((Map<?, ?>) result.get("consonants")).size());
        assertEquals(3, ((Map<?, Integer>) result.get("consonants")).values().stream().mapToInt(Integer::intValue).sum());
    }

    @Test
    void testAnalyzeTextInvalidType() {
        assertThrows(InvalidInputException.class, () -> {
            textAnalyzerService.analyzeText("hello", "invalid");
        });
    }

    @Test
    void testAnalyzeTextEmptyInput() {
        assertThrows(InvalidInputException.class, () -> {
            textAnalyzerService.analyzeText("", "vowels");
        });
    }
}
