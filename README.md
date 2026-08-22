# victors-library

# 1. Build and run the containers with Docker Compose
docker compose up --build

# 2. Stop the project
docker compose down

# 3. Deploy frontend to GitHub Pages
docker compose run --rm frontend yarn deploy

# 4. Servers will be at http://localhost:1337/admin and http://localhost:8080
