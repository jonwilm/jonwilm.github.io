$(function(){ml=$(".container").css("margin-left"),pr=$(".container").css("padding-right"),pl="calc("+ml+" + "+pr+")",992<$(window).width()?$("#informacion1 .text").css({"padding-left":pl,"padding-right":pr}):$("#informacion1 .text").css({"padding-left":pr,"padding-right":pr}),$(window).resize(function(){ml=$(".container").css("margin-left"),pr=$(".container").css("padding-right"),pl="calc("+ml+" + "+pr+")",992<$(window).width()?$("#informacion1 .text").css({"padding-left":pl,"padding-right":pr}):$("#informacion1 .text").css({"padding-left":pr,"padding-right":pr})})});