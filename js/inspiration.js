$(document).ready(function(){
  $('.modify').hide();

  $('button#Search').click(function(){
    $('#feed').html(''); 
    $('footer').hide();
            
    $.getJSON('https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+"built-in bookcase"+'&jsoncallback=?',function(response){ 
    
    
      $.each(response.photos.photo, function(i,photo){
      
        data = '<a href="http://www.flickr.com/photos/'+photo.owner+'/" target="_blank"><img src="http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg"></a>';     
        $('#feed').append(data);                 
      });
    });   
  }); 

  $('#here').click(function(){
  	$('footer').show();
  	$('.modify').show();
  	$('#feed').html(''); 
    var keyWord = $('#keyword').val(); 
    $('button#search').click(function(){
      $('footer').hide();
    	$.getJSON('https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+keyWord+'&jsoncallback=?',function(response){ 
    
    
      $.each(response.photos.photo, function(i,photo){
      
        data = '<a href="http://www.flickr.com/photos/'+photo.owner+'/" target="_blank"><img src="http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg"></a>';     
        $('#feed').append(data);                 
    });
    });
  	
  });
  });

  $('.inspirationPics').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

});

