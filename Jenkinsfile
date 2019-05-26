#!groovy
import com.rezdy.groovy.BuilderType

@Library(['ciinabox', 'shared-lib']) _


def conf = readYaml text: libraryResource("config.yml")

BuilderType[] builders = [BuilderType.NODE_LAMBDA]

smartPipelineBuilder(
    [
        project_name: "HelloWorld",
        slack_room_url: conf.slack_room_engineering //conf.slack_room_engineering | conf.slack_room_integration
    ],
    builders
)