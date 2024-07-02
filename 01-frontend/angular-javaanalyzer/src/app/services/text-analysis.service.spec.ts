import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TextAnalysisService } from './text-analysis.service';

describe('TextAnalysisService', () => {
  let service: TextAnalysisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TextAnalysisService]
    });
    service = TestBed.inject(TextAnalysisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should analyze text online', () => {
    const dummyResponse = { vowels: { a: 1, e: 1 } };
    service.analyzeOnline('test', 'vowels').subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/analyze');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });

  it('should analyze vowels offline', () => {
    const result = service.analyzeOffline('hello', 'vowels');
    expect(result).toEqual({ vowels: { e: 1, o: 1 } });
  });

  it('should analyze consonants offline', () => {
    const result = service.analyzeOffline('hello', 'consonants');
    expect(result).toEqual({ consonants: { H: 1, L: 2 } });
  });
});
