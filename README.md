##Chromium Dictionary <br> <small style='color:gray;font-size:12px;'>The Paideia Institute</small>

### Install
Navigate in Terminal (or God forbid, Command Prompt) to the directory where you want the code, and run the following:

```git clone https://github.com/breezykermo/chromium```

This will copy the code into a local repo. ```cd chromium``` and you are good to go.

### Develop on Chrome
Open ```chrome://extensions/``` in a browser, and check the box that reads 'Developer Mode' in the top right-hand corner. Then click 'Load unpacked extension...' in the top-left, and select the 'chromium' folder that you just downloaded. You should now see the Chromium icon in your extensions bar.

### Getting Started
Walk through the following tutorials (actually coding along in your own text editor will help you learn):

 - [https://robots.thoughtbot.com/how-to-make-a-chrome-extension](https://robots.thoughtbot.com/how-to-make-a-chrome-extension)
 - [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

Create a new extension from scratch, and play around with it a little to get the hang of it. Try to code some basic functionality. Here are some ideas:

 - Console.log the CSS properties of a \<div\> when the mouse hovers over it.
 - When clicking the extension icon in the extension bars, turn all \<h3\> tags in the open tab green.
 - Add the ability to add highlighted words to a list that is displayed in the top right-hand corner of the screen (the adding can happen on double click, as an option in a right-click menu, or in any other way).

After you've got the hang of it, read through the Chromium extension code, and once you understand it start making wonderous changes.

### Resources
 - [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)

LICENSE:MIT
