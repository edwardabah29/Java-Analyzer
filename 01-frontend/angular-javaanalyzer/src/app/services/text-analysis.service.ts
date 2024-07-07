import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Service for text analysis.
 */
@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  private baseUrl = environment.baseUrl;
  private username = environment.username;
  private password = environment.password;

  constructor(private http: HttpClient) { }

  /**
   * Analyzes the text online.
   * @param text The text to analyze.
   * @param type The type of analysis.
   * @returns An observable of the analysis result.
   */
  analyzeOnline(text: string, type: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    const payload = { text, type };
    console.log('Payload:', payload);
    return this.http.post<any>(this.baseUrl, payload,{ headers });
  }

  /**
   * Analyzes the text offline.
   * @param text The text to analyze.
   * @param type The type of analysis.
   * @returns The analysis result.
   */
  analyzeOffline(text: string, type: string): any {
    if(type === 'vowels'){
      return this.analyzeVowels(text);
    }else if(type === 'consonants'){
      return this.analyzeConsonants(text);
    }
    return {};
  }

  /**
   * Analyzes vowels in the input text.
   * @param input The input text.
   * @returns The analysis result for vowels.
   */
  private analyzeVowels(input: string): any{
    const vowelsCount: {[key: string]: number} = {};
    const vowels = 'aeiouAEIOU';
    for(const c of input){
      if(vowels.includes(c)){
        const Key = c.toUpperCase();
        vowelsCount[Key] = (vowelsCount[Key] || 0) + 1;
      }
    }
    return {vowels: vowelsCount};
  }

  /**
   * Analyzes consonants in the input text.
   * @param input The input text.
   * @returns The analysis result for consonants.
   */
  private analyzeConsonants(input: string): any{
    const consonantsCount:{[key: string]: number} = {};
    const vowels = 'aeiouAEIOU';
    for(const c of input){
      if(!vowels.includes(c) && /[a-zA-Z]/.test(c)){
        const Key = c.toUpperCase();
        consonantsCount[Key] = (consonantsCount[Key]|| 0) + 1;
      }
    }
    return {consonants: consonantsCount};
  }

}
