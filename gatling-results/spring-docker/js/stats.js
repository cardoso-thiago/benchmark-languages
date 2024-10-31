var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "209100",
        "ok": "202237",
        "ko": "6863"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7195"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59969",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2446",
        "ok": "1413",
        "ko": "32869"
    },
    "standardDeviation": {
        "total": "8525",
        "ok": "5532",
        "ko": "18844"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "20000"
    },
    "percentiles2": {
        "total": "86",
        "ok": "85",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "19983",
        "ok": "10087",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "31316",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 180458,
    "percentage": 86.30224772835963
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1064,
    "percentage": 0.5088474414155907
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 20715,
    "percentage": 9.90674318507891
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6863,
    "percentage": 3.2821616451458633
},
    "meanNumberOfRequestsPerSecond": {
        "total": "489.7",
        "ok": "473.62",
        "ko": "16.07"
    }
},
contents: {
"req_load-simulation--1010736767": {
        type: "REQUEST",
        name: "Load Simulation",
path: "Load Simulation",
pathFormatted: "req_load-simulation--1010736767",
stats: {
    "name": "Load Simulation",
    "numberOfRequests": {
        "total": "209100",
        "ok": "202237",
        "ko": "6863"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7195"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59969",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2446",
        "ok": "1413",
        "ko": "32869"
    },
    "standardDeviation": {
        "total": "8525",
        "ok": "5532",
        "ko": "18844"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "20000"
    },
    "percentiles2": {
        "total": "86",
        "ok": "85",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "19965",
        "ok": "10087",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "31315",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 180458,
    "percentage": 86.30224772835963
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1064,
    "percentage": 0.5088474414155907
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 20715,
    "percentage": 9.90674318507891
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6863,
    "percentage": 3.2821616451458633
},
    "meanNumberOfRequestsPerSecond": {
        "total": "489.7",
        "ok": "473.62",
        "ko": "16.07"
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
