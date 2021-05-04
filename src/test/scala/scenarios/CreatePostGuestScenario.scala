package scenarios
import io.gatling.core.Predef.scenario
import requests.CreatePostGuestRequest

object CreatePostGuestScenario {
  val createPostGuestScenario = scenario("Create post guest Scenario")
    .exec(CreatePostGuestRequest.create_user)
}