$("document").ready(function() {
  var p_width = 8.5; //8.25 crop
  var p_length = 12; //10.75 crop
  var p_unit = "in";
  var kind = "fixed";

  var browser_window_sizing = 0;

  if (browser_window_sizing) {
    p_width = $(window).width();
    p_length = $(window).height();
    p_unit = "px";
  }

  var p_m = ""; //string of all print media styles

  //check for container of entire document
  var wrap_name = $("body > div").eq(0).attr("id");
  var wrap_identifier = "#";
  var no_wrap;

  if (wrap_name == null) {
    wrap_name = $("body > div").eq(0).attr("class");
    wrap_identifier = ".";
    no_wrap = 0;
  }
  if (wrap_name != "container" && wrap_name != "wrapper") {
    //if there's no wrapper, let's make one
    no_wrap = 1;
    wrap_name = "body >";
    wrap_identifier = "";
  }

  var num_cont = $(wrap_identifier + wrap_name + " > div").length;
  for (var i = 0; i < num_cont; i++) {
    var cont_identifier = "#"; //assuming that the first div is a container
    var cont_name = $(wrap_identifier + wrap_name + " > div").eq(i).attr("id");

    if (cont_name == null) {
      cont_identifier = ".";
      cont_name = $(wrap_identifier + wrap_name + " > div").eq(i).attr("class");

      if (cont_name == null) {
        cont_name = "";
        cont_identifier = $(wrap_identifier + wrap_name + " div:eq(" + i + ")");
      }
    }

    var num_repeat = 0;
    var repeat_name = "";

    repeat_name = $(cont_identifier + cont_name + " > div").eq(0).attr("class");
    if (repeat_name == null) {
      num_repeat = $(cont_identifier + cont_name + " > div").length;
    } else {
      num_repeat = $(cont_identifier + cont_name + " > div." + repeat_name).length;
    }

    //styling container
    var cont_p_width = 2 + p_width;
    var cont_p_length = 1 + p_length;
    //one unit on either side, one unit on top

    var cont_css = "{overflow: visible; width: " + cont_p_width + p_unit + "; ";

    if (kind == "scroll") {
      cont_css = cont_css + "position: absolute; ";
    } else if (kind == "fixed") {
      cont_css = cont_css + "height :" + cont_p_length + p_unit + "; position: fixed; ";
    }
    cont_css = cont_css + "top: -1" + p_unit + "; left: -1" + p_unit + "; }";

    var repeat_css = "{}"; //extra room for styling

    p_m = p_m + cont_identifier + cont_name + cont_css;
    if (repeat_name == null) {
      p_m = p_m + cont_identifier + cont_name + " > div" + repeat_css;
    } else {
      p_m = p_m + "." + repeat_name + repeat_css;
      //must ba a class, no ID.
    }
  }

  var wrap_css = "{";
  if (no_wrap) {
    //let's wrap this shit
    wrap_name = "printjswrapper";
    wrap_identifier = "#";

    var temp_prewrap = $("body").html();
    var temp_postwrap = "<div id='printjswrapper'>" + temp_prewrap + "</div>";
    $("body").html(temp_postwrap);
  }

  wrap_css = wrap_css + "overflow: hidden; width: " + p_width + p_unit + "; ";

  if (kind == "scroll") {
    wrap_css = wrap_css + "";
  } else if (kind == "fixed") {
    wrap_css = wrap_css + "height: " + p_length + p_unit + "; ";
  }
  wrap_css = wrap_css + "}";
  p_m = p_m + wrap_identifier + wrap_name + wrap_css;

  p_m = p_m + "body {height: " + p_length + p_unit + "; width: " + p_width + p_unit + "; overflow: visible;}";

  //insert @media print
  var css = $("style").html();
  css = css + "@media print {" + p_m + "}";

  if ($("style").html() == null) {
    $("head").append("<style>" + css + "</style>");
  } else {
    $("style").html(css);
  }
  // window.print();
})
