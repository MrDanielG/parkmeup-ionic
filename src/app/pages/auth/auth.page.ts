import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {ScrollViewComponent} from '../../scroll-view/scroll-view.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    nombre: string;
    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }
    obtenerCorreo() {
        
 
        
    }

    logOut() {
        this.authenticationService.logOut().then(() => {
            return this.router.navigate(['public']);
        });
    }
}
