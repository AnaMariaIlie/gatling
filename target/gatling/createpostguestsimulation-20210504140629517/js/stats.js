var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1150",
        "ok": "1150",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "714",
        "ok": "714",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles1": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "871",
        "ok": "871",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1034",
        "ok": "1034",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1058",
        "ok": "1058",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 300,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 200,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    }
},
contents: {
"req_create-guest-re-1ab0f": {
        type: "REQUEST",
        name: "Create guest Request",
path: "Create guest Request",
pathFormatted: "req_create-guest-re-1ab0f",
stats: {
    "name": "Create guest Request",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1150",
        "ok": "1150",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "714",
        "ok": "714",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles1": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "871",
        "ok": "871",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1034",
        "ok": "1034",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1058",
        "ok": "1058",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 300,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 200,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
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
