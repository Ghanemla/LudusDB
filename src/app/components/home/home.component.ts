import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { APIResponse, Game } from "src/app/model";
import { HttpService } from "src/app/services/http.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public sort!: string;
  public games: Array<Game> =[]

  constructor(private httpService: HttpService, private router: Router, private activeRoute: ActivatedRoute,private http: HttpClient ){ }

  ngOnInit(): void {
      this.activeRoute.params.subscribe((params: Params) =>{
        if(params['game-search']){
          this.searchGames('-added',params['game-search']);
        }else{
          this.searchGames('');
        }
      });
  }

  openGameDetails(id: string): void{
    this.router.navigate(['details', id]);
  }

  searchGames(sort: string, search: string = '', page: number = 1): void{
    this.httpService.getGamesList(sort, search, page).subscribe((gameList : APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    })
  }
  

  

  currentPage = 1;
  apiUrl = 'https://api.rawg.io/api/games?key=d429fdf9d6c74fd6a4b6d3fa3f907cac&ordering=&page=';
  

  nextPage() {
    this.currentPage++;
    const url = `${this.apiUrl}&ordering=${this.sort}&page=${this.currentPage}`;
    this.searchGames(this.sort, '', this.currentPage);
  }
  
  prevPage(){
    this.currentPage--;
    const url = `${this.apiUrl}&ordering=${this.sort}&page=${this.currentPage}`;
    this.searchGames(this.sort, '', this.currentPage);
  }

  
}
