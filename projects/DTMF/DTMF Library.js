class DTMF {
  constructor(){
    this.vol = 1;
    /*this.gBATime = 955;
    this.gBWTime = 60;
    This is for my particular computer + browser*/
    this.gBATime = 900;
    this.gBWTime = 60;
    this.start = function(f0, f1){
      if(f0 !== null && f0 !== undefined && f1 !== null && f1 !== undefined){
        if(typeof(this.context) !== "object"){
          this.context = new AudioContext();
          this.gain = this.context.createGain();
          this.gain.gain.value = 0;/*to prevent one oscillator being heard before the other*/
          this.gain.connect(this.context.destination);
          this.o0 = this.context.createOscillator();
          this.o1 = this.context.createOscillator();
          this.o0.frequency.value = f0;
          this.o0.connect(this.gain);
          this.o1.frequency.value = f1;
          this.o1.connect(this.gain);
          this.o1.start();
          this.o0.start();
          this.gain.gain.value = 0.3*this.vol;
          return f0 + ", " + f1;
        } else throw this.error[0];
      }else throw this.error[2];
    };
    this.end = function(){
      if(typeof(this.context) == "object"){
        this.o0.stop();
        this.o1.stop();
        this.context.close();
        this.context = undefined;
      } else throw this.error[1];
    };
    this.greenBox = async function(action, wink){
      if(action !== undefined && wink !== undefined){
        if(typeof(this.context) !== "object"){
          await this.start(action[0], action[1]);
          await this.sleep(this.gBATime);
          this.end();
          await this.start(wink[0], wink[1]);
          await this.sleep(this.gBWTime);
          this.end();
          await this.sleep(60);
        }else throw this.error[0];
      }else throw this.error[2];
    }
  }

}

DTMF.prototype.sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

DTMF.prototype.error = [
  new Error("Already running"),
  new Error("Not running"),
  new Error("Not enough or wrong parameters")
];

DTMF.prototype.frequencies = {
  "standard":{
    "d0":[941, 1336],
    "d1":[697, 1209],
    "d2":[697, 1336],
    "d3":[697, 1477],
    "d4":[770, 1209],
    "d5":[770, 1336],
    "d6":[770, 1477],
    "d7":[852, 1209],
    "d8":[852, 1336],
    "d9":[852, 1477],
    "A":[697, 1633],
    "B":[770, 1633],
    "D":[852, 1633],
    "E":[941, 1633],
    "asterisk":[941, 1209],
    "hash":[941, 1477]
  },
  "special":{
    "US":{
      "busy":[480, 620],
      "ringback":[480, 440],
      "dial":[350, 440]
    },
    "UK":{
      "busy":[0, 400],
      "ringback":[450, 400],
      "dial":[350, 440]
    },
    "EU":[0, 425],
    "box": {
      "blue": [0, 2600],
      "red": [1700, 2200],
      "green": {
        "collectCoin": [700, 1100],
        "returnCoin": [1100, 1700],
        "ringback": [700, 1700],
        /*These should be sounded for at least 900 ms, 90 ms of wink(2600hz) or symbol 8(900hz, 1500hz) and then 60 ms of silence */
        "wink": [0, 2600]
      }
    },
    "operator": {
      "d1": [700, 900],
      "d2": [700, 1100],
      "d3": [900, 1100],
      "d4": [700, 1300],
      "d5": [900, 1300],
      "d6": [1100, 1300],
      "d7": [700, 1500],
      "d8": [900, 1500],
      "d9": [1100, 1500],
      "d0": [1300, 1500],
      "d10": [1300, 1500],
      "d11": [700, 1700],
      "ST3": [700, 1700],
      "d12": [900, 1700],
      "ST2": [900, 1700],
      "KP": [1100, 1700],
      "KP2": [1300, 1700],
      "ST": [1500, 1700]
    }
  }
};
