import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DailyMenuService } from '../shared/daily-menu.service';
import { DailyMenu } from '../shared/daily-menu';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogsService } from '../../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'daily-menu-list',
  templateUrl: 'daily-menu-list.component.html'
  })

  export class DailyMenuListComponent implements OnInit {
    constructor(private dailyMenuService: DailyMenuService, public toastr: ToastsManager,
      private dialogsService: DialogsService) {
    }
    dailyMenus: DailyMenu[];
    selectedDailyMenu: DailyMenu;
    onSelect(dailyMenu): void {
      this.selectedDailyMenu = dailyMenu;
    };
    getDailyMenus(): void {
      this.dailyMenuService.getDailyMenus()
        .subscribe(dailyMenus => {
          this.dailyMenus = dailyMenus
        });
    }
    removeDailyMenu(id: string): void {
      this.dailyMenuService.removeDailyMenu(id)
        .then(_ =>
          {
            this.toastr.success('Cardapio removido com sucesso!', 'Successo!');
          })
        ;
    }
    openDialog(id: string) {
      this.dialogsService
      .confirm('Confirmação', 'Você tem certeza disso?')
      .subscribe(res => {
        if(res) {
          this.removeDailyMenu(id);
        }
      });
    }
    ngOnInit(): void {
      this.getDailyMenus();
    }
  }
