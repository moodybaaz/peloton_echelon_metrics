Fork from https://github.com/ZV3zrmCT/peloton_schwinn_metrics to display Echelon resistance

# About
The Peloton web application does not display target metrics, like cadance and resistance. This bookmarklet uses the Peloton web application and API to display the target metrics. Works in cycling classes only.

![Alt](https://coffeesnip.com/example.jpeg "Peloton class with target metrics")

# Metrics
- Two resistance ranges are displayed. The first is for the Echelon bike, the second is for Peloton (in paranthesis).
- Live and recently added classes do not have metrics. It can take a day or more for Peloton to add metrics to a recording.
- Metrics begin after the 1 minute warm-up.

# How to install
- Install Tamper Monkey first: http://www.tampermonkey.net/  
- After installing, click on https://github.com/moodybaaz/peloton_echelon_metrics/raw/master/peloton_echelon.user.js  
- Install page should show up, click Install (if it doesn't show up, tampermonkey is not installed  
- Visit a page with metrics, skip the warm up and see if Echelon data shows up  
- https://members.onepeloton.com/classes/player/10420f9a19ed4332b446a2c37e7c204d  

