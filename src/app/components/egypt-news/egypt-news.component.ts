import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EgyptService } from 'src/app/services/egypt.service';

@Component({
  selector: 'app-egypt-news',
  templateUrl: './egypt-news.component.html',
  styleUrls: ['./egypt-news.component.css']
})
export class EgyptNewsComponent implements OnInit {
  news=[]
  constructor(private egyptService:EgyptService) {
   }

  ngOnInit(): void {
    this.egyptService.getNews().subscribe(
      (data) => {
        this.news= data.articles; 
      },
      (err) => {
        console.log(err);
      }
    );
    
  }



}
