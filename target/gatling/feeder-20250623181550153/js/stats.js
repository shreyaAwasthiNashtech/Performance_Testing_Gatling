var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles2": {
        "total": "998",
        "ok": "998",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1914",
        "ok": "1914",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 96
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles2": {
        "total": "998",
        "ok": "998",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1914",
        "ok": "1914",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 96
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
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
