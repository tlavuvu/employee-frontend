class LoginRequest {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    setUsername(newUsername) {
        this.username = newUsername;
      }

    // Method to get username
    getUsername() {
      return this.username;
    }
  
    // Method to set a new password
    setPassword(newPassword) {
      this.password = newPassword;
    }
  
    // Method to get password (usually not recommended for security)
    getPassword() {
      return this.password;
    }
  }
  
// Example usage
//   const user = new User('john_doe', 'password123');
//   console.log(user.getUsername()); // Output: john_doe
//   user.setPassword('newPassword456');
  