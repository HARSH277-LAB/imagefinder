import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Footer } from './Footer';

const MainData = () => {
  // State hooks for managing user input, data array, page number, total results, and mode (light/dark)
  const [userInput, setUserInput] = useState("office")  //Default input is "office"
  const [dataArray, setdataArray] = useState([]) //Default input is "office"
  const [pageNo, setpageNo] = useState(1)  //  Page number for API requests
  const [totalResults, settotalResults] = useState(0) // Total number of results from the API

  const [mode, setMode] = useState("light") // Total number of results from the API

  //  Api key and base url 
  const api_key = `sXg9p8_Ks5libf02TIoWlpz9-ysfmG2SWYViHiASIIo`
  const api = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${userInput}&client_id=${api_key}`

  // Function to fetch initial data based on user input
  const fetchdata = async () => {
    try {
      const response = await fetch(api) //Fetch data from the API
      const data = await response.json() // To get the json body
      setdataArray(data.results) // Update the dataArray state with the results
      settotalResults(data.total) //Update totalResults state with the total number of results
      setpageNo(pageNo + 1)
      
    } catch (error) {
      console.error(error.message)
    }

  }
  // Function to fetch more data when scrolling
  const fetchMoreData = async () => {
    try {
      const response = await fetch(api) //Fetch more data from the API
      const data = await response.json()
      setpageNo(pageNo + 1)
      setdataArray(dataArray.concat(data.results)) // Concatenate new results to the existing dataArray
      
    } catch (error) {
      console.error(error.message)
    }

  };
  //  Toggle between light and dark
  const changeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light")
  }
  const onchange = (e) => {
    setUserInput(e.target.value) // sets the user input state 
  }
  // useEffect hook to fetch data whenever userInput changes
  useEffect(() => {
    fetchdata(); //Call fetchdata function when userInput changes
    // eslint-disable-next-line 
  }, [userInput]);
  return (
    <>
      <div className={`${mode === "light" ? "bg-light" : "bg-dark"}`}style={{minHeight:'100vh'}} >
        {/* Conditional class for background color based on the current mode */}

        <div className='d-flex align-items-center flex-column'>
          {/* Flex container for input and toggle switch */}

          <label htmlFor='userinput' className={`${mode === "light" ? "text-dark" : "text-light"}`}>
            search for an image using keyword
            {/* Label for the input field, changing text color based on mode */}
          </label>
          <br />
          <input type="text" placeholder='enter your text here' aria-placeholder="enter your text here" name="userinput" onChange={onchange} value={userInput} />
          {/* Input field for user to enter search keywords */}

          <div className="form-check form-switch">
            {/* Bootstrap switch for toggling dark/light mode */}
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode} />
            {/* Checkbox for switching modes */}
            <label className={`form-check-label ${mode === "light" ? "text-dark" : "text-light"}`} htmlFor="flexSwitchCheckDefault">
              {mode === "light" ? "switch to dark mode" : "switch to light mode"}
              {/* Label indicating the current mode and what the switch will do */}
            </label>
          </div>

        </div>
        {/* {console.log(dataArray)}  */}

        <InfiniteScroll
          dataLength={dataArray && dataArray.length} // Total number of items in the data array
          next={fetchMoreData} // Function to call for fetching more data
          hasMore={dataArray && (dataArray.length !== totalResults)} // Condition to check if more data is available
          loader={<h4>Loading...</h4>} // Loader to display while fetching more data
        >
          <div className='d-flex justify-content-evenly flex-wrap p-5'>
            {/* Flex container to display image cards */}

            {
              dataArray && dataArray.length !== 0 ? dataArray.map(val => {
                return (
                  <div className='mt-5' key={val.id}>
                    {/* Render Cards component for each item in dataArray */}
                    <Cards fileName={userInput} data={val} />
                  </div>
                )
              }) : <div className='d-flex flex column'><p className={`${mode === "light" ? "text-dark" : "text-light"} flex-grow-1`}> sorry we could not find the image for {userInput}</p></div>
              // Message displayed if no images are found
            }
          </div>
        </InfiniteScroll>
      <Footer/>
      </div>
    </>
  )
}

export default MainData // Exporting the MainData component for use in other parts of the application