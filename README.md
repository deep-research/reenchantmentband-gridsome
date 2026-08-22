# victors-library

# 1. Build and run the containers with Docker Compose
docker compose up --build

# 2. Stop all running containers (works in both Git Bash and PowerShell)
docker stop (docker ps -q)

# 3. Stop the project
docker compose down

# 4. Servers will be at http://localhost:1337/admin and http://localhost:8080
