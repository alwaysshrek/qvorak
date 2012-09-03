var ajax_transport = new XMLHttpRequest();
var response, user_link, post_counter=0;
var posts_array = document.getElementsByClassName("pagedlist_item");

function getUserDetails () {
	// sending request and getting response
	ajax_transport.open("GET", "http://api.quora.com/api/logged_in_user?fields=link", true);
	ajax_transport.onreadystatechange = function () {
		'use strict';

		if (ajax_transport.readyState != 4) {
			return;
		}

		response = ajax_transport.responseText;
		response = response.substring("while(1);".length);

		//Parse json
		var json = JSON.parse(response);
		user_link = json.link;
	};
	ajax_transport.send(null);
}

function makeHelpPage () {
	var help_page=document.createElement("div");
	help_page.setAttribute("id","qvorak_shortcuts_help");
	help_page.setAttribute("style","display: none");
	help_page.innerHTML='	<div id="qvorak_shortcuts_curtain"></div> \
				<div id="qvorak_shortcuts_popup"> \
				<h1>Quora Shortcuts</h1> \
				<p> \
					<table>\
						<tbody>\
							<tr> <td>?</td><td>Toggle Help Page.</td> </tr>\
							<tr> <td>/</td><td>Focus the search box.</td> </tr>\
							<tr> <td>f</td><td>Follow/Unfollow a question.</td> </tr>\
							<tr> <td>Alt+Q</td><td>Add a question.</td> </tr>\
							<tr> <td>Alt+P</td><td>Add a post.</td> </tr>\
							<tr> <td>Alt+H</td><td>Go to Home.</td> </tr>\
							<tr> <td>Alt+U</td><td>Go to Profile.</td> </tr>\
							<tr> <td>Alt+N</td><td>Go to Notifications.</td> </tr>\
							<tr> <td>Alt+I</td><td>Go to Inbox.</td> </tr>\
							<tr> <td>Alt+B</td><td>Go to Boards.</td> </tr>\
							<tr> <td>Alt+T</td><td>Go to Topics.</td> </tr>\
						</tbody>\
					</table>\
				</p>\
				</div>'

	//help_page.addEventListener("click",this.toggle);
	document.body.appendChild(help_page);
}

/*************   MAIN STARTS   *************/

getUserDetails();
window.onload = makeHelpPage;

//***Home
/*---------------------------------------------------------------------------------------
Go to Home
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+H",function() {
	 if (window.location.href != 'http://www.quora.com/') { window.location.href = 'http://www.quora.com'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Add Question
/*---------------------------------------------------------------------------------------
Go to add a question
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+Q",function() {
	 if (window.location.href != 'http://www.quora.com/question/add/') { window.location.href = 'http://www.quora.com/question/add'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Add Post
/*---------------------------------------------------------------------------------------
Go to add a post
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+P",function() {
	 if (window.location.href != 'http://www.quora.com/post/add/') { window.location.href = 'http://www.quora.com/post/add'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Go to profile
/*---------------------------------------------------------------------------------------
Go to profile
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+U",function() {
	 if (window.location.href != user_link) { window.location.href = user_link; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Go to notifications
/*---------------------------------------------------------------------------------------
Go to notifications
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+N",function() {
	 if (window.location.href != 'http://www.quora.com/notifications/') { window.location.href = 'http://www.quora.com/notifications'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Go to inbox
/*---------------------------------------------------------------------------------------
Go to inbox
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+I",function() {
	 if (window.location.href != 'http://www.quora.com/inbox/') { window.location.href = 'http://www.quora.com/inbox'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Go to all boards
/*---------------------------------------------------------------------------------------
Go to all your boards except when in input mode
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+B",function() {
	 if (window.location.href != (user_link + '/boards')) { window.location.href = user_link + '/boards'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Go to all your topics
/*---------------------------------------------------------------------------------------
Go to all your topics except when in input mode
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+T",function() {
	 if (window.location.href != (user_link + '/topics')) { window.location.href = user_link + '/topics'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});

//***Toggle Help
/*---------------------------------------------------------------------------------------
Toggle the help page at all times
---------------------------------------------------------------------------------------*/
shortcut.add("Shift+slash",function() {
	if (document.getElementById("qvorak_shortcuts_help").style.display == 'none') {
		document.getElementById("qvorak_shortcuts_help").style.display='inline-block';
	} else {
		document.getElementById("qvorak_shortcuts_help").style.display='none';
	}
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': false,
	'target': document
});



//***Focus search box
/*---------------------------------------------------------------------------------------
Focus on all times except when inside the search box itself, answer box or the comment box
---------------------------------------------------------------------------------------*/
shortcut.add("slash",function() {
	document.getElementsByClassName("question_box")[0].focus();
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Question - Follow/Unfollow it
/*---------------------------------------------------------------------------------------
Follow/unfollow on all times except when inside the search box itself, answer box or the comment box
---------------------------------------------------------------------------------------*/
shortcut.add("F",function() {

	if (document.getElementsByClassName("follow_button").length) {
		document.getElementsByClassName("follow_button")[0].click();
	} else if (document.getElementsByClassName("unfollow_button").length) {
		document.getElementsByClassName("unfollow_button")[0].click();
	}

},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Feed - Scroll Next Post
/*---------------------------------------------------------------------------------------
When in the news feed, scroll next post one item at a time
---------------------------------------------------------------------------------------*/
/*shortcut.add("J",function() {

	if ( 
		(window.location.href == 'http://www.quora.com/') || 
		(window.location.href == 'http://www.quora.com/recent') ||
		(window.location.href.search('http://www.quora.com/#') != -1)
	   ) {
		if ( posts_array[post_counter].style.display != 'none' ) {
			console.log("Will scroll next post.");
			window.location.replace('#' + posts_array[post_counter].getElementsByTagName('a')[0].getAttribute('id'));
		} else {
			console.log("Hidden post encountered.");
		}
		if ( post_counter < posts_array.length ) { post_counter++; }
		console.log("COUNTER IS " + post_counter);
	}
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});*/



//***Feed - Scroll Previous Post
/*---------------------------------------------------------------------------------------
When in the news feed, scroll down one item at a time
---------------------------------------------------------------------------------------*/
/*shortcut.add("K",function() {

	if ( 
		(window.location.href == 'http://www.quora.com/') || 
		(window.location.href == 'http://www.quora.com/recent') ||
		(window.location.href.search('http://www.quora.com/#') != -1)
	   ) {
		if ( posts_array[post_counter].style.display != 'none' ) {
			console.log("Will scroll previous post.");
			window.location.replace('#' + posts_array[post_counter].getElementsByTagName('a')[0].getAttribute('id'));
		} else {
			console.log("Hidden post encountered.");
		}
		if ( post_counter > 0 ) { post_counter--; }
		console.log("COUNTER IS " + post_counter);
	}
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});*/
