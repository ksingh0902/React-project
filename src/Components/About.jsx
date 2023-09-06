
import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });
// const[btnText, setBtnText]= useState("Enable Dark Mode")

//   function modeChange() {
//     if (myStyle.color === 'black') {
//       setMyStyle({ color: 'white', backgroundColor: 'black' });
//       setBtnText('Enable Light Mode')

//     }else{
//         setMyStyle({ color: 'black', backgroundColor: 'white' });
//         setBtnText('Enable Dark Mode')
//     }
  

  return (
    <>
      <div className="Container">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>
          About US
          {/* <button className="btn btn-primary mx-5" onClick={modeChange}>
            {btnText}
          </button> */}
        </h1>

        <p style={{color:props.mode==='dark'?'white':'black'}}>
          About Text-Utils.com We provide free tools to help you with your daily
          tasks. You will find tools for formatting source code, converters,
          tools for handling text, such as remove duplicate characters, empty
          lines, text sorter and many others. Check the current features below
          and feel free to recommend a new feature by contacting us. News Jan
          22, 2023 - Added a new section of Random Generators. Jan 21, 2023 -
          Improvements to the SQL formatter (support to PL/SQL) and other minor
          UI enhancements. Nov 01, 2022 - You can now drag & drop files into the
          input area. Oct 26, 2022 - Transform a JavaScript Object to JSON with
          our new tool. Oct 15, 2022 - Functionality to turn text upside down is
          now available. Sep 20, 2022 - Google Chrome Extension released.
          Download it here. Aug 29, 2022 - Minor fixes and background updates to
          improve performance. May 05, 2022 - Rating and feedback features
          added. Mar 12, 2022 - Adding quick message feature and a new utility
          for handling Number operations! Mar 10, 2022 - New functionality:
          Remove duplicate keywords from a given input. Nov 19, 2021 - Initial
          versions of the JSON to CSV converter & Find and replace are now
          available. Nov 18, 2021 - Sharing your results is now possible with
          our newest client-side feature (no data is saved in our servers!). Nov
          09, 2021 - A rest for your eyes - dark mode is now available. Sep 28,
          2021 - New IPv6 extractor functionality is now available. Sep 7, 2021
          - Remove special characters with multiple options is now available.
          Aug 29, 2021 - Added a new option for the Remove Duplicate Lines
          utility. Jun 13, 2021 - Multiple new functions are now available. Mar
          21, 2021 - Major code refactoring. Most functionalities are now client
          side. May 5, 2020 - SSL is now enabled by default. May 19, 2017 -
          Minor fixes and updates. Oct 22, 2016 - Site improvements. Small
          adjustments to improve site performance and user experience. Feb 17,
          2015 - Functionality fixes and improvements. Aug 2, 2014 - Site
          improvements. Layout enhancements, bug fixes, and new tools available:
          E-mail and IP Regex Extractors. Check this out! Apr 20, 2014 -
          Text-Utils has been released! Text-Utils is a web tool to assist
          developers and other people in daily tasks by providing tools for
          manipulating text data. The Initial tools include HTML, JSON, SQL, and
          XML formatters, Base 64 and URL encoder/decoder, and many other tools
          to handle text. Check this out!
        </p>
      </div>
    </>
  );
        }
