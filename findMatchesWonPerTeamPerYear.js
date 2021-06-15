function findMatchesWonPerTeamPerYear(matches){
    let matchesWonPerTeamPerYear = {};
    matches.forEach((match)=>{
       if (matchesWonPerTeamPerYear[match.season]) {
        if(matchesWonPerTeamPerYear[match.season][match.winner]){
            matchesWonPerTeamPerYear[match.season][match.winner] +=1
        }
        else{
            matchesWonPerTeamPerYear[match.season][match.winner] =1
        }
       }
       else {
        matchesWonPerTeamPerYear[match.season] = {}
        matchesWonPerTeamPerYear[match.season][match.winner] = 1
       }
    })
    return matchesWonPerTeamPerYear
}
module.exports = {findMatchesWonPerTeamPerYear}