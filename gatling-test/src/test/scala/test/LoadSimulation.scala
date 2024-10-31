package test

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt

class LoadSimulation extends Simulation {

  val httpProtocol: HttpProtocolBuilder = http.baseUrl("http://localhost:5175")

  val scn: ScenarioBuilder =
    scenario("Load Simulation")
      .exec(
        http("Load Simulation")
          .get("/hello")
      )
      .pause(7)

  setUp(
    scn.inject(
      atOnceUsers(100),
      constantUsersPerSec(100).during(1.minutes),
      rampUsersPerSec(100).to(200).during(1.minutes),
      constantUsersPerSec(300).during(1.minutes),
      rampUsersPerSec(300).to(500).during(1.minutes),
      constantUsersPerSec(1000).during(1.minutes),
      rampUsersPerSec(1000).to(2000).during(1.minutes),
      stressPeakUsers(2000).during(1.minutes)
    ).protocols(httpProtocol)
  )
}