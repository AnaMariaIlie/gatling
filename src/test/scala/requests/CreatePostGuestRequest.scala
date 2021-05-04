package requests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import config.Config._
import io.gatling.core.body.{Body, StringBody}
object CreatePostGuestRequest {

  val create_user = exec(http("Create guest Request")
      .get(app_url + "/guests")
    //.post(app_url + "/guest")
    //  .body(RawFileBody("A:\\springboot_swagger_example-master\\recognition\\src\\test\\resources\\my.json")).asJson
    .check(status is 200))
}