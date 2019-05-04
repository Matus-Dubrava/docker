# fead a config file to kubectl
kubectl apply -f <filename>

# list pods
kubectl get pods

# list services 
kubectl get services

# fetch minikube's IP 
minikube ip

# use local docker image
eval $(minikube docker-env)

# exit from minikube env
eval $(minikube docker-env -u)

# increase disk size of minikube
minikube start --disk-size 100g

# get information about object
kubectl describe <object-type> <object-name>

# get status + IP for pods
kubectl get pods -o wide 

# imperatively update pods with new image version
kubectl set image deployment/client-deployment client=matusdubrava/multi-client

# get logs of a pod
kubectl logs <pod-name>

# start a shell inside of a pod
kubectl exec -it <pod-name> sh