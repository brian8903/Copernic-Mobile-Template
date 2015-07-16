//Initialize app
var myApp = new Framework7();

//If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    //Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
}); 

//This is where you put your Javascript code for the feed.html page
myApp.onPageInit('feed',function (page) {
    //Javavscript Code Here  
});
//As you can see sometimes i use the data-page name "home" in the html files. This is because i execute the page at the begining of the app. See the line 188 for example.

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

//SWIPEOUT LISTS
//I call my class "action1"
$$('.action1').on('click', function () {
 myApp.alert('Action 1');
});

//I call my second class "action2"
$$('.action2').on('click', function () {
 myApp.alert('Action 2');
});


//GOOGLE MAP
myApp.onPageInit('map',function (page) {
 var myLatlng = new google.maps.LatLng(48.852873, 2.343627); //This is the position of your marker.
 var map;
 var mapOptions = {
   zoom: 12, //Zoom by default of the map.
   center: myLatlng //Center the map on your marker.
};
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
   var marker = new google.maps.Marker({
   position: myLatlng, //Position of the marker we have defined.
   map: map,
   title: 'Hello World!' //Title of the marker.
 });
});


//NOTIFICATIONS
myApp.onPageInit('notifications',function (page) {
 $$('.notification-default').on('click', function () {
 myApp.addNotification({
   title: 'Copernic', //Notification title.
   message: 'This is a simple notification message with title and message' //Notification content.
   });
});

 $$('.notification-full').on('click', function () {
 myApp.addNotification({
   title: 'Copernic', //Notification title.
   subtitle: 'Notification subtitle', //Notification subtitle.
   message: 'This is a simple notification message with custom icon and subtitle', //Notification content.
   media: '<i class="fa fa-heart"></i>' //Notification icon.
   });
});

 $$('.notification-custom').on('click', function () {
 myApp.addNotification({
   title: 'Copernic', //Notification title.
   subtitle: 'New message from John Doe', //Notification subtitle.
   message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.', //Notification content.
   media: '<img width="44" height="44" style="border-radius:100%" src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg">' //Notification icon.
   });
});

 $$('.notification-callback').on('click', function () {
 myApp.addNotification({
   title: 'Copernic', //Notification title.
   subtitle: 'New message from John Doe', //Notification subtitle.
   message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.', //Notification content.
   media: '<img width="44" height="44" style="border-radius:100%" src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg">', //Notification icon.
   onClose: function () {
      myApp.alert('Notification closed'); //Alert when notification is close.
      }
    });
   });
});


//CALENDAR
//DATE SELECTION
 var calendarDateFormat = myApp.calendar({
    input: '#calendar-date-format',
    dateFormat: 'DD, MM dd, yyyy'
   });
//MULTIPLE DATE SSELECTION
 var calendarMultiple = myApp.calendar({
    input: '#calendar-multiple',
    dateFormat: 'M dd yyyy',
    multiple: true
   });
//CALENDAR
 var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
 var calendarInline = myApp.calendar({
    container: '#calendar-inline-container',
    value: [new Date()],
    weekHeader: false,
    toolbarTemplate: 
    '<div class="toolbar calendar-custom-toolbar">' +
    '<div class="toolbar-inner">' +
    '<div class="left">' +
     '<a href="#" class="link icon-only"><i class="fa fa-chevron-left"></i></a>' +
    '</div>' +
    '<div class="center"></div>' +
    '<div class="right">' +
     '<a href="#" class="link icon-only"><i class="fa fa-chevron-right"></i></a>' +
    '</div>' +
    '</div>' +
    '</div>',
    onOpen: function (p) {
     $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
     $$('.calendar-custom-toolbar .left .link').on('click', function () {
      calendarInline.prevMonth();
     });
     $$('.calendar-custom-toolbar .right .link').on('click', function () {
      calendarInline.nextMonth();
     });
    },
    onMonthYearChangeStart: function (p) {
    $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    }
   });


//CHAT
 var conversationStarted = false;
 //Init messages
var myMessages = myApp.messages('.messages', {
 autoLayout: true
}); 
 // Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 // Handle message
$$('.messagebar .link').on('click', function () {
 // Message text
  var messageText = myMessagebar.value().trim();
 // Exit if empy message
  if (messageText.length === 0) return;
 // Empty messagebar
  myMessagebar.clear()
 // Random message type
  var messageType = (['sent' , 'received' ])[Math.round(Math.random())];
 // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
  }
 // Add message
  myMessages.addMessage({
  // Message text
   text: messageText,
  // Random message type
   type: messageType,
  // Day
   day: !conversationStarted ? 'Today' : false,
   time: !conversationStarted ? (new Date()).getHours() +  ':' + (new Date()).getMinutes() : false
  })
  // Update conversation flag
   conversationStarted = true;
  });




//LOGIN
    $$('.login-screen .button-round').on('click', function () {
        var username = $$('.login-screen input[name="username"]').val();
        var password = $$('.login-screen input[name="password"]').val();
  // Handle username and password
  myApp.alert('Username: ' + username + ', Password: ' + password, function () {
  });
 });


//GALLERY
  var mySwiper = new Swiper('.swiper-container', {
  preloadImages: false,
  lazyLoading: true,
  pagination: '.swiper-pagination'
  })




//CONTACT
  var myLatlng  = new google.maps.LatLng(48.852873, 2.343627); //Google Map
  var map;
  mapOptions = {
   zoom: 11,
   center: myLatlng,
   disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas-contact'),
      mapOptions);
   var marker = new google.maps.Marker({
   position: myLatlng,
   map: map,
   title: 'Hello World'
   });


myApp.onPageInit('checkbox', function (page) {
  myApp.closePanel();
});

myApp.onPageInit('feed', function (page) {
  myApp.closePanel();
});





