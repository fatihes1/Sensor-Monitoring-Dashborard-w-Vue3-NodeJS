class Log {
    constructor(reportID, timeStamp, smoke, co2, metan, dust, o2) {
      this.reportID = reportID;
      this.timeStamp = timeStamp;
      this.smoke = smoke;
      this.co2 = co2;
      this.metan = metan;
      this.dust = dust;
      this.o2 = o2;
    }
}

module.exports = Log;