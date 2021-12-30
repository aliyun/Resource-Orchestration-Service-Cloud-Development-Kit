# Aliyun ROS Cloud Development Toolkit Changelog

## [ros-cdk-cli 1.0.18] (2021-12-30)

### Features

-  ros-cdk-cli adding ros-cdk deploy --skip-if-no-changes When stack do not contains any new changes to skip stack checks.([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/31))

### Bug Fixes

-  Fix Typescript/Javascript/Java/Python/C# init project execute unittest error bug.

## [ros-cdk-cli 1.0.17] (2021-12-22)

### Features

-  Update ROS resource sdk packages， add ALIYUN::ADB and ALIYUN::GPDB remove ALIYUN::UIS

## [ros-cdk-cli 1.0.16] (2021-12-16)

### Features

-  ros-cdk-cli adding ros-cdk destroy --sync to support synchronous destroy stack.
-  ros-cdk-cli adding ros-cdk deploy --outputs-file write output information to stack.outputs.json file.


## [ros-cdk-cli 1.0.15] (2021-11-26)

### Features

-  ros-cdk-cli adding ros-cdk generate-stack-file to generate stack.info.json file.
-  optimizing ros-cdk deploy --sync output information.

### Bug Fixes

-  fix ros-cdk cannot create a stack with a tag. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/27))

## [ros-cdk-cli 1.0.14] (2021-10-27)

### Features

-  ros-cdk-cli adding ros-cdk deploy --sync params  support synchronous create or update stack.
-  ros-cdk initialize template addition ros cdk tag.

### Bug Fixes

-  Fix npm run build error bug. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/15))
-  Fix ros-cdk deploy failed exit code 0 bug. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/17))

## [ros-cdk-cli 1.0.13] (2021-09-23)


### Bug Fixes

-  Fix install ros-cdk-cli not find module 'uuid' bug.([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/23))



## [ros-cdk-cli 1.0.12] (2021-09-10)

### Features

-  ros-cdk-cli deploy stack optimization
-  ros-cdk-cli adding ros-cdk -a params  support pass to dotnet、mvn、python3、npx、node execute code.
-  ros-cdk-cli adding config-set command support No-interactive configuration