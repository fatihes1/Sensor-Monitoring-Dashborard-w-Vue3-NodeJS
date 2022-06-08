class Log {
    constructor(reportID, timeStamp,humidity,temp,brightness) {
      this.reportID = reportID;
      this.timeStamp = timeStamp;
      this.humidity = humidity;
      this.temp = temp;
      this.brightness = brightness;
    }
}

module.exports = Log;