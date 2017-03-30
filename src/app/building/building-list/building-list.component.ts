import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BuildingService } from '../shared/building.service';
import { Building } from '../shared/building';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogsService } from '../../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'building-list',
  templateUrl: 'building-list.component.html'
  })

  export class BuildingListComponent implements OnInit {
    constructor(private buildingService: BuildingService, public toastr: ToastsManager,
      private dialogsService: DialogsService) {
    }
    buildings: Building[];
    selectedBuilding: Building;
    onSelect(building): void {
      this.selectedBuilding = building;
    };
    getBuildings(): void {
      this.buildingService.getBuildings()
        .subscribe(buildings => {
          this.buildings = buildings
        });
    }
    removeBuilding(id: string): void {
      this.buildingService.removeBuilding(id)
        .then(_ =>
          {
            this.toastr.success('Predio removido com sucesso!', 'Successo!');
          })
        ;
    }
    openDialog(id: string) {
      this.dialogsService
      .confirm('Confirmação', 'Você tem certeza disso?')
      .subscribe(res => {
        if(res) {
          this.removeBuilding(id);
        }
      });
    }
    ngOnInit(): void {
      this.getBuildings();
    }
  }
