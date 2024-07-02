package com.dedalus.springboot.java_analyzer.service;

import java.util.Map;

public interface TextAnalyzerService {
    Map<String, Object> analyzeText(String text, String type);
}
