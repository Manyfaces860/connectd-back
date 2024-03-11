function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Dummy data for demonstration
    const dummyData = [
      {
      email: 'user@example.com',
      password: 'password123',
    },
    {
      email: 'user1@example.com',
      password: 'password12',
    }
  ];
  
    // Check if provided email and password match dummy data
    dummyData.map((person) => {
      if (email === person.email && password === person.password) {
        // Redirect to the home page
        window.location.href = '/chat';
        window.localStorage.setItem("person", [email,password])
        console.log(window.localStorage.getItem(person) , 'this is stored')
      } else {
        alert('Invalid email or password. Please try again.');
      }
    })
  }
  