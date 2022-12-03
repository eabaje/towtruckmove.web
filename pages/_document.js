import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          />
          {/* <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          /> */}
          <link
            rel="stylesheet"
            id="font-awesome-css"
            href="http://webdesign-finder.com/towy/wp-content/plugins/unyson/framework/static/libs/font-awesome/css/font-awesome.min.css?ver=2.7.21"
            type="text/css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="towy-icon-fonts-css"
            href="http://webdesign-finder.com/towy/wp-content/themes/towy/css/fonts.css?ver=1.3.0"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="towy-font-css"
            href="//fonts.googleapis.com/css?family=Roboto%3A300%2C300italic%2Cregular%2C700%2C700italic&#038;subset=latin-ext&#038;ver=1.3.0"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="towy-woo-css"
            href="http://webdesign-finder.com/towy/wp-content/themes/towy/css/woo.css?ver=1.3.0"
            type="text/css"
            media="all"
          />
          <link href="assets/css/theme.css" rel="stylesheet" />
          <link href="assets/css/main.css" rel="stylesheet" />
          <link href="assets/css/fonts.css" rel="stylesheet" />
          <link href="assets/css/animations.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossOrigin="anonymous"
          ></script>

          <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>

          <script
            type="text/javascript"
            src="http://webdesign-finder.com/towy/wp-content/plugins/responsive-vector-maps/js/regions-data/jquery-jvectormap-2.0.3.min.js?ver=2.0.3"
          ></script>
          <script
            type="text/javascript"
            src="http://webdesign-finder.com/towy/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.tools.min.js?ver=5.4.8.1"
          ></script>
          <script
            type="text/javascript"
            src="http://webdesign-finder.com/towy/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.revolution.min.js?ver=5.4.8.1"
          ></script>
          <script src="assets/js/jquery.appear.js"></script>
          <script src="vendors/bootstrap/bootstrap.min.js"></script>
          {/* <script src="assets/js/bootstrap.min.js"></script> */}
          <script src="vendors/fontawesome/all.min.js"></script>

          {/* <script src="assets/js/main.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
