function findMatchesPerYear(matches){
 let  matchPerYear  = {}
 matches.forEach((match)=>{
     if(matchPerYear[match.season]) matchPerYear[match.season]+=1
     else {
        matchPerYear[match.season] = 1
     }
 })
 return matchPerYear
}
module.exports = { findMatchesPerYear }