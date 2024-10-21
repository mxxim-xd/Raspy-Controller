# Raspy-Controller

This project is a simple web-based application for remotely waking up a computer using the **Wake-on-LAN (WoL)** protocol.

## Features

- **Wake-on-LAN**: Allows users to send a WoL packet to wake up a target computer on the local network.
- **Status Check**: Displays the current state (ON/OFF) of the target computer.
- **Dockerized**: Includes a `docker-compose` setup for easy deployment.

## Requirements

- **Docker** and **Docker Compose**
- A computer (e.g., a Raspberry Pi) that is on the same local network as the server.

## Environment Variables

The server requires two environment variables to be set in `docker-compose.yml` for Wake-on-LAN to work:

- `mac_address`: The MAC address of the target PC that supports WoL.
- `ip_address`: The IP address of the target PC for checking its status via ping.

## Installation & Usage

### Running with Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/wake-on-lan-app.git
   cd wake-on-lan-app
   ```
2. **Edit environment variables:**
   Open the docker-compose.yml file and replace the placeholder values for mac_address and ip_address with the actual MAC and IP address of the target computer:

   ```yaml
   environment:
     mac_address: '' # Replace with the actual MAC address
     ip_address: '' # Replace with the actual IP address
   ```

3. **Build and run the Docker containers:**
   ```bash
   docker compose up -d
   ```
