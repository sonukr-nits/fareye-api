export const exampleData = {
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



export const transactionsApiData = [
    {
    endPoint: "/api/v1/job",
    method: "POST", 
    title: "Add Transactions",
    description:"Api to Add Transactions",
    requestBody: exampleData
    },
    {
        endPoint: "/api/v1/job",
        method: "POST", 
        title: "Add Transactions",
        description:"Api to Add Transactions",
        requestBody: exampleData
    },
]



export const processApiData = [
    {
        endPoint: "/api/v1/process_search_api",
        method: "GET", 
        title: "Search Process",
        description:"Api to Search Process",
        requestBody: {referenceNumber:""}
    },
    {
        endPoint: "/api/v1/process_search_api",
        method: "GET", 
        title: "Search Process",
        description:"Api to Search Process",
        requestBody: {referenceNumber:""}
    },
    {
        endPoint: "/api/v1/process_search_api",
        method: "GET", 
        title: "Search Process",
        description:"Api to Search Process",
        requestBody: {referenceNumber:""}
    }
]


export const APIs={
    GET_API_KEY:"http://localhost:8787/app/apiKey",
    GET_REQUEST_ENDPOINT : "http://localhost:8787/app/get"

}