// Type definitions for jQuery.cycle.js 2.9999.81 (15-JAN-2013)
// Project: http://jquery.malsup.com/cycle/
// Definitions by: Fran�ois Guillot <http://fguillot.developpez.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface CycleOptions {
    activePagerClass?: string;                                                                                                                // class name used for the active pager link
    after?: (currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, forwardFlag: bool) => void;                         // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble?: bool;                                                                                                             // allows or prevents click event on pager anchors from bubbling
    animIn?: any;                                                                                                                             // properties that define how the slide animates in
    animOut?: any;                                                                                                                            // properties that define how the slide animates out
    aspect?: bool;                                                                                                                            // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop?: bool;                                                                                                                          // true to end slideshow after X transitions (where X == slide count)
    autostopCount?: number;                                                                                                                   // number of transitions (optionally used with autostop to define X)
    backwards?: bool;                                                                                                                         // true to start slideshow at last slide and move backwards through the stack
    before?: (currSlideElement: Element, nextSlideElement: Element, options:CycleOptions, forwardFlag: bool) => void;                         // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center?: bool;                                                                                                                            // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype?: bool;                                                                                                                         // true if clearType corrections should be applied (for IE)
    cleartypeNoBg?: bool;                                                                                                                     // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize?: bool;                                                                                                                   // resize container to fit largest slide
    containerResizeHeight?: bool;                                                                                                             // resize containers height to fit the largest slide but leave the width dynamic
    continuous?: bool;                                                                                                                        // true to start next transition immediately after current one completes
    cssAfter?: any;                                                                                                                           // properties that defined the state of the slide after transitioning out
    cssBefore?: any;                                                                                                                          // properties that define the initial state of the slide before transitioning in
    delay?: number;                                                                                                                           // additional delay (in ms) for first transition (hint: can be negative)
    easeIn?: string;                                                                                                                          // easing for "in" transition
    easeOut?: string;                                                                                                                         // easing for "out" transition
    easing?: string;                                                                                                                          // easing method for both in and out transitions
    end?: (options: CycleOptions) => void;                                                                                                    // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent?: bool;                                                                                                                       // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit?: bool;                                                                                                                               // force slides to fit container
    fx?: string;                                                                                                                              // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn?: (currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, afterCalback: Function, forwardFlag: bool) => void;  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height?: any;                                                                                                                             // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump?: bool;                                                                                                                       // causes manual transition to stop an active transition instead of being ignored
    metaAttr?: string;                                                                                                                        // data- attribute that holds the option data for the slideshow
    next?: any;                                                                                                                               // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap?: bool;                                                                                                                            // true to prevent slideshow from wrapping
    onPagerEvent?: (zeroBasedSlideIndex: number, slideElement: Element) => void;                                                              // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent?: (isNext: bool, zeroBasedSlideIndex: number, slideElement: Element) => void;                                             // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager?: any;                                                                                                                              // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder?: (index: number, DOMelement: Element) => string;                                                                      // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent?: string;                                                                                                                      // name of event which drives the pager navigation
    pause?: bool;                                                                                                                             // true to enable "pause on hover"
    pauseOnPagerHover?: bool;                                                                                                                 // true to pause when hovering over pager link
    prev?: any;                                                                                                                               // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent?: string;                                                                                                                   // event which drives the manual transition to the previous or next slide
    random?: bool;                                                                                                                            // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects?: bool;                                                                                                                  // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded?: bool;                                                                                                           // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout?: number;                                                                                                                  // ms delay for requeue
    rev?: bool;                                                                                                                               // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle?: any;                                                                                                                            // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks?: bool;                                                                                                       // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr?: string;                                                                                                                       // expression for selecting slides (if something other than all children is required)
    slideResize?: bool;                                                                                                                       // force slide width/height to fixed size before every transition
    speed?: any;                                                                                                                              // speed of the transition (any valid fx speed value)
    speedIn?: any;                                                                                                                            // speed of the 'in' transition
    speedOut?: any;                                                                                                                           // speed of the 'out' transition
    startingSlide?: number;                                                                                                                   // zero-based index of the first slide to be displayed
    sync?: bool;                                                                                                                              // true if in/out transitions should occur simultaneously
    timeout?: number;                                                                                                                         // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn?: (currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, forwardFlag: bool) => void;                     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink?: (pager: any, currSlide: number, clsName: string) => void;                                                         // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width?: any;                                                                                                                              // container width (if the 'fit' option is true, the slides will be set to this width as well)
}

interface Cycle {
    (fx?: string): JQuery;
    (options?: CycleOptions): JQuery;
    ver: () => string;
    debug: bool;
    defaults: CycleOptions;

    // expose next/prev function, caller must pass in state
    next: (options?: CycleOptions) => void;
    prev: (options?: CycleOptions) => void;

    transitions: { [key: string]: ($cont: JQuery, $slides: JQuery, options: CycleOptions) => void; };                                                                 // transition definitions - only fade is defined here, transition pack defines the rest
    custom: (currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, afterCalback: Function, forwardFlag: bool, speedOverride?: number) => void; // the actual fn for effecting a transition
    commonReset: (currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, w?: bool, h?: bool, rev?: bool) => void;                               // reset common props before the next transition
    hopsFromLast: (options: CycleOptions, forwardFlag?: bool) => number;                                                                                              // helper fn to calculate the number of slides between the current and the next
    createPagerAnchor: (index: number, DOMElement: Element, $pager: JQuery, els: any, options: CycleOptions) => string;                                               
    updateActivePagerLink: (pager: any, currSlide: number, clsName: string) => void;                                                                                  // invoked after transition
    resetState: (options: CycleOptions, fx?: string) => void;                                                                                                         // reset internal state; we do this on every pass in order to support multiple effects
}

interface JQuery {
    cycle: Cycle;
}