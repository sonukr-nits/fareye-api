const exampleData = {
    id: 1,
    additionalId: { email: "fake1@example.com", phone: "79000000001" },
    role: "resident",
    secrets: {
        external: {},
        tempPass: "456456",
        constPass:
            "0eac67c42c5be76481dade3192495f3a.41fb40bea6cb0a42005e68e0d9f9ec85456e3ae763b08a248d572f44820edb28305b3c4611bf81cb8fd67b600c84bddea82b0797e1059e7a599afb7598006d20",
    },
    token: null,
    phone: "79000000001",
    covidToken: null,
    isActive: true,
    isDelete: false,
    isQuarantine: false,
    quarantineExpiration: null,
    meta: {
        registration: {
            isFake: true,
            status: "completed",
            tempPassExpTime: 0
        }
    },
    created: "2020-04-27T06:27:09.222Z",
    updated: "2020-04-27T06:27:09.222Z"
};

// Process Request Payload
const processPayload = [
    {
        "referenceNumber": "FAR12357625",
        "merchantCode": "merchant",
        "processDefinitionCode": "pick and drop",
        "processData": {
            "add1": "String Content",
            "contactno": "9876543210",
            "countrycode": "String Content",
            "dat": "2021-12-10",
            "pin": "String Content",
            "pdflink3": "String Content",
            "imgupload": "String Content",
            "imgurl": "http://abc.co",
            "landmark": "String Content",
            "latlong": {
                "latlongLatitude": "101.43",
                "latlongLongitude": "101.43"
            },
            "product_details": [
                {
                    "product_name": "String Content",
                    "product_quantity": "456",
                    "product_unit_price": "101.43",
                    "pdflink1": "String Content",
                    "pdflink2": "String Content"
                }
            ],
            "ocbm": [
                "String Content"
            ],
            "orbm": "String Content",
            "dropdown": "String Content",
            "rng": "456",
            "stm": "String Content",
            "currentstatus": "String Content",
            "merchantcode11": "String Content",
            "pdf": "http://abc.co",
            "name": "String Content",
            "nps": "String Content",
            "ds": "String Content",
            "dsf1": "String Content",
            "city": "String Content",
            "branch": "String Content",
            "latstr": "String Content",
            "longstr": "String Content",
            "starttime": "String Content",
            "endtime": "String Content",
            "COST": "101.43",
            "num2": "456",
            "num3": "456",
            "customurl": "String Content",
            "updateform": "String Content",
            "updatelocation": "String Content",
            "priority": "String Content",
            "origin": "String Content",
            "destination": "String Content",
            "via": "String Content",
            "fename": "String Content",
            "slotsize": "String Content",
            "Usertype": "String Content",
            "order_status": "String Content",
            "scantext": "String Content",
            "dec1": "101.43",
            "ref12": "String Content",
            "num12": "456",
            "datetime": "2014-12-18 10:10:00",
            "accesshub": "String Content",
            "refno": "String Content",
            "qrcode1": "String Content",
            "string12": "String Content",
            "arr_ds": [
                {
                    "nam": "String Content"
                }
            ],
            "FE1": "String Content",
            "dynamic_slot": "String Content",
            "start_date": "2021-12-10",
            "groupid": "String Content",
            "wt1": "String Content",
            "Remark": "String Content",
            "ConnectorCity": "String Content",
            "ConnectorID": "456",
            "remark2": "String Content",
            "2add": "String Content",
            "2landmark": "String Content",
            "2pin": "String Content",
            "2latlomg": {
                "2latlomgLatitude": "101.43",
                "2latlomgLongitude": "101.43"
            },
            "dat1": "2021-12-10",
            "datastore1": "String Content",
            "dataS": "String Content",
            "routingDistance": "String Content",
            "routingTime": "String Content",
            "pickupETA": "String Content",
            "DynamicslotMINIMUM": "456",
            "DynamicslotMAXIMUM": "456",
            "BookedDate": "String Content",
            "t": "String Content",
            "ArrayTransaction": [
                {
                    "currentstatusTransaction": "String Content",
                    "PreviousStatusTransaction": "String Content",
                    "latTransaction": "101.43",
                    "longTransaction": "101.43"
                }
            ],
            "x10945": "String Content",
            "POD": "String Content"
        },
        "processUserMappings": [
            {
                "flowCode": "pick",
                "cityCode": "Delhi",
                "branchCode": "dels                /*optional*/",
                "employeeCode": "9300_fareye       /*optional*/",
                "slot": "1       /*optional*/",
                "scheduleDate": "2017-04-26     /*optional*/"
            },
            {
                "flowCode": "inscan",
                "cityCode": "Delhi",
                "branchCode": "dels                /*optional*/",
                "employeeCode": "9300_fareye       /*optional*/"
            },
            {
                "flowCode": "delivery",
                "cityCode": "Delhi",
                "branchCode": "dels                /*optional*/",
                "employeeCode": "9300_fareye       /*optional*/"
            },
            {
                "flowCode": "task",
                "cityCode": "Delhi",
                "branchCode": "dels                /*optional*/",
                "employeeCode": "9300_fareye       /*optional*/"
            }
        ]
    }
]

// Transaction Request Payload
const transactionPayload = [
    {
        "jobType": "pick1",
        "referenceNo": "FAR12357625",
        "date": "2014-12-18",
        "city": "Delhi /*optional*/",
        "hub": "delhi",
        "fieldExecutive": "fareye-Executive",
        "fieldExecutiveName": "fareye-Executive-Name  /*optional*/",
        "latitude": "28.1546  /*optional*/",
        "longitude": "77.2657 /*optional*/",
        "slot": "3",
        "merchantCode": "xyz",
        "eta": "2014-12-18 19:30:00 /*optional*/",
        "jobData": {
            "ref": "String Content",
            "add": "String Content"
        }
    }
]

// City Request Payload
const cityPayload = [
    {
        "cityName": "",
        "enabled": true
    }
]

const transactionsApiData = [
    {
        endPoint: "/api/v1/job",
        method: "POST",
        title: "Add Transactions",
        description: "Api to Add Transactions",
        requestBody: transactionPayload[0]
    },
]

const processApiData = [
    {
        endPoint: "/api/v1/process",
        method: "GET",
        title: "Add Process",
        description: "Api to Add Process",
        requestBody: processPayload[0]
    },
    {
        endPoint: "/api/v1/process_search_api",
        method: "GET",
        title: "Search Process",
        description: "Api to Search Process",
        requestBody: { referenceNumber: "" }
    },
]

const dsApiList = [
    {
        endPoint: "api/v1/search_data_store",
        method: "GET",
        title: "Search Data Store",
        description: "Api to Search in Data Store",
        requestBody: {
            dataStoreMasterCode: "DsMasterCode",
            dataStoreMasterAttributeKey: "UniqueKey/SearchKey",
            searchValue: "For multiple value use , as a separator",
            pageNumber: 0,
            pageSize: 0
        }
    },
    
]

const cityApiList = [
    {
        endPoint: "/api/v1/city",
        method: "POST",
        title: "Add City",
        description: "Api to Add City",
        requestBody: cityPayload[0]
    },
    {
        endPoint: "/api/v1/city",
        method: "GET",
        title: "Get City",
        description: "Api to Get City",
        requestBody: { id: 0 }
    },
]


const APIs = {
    GET_API_KEY: "http://localhost:8787/app/apiKey",
    GET_REQUEST_ENDPOINT: "http://localhost:8787/app/get",
    POST_REQUEST_ENDPOINT: "http://localhost:8787/app/post"
}

// Server Environment
const serverName = [
    {
        name: "QaTest",
        value: "https://qatest.fareye.co"
    },

    {
        name: "QA2-K8",
        value: "https://qa2.fareye.co"
    },

    {
        name: "Staging",
        value: "https://staging.fareye.co"
    },

    {
        name: "UAT",
        value: "https://uat.fareye.co"
    },

    {
        name: "Oregon",
        value: "https://fareye.co"
    },

    {
        name: "CA",
        value: "https://ca.fareye.co"
    },

    {
        name: "SEA",
        value: "https://sea.fareye.co"
    },

    {
        name: "EU",
        value: "https://eu.fareye.co"
    },

    {
        name: "Localhost",
        value: "http://localhost:8080"
    },
]

module.exports = {
    APIs,
    cityApiList,
    dsApiList,
    processApiData,
    transactionsApiData,
    serverName
}
