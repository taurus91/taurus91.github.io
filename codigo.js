$(function(){    
    $('#countdown').countdown({
        timezone:-6, //zona horaria mexico
        
        //establecemos la fecha exacta en qué termina el countdown
        year: 2021,
        month: 8,
        day: 12,
        hour: 21, //formato 24hr
        minute:0,
        second:0,
        
    });
   
});