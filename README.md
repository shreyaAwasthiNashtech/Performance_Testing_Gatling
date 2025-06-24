# API Performance Testing using Gatling and Beeceptor

This project demonstrates **API performance testing optimisation** using Gatling with a mocked API powered by Beeceptor(https://beeceptor.com). It shows how to simulate high load on an endpoint, use data-driven tests, and generate performance reports.

# Prerequisites

Make sure the following tools are installed on your Linux machine:

- Java JDK 8 or higher
- Maven
- Internet connection

# Project Setup (via Terminal)

Open your terminal and run the following Maven archetype command to generate a fresh Gatling project:

mvn archetype:generate \
  -DarchetypeGroupId=io.gatling.highcharts \
  -DarchetypeArtifactId=gatling-highcharts-maven-archetype \
  -DarchetypeVersion=3.6.1 \
  -DgroupId=com.gatling.tests \
  -DartifactId=GatlingProject \
  -Dversion=1.0-SNAPSHOT \
  -Dpackage=com.gatling.tests \
  -DinteractiveMode=false
  
**What this does:**
Creates a Maven project named GatlingProject

Sets up the base structure for Gatling under src/test/scala

Adds default plugin settings and build config in pom.xml

**Setting Up the Mock API using Beeceptor**
1. Go to https://beeceptor.com

2. Click Create Server/New Endpoint → Give it a name (e.g., performanceblogdemo)

3. Your new endpoint URL will look like:
https://performanceblogdemo.free.beeceptor.com

4. Create a Rule in Beeceptor:
From your Beeceptor dashboard, click on "Rules"

5. Click "New Rule" and fill in the fields like this:

Method-	POST
Request Condition-	Request path exactly matches
Match value/expression-	/api/login
Do the following (for response)-	Single response (keep default)
Response delayed by-	0.00 sec
Return HTTP status as-	200
Response headers-	Set Content-Type to application/json
Response body-
{
  "message": "Login successful",
  "token": "mock-token-123456"
}

6. Save the rule.

7. Create the CSV Feeder File
Create a CSV file at:
src/test/resources/data/data.csv

email,password
shreya@example.com,pass123
rahul@example.com,secret456
arjun@example.com,admin789
You can add more realistic data if you like.

8. Create the Simulation File
Now create a Scala file:
src/test/scala/com/gatling/tests/Feeder.scala

Paste the following:

package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class Feeder extends Simulation {

  val httpProtocol = http
    .baseUrl("https://performanceblogdemo.free.beeceptor.com")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val csvFeeder = csv("data/data.csv").circular

  val loginScenario = scenario("Logging in with some users")
    .feed(csvFeeder)
    .exec(
      http("Login Request")
        .post("/api/login")
        .body(StringBody("""{ "email": "${email}", "password": "${password}" }""")).asJson
        .check(status.is(200))
    )

  setUp(
    loginScenario.inject(rampUsers(50) during (30.seconds))
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.mean.lt(1000),
      global.successfulRequests.percent.gt(95)
    )
}

9. Run the Simulation
In your terminal (in the project root), execute:
**mvn gatling:test -Dgatling.simulationClass=com.gatling.tests.Feeder**

10. After execution:
Gatling will generate an HTML report in:
target/gatling/feeder-YYYYMMDDHHMMSS/index.html

Open it in your browser to view:
**xdg-open target/gatling/feeder-*/index.html**
