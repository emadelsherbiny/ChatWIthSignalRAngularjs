app.controller('chatController', ['$scope', function ($scope) {

    var chat = $.connection.chatHub;
    $scope.messages = [];
    $scope.fTime = true;
    $scope.lTime = false;
    $scope.btn = 'Join';
    $scope.message = "Joined..";

    chat.client.broadcastMessage = function (name, message) {
        $scope.messages.push({ UserName: name, Message: message });
        $scope.$apply();
    };
    $.connection.hub.start().done(function(){

    });
    $scope.send = function () {
        chat.server.send($scope.username, $scope.message);
        $scope.fTime = false;
        $scope.lTime = true;
        $scope.btn = 'Send';
        $scope.message = '';
        $scope.ctime = new Date();
    };

}]);