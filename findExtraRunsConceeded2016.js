function findExtraRunsConceeded2016(matches,deliveries){
    let extraRuns = {}
    let matchesOf2016 =[] ;
    let filteredIds ;
    matches.forEach((match)=>{
        if (match.season == '2016' ) matchesOf2016.push (match.id)
        //console.log(match.season == '2016')
    })
   filteredIds =  deliveries.filter((delivery)=> matchesOf2016.includes(delivery.match_id))
   filteredIds.forEach((delivery)=>{
    if (extraRuns[delivery.bowling_team] ){
        let prevExtra = extraRuns[[delivery.bowling_team]]
        extraRuns[delivery.bowling_team] = parseInt(delivery.extra_runs) + prevExtra

    }
    else{
        extraRuns[delivery.bowling_team] = parseInt(delivery.extra_runs)
    }
   })
   return extraRuns
    
}
module.exports = { findExtraRunsConceeded2016 }