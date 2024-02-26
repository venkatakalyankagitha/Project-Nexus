function showAlert(message, isSuccess = true) {
    const alertClass = isSuccess ? 'success' : 'error';
    const alertDiv = document.createElement('div');
    alertDiv.className = alert; $; { alertClass; };
    alertDiv.appendChild(document.createTextNode(message));
    document.body.appendChild(alertDiv);
  
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 3000);
  }
    
    const login = async () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
    
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          showAlert(data.message);
          // You can redirect the user or perform other actions after successful login
        } else {
          const errorData = await response.json();
          showAlert(errorData.message, false);
        }
      } catch (error) {
        console.error('Error during login:', error);
        showAlert('An unexpected error occurred. Please try again later.', false);
      }
    };
    
    const signup = async () => {
      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;
    
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newUsername, newPassword }),
        });
    
        if (response.ok) {
          const data = await response.json();
          showAlert(data.message);
          // You can redirect the user or perform other actions after successful signup
        } else {
          const errorData = await response.json();
          showAlert(errorData.message, false);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        showAlert('An unexpected error occurred. Please try again later.', false);
      }
    };
