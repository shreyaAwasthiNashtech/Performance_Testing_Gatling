var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4155",
        "ok": "4155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "percentiles1": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "percentiles2": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2111",
        "ok": "2111",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 916,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 42,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 42,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.129",
        "ok": "16.129",
        "ko": "-"
    }
},
contents: {
"req_fetch-users-ba62b": {
        type: "REQUEST",
        name: "Fetch Users",
path: "Fetch Users",
pathFormatted: "req_fetch-users-ba62b",
stats: {
    "name": "Fetch Users",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4155",
        "ok": "4155",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "percentiles1": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "percentiles2": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2111",
        "ok": "2111",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 916,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 42,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 42,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.129",
        "ok": "16.129",
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
