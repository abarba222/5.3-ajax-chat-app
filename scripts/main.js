(function(){
  'use strict';

  var username = localStorage.getItem('username') || '';
  var comment= '';

  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      username = $(this).find('.login-form-username').val();
      localStorage.setItem('username', username);
      window.location.hash = '/chat';
    });

    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });

  function route() {
    switch(window.location.hash) {
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        renderChat();
        break;
    }
  }

  function renderChat() {
    $('.application').html(JST['chat']());
    console.log('username:', username);
  }

var getComments = function() {
  var data;


  return data;

};

/*$.get('/login/chat.html', function (html){
  $('#target').html(html);
});

$.post('/login/save', {name: username}, {created_at:new Date()},
  {content: ''})

/*var messages = {
    username: 'abarba222'
    created_at: new Date()
    content: 'your Message';
  }*/

  $(document).on('submit', '.leave-comment-chat', function(event){
    event.preventDefault();
    comment = $(this).find('.leave-comment-chat-messages').val();
    console.log({
      username: username,
      created_at: new Date(),
      content:comment
    });

    $.ajax({
      url:  ' http://tiny-lasagna-server.herokuapp.com/collections/messages/',
      type: 'POST',
      data: {
        username: username,
        created_at: new Date(),
        content: comment
      }
    });

  });






})();
