/// <reference path="../dep/typings/chrome-app.d.ts" />

import runtime = chrome.app.runtime;
import cwindow = chrome.app.window;

var screenWidth : number = screen.availWidth;
var screenHeight : number = screen.availHeight;
var width : number = 640;
var height : number = 480;

var createOptions: cwindow.CreateOptions = {
    id: "Peace",
    bounds: {
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2),
      width: width,
      height: height
    },
    resizable: true
};

//Create new window on app launch
chrome.app.runtime.onLaunched.addListener(function (launchData: runtime.LaunchData) {
    chrome.app.window.create('app/url', createOptions, function (created_window: cwindow.AppWindow) {
        return;
    });
});

chrome.app.runtime.onRestarted.addListener(function () { return; });

// Get Current Window
var currentWindow: cwindow.AppWindow = chrome.app.window.current();