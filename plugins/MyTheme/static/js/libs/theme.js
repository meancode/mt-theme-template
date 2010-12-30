/*
 * This file is for scripts that are specific to the TMR Theme
 */
$(document).ready(function(){
    if ($('#comments-form')) {
      var form = $('#comments-form').commentForm( { 
	      insertMethod: 'append',
	      target: '.comments-content'
	  });
      $('.reply').reply({
        sourceForm: form
      });
    };
    $('#greeting').greet({
        mode: 'mtpro',
        indicator: mt.blog.staticWebPath+'plugins/TMR/indicator.black.gif'
    });
    if ($('#comments-form') || $('#contact-form')) {
      $('#comment-greeting').greet({
        loggedInMessage: 'Welcome back, %u! (%p | %o)',
        loggedOutMessage: (mt.blog.registration.required ? '%i to leave a comment.' : '%i to create a custom profile for yourself.\
'),
        loginText: 'Sign in',
        indicator: mt.blog.staticWebPath+'images/indicator.white.gif',
        mode: 'mtpro',
        entryId: $('#comments-form input[name=entry_id]').val(),
        editProfileText: 'edit profile',
        logoutText: 'sign out'
        //,returnToURL: returnto
      });
      if (mt.blog.registration.required) {
	  $('#comments-form').onauthchange( function(e,u) {
		  if (!u.is_authenticated) {
		      $(this).hide();
		  } else {
		      $(this).show();
		  }
	      });
      }
      $('#comments-open-data').onauthchange( function(e,u) {
	      if (u.is_authenticated) { $(this).hide(); } else { $(this).show(); } 
	  });
      $('#auth-options').onauthchange( function(e,u) {
	      if (u.is_authenticated) { $(this).hide(); } else { $(this).show(); } 
	  });
    };
    // Sign-in auth tab switcher - auth_types is defined in the login page.
    $('#auth-options li').click(function(){
        authID = $(this).attr('id').replace("signin_option_", "");
        authOption = $("#signin_option_" + authID);
        if (authOption) {
            for (var i = 0; i < auth_types.length; i++) {
                var auth_type = auth_types[i];
                if (auth_type == authID) {
                    $('#signin_with_' + auth_type).show();
                    $('#signin_option_' + auth_type).addClass('selected');
                } else {
                    $('#signin_with_' + auth_type).hide();
                    $('#signin_option_' + auth_type).removeClass('selected');
                }
            }
        };
    })
  var changeUserpic = $('#userpic-field .field-content #change-userpic');
  var cancelUserpic = $('#userpic-field .field-content #cancel-userpic');
  var removeUserpic = $('#userpic-field .field-content #remove-userpic');
  var changePassword = $('#profile a#change-password');
  // hide input change link present
  $(changeUserpic).siblings("input").hide();
  // onclick: hide link, img. show input
  $(changePassword).click(function() {
      var speed = 500;
      $(this).hide();
      $('#password-fields').show(speed);
  });
  if (changeUserpic.size()) {
    $(changeUserpic).click(function() {
      var speed = 500;
      $(this).hide(speed);
      $(this).parent().siblings("img").hide(speed);
      $(this).parent().siblings("input").show(speed);
      cancelUserpic.show(speed);
      removeUserpic.hide(speed);
      $(this).parent().addClass('active');
      return false;
    });
    $(cancelUserpic).click(function() {
      var speed = 500;
      $(this).hide(speed);
      $(this).siblings("img").show(speed);
      $(this).siblings("input").hide(speed);
      removeUserpic.show(speed);
      changeUserpic.show(speed);
      $(this).parent().removeClass('active');
      return false;
    });
  };
  if (removeUserpic.size()) {
    $(removeUserpic).click(function() {
      var id = $('[name="id"]').val();
      var token = $('[name="magic_token"]').val();
      var postData = { __mode: 'remove_userpic', user_id: id, magic_token: token  };
      $.post(mt.blog.community.script, postData,
	     function(data){
	       var speed = 500;
	       $(removeUserpic).hide(speed);
               $(removeUserpic).parent().siblings("img").hide(speed);
               $(removeUserpic).parent().siblings("input").show(speed);
	       $(changeUserpic).hide(speed);
	     }
      );
      return false;
	});
  };
});

/***
 * Functions to follow/leave feature
 */

function script_follow(id) {
    // Get user
    var u = mtGetUser();
    // Die if not logged in
    if (!u || !u.name) return;
    
    $.ajax({
      type: "POST",
      url: mt.blog.community.script,
      data: '__mode=follow&id=' + id + '&magic_token=' + u.sid + '&jsonp=follow',
      success: function(r){
          eval(r);
      }
    });
    $('.following_' + id + '_else').hide();
    $('.following-status-' + id).html('<img src="' + mt.blog.staticWebPath + 'images/indicator.white.gif" height="10" width="10" alt="Following..." />');
}

function script_leave(id) {
    // Get user
    var u = mtGetUser();
    // Die if not logged in
    if (!u || !u.name) return;

    $.ajax({
      type: "POST",
      url: mt.blog.community.script,
      data: '__mode=leave&id=' + id + '&magic_token=' + u.sid + '&jsonp=leave',
      success: function(r){
          eval(r);
      }
    });
    $('.following_' + id).hide();
    $('.following-status-' + id).html('<img src="' + mt.blog.staticWebPath + 'images/indicator.white.gif" height="10" width="10" alt="Leaving..." />');
}

function follow(user_info) {
    conditional_block(true, '.following_' + user_info['id']);
    $('.following-status-' + user_info['id']).html('');
}

function leave(user_info) {
    conditional_block(false, '.following_' + user_info['id']);
    $('.following-status-' + user_info['id']).html('');
}


function conditional_block(cond, selector) {
    var true_block = $(selector);
    var false_block = $(selector + '_else');
    if (cond) {
        $(false_block).hide();
        if ($(true_block).size()) {
            var display = $(true_block).attr('mt:display_style');
            if (!display && $(false_block).size())
                display = $(false_block).attr('mt:display_style');
            if (!display) display = '';
            $(true_block).show();
        }
    } else {
        $(true_block).hide();
        if ($(false_block).size()) {
            var display = $(false_block).attr('mt:display_style');
            if (!display && $(true_block).size())
                display = $(false_block).attr('mt:display_style');
            if (!display) display = '';
            $(false_block).show();
        }
    }
}