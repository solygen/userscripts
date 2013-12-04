!function(){//load jquery
var a,b=document.createElement("script");b.src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",document.head.appendChild(b),b.onload=b.onreadystatechange=function(){if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){a=!0;//get chart node
var b=$($.parseHTML($("embed").attr("flashvars").split("dataXML=").splice(1,1)[0])).find("line"),c=b.attr("startvalue"),d=b.attr("endvalue"),e=String(parseFloat(c+d).toFixed(2)+"  €").replace(".",",");//remoe old one
$(".custom").remove();//add data to dom
var f=$($(".availTable").find("tr")[0]).clone();f.css("font-size","larger").css("color","chartreuse").addClass("custom"),f.find(".cell_0_1").text(e),f.find(".cell_0_0").text("Durchschnittspreis VK"),$(".availTable").prepend(f)}}}();