function ContactMe() {
    function formValidate(e)
    {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

       if (!name)
       {
        document.getElementById('alert').textContent= 'Name is required'
       } else if (!email)
       {
        document.getElementById('alert').textContent='Email is required'
       } 
       else if ( !(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email) ))
       {
        document.getElementById('alert').textContent='Email not valid'

       }
       else if (!message)
       {
        document.getElementById('alert').textContent='Message is required'
       } else
       {
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
        document.getElementById('alert').textContent='Form submitted'
       }
    }
    return (
        <>
            <div>
                <h3 className="portfolio-h1">
                    Contact Me
                </h3>

                <div className="signup-fields">

                    <form>
                        <label >Your Name</label>
                        <input id="name" name="name" type="text" />
                        <label >Your email</label>
                        <input id="email" name="email" type="text" />
                        <label >Your message</label>
                        <input id="message" name="message" type="text" />
                        <button onClick={formValidate} id="sign-in-submit">Submit</button>
                        <p id="alert"></p>
                    </form>

                    <p id="login-fail-text"></p>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>)
}

export default ContactMe;
