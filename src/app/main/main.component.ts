import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  getListD: any = []
  datefilterData: any = [];
  dates: any = []
  constructor(private questionService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    var datess = new Date();
    var date = new Date()

    for (var i = 0; i < 7; i++) {
      date.setDate(datess.getDate() + i);
      console.log(i)
      this.dates.push(date.toLocaleDateString())
      console.log(this.dates)
    }



  }

  check(value: any) {
    this.getList(value)
  }


  getList(ok: any) {
    var dateTime = ok + ' ' + '12:00:00 AM'
    this.questionService.list().subscribe((res: any) => {
      this.getListD = res
      // console.log(this.getListD) 

      this.datefilterData = this.getListD.filter((data: any) => data.MatchDate == dateTime);
      console.log(this.datefilterData)
    })
  }


  nextpage(data: any, time: any, matchId: any) {
    this.router.navigate(['displayData', { "Name": data, "time": time, 'matchId': matchId }])
  }


}

