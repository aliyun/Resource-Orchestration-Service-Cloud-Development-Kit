# Aliyun ROS Cloud Development Toolkit Changelog

## [ros-cdk-cli 1.0.48] (2024-03-01)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::CloudSSO::AccessAssignment, ALIYUN::CloudSSO::AccessConfiguration, ALIYUN::CloudSSO::AccessConfigurationProvision, ALIYUN::CloudSSO::Directory, ALIYUN::CloudSSO::Group, ALIYUN::CloudSSO::SAMLIdentityProvider, ALIYUN::CloudSSO::SCIMServerCredential, ALIYUN::CloudSSO::SCIMSynchronization, ALIYUN::CloudSSO::User,  ALIYUN::CloudSSO::UserProvision, ALIYUN::CloudSSO::UserToGroupAddition, ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition, ALIYUN::CloudStorageGateway::StorageBundle, ALIYUN::DDoSPro::PremiumInstance, ALIYUN::DDoSPro::ProInstance, ALIYUN::SAS::Instance, ALIYUN::WAF3::Instance, ALIYUN::NLB::SecurityPolicy, ALIYUN::VPC::FullNatEntry, ALIYUN::VPC::NatIpCidr , ALIYUN::VPC::VSwitchCidrReservation,ALIYUN::CAS::Order,ALIYUN::CAS::SslCertificate,DATASOURCE::ECI::ImageCache, DATASOURCE::ECI::ImageCaches  resource type).
- Provides functions with L2 capabilities (Added ecs.Instance.autoCreateDependencies, ecs.Instance.addSecurityGroup, ecs.Instance.addUserDataCommands).

## [ros-cdk-cli 1.0.47] (2023-12-26)

### Features

- Update ROS resource sdk packages (Added the ALIYUN::HBase::Cluster, ALIYUN::HBase::MultiZoneCluster, ALIYUN::SLS::ServiceLog, ALIYUN::MaxCompute::Project, DATASOURCE::RDS::DBInstance, ALIYUN::Config::Aggregator, ALIYUN::Config::AggregateCompliancePack, ALIYUN::ESS::VServerGroupAttachment, ALIYUN::CDDC::MyBase, DATASOURCE::ComputeNest::ServiceInstances, ALIYUN::RAM::Application, ALIYUN::RAM::AppSecret, DATASOURCE::Hologram::Instance resource type).


## [ros-cdk-cli 1.0.46] (2023-11-07)

### Features

- Update ROS resource sdk packages (Added the ALIYUN::VPC::VpnAttachment,ALIYUN::ThreatDetection::Instance,DATASOURCE::ThreatDetection::Instances,DATASOURCE::ROCKETMQ5::ConsumerGroups,ALIYUN::POLARDB::AITask,DATASOURCE::Lindorm::Instances,DATASOURCE::KMS::Instances,DATASOURCE::KAFKA::Instances,DATASOURCE::Hologram::Instances,DATASOURCE::EMR::Cluster2,ALIYUN::DEVOPS::PipelineRun,ALIYUN::DEVOPS::PipelineRelations,ALIYUN::DBS::Download,ALIYUN::CEN::TransitRouterVpnAttachment resource type).


## [ros-cdk-cli 1.0.45] (2023-09-25)

### Features

- Update ROS resource sdk packages (Added the ALIYUN::ResourceManager::ResourceShareAssociation, ALIYUN::ESS::ServerGroupAttachment, ALIYUN::NLB::SecurityGroupAttachment, ALIYUN::OSS::Directory, and ALIYUN::ESS::LoadBalancerAttachment resource type).
- Fix reference resources bug(resource_object.resource.ref).

## [ros-cdk-cli 1.0.44] (2023-09-15)

### Features

-  Added methods to reference resources(resource_object.ref).

-  Update ROS resource sdk packages (Added the ALIYUN::Hologram::Instance，ALIYUN::DEVOPS::Pipeline and ALIYUN::DEVOPS::VariableGroup resource type). 

## [ros-cdk-cli 1.0.43] (2023-09-01)

### Features

-  Update ROS resource sdk packages (Added the ALIYUN::SWAS::Instance and ALIYUN::SWAS::Instances resource type). 

## [ros-cdk-cli 1.0.41~1.0.42] (2023-07-25)

### Features

-  CDK supports DataSource resource.

## [ros-cdk-cli 1.0.39~1.0.40] (2023-06-28)

### Features

-  Parameters support aosscationproperty enumerated types.

## [ros-cdk-cli 1.0.37~1.0.38] (2023-02-13)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.36] (2022-11-30)

### Bug Fixes

-  Fix security issues, TemplateBody is encoded and escaped.

## [ros-cdk-cli 1.0.35] (2022-11-22)

### Features

-  Supports ros-cdk-cli reading the user's original configuration information for quick configuration ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/66)) .

## [ros-cdk-cli 1.0.32~1.0.34] (2022-09-23)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.31] (2022-08-05)

### Bug Fixes

-  Fix ros-cdk-cli --skip-if-no-changes unable to take effect issue.

## [ros-cdk-cli 1.0.30] (2022-07-20)

### Features

-  ros-cdk-cli adding ros-cdk deploy --detail-log When stack deploy error, set this params to show more error information

## [ros-cdk-cli 1.0.29] (2022-07-13)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.28] (2022-06-08)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.27] (2022-05-20)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.26] (2022-04-28)

### Features

-  Optimization ros-cdk-cli read timeout during synchronous stack deployment.

## [ros-cdk-cli 1.0.25] (2022-04-22)

### Bug Fixes

-  Fix ros-cdk-cli read timeout during synchronous stack deployment ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/49)) .


## [ros-cdk-cli 1.0.24] (2022-04-18)

### Bug Fixes

-  Fix ros-cdk-cli cannot update stack with resource-group-id ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/44)) .

## [ros-cdk-cli 1.0.23] (2022-04-13)

### Features

-  ros-cdk-cli adding ros-cdk list-stacks --resource-group-id params to list stack set ResourceGroupId .

-  ros-cdk-cli adding ros-cdk generate-stack-file --resource-group-id params to generate stack.info.json by ResourceGroupId.

### Bug Fixes

-  Fix ros-cdk-cli incomplete function of resource group ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/40)) .


## [ros-cdk-cli 1.0.22] (2022-04-07)

### Bug Fixes

-  Optimization ros-cdk generate-stack-file error message. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/40)) .


## [ros-cdk-cli 1.0.21] (2022-03-28)

### Features

-  Update ROS resource sdk packages.

## [ros-cdk-cli 1.0.20] (2022-03-16)

### Features

-  ros-cdk-cli adding ros-cdk deploy --resource-group-id params to Create stack set ResourceGroupId. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/36))


## [ros-cdk-cli 1.0.19] (2022-02-28)

### Features

-  Update ROS resource sdk packages.

### Bug Fixes

-  Fix Synchronous deployment stack raise user flow control ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/34)) .

-  Fix Synchronous deployment stack failed command return code error. ([issues](https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit/issues/35)) .

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