var TopPot = function(storeLoc, minCustPerHour, maxCustPerHour,
  avgDonutsPerHour, hoursOpen) {
  this.storeLoc = storeLoc;
  this.minimum = minCustPerHour;
  this.maximum = maxCustPerHour;
  this.average = avgDonutsPerHour;
  this.hours = hoursOpen;

  this.donutsPerHour = function() {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1)+
      this.minimum) * this.average;
  };
  this.donutsPerDay = function() {
    return Math.floor(this.donutsPerHour() * this.hours);
  };
};

var DonutMaster = function() {
  this.storeList = [];
  this.addStore = function(storeLoc, minCustPerHour, maxCustPerHour,
    avgDonutsPerHour, hoursOpen) {
      var newStore = new TopPot(storeLoc, minCustPerHour,
        maxCustPerHour, avgDonutsPerHour, hoursOpen);
      this.storeList.push(newStore);
    };
  this.generateReport = function() {
    this.donutsCount = [];
    for (var index = 0; index < this.storeList.length; index++) {
      this.donutsCount.push(this.storeList[index].storeLoc,
        this.storeList[index].donutsPerHour().toFixed(2),
        this.storeList[index].donutsPerDay().toFixed(2),
        this.storeList[index].hours);
    }
  };
};

var dm = new DonutMaster();

dm.addStore('Downtown', 8, 43, 4.5, 12);
dm.addStore('Capitol Hill', 4, 37, 2, 11);
dm.addStore('South Lake Union', 9, 23, 6.33, 11);
dm.addStore('Wedgewood', 2, 28, 1.25, 10);
dm.addStore('Ballard', 8, 58, 3.75, 10);
dm.addStore('Pike Market', 9, 55, 5, 12);
dm.generateReport();

$(function(){
  $('#Downtown').html(dm.donutsCount[0]);
  $('#d1').html(dm.donutsCount[1]);
  $('#d2').html(dm.donutsCount[2]);
  $('#d3').html(dm.donutsCount[3]);
  $('#Capitol').html(dm.donutsCount[4]);
  $('#c1').html(dm.donutsCount[5]);
  $('#c2').html(dm.donutsCount[6]);
  $('#c3').html(dm.donutsCount[7]);
  $('#South').html(dm.donutsCount[8]);
  $('#s1').html(dm.donutsCount[9]);
  $('#s2').html(dm.donutsCount[10]);
  $('#s3').html(dm.donutsCount[11]);
  $('#Wedgewood').html(dm.donutsCount[12]);
  $('#w1').html(dm.donutsCount[13]);
  $('#w2').html(dm.donutsCount[14]);
  $('#w3').html(dm.donutsCount[15]);
  $('#Ballard').html(dm.donutsCount[16]);
  $('#b1').html(dm.donutsCount[17]);
  $('#b2').html(dm.donutsCount[18]);
  $('#b3').html(dm.donutsCount[19]);
  $('#Pike').html(dm.donutsCount[20]);
  $('#p1').html(dm.donutsCount[21]);
  $('#p2').html(dm.donutsCount[22]);
  $('#p3').html(dm.donutsCount[23]);
  $(".down").hide();
  $(".d1").on("click", function(){
    $(".down").toggle();
  });

  $(".cap").hide();
  $(".c1").click(function(){
    $(".cap").toggle();
  });

  $(".south").hide();
  $(".s1").click(function(){
    $(".south").toggle();
  });

  $(".wedge").hide();
  $(".w1").click(function(){
    $(".wedge").toggle();
  });

  $(".ballard").hide();
  $(".b1").click(function(){
    $(".ballard").toggle();
  });

  $(".pike").hide();
  $(".p1").click(function(){
    $(".pike").toggle();
  });
});
