Docker - Node.js, Ngninx and redis

This docker configuration spins up

- 1 Redis container
- 1 Nginx container
- 4 Node.js containers

The nginx container will act as the load balancer for the 3 app servers.

Running

In the root directory (this uses the docker-compose.yml file to spin up the containers)

> docker-compose up

Useful commands

> docker stop $(docker ps -a -q)
> docker rm $(docker ps -a -q)

Note: Make sure port 80 on your machine is free!

Encountered issues

FATA[0000] Get http:///var/run/docker.sock/v1.18/containers/json: dial unix /var/run/docker.sock: no such file or directory. Are you trying to connect to a TLS-enabled daemon without TLS?

> $(boot2docker shellinit 2> /dev/null)

Useful Commands

Stopping and deleting containers

> docker rm $(docker ps -a -q)
> docker rm $(docker ps -a -q)
