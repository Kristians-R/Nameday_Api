$(document).ready(function () {
  $("#menu a").each(function () {
    id = $(this).attr("href");
    id = id.substring(id.lastIndexOf("/"));
    id = id.substring(0, id.indexOf("."));
    $(this).attr("rel", id);
  });
  $("#page-one").show();
  $("#page-two").hide();
  $("#page-three").hide();
  $("#menu a").click(function (e) {
    e.preventDefault();
    $(".content").hide();
    $("#" + $(this).attr("rel")).show();
    location.hash = "#!/" + $(this).attr("rel");
    return false;
  });

  $("a").click(function () {
    $("a").removeClass("active-color");
    $(this).addClass("active-color");
  });

  $("#btn-find-name").on("click", function (e) {
    let str = $("#name").val();
    let country = $("#country").val();

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://api.abalin.net/getdate?name=" + str + "&country=" + country,
      success: function (data) {
        console.log(data.results);
        let filter = $(data.results).filter(function (i, n) {
          return n.names === this.str;
        });
        for (var i = 0; i < filter.length; i++) {
          $("#day-data").html(filter[i].day);
          $("#month-data").html("." + filter[i].month);
        }
      },
    });
  });

  $("#btn-find-day").click(function () {
    let country = $("#country").val();
    let day = $("#day").val();
    let month = $("#month").val();

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=" +
        month +
        "&day=" +
        day,
      success: function (data) {
        let names = data.data.namedays[country].split(",");
        console.log(data.data.namedays);
        $(".result-date-name").empty();
        jQuery.each(names, function (i, val) {
          $(".result-date-name").append("<li>" + val.trim() + "</li>");
        });
        $(".result-date-name > li").addClass("result-date-style");
      },
    });
  });
});

$(document).ready(function () {
  $("#country").click(function () {
    let country = $("#country").val();

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=15",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-one").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=16",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-two").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=17",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-three").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=18",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-four").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=19",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-five").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=20",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-six").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });

    $.ajax({
      type: "GET",
      url:
        "https://api.abalin.net/namedays?country=" +
        country +
        "&month=6&day=21",
      success: function (data) {
        let names = data.data.namedays[country];
        $("#week-seven").html(`${names}`);
        $(".result-card > p").addClass("week");
      },
    });
  });
});
