/// <reference path="../dep/typings/chrome-app.d.ts" />
var runtime = chrome.app.runtime;
var cwindow = chrome.app.window;

var screenWidth = screen.availWidth;
var screenHeight = screen.availHeight;
var width = 640;
var height = 480;

var createOptions = {
    id: "Peace",
    bounds: {
        left: Math.round((screenWidth - width) / 2),
        top: Math.round((screenHeight - height) / 2),
        width: width,
        height: height
    },
    minWidth: width,
    minHeight: height,
    resizable: true
};

//Create new window on app launch
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    chrome.app.window.create('index.html', createOptions, function (created_window) {
        return;
    });
});

chrome.app.runtime.onRestarted.addListener(function () {
    return;
});

// Get Current Window
var currentWindow = chrome.app.window.current();
