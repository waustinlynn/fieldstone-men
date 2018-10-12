import { Component, OnInit } from '@angular/core';
import * as fieldstone from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fieldstone Men';
  fieldDivision: any = {};
  stoneDivision: any = {};
  constructor() {

  }

  ngOnInit() {
    this.fieldDivision.data = [];
    this.fieldDivision.header = 'Field';
    this.stoneDivision.data = [];
    this.stoneDivision.header = 'Stone';
    this.createTeamList('field', this.fieldDivision.data);
    this.createTeamList('stone', this.stoneDivision.data);
    this.fieldDivision.data = this.fieldDivision.data.sort(this.sort);
    this.stoneDivision.data = this.stoneDivision.data.sort(this.sort);
  }

  sort(a: any, b: any) {
    if (a.points == b.points) {
      return a.percentage > b.percentage ? -1 : 1;
    }
    return a.points > b.points ? -1 : 1;
  }

  createTeamList(divisionName: string, resultArray: any[]) {
    let divisionData = fieldstone.data[divisionName];
    //loop through teams
    for (let team in divisionData) {
      let dataObj: any = {};
      dataObj.wins = 0;
      dataObj.losses = 0;
      dataObj.points = 0;
      dataObj.gamesWon = 0;
      dataObj.gamesLost = 0;
      dataObj.label = team;
      dataObj.weeks = [];
      //loop through weeks to calculate matches
      for (let week in divisionData[team]) {
        let weekObj: any = {};
        dataObj[week] = {};
        let weekData = divisionData[team][week];
        weekObj.home = weekData.home;
        let matchResult = this.winMatch(weekData.match);
        weekObj.opponent = weekData.opponent;
        weekObj.result = weekData.match;
        if (matchResult == undefined) {

          dataObj.weeks.push(weekObj);
          continue;
        }
        dataObj.gamesWon += +matchResult.gamesWon;
        dataObj.gamesLost += +matchResult.gamesLost;
        dataObj.points += +matchResult.points;
        if (matchResult.won) {
          dataObj.wins++;
          weekObj.win = true;
          dataObj[week].win = true;
        } else {
          dataObj[week].win = false;
          weekObj.win = false;
          dataObj.losses++;
        }
        dataObj.weeks.push(weekObj);
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
