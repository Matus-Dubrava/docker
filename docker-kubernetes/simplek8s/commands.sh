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