package com.dedalus.springboot.java_analyzer.controller;

import com.dedalus.springboot.java_analyzer.service.TextAnalyzerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * REST controller for text analysis operations.
 */
@RestController
@RequestMapping("/api")
@Tag(name = "Text Analyzer", description = "API for analyzing text for vowels or consonants")
public class TextAnalyzerController {

    @Autowired
    private TextAnalyzerService textAnalyzerService;

    /**
     * Endpoint for analyzing text for vowels or consonants.
     *
     * @param request a map containing the type and text to be analyzed
     * @return a map with the analysis results
     */
    @PostMapping("/analyze")
    @Operation(summary = "Analyze text for vowels or consonants")
    public Map<String, Object> analyzeText(@RequestBody Map<String, String> request){
        String type = request.get("type");
        String text = request.get("text");
        return textAnalyzerService.analyzeText(text, type);
    }
}
