import { Component, OnInit } from '@angular/core';
import * as fieldstone from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fieldstone Men';
  north: any = {};
  south: any = {};
  division1: any[];
  constructor() {

  }

  ngOnInit() {
    this.north.data = [];
    this.north.label = 'North';
    this.south.data = [];
    this.south.label = 'South';
    this.createTeamList('north', this.north.data);
    this.north.data = this.north.data.sort(this.sort);
  }

  sort(a: any, b: any) {
    if (a.points == b.points) {
      return a.percentage > b.percentage ? -1 : 1;
    }
    return a.points > b.points ? -1 : 1;
  }

  createTeamList(divisionName: string, resultArray: any[]) {
    //loop through divisions
    let divisionData = fieldstone.data[divisionName];
    //loop through teams
    for (let team in divisionData) {
      let dataObj: any = {};
      dataObj.wins = 0;
      dataObj.losses = 0;
      dataObj.points = 0;
      dataObj.gamesWon = 0;
      dataObj.gamesLost = 0;
      //loop through weeks to calculate matches
      for (let week in divisionData[team]) {
        if (week == 'label') {
          dataObj.label = divisionData[team].label;
          continue;
        }

        let weekData = divisionData[team][week];
        let matchResult = this.winMatch(weekData.match);
        if (matchResult == undefined) {
          dataObj[week] = `${weekData.opponent} (NP)`;
          continue;
        }
        dataObj.gamesWon += +matchResult.gamesWon;
        dataObj.gamesLost += +matchResult.gamesLost;
        dataObj.points += +matchResult.points;
        if (matchResult.won) {
          dataObj.wins++;
        } else {
          dataObj.losses++;
        }
        dataObj[week] = `${weekData.opponent} (${weekData.match})`;
      }
      dataObj.percentage = dataObj.gamesWon / (dataObj.gamesLost + dataObj.gamesWon);
      dataObj.record = `${dataObj.wins}-${dataObj.losses}`;
      dataObj.gamesLabel = `Won:${dataObj.gamesWon}, Lost:${dataObj.gamesLost}`;
      resultArray.push(dataObj);
    }
  }

  winMatch(score: string): any {
    //return an object with {won:boolean, points: number, gamesWon: number, gamesLost: number} or undefined if not played
    if (score == fieldstone.NotPlayed) return undefined;
    let splitScore = score.split(',');
    let won = false;
    let points = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    for (let matchScore of splitScore) {
      let splitSetScore = matchScore.split('-');
      let homeScore = +splitSetScore[0];
      let opponentScore = +splitSetScore[1];
      gamesWon += homeScore;
      gamesLost += opponentScore;
      if (homeScore > opponentScore) points++;
    }
    if (points == 2) {
      points = 3;
      won = true;
    }
    return { points, won, gamesWon, gamesLost };
  }

  winSet(score: string): boolean {
    let set = score.split('-');
    return set[0] > set[1];
  }
}
