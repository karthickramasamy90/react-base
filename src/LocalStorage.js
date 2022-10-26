import React, { useState } from 'react';

const LocalStorageComponent = () => {
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

  
  function handleOnChange(event) {
      console.log(event.target.value)
      setSelectedOption(event.target.value);
  }
  
  function handleMessage(event) {
      setMessage(event.target.value);
  }
  
  function handleSubmit() {
      localStorage.setItem(selectedOption, message)
  }
    return (
        <div>
            <div>
              <label>Select Message type</label>
              <select name='selectedOption' placeholder="Select Message" onChange={handleOnChange}>
                <option>Select Message</option>
                <option value="success">Success</option>
                <option value="failure">Failure</option>
                <option value="warning">Warning</option>
              </select>
            </div>
  
          <div>
            <label>Please enter your message here</label>
            <input type="text" name='message' onChange={handleMessage} />
  
            <button type="submit" onClick={handleSubmit}>Submit </button>
          </div>
        </div>
    );
  }

  export default LocalStorageComponent;