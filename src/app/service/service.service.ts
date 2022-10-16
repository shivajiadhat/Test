import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }


  list(){

    return this.http.get<any>("http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1");
  }


  marketList(){
    return this.http.get<any>("http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1")
  }

  legSelection(){
    return this.http.get<any>("http://cms.bettorlogic.com/api/BetBuilder/GetSelections?sports=1")
  }


  betBuilder(value:any){
    return this.http.get<any>("http://cms.bettorlogic.com/api/BetBuilder/GetBetBuilderBets?sports=1"+"&matchId="+value.matchId +"&marketId="+value.marketId+"&legs="+value.leg+"&language=en")
  }


}
