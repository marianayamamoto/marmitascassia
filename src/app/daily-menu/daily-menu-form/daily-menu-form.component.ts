import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { DailyMenu } from '../shared/daily-menu';
import { DailyMenuService } from '../shared/daily-menu.service';



@Component({
  selector: 'daily-menu-form',
  templateUrl: './daily-menu-form.component.html'
  })

  export class DailyMenuFormComponent implements OnInit {

    formTitle: String;
    model: DailyMenu = null;
    isNew: boolean;
    submitted: boolean = false;

    constructor(private dailyMenuService: DailyMenuService,
      private route: ActivatedRoute,
      private location: Location,
      private router : Router) {

    }

    //TODO:get daily-menus from DB

    newDailyMenu() {
      this.model = new DailyMenu();
    }

    onSubmit() {
      this.dailyMenuService.updateDailyMenu(this.model, this.isNew)
      .then(_ => {
        this.submitted = true;

        if (this.isNew) {

          this.router.navigate([`/daily-menus`]);

        } else {

          this.router.navigate([`daily-menus/detail/${this.model.$key}`]);

        }

      });
    }

    onChange(value) {
      if (!this.isNew) {
        this.formTitle = 'Editando Cardapio: ' + value;
      }
    }

    goBack() {
  	  this.router.navigate([`/daily-menus`]);
  	}

    ngOnInit() {
      this.route.params.subscribe((params) => {
        if(params['id']) {
          this.isNew = false;
          this.route.params
            .map(params => params['id'])
            .switchMap(id => this.dailyMenuService.getDailyMenu(id))
            .subscribe(dailyMenu => {
              this.model = dailyMenu,
              this.formTitle = 'Editando Cardapio: ' + dailyMenu.date
            });
        } else {
          this.formTitle = 'Novo Cardapio';
          this.isNew = true;
          this.newDailyMenu();
        }
      });
    }
  }
