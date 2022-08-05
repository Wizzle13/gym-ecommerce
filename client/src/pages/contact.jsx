import React from 'react'

function Contect() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
            <input type='text' placeholder="First Name" required />
            <input type='email' placeholder="Email" required />
            <textarea placeholder='Message Here' />
            <input type='submit' value='send' />
            </form>     
            <foot>
            <a href = "https://github.com/Wizzle13/gym-ecommerce" target = "_blank">Github</a>
 </foot>       
        </div>
    )
}

export default Contect
