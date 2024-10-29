var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "209100",
        "ok": "202807",
        "ko": "6293"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7236"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59992",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2409",
        "ok": "1522",
        "ko": "30994"
    },
    "standardDeviation": {
        "total": "8167",
        "ok": "5698",
        "ko": "18097"
    },
    "percentiles1": {
        "total": "1",
        "ok": "0",
        "ko": "20001"
    },
    "percentiles2": {
        "total": "87",
        "ok": "86",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "17530",
        "ok": "10087",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "54449",
        "ok": "32274",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 179696,
    "percentage": 86
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 678,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 22433,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6293,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "489.696",
        "ok": "474.958",
        "ko": "14.738"
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
        "ok": "202807",
        "ko": "6293"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7236"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59992",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2409",
        "ok": "1522",
        "ko": "30994"
    },
    "standardDeviation": {
        "total": "8167",
        "ok": "5698",
        "ko": "18097"
    },
    "percentiles1": {
        "total": "1",
        "ok": "0",
        "ko": "20001"
    },
    "percentiles2": {
        "total": "87",
        "ok": "86",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "17515",
        "ok": "10087",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "54449",
        "ok": "32274",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 179696,
    "percentage": 86
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 678,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 22433,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6293,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "489.696",
        "ok": "474.958",
        "ko": "14.738"
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
