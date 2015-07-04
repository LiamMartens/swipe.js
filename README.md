#SWIPE.JS
`swipe.js` is a small Javascript library for handling swiping, either vertical or horizontal, and dragging.

##Usage
###Vertical Swipe
To attach a vertical swipe handler you have to call `swipeUp` on an element. The function can accept 4 parameters at most.
* The callback function which accepts 1 parameter being the direction (0 for down, 1 for up)
* The swipe distance, a value between 0 and 1. This value is relative to the height, thus when providing a swipe distance of 0.5, the user will have to swipe at least half the height in distance before an actual swipe is triggered.
* The swipe time defines how fast the swipe needs to happen in miliseconds relative to the distance. A swipe time of 100 in combination with a swipe distance of 0.5 means the user will have to swipe half the height in distance within 100 miliseconds before triggering the swipe.
* The call delay defines the time in miliseconds between callback function calls in order to prevent double firing.  

###Horizontal Swipe
To attach a horizontal swipe handler you have to call `swipe`on an element. The function accepts the same exact parameters as the vertical swipe handler. (Keep in mind only the callback function is required and 0 is for left and 1 is for right in this case)  

###Drag
To attach a drag handler to an element you have to call `drag` on the object. This handler only accepts 2 parameters at most being the callback function and the call delay. In this case the callback function expects exactly 2 parameters being the x and y difference since the previous drag fired. 