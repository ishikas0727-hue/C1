import React,{useState} from "react";
function Newsletter(){const[email,setEmail]=useState("");const[message,setMessage]=useState("");function handleSubmit(e){e.preventDefault();setMessage("Thank you for subscribing!");setEmail("")}
return <div id="subscribe"><hr/><h2>Subscribe to DEV@Deakin</h2><p>Enter your email to receive a welcome email.</p><form onSubmit={handleSubmit}><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" required/><button type="submit">Subscribe</button></form><p id="message">{message}</p></div>}
export default Newsletter;
