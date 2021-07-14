import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Review} from './review';


@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    private apiServiceUrl = '';

    constructor(private http: HttpClient){}

    public getReviews(): Observable<Review[]>{
        return this.http.get<Review[]>(`${this.apiServiceUrl}`)
    }

}






