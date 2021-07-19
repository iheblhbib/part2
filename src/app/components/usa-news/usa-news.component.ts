import { Component, OnInit } from '@angular/core';
import { UsaService } from 'src/app/services/usa.service';

@Component({
  selector: 'app-usa-news',
  templateUrl: './usa-news.component.html',
  styleUrls: ['./usa-news.component.css']
})
export class UsaNewsComponent implements OnInit {
 news=[]
  constructor(private usaService:UsaService) { }
  
  ngOnInit(): void {
    this.usaService.getNews().subscribe(
      (data) => {
        this.news= data.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
