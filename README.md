# reenchantment

# 1. Build and run the containers with Docker Compose
docker compose up --build

# 2. Stop the project
docker compose down

# 3. Deploy frontend to GitHub Pages
docker compose run --rm frontend sh -c "cp -R /root/.ssh /tmp/ssh_keys && chmod 600 /tmp/ssh_keys/id_* /tmp/ssh_keys/config && git config --global user.name 'Victor Fisher' && git config --global user.email 'victor@victorsarchive.com' && GIT_SSH_COMMAND='ssh -F /tmp/ssh_keys/config -i /tmp/ssh_keys/id_ed25519_github -o IdentitiesOnly=yes' yarn deploy"

# 4. Servers will be at http://localhost:1337/admin and http://localhost:8080
