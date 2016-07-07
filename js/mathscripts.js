console.log("entered javascript file");
//solutions are visible by default if changed in the css file then set below to false
var solutionsVisible = true;
//answers are visible by default if changed in the css file then set below to false
var answersVisible = true;

var unit123 = "u1";
//loads menu sidebar with answer and solution toggles as well as links to divs with Id u1,u2, etc
// document.write("      <nav class=\"w3-sidenav w3-white w3-animate-left\" style=\"display:none;z-index:5\" id=\"mySidenav\">");
// document.write("         <a class=\"w3-grey\" href=\"#\">Go to<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#top\" onclick=\"restoreUnits();\">Top<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#u1\" onclick=\"restoreUnits();\">Unit 1<\/a>");
// // document.write("         <a class=\"w3-hover-green\" href=\"#u1s1a\" onclick=\"w3_close()\">1.1A<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#u2\" onclick=\"restoreUnits();\">Unit 2<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#u3\" onclick=\"restoreUnits();\">Unit 3<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#u4\" onclick=\"restoreUnits();\">Unit 4<\/a>");
//
// document.write("         <a class=\"w3-grey\" href=\"#\">Print<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#\" onclick=\"printUnit(\'u1\');\">Unit 1<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#\" onclick=\"printUnit(\'u2\');\">Unit 2<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#\" onclick=\"printUnit(\'u3\');\">Unit 3<\/a>");
// document.write("         <a class=\"w3-hover-green\" href=\"#\" onclick=\"printUnit(\'u4\');\">Unit 4<\/a>");
// document.write("         <a class=\"w3-grey\" href=\"#\">Toggle<\/a>");
// document.write("         <a id=\"togglesolution\" class=\"w3-hover-green w3-pale-red\" href=\"#\" onclick=\"togglesolutions();return false;\">Solutions<\/a>");
// document.write("         <a id=\"toggleanswer\" class=\"w3-hover-green w3-pale-red\" href=\"#\" onclick=\"toggleanswers();return false;\">Answers<\/a>");
// document.write("      <\/nav>");
// document.write("");
// document.write("      <div class=\"w3-overlay w3-animate-opacity\" onclick=\"w3_close()\" style=\"cursor:pointer\" id=\"myOverlay\"><\/div>");
// document.write("      <span class=\"w3-opennav m1830-opennav w3-xxlarge\" onclick=\"w3_open()\">&#9776;<\/span>");


//toggle button for solutions
function w3_open()
{
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close()
{
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function togglesolutions()
{
    w3_close();
    console.log("entered solution toggle function, solutionsVisible is " + solutionsVisible);

    if (solutionsVisible == false)
    {
        showsolutions();
    }
    else
    {
        hidesolutions();
    }
}

//hide button for solutions
function hidesolutions()
{
    console.log("entered hide function for class m1830-solution");
    var tagslist = document.getElementsByClassName("m1830-solution");
    var numtabs = tagslist.length;
    solutionsVisible = false;
    document.getElementById("togglesolution").className = "w3-hover-green";

    i = 0;
    while (i < tagslist.length)
    {
        //    tagslist[i].style.display = "none";
        tagslist[i].style.visibility = "hidden";
        i++;
    }
hideanswers();
}

//show button for solutions
function showsolutions()
{
    console.log("entered show function for class name m1830-solution");
    var tagslist = document.getElementsByClassName("m1830-solution");
    var numtabs = tagslist.length;
    solutionsVisible = true;
    document.getElementById("togglesolution").className = "w3-hover-green w3-pale-red";
    i = 0;
    while (i < tagslist.length)
    {
        //  tagslist[i].style.display = "inline-block";
        tagslist[i].style.visibility = "visible";
        i++;
    }
toggleanswers();
}

//toggle button for answers
function toggleanswers()
{
    w3_close();
    console.log("entered answer toggle function, answersVisible is " + answersVisible);

    if (answersVisible == false)
    {
        showanswers();
    }
    else
    {
        hideanswers();
    }
}

//hide button for answers
function hideanswers()
{
    console.log("entered hide function for class m1830-answer");
    var tagslist = document.getElementsByClassName("m1830-answer");
    var numtabs = tagslist.length;
    answersVisible = false;
    document.getElementById("toggleanswer").className = "w3-hover-green";
    i = 0;
    while (i < tagslist.length)
    {
        //    tagslist[i].style.display = "none";
        tagslist[i].style.visibility = "hidden";
        i++;
    }
hidesolutions();
}

//show button for answers
function showanswers()
{
    console.log("entered show function for class name answer");
    var tagslist = document.getElementsByClassName("m1830-answer");
    var numtabs = tagslist.length;
    answersVisible = true;
    document.getElementById("toggleanswer").className = "w3-hover-green w3-pale-red";
    i = 0;
    while (i < tagslist.length)
    {
        //  tagslist[i].style.display = "inline-block";
        tagslist[i].style.visibility = "visible";
        i++;
    }
}
function restoreUnits(){
  console.log("entered restore units function");

  var tagslist = document.getElementsByClassName("m1830-unit");

  var numtabs = tagslist.length;
  i = 0;
  while (i < tagslist.length)
  {
      console.log("within while loop " + i);
      tagslist[i].style.display = "inline-block";
      // tagslist[i].style.visibility = "visible";
      i++;
  }
  console.log("after while loop");
document.getElementById("m1830-toc").style.display = "inline-block";
w3_close();
}


function printUnit(unit2Print)
{
    console.log("entered print a unit function");
    console.log("unit to print " + unit2Print);
    var tagslist = document.getElementsByClassName("m1830-unit");

    var numtabs = tagslist.length;
    i = 0;
    while (i < tagslist.length)
    {
        console.log("within while loop " + i);
        tagslist[i].style.display = "none";
        // tagslist[i].style.visibility = "visible";
        i++;
    }
    console.log("after while loop");
    var unitRestore = unit2Print;
    document.getElementById(unit2Print).style.display = "inline-block";
    // unitRestore.style.display = "inline-block";
    console.log("setting u1 to block");

document.getElementById("m1830-toc").style.display = "none";
w3_close();
window.print();
}

//for printing only certain divs
// function printDiv(elementId) {
//     var a = document.getElementById('printing-css').value;
//     var b = document.getElementById(elementId).innerHTML;
//     window.frames["print_frame"].document.title = document.title;
//     window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
//     window.frames["print_frame"].window.focus();
//     window.frames["print_frame"].window.print();
// }


//table of contents
// window.onload = function () {
// 	var toc = "";
// 	var level = 0;
//
// 	document.getElementById("contents").innerHTML =
// 		document.getElementById("contents").innerHTML.replace(
// 			/<h([\d])>([^<]+)<\/h([\d])>/gi,
// 			function (str, openLevel, titleText, closeLevel) {
// 				if (openLevel != closeLevel) {
// 					return str;
// 				}
//
// 				if (openLevel > level) {
// 					toc += (new Array(openLevel - level + 1)).join("<ul>");
// 				} else if (openLevel < level) {
// 					toc += (new Array(level - openLevel + 1)).join("</ul>");
// 				}
//
// 				level = parseInt(openLevel);
//
// 				var anchor = titleText.replace(/ /g, "_");
// 				toc += "<li><a href=\"#" + anchor + "\">" + titleText
// 					+ "</a></li>";
//
// 				return "<h" + openLevel + "><a name=\"" + anchor + "\">"
// 					+ titleText + "</a></h" + closeLevel + ">";
// 			}
// 		);
//
// 	if (level) {
// 		toc += (new Array(level + 1)).join("</ul>");
// 	}
//
// 	document.getElementById("toc").innerHTML += toc;
// };
