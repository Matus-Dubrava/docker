-   [commands]

# commands

-   `docker container run --publish 80:80 nginx`

    -   download image _nginx_ from docker hub
    -   start a new container from that image
    -   open port 80 on the host IP
    -   route that traffic to the container IP, port 80

-   `docker container run --publish 80:80 --detach nginx`

    -   run the container in the background
    -   receive a unique container ID

-   `docker container run --publish 80:80 --detach --name webhost nginx`

    -   provide name for a container

-   `docker container ls`

    -   list running containers
    -   list all containers with `ls -a`

-   `docker container stop <id>`

    -   stop container with the provided id

-   `docker container logs <name>`

    -   list logs for a container running in background

-   monitoring

    -   `docker container top <name>`
        -   show processes running inside of a container
    -   `docker container inspect`
        -   show details of one container config
    -   `docker container stats`
        -   show performance stats of all containers

-   `docker container rm <id>`

    -   delete docker container with the provided id
    -   use `rm -f` to delete running container
