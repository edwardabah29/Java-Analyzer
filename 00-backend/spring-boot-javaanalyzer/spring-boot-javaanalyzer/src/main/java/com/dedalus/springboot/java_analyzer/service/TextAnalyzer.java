package com.dedalus.springboot.java_analyzer.service;

import java.util.HashMap;
import java.util.Map;

/**
 * Utility class for analyzing text for vowels and consonants.
 */
public class TextAnalyzer {
  private static final String VOWELS = "AEIOU";

  /**
   * Analyzes the input text for the specified type (vowels or consonants).
   *
   * @param type the type of analysis (vowels or consonants)
   * @param input the input text to analyze
   * @return a map with the analysis results
   */
  public static Map<String, Object> analyze(String type, String input){
    Map<String, Object> result = new HashMap<>();
    if (type.equals("vowels")){
      result.put("vowels", analyzeVowels(input));
    } else if (type.equals("consonants")){
      result.put("consonants", analyzeConsonants(input));
    }
    return result;
  }

  /**
   * Analyzes the input text for vowels.
   *
   * @param input the input text to analyze
   * @return a map with the counts of each vowel
   */
  private static Map<Character, Integer> analyzeVowels(String input){
    Map<Character, Integer> vowelsCount = new HashMap<>();
    for(char c: input.toCharArray()){
      char upperC = Character.toUpperCase(c);
      if(VOWELS.indexOf(upperC) != -1){
        vowelsCount.put(upperC, vowelsCount.getOrDefault(upperC, 0) + 1);
      }
    }
    return vowelsCount;
  }

  /**
   * Analyzes the input text for consonants.
   *
   * @param input the input text to analyze
   * @return a map with the counts of each consonant
   */
  private static Map<String, Integer> analyzeConsonants(String input){
    Map<String, Integer> consonantsCount = new HashMap<>();
    for (char c : input.toCharArray()){
      char upperC = Character.toUpperCase(c);
      if(VOWELS.indexOf(upperC) == -1 && Character.isLetter(c)){
        String Key = String.valueOf(upperC);
        consonantsCount.put(Key, consonantsCount.getOrDefault(Key, 0) + 1);
      }
    }
    return consonantsCount;
  }
}
