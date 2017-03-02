import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  })

  export class AppComponent implements OnInit {
    title: String = 'Marmitas Cássia';

  	constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

	  ngOnInit(): void {
	  }
  }
