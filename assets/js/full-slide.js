/**
 * Usage:
 * In your html, add this just before closing the body tag.
 * In your css, add 'scroll-behavior: smooth;' in html{ }
 * Example:
 * html{ scroll-behavior: smooth; }
 *
 * In your page, add the anchor with <a name="anchor">
 * In this script, add the anchors to var PageAnchors like this:
 * var PageAnchor = ['anchor1', 'anchor2', 'etc']
 *
 * If you get useActive, make sure to define classnames equal to Page Anchors. These will be
 * used for a menu only to show where you are.
 */

/**
 * PageAnchors is used to define the anchors you added in the page. This will scroll down
 * or up to that anchor in the page. Add the achors in this variable
 * @type {Array}
 */
 var PageAnchors = [`section1`, `section2`, `section3`, `section4`, `section5`,`section6`,`section7`,`section8`,`section9`,`section10`,`section11`];
 var scrollTime = 600; //default scroll time in ms before you can respond again.;
 var scrollWrap = 750; //Scrolltime for wrapping in ms before you can respond again.;
 var canWrap = true; //Scrolltime for wrapping in ms before you can respond again.;
 var useActive = true; //Used to show where you are on the page. Must use .active as a class;
 
 /**
   * Do not edit below this point
   */
 console.log(`scroll.js`);
 
 var isScrollPossible = true; // required to check if you can scroll.
 
 /**
   * Function to go to the right Anchor.
   * setTimeout is to ensure you can scroll only after the page is finished scrolling. You can set this waiting time below with sctrollTime and scrollWrap
   * @param  {[string]} section [the Anchor you've defined in PageAnchors]
   * @param  {[int]} time    [time before you can scroll again]
   */
 const scrollToPage = (section, time) => {
     if (useActive) {
         addActiveClass(section);
     }
     setTimeout(resetScrollPossible, time);
     location.hash = `#` + section;
 }
 
 /**
   * Gets the anchor of the page
   * @return string [The anchor of the page, or the first anchor.]
   */
 const getAnchor = () => {
     let currentUrl = document.URL;
     let anchor = currentUrl.split(`#`);
     if (anchor.length > 1) {
         return anchor[1];
     } else {
         return PageAnchors[0];
     }
 }
 
 /**
   * Gets the position of the anchor in the page.
   * @param  {[string]} anchor [The anchor of the page]
   * @return {[int]}        [The position of the anchor in the array.]
   */
 const getAnchorPosition = (anchor) => {
     return PageAnchors.indexOf(anchor);
 }
 
 /**
   * Get the length of the array (amount of anchors added) and subtracts one to find the max array position.
   * @return {[int]} [Max array position]
   */
 const getPageAnchorAmount = () => {
     return (PageAnchors.length - 1);
 }
 
 /**
   * Mouse wheelscroll event
   * When scrolling up, you go to the previous page; when scrolling down, to the next.
   * @param  {[int]} scroll [Negative is scrolling up, positive is scrolling down.]
   */
 const Scrollwheel = (scroll) => {
     console.log(`scroll ${scroll.deltaY}`);
     if (isScrollPossible === true) {
         isScrollPossible = false;
         if (scroll.deltaY < -50) {
             scrollUp();
         } else if (scroll.deltaY > 50) {
             scrollDown();
         }
     }
 }
 
 /**
   * keypress event
   * Go to the next page when the downkey is pressed, and go to the previous page when up is pressed,
   * @param  {[string]} event
   */
 const keypress = (event) => {
     let keyAnchor = getAnchor();
     if (isScrollPossible === true) {
         isScrollPossible = false;
         switch (event.key) {
             case `ArrowDown`:
                 scrollDown();
                 break;
             case 'ArrowUp':
                 scrollUp();
                 break;
         }
     }
 }
 
 /**
   * Function when going to the previous page (scroll Up)
   * Checks on which anchor the page is, and if 0, go to the last page if canWrap is true.
   */
 const scrollUp = () => {
     console.log(`Scroll Up`)
     let currentAnchor = getAnchor();
     let anchorPosition = getAnchorPosition(currentAnchor);
     let anchorAmount = getPageAnchorAmount();
     if (anchorPosition <= 0) {
         if (canWrap) {
             if (useActive) {
                 removeActiveClass();
             }
             scrollToPage(PageAnchors[anchorAmount], scrollWrap);
         } else {
             isScrollPossible = true;
         }
     } else {
         if (useActive) {
             removeActiveClass();
         }
         scrollToPage(PageAnchors[anchorPosition - 1], scrollTime);
     }
 }
 
 /**
   * Function when going to the next page (scroll Down)
   * Checks on which anchor the page is, and if it is the last, go to the first page if canWrap is true.
   */
 const scrollDown = () => {
     console.log(`Scroll Down`)
     let currentAnchor = getAnchor();
     let anchorPosition = getAnchorPosition(currentAnchor);
     let anchorAmount = getPageAnchorAmount();
     if (anchorPosition >= anchorAmount) {
         if (canWrap) {
             if (useActive) {
                 removeActiveClass();
             }
             scrollToPage(PageAnchors[0], scrollWrap);
         } else {
             isScrollPossible = true;
         }
     } else {
         if (useActive) {
             removeActiveClass();
         }
         scrollToPage(PageAnchors[anchorPosition + 1], scrollTime);
     }
 }
 
 /**
   * Remove Active Class in Left Menu
   */
 const removeActiveClass = () => {
     let currentActive = document.getElementsByClassName(`active`);
     for (var i = 0; i < currentActive.length; i++) {
         currentActive[i]
             .classList
             .remove(`active`);
     }
 }
 
 /**
   * Add Active Class in Left Menu=
   */
 
 const addActiveClass = (section) => {
     let newActive = document.getElementsByClassName(section);
     for (var i = 0; i < newActive.length; i++) {
         newActive[i]
             .classList
             .add(`active`);
     }
 }
 
 /**
   * Ensures you can scroll again after scrolling.
   */
 const resetScrollPossible = () => {
     console.log(`Scrolling is possible once more`);
     isScrollPossible = true;
 }
 
 /**
   * Document event handlers for mousewheel for different browsers, and document event handlers for keypresses.
   */
 document.addEventListener(`mousewheel`, Scrollwheel);
 document.addEventListener(`DOMMouseScroll`, Scrollwheel);
 document.addEventListener(`keydown`, keypress);
 
 /**
   * Navigation Changer (Requires some functions of scroll.js)
   *
   */
 
 const navlinks = (Clicked) => {
     if (useActive) {
         removeActiveClass();
         addActiveClass(Clicked);
     }
 }
 
 if (useActive) {
     window.onload = addActiveClass(getAnchor());
 }
 
 /**
   * Events to make it work on phones! Simulates swiping
   *
   */
 let touchstartY = 0;
 let touchendY = 0;
 
 /**
   * Checks the Y coordinate when you touch the screen
   */
 const touchstart = (touch) => {
     touchstartY = touch.changedTouches[0].screenY;
 }
 
 /**
   * Checks the Y coordinate when you release the screen
   */
 const touchend = (touch) => {
     touchendY = touch.changedTouches[0].screenY;
     swiped();
 }
 
 /**
   * Simulates swiping by detecting the differences between the Y coordinates.
   */
 const swiped = () => {
     console.log(`start swipe event`);
     console.log(`Start swipe: ${touchstartY}, Endswipe: ${touchendY}`);
     if (touchstartY < touchendY) {
         scrollUp();
     } else if (touchstartY > touchendY) {
         scrollDown();
     }
 }
 
 document.addEventListener(`touchstart`, touchstart);
 document.addEventListener(`touchend`, touchend);