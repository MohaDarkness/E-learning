const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
  try {
    const { userName, password } = req.body;

    // Check the username prefix and return the corresponding role
    let role;
    if (userName.startsWith('std')) {
      role = 'S';
    } else if (userName.startsWith('ad')) {
      role = 'A';
    } else if (userName.startsWith('tch')) {
      role = 'T';
    } else {
      // Return an error if the username doesn't match any pattern
      return res.status(400).send('Invalid username');
    }

    // For simplicity, assuming the password is correct for any username
    // In a real-world scenario, you would perform proper authentication

    // Respond with the role
    res.send(role);
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
