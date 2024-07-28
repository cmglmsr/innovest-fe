<template>
    <div class="tradingview-widget-container" ref="container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TradingViewWidget',
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "NASDAQ:NDX|1D"
            ],
            [
              "BIST:XU100|1D"
            ],
            [
              "XETR:DAX|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      this.$refs.container.appendChild(script);
    }
  };
  </script>
  
  <style scoped>
  .tradingview-widget-container {
    position: relative;
  }
  
  .tradingview-widget-container__widget {
    height: 100%;
  }
  
  .blue-text {
    color: #0099ff;
  }
  </style>
  