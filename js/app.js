/*
  GA SF JSD6
  Daana Banerjee
  Please add all Javascript code to this file.
*/


$(document).ready(function() {
    $('#content').show();
    $('#loading').hide();
});

// add click event for article
// show the pop up (remove class 'hidden')
// make ajax request to page
// on success,
// hide loading
// replace popup contents with web data
// make the x hide
// hide popup when X is clicked

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
var guardianApiKey = 

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
var buzzfeedApiKey = 

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
var espnApiKey = 

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

