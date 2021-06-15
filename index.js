const question1 = require('./findMatchesPerYear')
const question2 = require ('./findMatchesWonPerTeamPerYear')
const question3 = require ('./findExtraRunsConceeded2016')
const question4 = require ('./findEconomicalBowlers')
var http = require('http');
const csv = require('csv-parse')
const fs = require('fs');
let matches =[];
 let deliveries = [];
//function fetchdata(){
    const matchPromise = new Promise((resolve, reject) => {
    fs.createReadStream('matches.csv').pipe(csv({ columns: true },function(err,records){
        if (err) {
            console.error(err)
            throw err
        }
        records.map((record)=> matches.push(record))
        
    }))
    .on('end',()=> resolve(matches))
})
const deliveriesPromise = new Promise((resolve, reject) => {
    fs.createReadStream('deliveries.csv').pipe(csv({ columns: true },function(err,records){
        if (err) {
            console.error(err)
            throw err
        }
        records.map((record)=> deliveries.push(record))
    }))
    .on('end',()=> resolve(deliveries))
})

function writeToFile (data , filename) {
    const json = JSON.stringify(data, null, 2)
    fs.writeFile(filename, json, (err) => {
        if (err) {
            console.error(err)
            throw err
        }
        //console.log("done writing data")
    })
}
 Promise.all([matchPromise,deliveriesPromise]).then(data => {
    if(data.length) console.log("data fetched")
    let matchPerYear = question1.findMatchesPerYear(matches)
    writeToFile(matchPerYear,'./output/que1.json')
    let matchesWonPerTeamPerYear  = question2.findMatchesWonPerTeamPerYear(matches);
    writeToFile(matchesWonPerTeamPerYear ,'./output/que2.json')
    let extraRunsConceeded = (question3.findExtraRunsConceeded2016(matches,deliveries))
    writeToFile(extraRunsConceeded,'./output/que3.json')
    let top10EconomicalBowlers = (question4.findEconomicalBowlers(matches,deliveries))
    writeToFile(top10EconomicalBowlers,'./output/que4.json')
})
module.exports = { matchPromise,deliveriesPromise}