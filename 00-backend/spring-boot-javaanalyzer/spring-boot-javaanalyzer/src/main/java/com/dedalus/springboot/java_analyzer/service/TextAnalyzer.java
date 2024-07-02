package com.dedalus.springboot.java_analyzer.service;

import java.util.HashMap;
import java.util.Map;

public class TextAnalyzer {
  public static Map<String, Object> analyze(String type, String input){
    Map<String, Object> result = new HashMap<>();
    if (type.equals("vowels")){
      result.put("vowels", analyzeVowels(input));
    } else if (type.equals("consonants")){
      result.put("consonants", analyzeConsonants(input));
    }
    return result;
  }

  private static Map<Character, Integer> analyzeVowels(String input){
    Map<Character, Integer> vowelsCount = new HashMap<>();
    for(char c: input.toCharArray()){
      char upperC = Character.toUpperCase(c);
      if("AEIOU".indexOf(upperC) != -1){
        vowelsCount.put(upperC, vowelsCount.getOrDefault(upperC, 0) + 1);
      }
    }
    return vowelsCount;
  }

  private static Map<String, Integer> analyzeConsonants(String input){
    Map<String, Integer> consonantsCount = new HashMap<>();
    for (char c : input.toCharArray()){
      if("aeiouAEIOU".indexOf(c) == -1 && Character.isLetter(c)){
        String Key = String.valueOf(c).toUpperCase();
        consonantsCount.put(Key, consonantsCount.getOrDefault(Key, 0) + 1);
      }
    }
    return consonantsCount;
  }
}
