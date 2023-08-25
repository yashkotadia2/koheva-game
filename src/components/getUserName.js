import React, {useState} from "react";
import '../css/getUserName.css'
import 'animate.css';

import { Radio, Select, Space, Input } from "antd";


function GetUserName(props) {

	const [name, setName] = useState('')
	const [phone, setPhone] = useState()

	const onTrigger = () => {
        props.parentCallback(name);
    }

	const handleChange = (e, l) => {
		console.log("value", e, l);
		setName(l.label);
		var s = document.getElementById("start");
		s.focus();
		// setName(l.label);
		// handleStepChange("next");
	  };

	const options = [
		{
		  value: "1",
		  label: "Not Identified",
		},
		{
		  value: "2",
		  label: "Closed",
		},
		{
		  value: "3",
		  label: "Communicated",
		},
		{
		  value: "4",
		  label: "Identified",
		},
		{
		  value: "5",
		  label: "Resolved",
		},
		{
		  value: "6",
		  label: "Cancelled",
		},
	  ];

  return <div>

	<div class="contact-form margin-top animate__animated animate__fadeIn">
		{/* <img alt="" class="avatar" src="https://i.postimg.cc/zDyt7KCv/a1.jpg"/> */}
		<h2>Let's start with your Info:</h2>
		<div>
			<p>Your Name:</p>
			<Select
				showSearch
				style={{
				width: "100%",
				}}
				placeholder="Search to Select"
				optionFilterProp="children"
				filterOption={(input, option) =>
				(option?.label ?? "").includes(input)
				}
				filterSort={(optionA, optionB) =>
				(optionA?.label ?? "")
					.toLowerCase()
					.localeCompare((optionB?.label ?? "").toLowerCase())
				}
				onChange={(e, l) => handleChange(e, l)}
				options={options}
			/>
			<p className="mt-2">Contact Cell:</p>
			<input className="phone_input" name="user_phone" placeholder="Enter Your Phone" type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
       		<input type="button" id="start" value="START" onClick={()=>onTrigger()}/>
		</div>
	</div>
  </div>;
}

export default GetUserName;
