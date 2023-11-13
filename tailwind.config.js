module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "FourUnits": "64px",
        "Unit": "16px",
        "SixUnits": "96px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius2": "2px",
        "Radius4": "4px",
        "Radius8": "8px"
      },
      "scale": {
        "XSmall": "16px",
        "Medium": "96px",
        "Large": "144px",
        "XLarge": "192px",
        "Small": "48px",
        "XXLarge": "288px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}