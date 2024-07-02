import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  private baseUrl = environment.baseUrl;
  private username = environment.username;
  private password = environment.password;

  constructor(private http: HttpClient) { }

  analyzeOnline(text: string, type: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    const payload = { text, type };
    console.log('Payload:', payload);
    return this.http.post<any>(this.baseUrl, payload,{ headers });
  }

  analyzeOffline(text: string, type: string): any {
    if(type === 'vowels'){
      return this.analyzeVowels(text);
    }else if(type === 'consonants'){
      return this.analyzeConsonants(text);
    }
    return {};
  }

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
