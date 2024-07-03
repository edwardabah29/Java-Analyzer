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
        Object consonantsObject = result.get("consonants");
        if (consonantsObject instanceof Map<?, ?> consonantsMap) {
            assertEquals(3, consonantsMap.values().stream().mapToInt(value -> (Integer) value).sum());
        } else {
            fail("Expected a Map for consonants");
        }
    }

    @Test
    void testAnalyzeTextInvalidType() {
        assertThrows(InvalidInputException.class, () -> textAnalyzerService.analyzeText("hello", "invalid"));
    }

    @Test
    void testAnalyzeTextEmptyInput() {
        assertThrows(InvalidInputException.class, () -> textAnalyzerService.analyzeText("", "vowels"));
    }
}
