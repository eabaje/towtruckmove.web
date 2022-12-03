if (jQuery().appear) {
  jQuery(".to_animate").appear();
  jQuery(".to_animate")
    .filter(":appeared")
    .each(function (index) {
      var self = jQuery(this);
      var animationClass = !self.data("animation")
        ? "fadeInUp"
        : self.data("animation");
      var animationDelay = !self.data("delay") ? 210 : self.data("delay");
      setTimeout(function () {
        self.addClass("animated " + animationClass);
      }, index * animationDelay);
    });

  jQuery("body").on("appear", ".to_animate", function (e, $affected) {
    jQuery($affected).each(function (index) {
      var self = jQuery(this);
      var animationClass = !self.data("animation")
        ? "fadeInUp"
        : self.data("animation");
      var animationDelay = !self.data("delay") ? 210 : self.data("delay");
      setTimeout(function () {
        self.addClass("animated " + animationClass);
      }, index * animationDelay);
    });
  });

  //counters init on scroll
  jQuery(".counter").appear();
  jQuery(".counter")
    .filter(":appeared")
    .each(function (index) {
      if (jQuery(this).hasClass("counted")) {
        return;
      } else {
        jQuery(this).countTo().addClass("counted");
      }
    });
  jQuery("body").on("appear", ".counter", function (e, $affected) {
    jQuery($affected).each(function (index) {
      if (jQuery(this).hasClass("counted")) {
        return;
      } else {
        jQuery(this).countTo().addClass("counted");
      }
    });
  });

  //bootstrap animated progressbar
  if (jQuery().progressbar) {
    jQuery(".progress .progress-bar").appear();
    jQuery(".progress .progress-bar")
      .filter(":appeared")
      .each(function (index) {
        jQuery(this).progressbar({
          transition_delay: 300,
        });
      });
    jQuery("body").on(
      "appear",
      ".progress .progress-bar",
      function (e, $affected) {
        jQuery($affected).each(function (index) {
          jQuery(this).progressbar({
            transition_delay: 300,
          });
        });
      }
    );
    //animate progress bar inside bootstrap tab
    jQuery('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
      jQuery(jQuery(e.target).attr("href"))
        .find(".progress .progress-bar")
        .progressbar({
          transition_delay: 300,
        });
    });
  }
} //appear check
