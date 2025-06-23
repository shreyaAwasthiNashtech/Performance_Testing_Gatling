var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "815",
        "ok": "-",
        "ko": "815"
    },
    "maxResponseTime": {
        "total": "1957",
        "ok": "-",
        "ko": "1957"
    },
    "meanResponseTime": {
        "total": "1042",
        "ok": "-",
        "ko": "1042"
    },
    "standardDeviation": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "percentiles1": {
        "total": "969",
        "ok": "-",
        "ko": "969"
    },
    "percentiles2": {
        "total": "1003",
        "ok": "-",
        "ko": "1003"
    },
    "percentiles3": {
        "total": "1544",
        "ok": "-",
        "ko": "1544"
    },
    "percentiles4": {
        "total": "1874",
        "ok": "-",
        "ko": "1874"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.345",
        "ok": "-",
        "ko": "0.345"
    }
},
contents: {
"req_login-request-faa3c": {
        type: "REQUEST",
        name: "Login Request",
path: "Login Request",
pathFormatted: "req_login-request-faa3c",
stats: {
    "name": "Login Request",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "815",
        "ok": "-",
        "ko": "815"
    },
    "maxResponseTime": {
        "total": "1957",
        "ok": "-",
        "ko": "1957"
    },
    "meanResponseTime": {
        "total": "1042",
        "ok": "-",
        "ko": "1042"
    },
    "standardDeviation": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "percentiles1": {
        "total": "969",
        "ok": "-",
        "ko": "969"
    },
    "percentiles2": {
        "total": "1003",
        "ok": "-",
        "ko": "1003"
    },
    "percentiles3": {
        "total": "1544",
        "ok": "-",
        "ko": "1544"
    },
    "percentiles4": {
        "total": "1874",
        "ok": "-",
        "ko": "1874"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.345",
        "ok": "-",
        "ko": "0.345"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
