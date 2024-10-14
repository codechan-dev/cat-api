import { Component, OnInit } from '@angular/core';
import { CatFactsService } from './cat-facts.service';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  catFact: string = '';

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactsService.getCatFact().subscribe((data) => {
      this.catFact = data.fact;
    });
  }
}
