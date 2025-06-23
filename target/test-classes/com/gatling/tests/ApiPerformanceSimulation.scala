package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ApiPerformanceSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://reqres.in") // safe public demo API
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val scn = scenario("API Performance Load Test")
    .exec(
      http("Fetch Users")
        .get("/api/users?page=2")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      rampUsers(1000).during(60.seconds)
    )
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.mean.lt(800),
      global.successfulRequests.percent.gte(98)
    )
}
