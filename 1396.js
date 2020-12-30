
var UndergroundSystem = function () {
  this.averageTimes = new Map();
  this.tracker = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.tracker.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let [startStation, startTime] = this.tracker.get(id);
  let key = [startStation, stationName].join(' ');
  if (this.tracker.has(key)) {
    let [prevTime, count] = this.tracker.get(key);
    let newTime = (prevTime + (t - startTime));
    count++;
    this.tracker.set(key, [newTime, count]);
  } else {
    this.tracker.set(key, [t - startTime, 1]);
  }

  this.tracker.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  let key = [startStation, endStation].join(' ');
  let [totalTime, count] = this.tracker.get(key);
  return totalTime / count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */