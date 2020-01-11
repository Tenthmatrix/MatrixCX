	/**********************************************************************
	*  Author and maintainer of MatrixCX: Balinder WALIA (balinder.walia@MatrixCX.org)
	*  Project Lead Contributor: Jit WALIA (Jit@MatrixCX.org)
	*  Project Contributor: Neha Kapoor (neha@MatrixCX.org)
	*  Project Lead Twitter...: https://twitter.com/balinderwalia
	*  Name..: MatrixCX
	*  Desc..: MatrixCX (part of Tenthmatrix Suite of Apps)
	*  Web: https://MatrixCX.org
	*  License: http://MatrixCX.org/LICENSE.txt
	**/

	/**********************************************************************
	*  init.js handles the basic initial constants
	**/

// Init connection env variables

const dashboardHost = process.env.MATRIXCX_DASHBOARD_HOST || 'localhost'
const dashboardPort = process.env.MATRIXCX_DASHBOARD_PORT || 3015
const dashboardDir = process.env.MATRIXCX_DASHBOARD_HOST || 'matrixcx-dashboard'

const appHost = process.env.FRONTEND_APP_HOST || 'localhost'
const appPort = process.env.FRONTEND_APP_PORT || 3005
const systemSiteID = process.env.FRONTEND_APP_GUID || "5947ccfb8b69ec720d5814d4"

const mongoPort = process.env.MONGO_PORT || 27017
const mongoDB = process.env.MONGO_DB || 'matrixcx'
const mongoHistoryDB = process.env.MONGO_HISTORY_DB ||  mongoDB + '_history'
const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoURL = process.env.MONGO_URL || 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoDB
const mongoHistoryURL = process.env.MONGO_HISTORY_URL || 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoHistoryDB

//console.log('mongoHistoryURL: ' + mongoHistoryURL);

	var mongodbRe = require('mongodb')
	var MongoClient = mongodbRe.MongoClient;

	// Connection URL. This is where your mongodb server is running.
	var url = mongoURL;						//'mongodb://localhost:27017/webcrm_documentation';

	var _db;
	var definedAdminTablesArr= new Array("systems", "Country", "availability", "authentication_token", "email_queue", "system_lists", "system_tables", "tags", "modules", "uk_towns_cities");
	var definedMaintainHistoryTablesArr= new Array("documents", "tokens", "templates");

	module.exports = {
    	mongodb : mongodbRe,
    	MongoClient : MongoClient,
    	mongoConnUrl : url,
    	port : dashboardPort,
		cookieName : "matrixcx_dashboard_auth",
		backendDirectoryPath : '/' + dashboardDir,
		backendDirectoryName : dashboardDir,
		adminTablesArr : definedAdminTablesArr,
		maintainHistoryTablesArr : definedMaintainHistoryTablesArr,
		historyDatabaseName : mongoHistoryDB,
		historyDatabaseURL : mongoHistoryURL,
		system_name : "MatrixCX",
		recipientStr : 'info@MatrixCX.org',
		websiteUrl : 'http://' + appHost + ':' + appPort + '/',
		appUrl : 'http://' + dashboardHost + ':' + dashboardPort + '/' + dashboardDir
	};
