/*
* Copyright (c) 2012, Shrikanth Shetty
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
* 1. Redistributions of source code must retain the above copyright
*    notice, this list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. The name of the author may not be used to endorse or promote products
*    derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
* IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
* IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
* INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
* NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var ajax_transport = new XMLHttpRequest();
var response, user_link, post_counter=0;
//var posts_array = document.getElementsByClassName("pagedlist_item");

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
				<h2>Common Tasks</h2> \
				<p> \
					<table>\
						<tbody>\
							<tr> <td>?</td><td>Toggle Help Page.</td> </tr>\
							<tr> <td>/</td><td>Focus the search box.</td> </tr>\
							<tr> <td>f</td><td>Follow/Unfollow a question.</td> </tr>\
							<tr> <td>Alt+Z</td><td>Unfocus the input fields.</td> </tr>\
							<tr> <td>Alt+Q</td><td>Add a Question.</td> </tr>\
							<tr> <td>Alt+P</td><td>Add a Post.</td> </tr>\
						</tbody>\
					</table>\
				</p>\
				<h2>Navigation</h2> \
				<p> \
					<table>\
						<tbody>\
							<tr> <td>Alt+H</td><td>Go to Home.</td> </tr>\
							<tr> <td>Alt+U</td><td>Go to Profile.</td> </tr>\
							<tr> <td>Alt+N</td><td>Go to Notifications.</td> </tr>\
							<tr> <td>Alt+I</td><td>Go to Inbox.</td> </tr>\
							<tr> <td>Alt+B</td><td>Go to Boards.</td> </tr>\
							<tr> <td>Alt+T</td><td>Go to Topics.</td> </tr>\
							<tr> <td>Alt+O</td><td>Go to Open questions.</td> </tr>\
							<tr> <td>Alt+A</td><td>Go to A2A.</td> </tr>\
							<tr> <td>Alt+D</td><td>Go to Drafts.</td> </tr>\
							<tr> <td>Alt+V</td><td>Go to Views.</td> </tr>\
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
	'disable_in_input': true,
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



//***UnFocus search box
/*---------------------------------------------------------------------------------------
Unfocus the search/input boxes
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+Z",function() {
	document.activeElement.blur();
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input':false,
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



//***Goto Open Questions
/*---------------------------------------------------------------------------------------
Goto open questions
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+O",function() {
	if (window.location.href != 'http://www.quora.com/home/open') { window.location.href = 'http://www.quora.com/home/open'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Goto A2A
/*---------------------------------------------------------------------------------------
Goto A2A
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+A",function() {
	if (window.location.href != 'http://www.quora.com/asked_to_answer') { window.location.href = 'http://www.quora.com/asked_to_answer'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Goto saved Drafts
/*---------------------------------------------------------------------------------------
Goto saved Drafts
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+D",function() {
	if (window.location.href != 'http://www.quora.com/home/drafts') { window.location.href = 'http://www.quora.com/home/drafts'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Goto views
/*---------------------------------------------------------------------------------------
Goto views
---------------------------------------------------------------------------------------*/
shortcut.add("Alt+V",function() {
	if (window.location.href != 'http://www.quora.com/views') { window.location.href = 'http://www.quora.com/views'; }
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});



//***Answer a question
/*---------------------------------------------------------------------------------------
Focus the answer box if on a question's page
---------------------------------------------------------------------------------------*/
/*shortcut.add("A",function() {
	if ( document.getElementsByClassName("question row").length != 0 ) {
		var len = document.getElementsByClassName("pagedlist_item").length;
		document.getElementsByClassName("pagedlist_item")[len-1].getElementsByClassName("qtext_editor_content qed_content")[0].focus();
		scrollTo(document.getElementsByClassName("pagedlist_item")[len-1].getElementsByClassName("qtext_editor_content qed_content")[0]);
	}
},{
	'type':	'keydown',
	'propagate': false,
	'disable_in_input': true,
	'target': document
});*/



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
