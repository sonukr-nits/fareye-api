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
        "referenceNumber": "spt1eeee8488",
        "hubCode": "N_1",
        "processDefinitionCode": "P$D",
        "processData": {
            "PPA": "Sector 99 Noida",
            "PPN": "Swiggy",
            "DPN": "Mr. X",
            "DPA": "Sector 25 Noida",
            "CCN": "901507800",
            "fval": "un1",
            "ll": {
                "llLatitude": "",
                "llLongitude": ""
            }
        },
        "processUserMappings": [
            {
                "flowCode": "pick",
                "cityCode": "Noida",
                "branchCode": "N_1",
                "employeeCode": "raj_01_007"
            },
            {
                "flowCode": "deliver",
                "cityCode": "Noida",
                "branchCode": "N_1",
                "employeeCode": "raj_01_007"
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
        method: "POST",
        title: "Add Process",
        description: "Api to Add Process",
        requestBody: processPayload
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
        endPoint: "/api/v1/search_data_store",
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
