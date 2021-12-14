// Import vendor jQuery plugin example
import '~/app/libs/jquery/jquery.min.js';
import '~/app/libs/rangeslider/ion.rangeSlider.min.js';

$(window).on('load', function () {

//range slider
$(".js-range-slider").ionRangeSlider({
	type: "double",
	min: 3000,
	max: 50000,
	from: 3000,
	to: 23000,
	grid: false,
});

let my_range = $(".js-range-slider").data("ionRangeSlider");

    //Show hide filters
    $(".filters__features .item").on("click", function(){
    	$(this).parent().toggleClass('hide');
    })

    //Show active/unactive colors
    $(".check-button--color").on("click", function(){
    	$(this).toggleClass('active');
    })
    $(".custom-checkbox--color").on("click", function(){
    	$(this).parent().toggleClass('active');
    })

      //Reset all filters
      $(".button-reset").on("click", function(){
      	$(".filters__block input").prop( "checked", false );

      	my_range.reset();
      	$(".check-button--color.active").removeClass("active");
      })

      //Burger-menu
      $(".header-top__nav-button").on("click", function(){
      	$(".header-top__nav-wrap").addClass("show");
      })
      $(".close_nav").on("click", function(){
      	$(".header-top__nav-wrap").removeClass("show");
      })

	//Show hide filters burger
	$(".list-item.have-child .list-item--main img:last-child").on("click", function(){
    $(this).parent().parent().toggleClass('active');
  })

  //Show hide filters mobile
  $(".sorter__filters .sorter__title.mobile").on("click", function(){
    $('.main-block__filters').addClass('active');
  })

  //reset filters on mobile
  $(".reset-filters").on("click", function(){
    $(".filters__block input").prop( "checked", false );
    my_range.reset();
    $(".check-button--color.active").removeClass("active");
  })

  //reset filters on mobile
  $(".apply-filters").on("click", function(){
    $('.main-block__filters').removeClass('active');
  })

});
