import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../../../context/Provider";
import { registerUser } from "../../../context/actions/auth/auth.action";

export default function RegisterForm() {
  //**************************FORM FUNCTIONS ************* */

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  const {
    authDispatch,
    authState: { isLoggedIn, loading },
  } = useContext(GlobalContext);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    registerUser(formdata)(authDispatch)((res) => {
      if (res) {
        toast.success(
          `Congratulations!You have created an account successfully.You will be redirected to your timeline`
        );
        setTimeout(() => {
          toast.dismiss();
          router.reload(`/home/?userId=${res.data.UserId}`);
        }, 5000);
      }
    })((error) => {
      toast.error(error);
    });
  }

  // *************************END FORM FUNCTIONS***********************
  return (<>
    <section class="fw-main-row  ds section_padding_top_0 section_padding_bottom_0 columns_padding_15 parallax fullwidth-section section_flex сargo-hook" style={{backgroundImage:`url(http://webdesign-finder.com/towy/wp-content/uploads/2016/07/quote.jpg)`}} >
    <div class="container-fluid">
      <div class="row">
        <div class="fw-column col-xs-12 col-md-6 text-center mini-text has-bg-color cs" >
  
    <div class="fw-column-inner padding_40">
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="  text-center">
    <h3 class=" section_header ">
    <span class=" thin text-uppercase">
      Join <strong>OUR TEAM</strong>	</span>
    </h3>
    <p class="  paragraph">
    <span class="  text-uppercase">
      FAST AND COURTEOUS SPECIALISTS	</span>
    </p>
  </div>
  
    <div class="fw-divider-zebra"><hr class="zebra_bg divider_center"/></div>
  
  
  
    <div class="fw-divider-space  hidden-sm hidden-xs" style={{paddingTop: "70px"}}></div>
  <div class="text-block">
    <p>Doner hamburger elit magna fatback salami. Picanha ad reprehenderit anim pancetta alcatra ham tempor meatloaf shankle do sunt drumstick. Venison bresaola laboris, jowl do labore pastrami magna voluptate fatback sed cow. In beef ribs shankle hamburger beef, ea turkey cupim venison Jowl pig ut biltong sint do capicola ham.</p></div>
  
  
    <div class="fw-divider-space  hidden-sm hidden-xs" style={{paddingTop: "80px"}}></div>
  <a href="#" target="_self"
     class="theme_button color2 ">
    <span>Apply today</span>
  </a>
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
      </div>
  </div>
  <div class="fw-column col-xs-12 col-md-6 text-center mini-form has-bg-color ds" >
  
    <div class="fw-column-inner padding_40">
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="  text-center">
    <h3 class=" section_header ">
    <span class=" thin text-uppercase">
      Get a <strong class="highlight">quote</strong>	</span>
    </h3>
    <p class="  paragraph">
    <span class="lightfont  ">
      DELIVERS THE BEST	</span>
    </p>
  </div>
  
    <div class="fw-divider-zebra"><hr class="zebra_bg divider_center"/></div>
  
  
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="form-wrapper  columns_padding_15">
    <form data-fw-form-id="fw_form" method="post" action="http://webdesign-finder.com/towy/" class="fw_form_fw_form" data-fw-ext-forms-type="contact-forms"><input type="hidden" name="fwf" value="fw_form" /><input type="hidden" id="_nonce_a21ed6ecb186efe30bd8146ba0726793" name="_nonce_a21ed6ecb186efe30bd8146ba0726793" value="82405ef517" /><input type="hidden" name="_wp_http_referer" value="/towy/" /><input type="hidden" name="fw_ext_forms_form_type" value="contact-forms" /><input type="hidden" name="fw_ext_forms_form_id" value="e42401748e68fb18efc56af73cace982" /><div class="wrap-forms">
    <div class="row"></div><div class="row"><div class="col-xs-12 col-md-6 form-builder-item">
    <div class="form-group has-placeholder">
      <label for="id-1">			<sup>*</sup>		</label>
      <input class="form-control" type="text" name="text_0a6c42f" placeholder="Full name" value="" id="id-1" required="required"/>
        </div>
  </div><div class="col-xs-12 col-md-6 form-builder-item">
    <div class="form-group has-placeholder">
      <label for="id-2">			<sup>*</sup>		</label>
      <input class="form-control" type="text" name="number_7193680" placeholder="Phone number" value="" id="id-2" required="required" data-constraint="{&quot;type&quot;:&quot;value&quot;,&quot;data&quot;:{&quot;min&quot;:0,&quot;max&quot;:0}}"/>
        </div>
  </div></div><div class="row"><div class="col-xs-12 col-md-6 form-builder-item">
    <div class="form-group has-placeholder">
      <label for="id-3">			<sup>*</sup>		</label>
      <input class="form-control" type="text" name="text_5ea77fc" placeholder="Tow From" value="" id="id-3" required="required"/>
        </div>
  </div><div class="col-xs-12 col-md-6 form-builder-item">
    <div class="form-group has-placeholder">
      <label for="id-4">			<sup>*</sup>		</label>
      <input class="form-control" type="text" name="text_412c89d" placeholder="Tow To" value="" id="id-4" required="required"/>
        </div>
  </div></div><div class="row">	<div class="col-xs-12 col-md-6 form-builder-item">
      <div class="field-select select-styled">
        <label for="id-5">							</label>
        <select name="select_c831e16" id="id-5" class="form-control">
                    <option value="Vehicle Type">Vehicle Type</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>
                </select>
            </div>
    </div>
  <div class="col-xs-12 col-md-6 form-builder-item">
    <div class="form-group has-placeholder">
    <div class="field-date">
      <label for="id-date-6">			<sup>*</sup>		</label>
      <input class="form-control" type="text" name="date_time_1646fb1" placeholder="Date" value="" id="id-date-6" required="required"/>
    </div>
    </div>
  </div></div><div class="row"></div></div><div class="wrap-forms topmargin_10">
    <div class="row">
      <div class="col-sm-12">
        <input class="theme_button wide_button color1" type="submit" value="Submit now" />
                <input class="theme_button wide_button" type="reset" value="Clear" />
            </div>
    </div>
  </div></form></div>
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
      </div>
  </div>
      </div>
    </div>
  </section>
  <section class="fw-main-row  ls section_padding_top_130 section_padding_bottom_120 columns_padding_15"  >
    <div class="container">
      <div class="row">
        <div class="fw-column col-xs-12" >
  
    <div class="fw-column-inner">
  
    <div class="fw-divider-space " style={{paddingTop: "5px"}}></div>
  <div class="numbered-header text-center">
    <h3 class=" section_header ">
    <span class=" thin text-uppercase">
      OUR <strong> BLOG</strong>	</span>
    </h3>
    <p class="  paragraph">
    <span class="  text-uppercase">
      anywhere, anytime towing	</span>
    </p>
  </div>
  
    <div class="fw-divider-zebra"><hr class="zebra_bg divider_center"/></div>
  
  
  
    <div class="fw-divider-space " style={{paddingTop: "50px"}}></div>
  <div class="shortcode-posts">
      <div
      class="owl-carousel"
      data-margin="30"
          data-autoplay="true"
          data-speed="5000"
      data-responsive-xs="1"
      data-responsive-sm="2"
      data-responsive-md="3"
      data-responsive-lg="3"
        >
            <div
          class="owl-carousel-item item-layout-item-extended category-2 uncategorized  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-category-2 filter-uncategorized post-302 post type-post status-publish format-video has-post-thumbnail hentry category-category-2 category-uncategorized tag-tag-1 tag-tag-3 post_format-post-format-video">
        <div class="item-media">
        <img width="775" height="517" src="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-775x517.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-775x517.jpg 775w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-300x200.jpg 300w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-768x512.jpg 768w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-1024x683.jpg 1024w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2-600x400.jpg 600w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/02-2.jpg 1170w" sizes="(max-width: 775px) 100vw, 775px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/burgdoggen-andouille-turducken-kielbasa/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/burgdoggen-andouille-turducken-kielbasa/">
          Burgdoggen Andouille Turducken Kielbasa			</a>
      </h3>
      <p>Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork t-bone</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/burgdoggen-andouille-turducken-kielbasa/" rel="bookmark"><time class="entry-date" datetime="2017-05-16T07:29:41+00:00">May 16, 2017</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            <div
          class="owl-carousel-item item-layout-item-extended category-1 category-2  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-category-1 filter-category-2 post-4 post type-post status-publish format-image has-post-thumbnail hentry category-category-1 category-category-2 tag-tag-1 tag-tag-2 post_format-post-format-image">
        <div class="item-media">
        <img width="775" height="517" src="http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-775x517.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-775x517.jpg 775w, http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-300x200.jpg 300w, http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-768x512.jpg 768w, http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-1024x683.jpg 1024w, http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-1170x780.jpg 1170w, http://webdesign-finder.com/towy/wp-content/uploads/2016/07/post-image-600x400.jpg 600w" sizes="(max-width: 775px) 100vw, 775px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/corned-beef-pork-belly-brisket-tri-tip-rump-sausage/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/corned-beef-pork-belly-brisket-tri-tip-rump-sausage/">
          Corned Beef Pork Belly Brisket Tri-tip Rump Sausage			</a>
      </h3>
      <p>Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork t-bone</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/corned-beef-pork-belly-brisket-tri-tip-rump-sausage/" rel="bookmark"><time class="entry-date" datetime="2017-05-15T09:14:13+00:00">May 15, 2017</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            <div
          class="owl-carousel-item item-layout-item-extended post-slider  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-post-slider post-1748 post type-post status-publish format-standard has-post-thumbnail hentry category-post-slider tag-tag-1 tag-tag-2">
        <div class="item-media">
        <img width="775" height="517" src="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-775x517.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-775x517.jpg 775w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-300x200.jpg 300w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-768x512.jpg 768w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-1024x683.jpg 1024w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1-600x400.jpg 600w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/07-1.jpg 1170w" sizes="(max-width: 775px) 100vw, 775px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-2/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-2/">
          We provide highest quality <span>towing services</span>			</a>
      </h3>
      <p>Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork t-bone</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-2/" rel="bookmark"><time class="entry-date" datetime="2017-05-14T15:08:10+00:00">May 14, 2017</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            <div
          class="owl-carousel-item item-layout-item-extended post-slider  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-post-slider post-1746 post type-post status-publish format-standard has-post-thumbnail hentry category-post-slider tag-tag-1 tag-tag-2">
        <div class="item-media">
        <img width="775" height="517" src="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-775x517.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-775x517.jpg 775w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-300x200.jpg 300w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-768x512.jpg 768w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-1024x683.jpg 1024w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1-600x400.jpg 600w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/06-1.jpg 1170w" sizes="(max-width: 775px) 100vw, 775px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-copy/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-copy/">
          Corned Beef Pork Belly Brisket  <span>Tri-tip Rump Sausage</span>			</a>
      </h3>
      <p>Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork t-bone</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/we-provide-highest-quality-towing-services-copy/" rel="bookmark"><time class="entry-date" datetime="2017-05-12T15:07:52+00:00">May 12, 2017</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            <div
          class="owl-carousel-item item-layout-item-extended category-1 category-2  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-category-1 filter-category-2 post-9 post type-post status-publish format-standard has-post-thumbnail hentry category-category-1 category-category-2 tag-tag-1 tag-tag-2">
        <div class="item-media">
        <img width="301" height="439" src="http://webdesign-finder.com/towy/wp-content/uploads/2016/08/side-image.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2016/08/side-image.jpg 301w, http://webdesign-finder.com/towy/wp-content/uploads/2016/08/side-image-206x300.jpg 206w" sizes="(max-width: 301px) 100vw, 301px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/post-with-small-image/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/post-with-small-image/">
          Post With Small Image			</a>
      </h3>
      <p>Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork t-bone</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/post-with-small-image/" rel="bookmark"><time class="entry-date" datetime="2016-07-26T09:11:12+00:00">July 26, 2016</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            <div
          class="owl-carousel-item item-layout-item-extended category-2 uncategorized  grayscale-img">
          <article class="vertical-item content-padding with_border text-center filter-category-2 filter-uncategorized post-12 post type-post status-publish format-gallery has-post-thumbnail hentry category-category-2 category-uncategorized tag-tag-3 post_format-post-format-gallery">
        <div class="item-media">
        <img width="775" height="517" src="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-775x517.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-775x517.jpg 775w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-300x200.jpg 300w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-768x512.jpg 768w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-1024x683.jpg 1024w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1-600x400.jpg 600w, http://webdesign-finder.com/towy/wp-content/uploads/2017/04/09-1.jpg 1170w" sizes="(max-width: 775px) 100vw, 775px" />			<div class="media-links">
          <a class="abs-link" href="http://webdesign-finder.com/towy/post-with-carousel/"></a>
        </div>
      </div>
      <div class="item-content top-zebra-border">
      <h3 class="item-title">
        <a href="http://webdesign-finder.com/towy/post-with-carousel/">
          Post With Carousel			</a>
      </h3>
      <p>Shank jerky hamburger spare ribs, shankle pork chop venison turducken alcatra porchetta beef flank tenderloin corned beef.</p>
      <span class="greylinks entry-date"><a href="http://webdesign-finder.com/towy/post-with-carousel/" rel="bookmark"><time class="entry-date" datetime="2016-07-26T09:10:33+00:00">July 26, 2016</time></a></span>		<span class="author vcard"><a class="url fn n" href="http://webdesign-finder.com/towy/author/victorbrown/">by victorbrown</a></span>	</div>
  </article>
        </div>
            </div>
  </div>    </div>
  </div>
      </div>
    </div>
  </section>
  
  </>
  );
}
