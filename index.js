
const { MinPriorityQueue, MaxPriorityQueue, PriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue')


let costPerDayList
let memo  
let dayList
let durations = [1, 7, 30]
var mincostTickets = function(days, costs) {
  costPerDayList = costs
  memo = new Array(days.length).fill(-1)
  dayList = days
  

  return dp(0)
}

function dp (i) {
    if (i >= dayList.length) return 0
    if (memo[i] !== -1) return memo[i]
    let  j = i
    let ans = Number.MAX_VALUE
    for (let coinIdx = 0; coinIdx < 3; coinIdx++) {
        while (j < dayList.length && dayList[j] < dayList[i] + durations[coinIdx])
            j++
        ans = Math.min(ans, dp(j) + costPerDayList[coinIdx])
    }

    memo[i] = ans
    return ans 
}



module.exports = mincostTickets
