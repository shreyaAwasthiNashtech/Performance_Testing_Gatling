package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class Feeder extends Simulation {

  // Defining the HTTP protocol
  val httpProtocol = http
    .baseUrl("https://performanceblogdemo.free.beeceptor.com") // This is a demo website you may replace this with your actual API
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  // Defining the CSV feeder
  val feeder = csv("data/data.csv").circular

  // Creating the scenario using the feeder
  val loginScenario = scenario("Logging in with some users")
    .feed(feeder)
    .exec(
      http("Login Request")
        .post("/api/login") // Reqres supports this endpoint
        .body(StringBody(
          """{
            "email": "${username}",
            "password": "${password}"
          }"""
        )).asJson
        .check(status.in(200, 400)) // 400 is expected if reqres doesn’t validate credentials
    )

  // Setting up and injecting users
  setUp(
    loginScenario.inject(
      rampUsers(50).during(30.seconds) // Simulating 50 users over 30 seconds
    )
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.mean.lt(1200),  // Mean response time should be under 1s
      global.successfulRequests.percent.gt(95) // At least 95% should be successful
    )
}
