var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  angular.forEach(data, function(ev, index) {
    ev.date = new Date(ev.date);
    ev.index = index+1;
  });

  $scope.data = data;
  $scope.win = {};
  $scope.win.lakku = noOfWins('lakku');
  $scope.win.raghu = noOfWins('raghu');
  $scope.win.siva = noOfWins('siva');
  $scope.win.bugga = noOfWins('bugga');
  $scope.win.arcot = noOfWins('arcot');
  $scope.win.ramesh = noOfWins('ramesh');
  $scope.win.harsh = noOfWins('harsh');
  $scope.win.sai = noOfWins('sai');
  $scope.win.khushboo = noOfWins('khushboo');
  $scope.total = total();
  
  function noOfWins(attr) {
    var count = 0;
    for(var i=0; i<data.length; i++) {
      if(data[i].result === data[i][attr] && data[i].result) {
        count++;
      }
    }
    return count;
  }
  
  function total() {
    var count = 0;
    for(var i=0; i<data.length; i++) {
      if(data[i].result) {
        count++;
      }
    }
    return count;
  }
});

