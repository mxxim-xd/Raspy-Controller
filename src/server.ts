import express from 'express';
import { exec } from 'child_process';
import path from 'path';

const app = express();
const PORT = 3000;

// Get the MAC address from the environment variable
const macAddress = process.env.mac_address;

if (!macAddress) {
  console.error('MAC address is not set in the environment.');
  process.exit(1); // Exit the application if no MAC address is provided
}

// Middleware to parse incoming JSON request bodies (for POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, '../public')));

// POST route to handle the wake request
app.post('/wake', (req, res) => {
  // Execute wakeonlan with the MAC address from the environment variable
  exec(`wakeonlan ${macAddress}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send('Failed to send wake-on-LAN command.');
    }

    console.log(`Command output: ${stdout}`);
    res.send('Wake-on-LAN command sent!');
  });
});

// Listen on all interfaces so the server is accessible on the local network
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
