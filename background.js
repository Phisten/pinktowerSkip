// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    // Redirect the original request to a given URL.
    var url = info.url;
    var new_url = url.replace("http://www.pinktower.com/?", "");
    //http://www.pinktower.com/?https://i.imgur.com/ABCDE123456.png
    //console.log(info);
    return {redirectUrl: new_url};
  },
  // filters
  {
    urls: [
      "*://www.pinktower.com/*"
    ],
    types: ["main_frame"]
  },
  // extraInfoSpec
  ["blocking"]
);
