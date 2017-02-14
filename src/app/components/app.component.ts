import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: [
    '../../../node_modules/ng2-toastr/bundles/ng2-toastr.min.css'
  ]
  })

  export class AppComponent implements OnInit {
  	constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }
	ngOnInit(): void {
	}
  }
