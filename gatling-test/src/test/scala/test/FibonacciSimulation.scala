package test

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class FibonacciSimulation extends Simulation {

  val httpProtocol: HttpProtocolBuilder = http.baseUrl("http://localhost:5175")

  val numbers: List[Int] = (1 to 1000).toList

  val scn: ScenarioBuilder =
    scenario("Fibonacci Load Simulation")
      .repeat(10){
        foreach(numbers, "fibonacciNumber") {
          exec(
            http("Fibonacci Calculation")
              .post("/fibonacci")
              .header("Content-Type", "application/json")
              .body(StringBody(session => s"""{"number": ${session("fibonacciNumber").as[Int]}}""")).asJson
          )
        }
      }


  setUp(
    scn.inject(
      atOnceUsers(1000)
    ).protocols(httpProtocol)
  )
}
