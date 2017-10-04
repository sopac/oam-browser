module.exports = {
    environment: 'staging',
    map: {
	mapbox: {
	    accessToken: 'pk.eyJ1Ijoib3BlbmFlcmlhbG1hcCIsImEiOiJjaXl4MjM5c20wMDBmMzNucnZtbnYwZTcxIn0.IKG5flWCS6QfpO3iOdRveg'
	},

	initialZoom: 5,
        minZoom: 2,
        maxZoom: 18,

        initialView: [179.0112,-15.0721]
    },
    catalog: {
	url: 'http://ec2-52-63-49-59.ap-southeast-2.compute.amazonaws.com/api'
    },
    oamStatus: 'https://status.openaerialmap.org/healthcheck',
    feedbackSubmissionURL: 'https://getsimpleform.com/messages/ajax?form_api_token=506fc2ac58582416b6086a68a343e344',
    uploadBucket: "pacdid-temp",
    googleClient: "256355143555-fk9lngo3c00ubgaeh6bgknuf64hr002j.apps.googleusercontent.com",
    googleDeveloperKey: "",
    OAMBrowserUrl: "http://ec2-52-63-49-59.ap-southeast-2.compute.amazonaws.com"
};
