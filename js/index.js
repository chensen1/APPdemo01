
var app = {
    
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
//      app.receivedEvent('deviceready');
//		alert("我成功了")
		document.getElementById("btn").onclick=function(){
			alert("u");
 			navigator.camera.getPicture(onSuccess, onFail, { quality: 50 });
		
//       navigator.geolocation.getCurrentPosition(onSuccess, onError);
//       var onSuccess = function(position) {
//				alert('Latitude: '          + position.coords.latitude          + '\n' +
//					'Longitude: '         + position.coords.longitude         + '\n' +
//					'Altitude: '          + position.coords.altitude          + '\n' +
//					'Accuracy: '          + position.coords.accuracy          + '\n' +
//					'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//					'Heading: '           + position.coords.heading           + '\n' +
//					'Speed: '             + position.coords.speed             + '\n' +
//					'Timestamp: '         + new Date(position.timestamp)      + '\n');
//			};
//			
//			// onError回调函数接收一个PositionError对象
//			function onError(error) {
//				alert('code: '    + error.code    + '\n' +
//					'message: ' + error.message + '\n');
//			}
//		}
		
   		function onSuccess(imageData) {
   			alert(imageData)
		    var box = document.getElementById("box");
		    box.style.backgroundImage = "url("+imageData+")";
		    box.style.backgroundSize="cover";
		}
		
		function onFail(message) {
		   alert('Failed because: ' + message);
		}
//		
		
			

    },
    


};
