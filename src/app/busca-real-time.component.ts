import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { RealTimeService } from '../real-time.service';

@Component({
	selector: 'app-real-time',
	templateUrl: './teample-real-time.html',
    providers: [RealTimeService]
})

export class RealTimeComponent {
    results: Object;
    searchTerm$ = new Subject<string>();

    constructor(private searchService: RealTimeService) {
        this.searchService.search(this.searchTerm$)
          .subscribe(results => {
            this.results = results.results;
          });
      }
}

