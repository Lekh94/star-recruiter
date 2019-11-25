import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private showLogo = new BehaviorSubject(false);
    logo = this.showLogo.asObservable();

    isLogo(logo: boolean) {
        this.showLogo.next(logo);
    }

}