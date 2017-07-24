import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetDataService {
    private commentsUrl = 'http://crm.csigroups.com/suitecrmdemo/service/v4_1/rest.php';

    standardEncoding(v) {
        return encodeURIComponent(v)
            .replace(/%40/gi, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/gi, '$')
            .replace(/%2C/gi, ',')
            .replace(/%3B/gi, ';')
            .replace(/%2B/gi, '+')
            .replace(/%3D/gi, '=')
            .replace(/%3F/gi, '?')
            .replace(/%2F/gi, '/')
            .replace(/%7B/gi, '{')
            .replace(/%22/gi, '"');
    }
    appendParams(params: URLSearchParams, obj: any) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                params.append(key, obj[key])
            }
        }
    }
    constructor(
        private http: Http
    ) { }
    fnPost(method: string, paramsForRecieve: string):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        //console.log("body"+bodyString);
        let paramPost = new URLSearchParams();
        paramPost.append('input_type', 'JSON');
        paramPost.append('response_type', 'JSON');
        paramPost.append('method', method);
        //console.log("paramPostService:" + paramPost.toString() + '&rest_data=' + paramsForRecieve);
        return this.http.get(this.commentsUrl + '?' + paramPost.toString() + '&rest_data=' + paramsForRecieve, { headers: headers }) // ...using post request
            .map((res: Response) => {
                //console.log("response:" + res.text());
                return res.json();
            });
    }
}