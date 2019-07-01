import React, { useState } from 'react';
import './App.css';

function App() {
  const [reply, setReply] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <p>Create a bookmarklet to insert some text in a textarea</p>
        <textarea value={reply} onChange={e => setReply(e.currentTarget.value)} placeholder="Text to insert in the textarea" />
      </header>
      <div className="container">


        <h1>Installing</h1>
        <p>To install, drag the link below to your bookmarks toolbar:</p>
        <a
          className="button"
          href={`javascript:(function() { document.activeElement.value = ${JSON.stringify(reply)} })()`}
        >
          bookmarklet
        </a>
        <p>Or, you can install the bookmarklet manually. The instructions are different for each browser:</p>

        <h3>Safari</h3>

        <p>Dragging the link to the bookmarks bar is the easiest way to do this in Safari. Otherwise we have to create a bookmark for something else, and then edit the URL to be the Javscript we want to run.</p>

        <ol>
          <li>In Safari, load any web page. We're use <a href="http://infopeople.org">infopeople.org</a> for this example. (You can't add a bookmark unless you're on a page already, it seems.)</li>
          <li>Select Bookmarks > Add Bookmark</li>
          <li>A little window will pop up. Select the folder or location where you want the bookmarklet (Use "Favorites Bar" for easy access.) Then type the name of your bookmarklet in the text field.</li>
          <li>Click "Add"</li>
          <li>Now right-click on bookmark you just created. You should see a menu pop up. Select "Edit Address
          "<br />
          <img src={require("./img/safari1.png")} alt="Safari contextual menu" /></li>

          <li>You should now see a text box pop up under your bookmark</li>
          <li>Copy the JavaScript by right-clicking on <span class="bookmarklet">the bookmarklet link</span> and selecting "Copy Link"
          </li>
          <li>Paste the code into the text box</li>
          <li>Click the "Done" button.<br /><img src={require("./img/safari2.png")} alt="Adding a bookmarklet to Safari" /></li>
        </ol>

        <h3>Chrome</h3>

        <ol>
          <li>In Chrome, click Bookmarks &gt; Bookmark Manager</li>
          <li>You will see a new tab open with all of your bookmarks in it</li>
          <li>(If you see a big blue button labeled "New", then <a href="#chromestep7">jump to the section below</a>. Otherwise, continue.)</li>
          <li>Copy the JavaScript by right-clicking on <span class="bookmarklet">the bookmarklet link</span> and selecting "Copy Link Location"</li>
          <li>Right click on the "Bookmarks Bar" in the left column, and select "Add Page."<br />
          <img src={require("./img/chrome1.png")} alt="Adding a bookmarklet to Chrome - paste into URL field" /></li>
          <li>Type a name for the bookmarklet in the 'Name' field and paste the code into the "URL" field.<br />
          <img src={require("./img/chrome2.png")} alt="Adding a bookmarklet to Chrome - paste into URL field" /></li>
        </ol>

        <h4 id="chromestep7">If you have the newer Chrome, follow these instructions:</h4>

        <ol start="4">
          <li>Click the blue "New" button in the left column</li>
          <li>Copy the JavaScript by right-clicking on <span class="bookmarklet">the bookmarklet link</span> and selecting 'Copy Link Location'</li>
          <li>Paste the code into the "URL" field.</li>
          <li>Click the gray "Add" button.<br /><img src={require("./img/chrome.png")} alt="Adding a bookmarklet to Chrome" /></li>
        </ol>


        <h3>Firefox</h3>

        <p>There are two ways to do this in Firefox:</p>

        <h4>To install a bookmarklet you created in Firefox:</h4>

          <ol>
            <li>In Firefox, click "Bookmarks," then select "Bookmark this Page"<br />
            <img src={require("./img/firefox2.png")} alt="Firefox bookmarks manager" /></li>
            <li>Type a name for your bookmarklet into the Name field, and select where you want the bookmark to live. If you want it easily accessible, choose the "Bookmarks Toolbar."</li>
            <li>You should have a bookmark in your toolbar now. Right-click on it and select "Properties."<br />
            <img src={require("./img/firefox3.png")} alt="Firefox bookmarks editor" /></li>
            <li>Copy the JavaScript for your bookmarklet, and paste it into the "Location" field.</li>
            <li>Click Save.</li>
          </ol>

        <h4>If you want to install a bookmarklet that is on a webpage:</h4>

          <ol>
            <li>In Firefox, if you already have a bookmarklet on a web page, right-click on <span class="bookmarklet">the bookmarklet link</span></li>
            <li>Select "Bookmark This Link"<br />
            <img src={require("./img/firefox.png")} alt="Adding a bookmarklet to Firefox" /></li>
            <li>Type the name of your Bookmarklet in the "Name" field</li>
            <li>Click "Save"</li>
          </ol>

      </div>
    </div>
  );
}

export default App;
