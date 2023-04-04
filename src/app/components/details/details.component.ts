import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { Game } from "../../model";
import { HttpService } from "../../services/http.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  gameRating = 0; gameId!: string; game!: Game;
  constructor(private activeRoute: ActivatedRoute, private httpService: HttpService, private dom: DomSanitizer){ }
  ngOnInit(): void {
      this.activeRoute.params.subscribe((params: Params) => {
        this.gameId = params ['id']
        this.getDetails(this.gameId);
        
      });
  }

  trustedImageUrl: any;
  
  getDetails(id: string): void{
    this.httpService.getGameDetails(id).subscribe((gameRes: Game) => {
      this.game = gameRes;
      this.gameRating = this.game.metacritic;
      if (this.game && this.game.background_image) {
        this.trustedImageUrl = this.dom.bypassSecurityTrustUrl(this.game.background_image);
      }
    });
  }

  getColor(value: number): string{
    if(value > 75) return '#3aad13';
    else if (value > 50) return '#f5db16';
    else if (value > 30) return '#f7ab38'
    else return '#db1f18'
  }
}
