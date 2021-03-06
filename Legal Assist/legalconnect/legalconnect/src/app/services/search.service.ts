﻿import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    constructor(private _http: Http) {

    }
    //private searchUrl = 'https://api.cognitive.microsoft.com/bing/v5.0/search';  
    private searchUrl = 'http://contentsextractionapi.azurewebsites.net/api/ExtractContents';
    private chatMessageUrl = 'http://contentsextractionapi.azurewebsites.net/api/ExtractContents';
    private chatRefUrl = 'http://contentsextractionapi.azurewebsites.net/api/ExtractSubTopics';
    private chatFileUploadUrl = 'http://contentsextractionapi.azurewebsites.net/api/ExtractTextsFromHttpFileBase';
    private tokenUrl = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
    private translateUrl = 'https://api.microsofttranslator.com/V2/Http.svc/Translate';
    geoCountry: any;

    output: any;
  
    public getChatMessages(query:string, lang: string, country: string): Observable<any> {
   
        return this._http.post(this.chatMessageUrl, { Topic: query, Title: query, State: country }).map((res: Response) => (res.json()));
    }


    public getChatReferences(query: string, country: string): Observable<any> {
        console.log(country);
        return this._http.post(this.chatRefUrl, { Sentence: query, State: country}).map((res: Response) => (res.json()));

    }

    public getfileUpload(data: FormData): Observable<any> {
        console.log('data', data);
        var headers = new Headers();
       headers.append('contentType', 'false');
    //    headers.append( 'Content-Type', 'application/json' );
     headers.append('processData', 'false');
        return this._http.post(this.chatFileUploadUrl, data,{ headers: headers} ).map((res: Response) => (res.json()));
       // return this._http.post(this.chatFileUploadUrl, data).map((res: Response) => (console.log(res.json())));
       // return this._http.post(this.chatFileUploadUrl, { data: data, contentType: false, processData: false } ).map((res: Response) => (res.json()));

    }
    public TranslateToken() {
        var headers = new Headers();
        headers.append('Ocp-Apim-Subscription-Key', 'f79c9411ee6d4daba6bb9aff008fe2eb');
        return '12345';// this._http.post(this.tokenUrl, { headers:headers }).map((res: Response) => (res.json()));
    }
    public TranslateText(query:string,lang:string): Observable<any> {
       
        var token = this.TranslateToken();
        console.log('token', token);
        var appid = "Bearer"+token;
        this.translateUrl = this.translateUrl + '?Text=' + query + '&from=en&to=' + lang + '&appid='+appid;
        //return this._http.get(this.translateUrl, { params: params }).map((res: Response) => (res.json()));
        return this._http.get(this.translateUrl).map((res: Response) => (res.json()));
    }

    public getLocation(): Observable<any> {
      return this._http.get("http://ipinfo.io").map((res: Response) => res.json());

    }

}
