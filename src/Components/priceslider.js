import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "description": "Btc",
          "proName": "BINANCE:BTCUSDT"
        },
        {
          "description": "ETH",
          "proName": "BINANCE:ETHUSD"
        },
        {
          "description": "SOl",
          "proName": "BINANCE:SOLUSDT"
        },
        {
          "description": "ADA",
          "proName": "BINANCE:ADAUSDT"
        },
        {
          "description": "Link",
          "proName": "BINANCE:LINKUSDT"
        },
        {
          "description": "XRP",
          "proName": "BINANCE:XRPUSD"
        },
        {
          "description": "DXY",
          "proName": "CAPITALCOM:DXY"
        },
        {
          "description": "GOLD",
          "proName": "OANDA:XAUUSD"
        },
        {
          "description": "S&P 500",
          "proName": "SP:SPX"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });

    document.getElementById('tradingview-widget-container').appendChild(script);

    return () => {
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview-widget-container" className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
 
    </div>
  );
};

export default TradingViewWidget;















