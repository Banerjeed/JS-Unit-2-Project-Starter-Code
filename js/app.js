/*
  GA SF JSD6
  Daana Banerjee
  Please add all Javascript code to this file.
*/


$(document).ready(function() {
    $('#content').show();
    $('#loading').hide();
});


//API functions
'use strict';

function buildHeadline(title, section, imagePath, impressions) {
	// create elements
	var $headline = $('<article/>').addClass('article');
	var $featuredImage = $('<section/>').addClass('featuredImage');
	var $articleContent = $('<section/>').addClass('articleContent');
	var $impressions = $('<section/>').addClass('impressions');

	var $createImage = $('<img/>').attr("src", imagePath);
	$featuredImage.append($createImage);
	$impressions.text(impressions);

	// add elements to content
	var $articleName = $('<h3/>').text(title);
	var $sectionName = $('<h6/>').text(section);
	var $articleTitle = $('<a/>').append($articleName);
	$articleContent.append($articleTitle).append($sectionName);

	// add elements to article
	var $clearfix = $('<div/>').addClass('clearfix');
	$headline.append($featuredImage).append($articleContent).append($impressions).append($clearfix);

	// add article to #main
	$('#main').append($headline);
}

var guardianUrl = 'https://content.guardianapis.com/search?api-key='
var guardianApiKey = '56e51ab3-e876-4bdc-a292-e89f0a7b3688'

$.ajax({
  url: guardianUrl+guardianApiKey,
  data:{
    format: 'json'
  },
	success: function(data) {
		var headlines = data.response.results;
		console.log(headlines);
		$.each(headlines, function() {
			buildHeadline(this.webTitle, this.sectionName, "images/guardian.png", this.webTitle.length)
		});
	},
	error: function() {
	}
});

var buzzfeedUrl = 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey='
var buzzfeedApiKey = 'd3a65f1106d948c99550ea34b7b15cea'

$.ajax({
  url: buzzfeedUrl+buzzfeedApiKey,
  data:{
    format: 'json'
  },
	success: function(data) {
		var headlines = data.articles;
		console.log(headlines);
		$.each(headlines, function() {
			buildHeadline(this.title, "Pop Culture", "images/buzzfeed.jpg", this.title.length)
		});
	},
	error: function() {
	}
});

var espnUrl = 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey='
var espnApiKey = 'd3a65f1106d948c99550ea34b7b15cea'

$.ajax({
  url: espnUrl+espnApiKey,
  data:{
    format: 'json'
  },
	success: function(data) {
		var headlines = data.articles;
		console.log(headlines);
		$.each(headlines, function() {
			buildHeadline(this.title, "Sports", "images/espn.png", this.title.length)
		});
	},
	error: function() {
	}
});

 // Article Popup Overlay
  $(document.body).on("click", ".articleContent a h3", function(){
    var title = $(this).text();
    $("#popUp").removeClass("hidden loader");
    $("#popUp h1").text(title);
    if (description) {
      $("#popUp p").html(description);
    } else {
      $("#popUp p").text("This story is by " + author );
    }
    $(".popUpAction").attr("href", url);
  })
  // Close popup 
  $(".closePopUp").on("click",function(){
    $("#popUp").addClass("hidden");
  })
  // Toggle Search
  $("#search img").on("click", function(){
  	$("section #search").toggleClass("active");
  })
  // Loading window 
  $("section.container a h1").on("click", function(){
  	setTimeout(loader, 500);
  	$("section.container span").text("Source Name");
  	$("article").show();
  })
  // Sort articles by date  
  $("article").sort(sortDescending);
  $("input").on("keyup", search);


