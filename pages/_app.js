import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Toaster} from "react-hot-toast";
import Head from "next/head";
import {useEffect} from "react";
import Script from "next/script";

function MyApp({Component, pageProps}) {

  useEffect(() => {
    if (window) {
      window.fwSettings = {
        'widget_id': 150000001542
      };
      !function () {
        if ("function" != typeof window.FreshworksWidget) {
          var n = function () {
            n.q.push(arguments)
          };
          n.q = [], window.FreshworksWidget = n
        }
      }()
    }
  }, [])

  return (
    <>
      <Script type='text/javascript' src='https://widget.freshworks.com/widgets/150000001542.js' async defer/>
      <Head>
        <title>Equity for Everyone!</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '669356984953511');
                fbq('track', 'PageView');
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=669356984953511&amp;ev=PageView&amp;noscript=1"
          />
        </noscript>
      </Head>
      <Toaster position={'bottom-right'}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
