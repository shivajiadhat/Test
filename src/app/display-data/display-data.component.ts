import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  value: any
  getMarketList: any = [];
  bet_Builder: any
  leg: any
  time: any;
  marketValueData: any = [];
  matchId: any ;
  TotalOdds: any;
  legSelectData: any=[];

  constructor(private actRouter: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(params => {
      this.value = params.get('Name');
      this.time = params.get('time');
      this.matchId = params.get('matchId');
    })
    this.marketList()
    this.legSelection()
  }

  marketList() {
    this.service.marketList().subscribe((res: any) => {
      this.getMarketList = res
    })
  }

  legSelection(){
    this.service.legSelection().subscribe((res: any) => {
     

    this.legSelectData = res
      console.log(this.legSelectData)
    })
  }


  updateData() {
    console.log(this.bet_Builder)
    let obj = {
      leg: this.leg,
      matchId: this.matchId,
      marketId: this.bet_Builder
    }

    console.log(obj)
    this.service.betBuilder(obj).subscribe((res: any) => {
      this.marketValueData = res.BetBuilderSelections

      this.TotalOdds = res.TotalOdds
      console.log(this.marketValueData)
    })
  }

}
