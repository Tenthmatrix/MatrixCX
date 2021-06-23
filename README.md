# Workstation Dashboard - A Matrix of business software apps for better customer experience

------------------------------------------------------

What is Workstation Dashboard?

Workstation Dashboard is a “Matrix“ of cloud based business software applications and modules for better customer experience (UX). It follows the SAAS model for simplicity, extensibility and portability and the modules are developed in the pure microservices model to simplify development, maintainance and use of the Workstation Dashboard apps. In commerce, customer experience (UX) is the product of an interaction between an organization and a customer over the duration of their relationship.

Why did Workstation Dashboard was created?

The issue with out of the box software depends on how well it is written? Right. The open source software needs customisation but writing software takes time. Extensibility eventually is eventually comporimised when businesses are strained by budgets and time and lack of in-house IT and Developer engineering teams. Business requirements grow and change like climate change. So either the software is out of date with the change in business and economy or business and maintainer of the software has to spend a lot of time and money to keep evolving the software. So Workstation Dashboard is designed from ground up to solve that very issue - The Extensibility with Business Evolution.

The Workstation Dashboard is a Cloud Native Open Source Software written in node.js and mongodb to manage business processes or simply the tasks which are done on daily basis. Workstation Dashboard can be referred as a powerful yet simple Matrix of Business Management Applications and Modules. Modules and applications of the same core Workstation Dashboard can be extended or downgraded just like Workstation Dashboard has a simple modular eco-system like a simple "Matrix" to develop, maintain, extend, enable and disable modules depending on the business requirements without the overhead of the development and re-engineering enitre system. Workstation Dashboard has many new features which can be added easily with minimal development efforts and business and IT administrators can easily configure and up running with the system in no time.

The following Workstation Dashboard modules are currently shipped in the version 1.0.0 build 2020011 beta:

- Workstation Dashboard-Dashboard - A powerful Dashboard Module To Access the Core System, *** This should be your starting point... ***
- Workstation Dashboard-CMS - Content Management System Module (CMS Module)
- Workstation Dashboard-ATS - Job board, ATS with (Applicant Tracking Module) - (Job board Module)
- Workstation Dashboard-Recruitment - Recruitment Management Module (Extending Job board Module to manage entire Recruitment business)
- Workstation Dashboard-Website - A simple yet powerful way to host and manage your Marketing Blog or a website using powerful backend admin module Workstation Dashboard-CMS

Under development Modules are as follows:

- Online Shop (eCommerce Module)
- Sales Orders, Sales Invoices, Purchase Orders, Purchase Invoices (CRM Core Business Module)

Workstation Dashboard-Dashboard is a main component to access the core of the Workstation Dashboard system using WebUI.

The Workstation Dashboard-Dashboard is a main dashboard for admin, back office web users via web and mobile interface to configure, maintain, manage and use the business management  modules.

------------------------------------------------------

For more information please visit https://Workstation Dashboard.org

Workstation Dashboard and Modules such as Workstation Dashboard-Dashboard & Workstation Dashboard-Website are developed from ground up to run in containerised environments and it can be easily run in a containerised environments such as Docker and Kubernetes. It follows the principles of Microservices strictly and each Module or Application of Workstation Dashboard can be deployed, managed in a true Microservices model. 


# How to Install Workstation Dashboard in kubernetes cluster in dev environment using kubectl?

# Setup development namespace
kubectl create -f /Users/balinderwalia/Workstation Dashboard/Workstation Dashboard-dashboard-kubernetes/kube/Workstation Dashboard-dev-namespaces.json

Workstation Dashboard-dev-namespaces.json

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

# Start Workstation Dashboard in kubernetes development namespace using Workstation Dashboard-dashbaord lastest public image from Docker Hub

kubectl create -f https://raw.githubusercontent.com/Tenthmatrix/Workstation Dashboard/master/Workstation Dashboard-dashboard-kubernetes/kube/Workstation Dashboard.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: Workstation Dashboard-dashboard
spec:
  replicas: 1
  selector:
    matchLabels:
      app: Workstation Dashboard-dashboard
  template:
    metadata:
      labels:
        app: Workstation Dashboard-dashboard
    spec:
      containers:
        - name: app
          image: bwalia/Workstation Dashboard-dashboard-js:latest
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

When the Workstation Dashboard pods are running let's expose those pods as a service:

kubectl apply -f https://raw.githubusercontent.com/Tenthmatrix/Workstation Dashboard/master/Workstation Dashboard-dashboard-kubernetes/kube/Workstation Dashboard-service.yaml





# workstation-api
# workstation-api
# workstation-admin-docs
