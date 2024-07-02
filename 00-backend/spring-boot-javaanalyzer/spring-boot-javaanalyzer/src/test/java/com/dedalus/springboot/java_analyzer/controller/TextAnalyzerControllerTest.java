package com.dedalus.springboot.java_analyzer.controller;

import com.dedalus.springboot.java_analyzer.config.TestSecurityConfig;
import com.dedalus.springboot.java_analyzer.service.TextAnalyzerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest(TextAnalyzerController.class)
@Import(TestSecurityConfig.class)
class TextAnalyzerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TextAnalyzerService textAnalyzerService;

    @BeforeEach
    void setUp() {
        Map<String, Object> vowelsResult = new HashMap<>();
        vowelsResult.put("vowels", Map.of('e', 1, 'o', 1));

        Mockito.when(textAnalyzerService.analyzeText(anyString(), eq("vowels")))
                .thenReturn(vowelsResult);
    }

    @Test
    void testAnalyzeText() throws Exception {
        String requestBody = "{\"type\": \"vowels\", \"text\": \"hello\"}";

        mockMvc.perform(post("/api/analyze")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.vowels.e").value(1))
                .andExpect(jsonPath("$.vowels.o").value(1));
    }
}
