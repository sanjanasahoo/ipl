function findEconomicalBowlers (matches,deliveries){
    let matchesOf2015 =[];
    let filteredIds;
    let bowlerBallsAndRuns = {};
    let bowlerEconomy ={}
    let top10bowlers = {}
    matches.forEach((match)=>{
        if (match.season == '2015' ) matchesOf2015.push (match.id)
    })
    filteredIds =  deliveries.filter((delivery)=> matchesOf2015.includes(delivery.match_id))
    filteredIds.forEach((delivery)=>{
        if(bowlerBallsAndRuns[delivery.bowler]){
            let [ balls,runs] = bowlerBallsAndRuns[delivery.bowler]
            bowlerBallsAndRuns[delivery.bowler] = [balls+1 , runs + parseInt(delivery.total_runs)]
        }else{
            bowlerBallsAndRuns[delivery.bowler] = [ 1, parseInt(delivery.total_runs)]
        }
    })
    
     bowlerEconomy = Object.entries(bowlerBallsAndRuns).map(([bowler,[balls, runs]])=>{
        
        let economy = ((runs * 6)/ balls).toFixed(2)
        return [bowler,economy]
        
    })
    bowlerEconomy = bowlerEconomy.sort((a,b)=>parseInt(a[1])-parseInt(b[1])).slice(0,10)
     bowlerEconomy.forEach(([bowler,economy])=>{
        top10bowlers[bowler] = economy
    })
    return top10bowlers
}
module.exports = { findEconomicalBowlers}