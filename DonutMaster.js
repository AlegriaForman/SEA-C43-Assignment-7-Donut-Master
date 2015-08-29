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
  this.toHtml = function() {
    return '<td class="storeLoc">' + this.storeLoc + '</td>' +
    '<td class="donutsPerHour">' + this.donutsPerHour() + '</td>' +
    '<td class="donutsPerDay">' + this.donutsPerDay() + '</td>' +
    '<td class="hours">' + this.hours + '</td>';
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
  this.toHtml = function() {
    $.each(this.storeList, function(index, store) {
      $tr = $('<tr>');
        $tr.append(store.toHtml());
        $('#info').append($tr);
    });
  };
};

var dm = new DonutMaster();

dm.addStore('Downtown', 8, 43, 4.5, 12);
dm.addStore('Capitol Hill', 4, 37, 2, 11);
dm.addStore('South Lake Union', 9, 23, 6.33, 11);
dm.addStore('Wedgewood', 2, 28, 1.25, 10);
dm.addStore('Ballard', 8, 58, 3.75, 10);
dm.addStore('Pike Market', 9, 55, 5, 12);

document.getElementById('addButton').addEventListener('click', function() {
  var newStoreLoc = document.getElementById('newLocation').value;
  var newMinCust = document.getElementById('newMinCustPh').value;
  var newMaxCust = document.getElementById('newMaxCustPh').value;
  var newAvgDon = document.getElementById('newAvgDonuts').value;
  var newHoursOpen = document.getElementById('newHoursOpen').value;
  var newStoreTp = [newStoreLoc, newMinCust, newMaxCust, newAvgDon, newHoursOpen];
  dm.addStore(newStoreTp[0], newStoreTp[1], newStoreTp[2], newStoreTp[3], newStoreTp[4]);
  $('#info tr:gt(0)').remove();
    dm.toHtml();
});

dm.generateReport();

$(function(){

  $('#info').hide();
  $('#donutStores').one('click', function() {
    $('#info tr:gt(0)').remove();
  dm.toHtml();
  });

  $('#donutStores').on('click', function(){
    $('#info').slideToggle("slow", "linear");
  });

  $('#explode').click(function(){
    $('#donutSlide').toggle('explode', { pieces: 400 }, 1500);
  $('#explode').hide();
  });

  $('.downt').hide();
  $('.d1').hover(function(){
    $('.downt').toggle();
  });

  $('.cap').hide();
  $('.c1').hover(function(){
    $('.cap').toggle();
  });

  $('.south').hide();
  $('.s1').hover(function(){
    $('.south').toggle();
  });

  $('.wedge').hide();
  $('.w1').hover(function(){
    $(".wedge").toggle();
  });

  $('.ballard').hide();
  $('.b1').hover(function(){
    $('.ballard').toggle();
  });

  $('.pike').hide();
  $('.p1').hover(function(){
    $('.pike').toggle();
  });

});
