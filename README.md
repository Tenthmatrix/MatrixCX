# MatrixCX - A Matrix of software apps for better customer experience (CX)

------------------------------------------------------

What is MatrixCX?

MatrixCX is a “Matrix“ of cloud based business software applications and modules for better customer experience (CX). It follows the SAAS model for simplicity, extensibility and portability and the modules are developed in the pure microservices model to simplify development, maintainance and use of the MatrixCX apps. In commerce, customer experience (CX) is the product of an interaction between an organization and a customer over the duration of their relationship.

Why did MatrixCX was created?

The issue with out of the box software depends on how well it is written? Right. The open source software needs customisation but writing software takes time. Extensibility eventually is eventually comporimised when businesses are strained by budgets and time and lack of in-house IT and Developer engineering teams. Business requirements grow and change like climate change. So either the software is out of date with the change in business and economy or business and maintainer of the software has to spend a lot of time and money to keep evolving the software. So MatrixCX is designed from ground up to solve that very issue - The Extensibility with Business Evolution.

The MatrixCX is a Cloud Native Open Source Software written in node.js and mongodb to manage business processes or simply the tasks which are done on daily basis. MatrixCX can be referred as a powerful yet simple Matrix of Business Management Applications and Modules. Modules and applications of the same core MatrixCX can be extended or downgraded just like MatrixCX has a simple modular eco-system like a simple "Matrix" to develop, maintain, extend, enable and disable modules depending on the business requirements without the overhead of the development and re-engineering enitre system. MatrixCX has many new features which can be added easily with minimal development efforts and business and IT administrators can easily configure and up running with the system in no time.

The following Matrixcx modules are currently shipped in the version 1.0.0 build 2020011 beta:

- MatrixCX-Dashboard - A powerful Dashboard Module To Access the Core System, *** This should be your starting point... ***
- MatrixCX-CMS - Content Management System Module (CMS Module)
- MatrixCX-ATS - Job board, ATS with (Applicant Tracking Module) - (Job board Module)
- MatrixCX-Recruitment - Recruitment Management Module (Extending Job board Module to manage entire Recruitment business)
- MatrixCX-Website - A simple yet powerful way to host and manage your Marketing Blog or a website using powerful backend admin module MatrixCX-CMS

Under development Modules are as follows:

- Online Shop (eCommerce Module)
- Sales Orders, Sales Invoices, Purchase Orders, Purchase Invoices (CRM Core Business Module)

MatrixCX-Dashboard is a main component to access the core of the Matrixcx system using WebUI.

The MatrixCX-Dashboard is a main dashboard for admin, back office web users via web and mobile interface to configure, maintain, manage and use the business management  modules.

------------------------------------------------------

For more information please visit https://matrixcx.org

MatrixCX and Modules such as MatrixCX-Dashboard & MatrixCX-Website are developed from ground up to run in containerised environments and it can be easily run in a containerised environments such as Docker and Kubernetes. It follows the principles of Microservices strictly and each Module or Application of MatrixCX can be deployed, managed in a true Microservices model. 


# How to Install MatrixCX Dashboard in kubernetes cluster in dev environment using kubectl?

Please install kubectl as we will use kubectl for managing kubenetes cluster - https://kubernetes.io/docs/tasks/tools/install-kubectl/

I am on OSX and installed kubectl on via brew install kubectl

Validate if kubectl is install
kubectl version

Validate if kubernetes cluster is up and running
kubectl config view

Find if system pods are running in kubernetes
kubectl get pods --all-namespaces

Setup dashboard in kubernetes if you wish to view your kubernetes cluster resources via web dashboard:

kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml


# Setup development namespace
kubectl create -f https://raw.githubusercontent.com/Tenthmatrix/MatrixCX/matrixcx-dashboard-kubernetes/kube/matrixcx-dev-namespaces.json

matrixcx-dev-namespaces.json

{
  "apiVersion": "v1",
  "kind": "Namespace",
  "metadata": {
    "name": "development",
    "labels": {
      "name": "development"
    }
  }
}

# Start MatrixCX Dashboard in kubernetes development namespace using matrixcx-dashbaord lastest public image from Docker Hub

kubectl create -f https://raw.githubusercontent.com/Tenthmatrix/MatrixCX/master/matrixcx-dashboard-kubernetes/kube/matrixcx.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: matrixcx-dashboard
spec:
  replicas: 1
  selector:
    matchLabels:
      app: matrixcx-dashboard
  template:
    metadata:
      labels:
        app: matrixcx-dashboard
    spec:
      containers:
        - name: app
          image: bwalia/matrixcx-dashboard-js:latest
          resources:
            limits:
              memory: "750Mi"
            requests:
              memory: "500Mi"
          ports:
            - containerPort: 3015
          imagePullPolicy: Always
          env:
            - name: MONGO_DB
              value: "jobshout_live"
            - name: MONGO_HOST
              value: "mongo-prod.tenthmatrix.co.uk"
            - name: MONGO_PORT
              value: "27017"
            - name: MONGO_URL
              value: "mongodb://mongo-prod.tenthmatrix.co.uk:27017/jobshout_live"
            - name: MONGO_HISTORY_URL
              value: "mongodb://mongo-prod.tenthmatrix.co.uk:27017/jobshout_live_history"

Wait for the pods to be up and running by watching pods using kubectl

kubectl get pods --all-namespaces --watch or if running via Bash sleep for 10 seconds

sleep 10

When the MatrixCX Dashboard pods are running let's expose those pods as a service:

kubectl apply -f https://raw.githubusercontent.com/Tenthmatrix/MatrixCX/master/matrixcx-dashboard-kubernetes/kube/matrixcx-service.yaml





