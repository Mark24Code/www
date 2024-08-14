system("cd ../web && npm i && npm run build")
system("rm -rf ./public && mv ../web/dist ./public")
