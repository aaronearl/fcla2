import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Testimonials</h1>
          <ul>
            {/* <Slider {...settings}> */}
            <li>
              <blockquote>
                <p>
                  Faith Community Foursquare Church has really been a blessing in my life. I have to live holy, and the things I have learned over the years have helped me be successful living holy – the Christian life. The Bible studies have truly been life changing and character building.

                  An example of a life changing Bible study was when Pastor Paredes taught on LOVE. You think you know what love is until you’ve been taught what love is and what it is not.  The Word says that they will know us (Christians) by our LOVE. The Word says to LOVE the Lord and LOVE your neighbor as thyself. I can do that! I can do that because I’ve been taught what LOVE is extensively. Learning what LOVE is changed my life; I will never be the same. Thank God!

                </p>
                <cite>April Jackson Watson</cite>
              </blockquote>
              <blockquote>
                <p>
                  We celebrate with you, Pastor Terry Paredes your family is Godly Proud of you and all of your work in the ministry over these last 54 years.  To God be the glory for the things he has done through your life thus far, BUT THE BEST IS YET TO COME!!!
                </p>
                <cite>Marcus, Teddi, Randi and Jeanine</cite>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p>
                  Sincere congratulations to Pastor D.T. Paredes on 30 years of pastoral service and for your continued faithfulness, and longevity; and, the best is yet to come.
                </p>
                <cite>Betty Dixon, Pico Pre-School </cite>
              </blockquote>
            </li>
            {/* </Slider> */}
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;
