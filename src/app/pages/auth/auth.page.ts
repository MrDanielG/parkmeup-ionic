import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ParkingService } from 'src/app/services/parking.service';
import { Company } from '../../models/remote';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  companias: Company[] = [];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private parkingService: ParkingService
  ) {}

  ngOnInit() {
    this.parkingService
      .getCompaniesIBelongTo()
      .then(companies => {
        const firstCompany = companies[0];
        this.companias = companies;
        console.log(this.companias[0].name);

        return this.parkingService.getCompanyById(firstCompany.objectId);
      })
      .then(company => {
        console.log(company.parkingLots);
      });
  }

  logOut() {
    this.authenticationService.logOut().then(() => {
      return this.router.navigate(['public']);
    });
  }

  retornarEmpresas() {
    console.log(this.parkingService.getCompaniesIBelongTo());
  }
}
