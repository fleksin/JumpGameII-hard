/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1) return 0;
    var maxReachPos = nums[0];
    var curMax = nums[0];
    var steps = 1;
    
    for(i = 1; i <= maxReachPos; i++){
        curMax = Math.max(curMax, i + nums[i]);
        if(i == nums.length-1) return steps;
        if(i == maxReachPos){
            maxReachPos = curMax ;
            steps++;
        }
    }
};