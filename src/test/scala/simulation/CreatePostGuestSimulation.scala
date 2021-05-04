package simulation
import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import scenarios.CreatePostGuestScenario
import config.Config._

class CreatePostGuestSimulation extends Simulation {
  println(users)
  private val createUserExec = CreatePostGuestScenario.createPostGuestScenario
    .inject(atOnceUsers(users))

  setUp(createUserExec)
}