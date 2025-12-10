# Aliyun ROS Cloud Development Toolkit Changelog
## [ros-cdk-cli 1.11.0] (2025-12-18)
### Features
- Update ROS resource sdk packages(Added the ALIYUN::CDT::ResourcePackage、ALIYUN::MSE::PluginConfig、ALIYUN::MSE::GatewayService、ALIYUN::MSE::GatewayDomain、ALIYUN::DMS::ScriptExecution、DATASOURCE::DMS::Database、ALIYUN::CEN::TransitRouterRouteTableAssociationReplacemen、ALIYUN::OTS::VCUInstance、ALIYUN::OOS::ApplicationGroupDeployment、DATASOURCE::ALB::Zones、ALIYUN::ESA::CacheRule、ALIYUN::ESA::CustomList、ALIYUN::ESA::Kv、ALIYUN::ESA::Page、ALIYUN::ESA::Record、ALIYUN::ESA::Site)

## [ros-cdk-cli 1.10.0] (2025-09-28)
### Features
- Update ROS resource sdk packages(Added the ALIYUN::GWLB::ServerGroup、ALIYUN::GWLB::LoadBalancer、ALIYUN::GWLB::Listener、ALIYUN::DataLakeFormation::Catalog、ALIYUN::DataLakeFormation::Permissions、ALIYUN::DataLakeFormation::VpcConfig、ALIYUN::FC3::FunctionInvoker、DATASOURCE::SAE::Namespace、ALIYUN::StarRocks::Instance、ALIYUN::FC3::AsyncInvokeConfig、ALIYUN::OOS::DeployRevision、ALIYUN::CEN::Flowlog、ALIYUN::ESA::NetworkOptimization、ALIYUN::ESA::OriginPool、ALIYUN::ESA::OriginRule、ALIYUN::ESA::RedirectRule、ALIYUN::ESA::ScheduledPreloadJob、ALIYUN::ESA::SiteDeliveryTask、ALIYUN::ESA::WaitingRoom.)

### Bug Fixes

- Fixed failure to specify resource groups when updating.
- Fixed the error of deleting bucket when deployment failed.

## [ros-cdk-cli 1.9.0] (2025-08-07)
### Features
- Update ROS resource sdk packages(Added the DATASOURCE::APIG::Domain、DATASOURCE::APIG::Domains、DATASOURCE::APIG::Environment、DATASOURCE::APIG::Environments、DATASOURCE::APIG::Gateway、DATASOURCE::APIG::Gateways、DATASOURCE::APIG::HttpApi、DATASOURCE::APIG::HttpApis、DATASOURCE::APIG::Plugin、DATASOURCE::APIG::Plugins、DATASOURCE::APIG::PluginClass、DATASOURCE::APIG::PluginClasses、DATASOURCE::APIG::Route、DATASOURCE::APIG::Routes、DATASOURCE::APIG::Service、DATASOURCE::APIG::Services、ALIYUN::ApiGateway::Backend、ALIYUN::AppFlow::Chatbot、ALIYUN::AppFlow::ChatbotFlow、ALIYUN::AppFlow::ChatbotModel、DATASOURCE::AppFlow::UserAuthConfigs、ALIYUN::CMS::MetricRuleTemplateDeployment、ALIYUN::DataWorks::ResourceGroup、ALIYUN::DataWorks::ResourceGroupRelation、ALIYUN::ESA::CompressionRule、ALIYUN::ESA::CustomScenePolicy、ALIYUN::ESA::EdgeContainerApp、ALIYUN::ESA::HttpsApplicationConfiguration、ALIYUN::ESA::ImageTransform、ALIYUN::ESA::KvNamespace、ALIYUN::Flink::Member、ALIYUN::MaxCompute::Quota、ALIYUN::MSE::Gateway2、DATASOURCE::NLB::LoadBalancer、DATASOURCE::OOS::Template、DATASOURCE::OOS::Templates、ALIYUN::OSS::BucketReplication、ALIYUN::OTS::InstanceV2、ALIYUN::RDS::DBProxy、ALIYUN::REDIS::UpgradeVersion、ALIYUN::SAE::Secret、ALIYUN::SELECTDB::DBInstance、ALIYUN::SLS::AnalyzeProductLog、ALIYUN::SLS::EtlV2、ALIYUN::VPC::VcoRouteEntry、ALIYUN::VPC::VpcGatewayEndpoint、ALIYUN::VPC::VpcGatewayEndpointAssociation)

### Bug Fixes

- Fixed OssDeployment resource creating AliyunOSSFullAccess, AliyunLogFullAccess custom policies.
- Fixed a compilation issue with RAM::Group/Role/User using variables before initialization.
- Fixed the Catch clause variable cannot have a type annotation in the latest typescript version, and other compiler issues.
- Optimize typescript initialization template, optimize App class member variable description, solve the outdir problem.

## [ros-cdk-cli 1.8.0] (2025-03-06)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::OOS::OpsItemConfiguration、ALIYUN::GA::LogStoreToEndpointGroupAttachment).
- ros-cdk-mongodb instance added L2 functions grantRead, grantReadWrite, grantList, grantFullAccess
- ros-cdk-oss bucket added L2 functions grantRead, grantReadWrite, grantList, grantFullAccess

## [ros-cdk-cli 1.7.0] (2025-02-21)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::ADBLake::ResourceGroup, ALIYUN::ADBLake::Account, ALIYUN::ADBLake::ResourceGroupAccountAssociation, ALIYUN::VPC::PublicIpAddressPool, ALIYUN::VPC::RouteTableWithGatewayAssociation, ALIYUN::NLB::BackendServerAttachment, ALIYUN::POLARDB::GlobalSecurityGroup, ALIYUN::ECD::UserDesktopGroupAddition, ALIYUN::ECD::Devices, ALIYUN::PAI::DatasetVersion, ALIYUN::EBS::DedicatedBlockStorageCluster, ALIYUN::IMM::Project2).

## [ros-cdk-cli 1.6.0] (2025-01-23)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::FC3::ProvisionConfig, ALIYUN::FC3::ConcurrencyConfig, ALIYUN::FC3::CustomDomain, ALIYUN::RAM::OIDCProvider, ALIYUN::RAM::AttachPolicyToGroup, DATASOURCE::DirectMail::Domain, DATASOURCE::EAIS::ClientInstanceAttachment, DATASOURCE::EBS::DedicatedBlockStorageCluster, DATASOURCE::EBS::DedicatedBlockStoragers, DATASOURCE::EBS::DiskReplicaPair, DATASOURCE::EBS::DiskReplicaGroup, ).
- Added fetchDependency, fetchCondition, and fetchResourceDesc built-in functions.
- No OSS bucket is created when the Asset module is not involved in the creation of a resource.
- ros-cdk-mns supports the fromQueueArn function to obtain the return value of an existing queue through an arn
- Upgrade typescript project initialization dependency version.

## [ros-cdk-cli 1.5.0] (2024-12-13)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::Aligreen::AuditCallback, ALIYUN::Aligreen::BizType, ALIYUN::Aligreen::Callback, ALIYUN::Aligreen::ImageLib, ALIYUN::Aligreen::KeywordLib, ALIYUN::Aligreen::OssStockTask, ALIYUN::MOBI::App, DATASOURCE::MOBI::Workspaces, ALIYUN::APIG::ApiAttachment, ALIYUN::APIG::Domain, ALIYUN::APIG::Environment, ALIYUN::APIG::Gateway, ALIYUN::APIG::HttpApi, ALIYUN::APIG::Operation, ALIYUN::APIG::Plugin, ALIYUN::APIG::PluginAttachment, ALIYUN::APIG::PluginClass, ALIYUN::APIG::Policy, ALIYUN::APIG::Route, ALIYUN::APIG::Service, ALIYUN::PAIDatasetAcc::Endpoint).

## [ros-cdk-cli 1.4.0] (2024-10-18)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::AppFlow::Flow, ALIYUN::AppFlow::UserAuthConfig, DATASOURCE::AppFlow::UserAuthConfigs, DATASOURCE::CDDC::DedicatedHostGroup, DATASOURCE::CMS::MonitorGroup, DATASOURCE::CMS::Namespace, DATASOURCE::KMS::Secret, DATASOURCE::PVTZ::SyncEcsHost, DATASOURCE::ROCKETMQ5::ConsumerGroup, DATASOURCE::ROCKETMQ5::Instance, DATASOURCE::ROCKETMQ5::Topic, DATASOURCE::SLB::AccessControl, DATASOURCE::SLB::DomainExtension, DATASOURCE::SLB::LoadBalancer,DATASOURCE::SLB::LoadBalancerTCPListener,DATASOURCE::SLB::LoadBalancerTCPListeners, DATASOURCE::SLB::Rule, DATASOURCE::SLB::TLSPolicy, DATASOURCE::SLB::VServerGroup, DATASOURCE::SLS::Project).

## [ros-cdk-cli 1.3.0] (2024-09-26)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::POLARDB::Backup,ALIYUN::KMS::NetworkRule,ALIYUN::KMS::Policy,ALIYUN::GA::Domain,ALIYUN::GA::ForwardingRules,ALIYUN::FC3::Function,ALIYUN::FC3::Trigger,ALIYUN::ENS::Image,ALIYUN::ECD::NetworkPackageAssociation,ALIYUN::DRDS::Account,ALIYUN::DMS::Instance2).

## [ros-cdk-cli 1.2.0] (2024-09-10)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::VPC::VpcCidrBlockAssociation, ALIYUN::VPC::VpcCidrBlockAssociation).
- ros-cdk init supports initializing Go project.

## [ros-cdk-cli 1.1.0] (2024-08-22)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::OSS::Website, ALIYUN::ACS::Cluster, ALIYUN::ALB::AScript, ALIYUN::ALB::SecurityGroupAttachment, ALIYUN::ARMS::DeliverTask, ALIYUN::CLOUDFW::NatFirewallControlPolicy, DATASOURCE::DRDS::Account, DATASOURCE::DRDS::DrdsDB, DATASOURCE::DRDS::DrdsInstance, ALIYUN::ECS::SnapshotGroup, DATASOURCE::Eipanycast::AnycastEipAddress, DATASOURCE::GA::Acl, DATASOURCE::GraphDatabase::Account, DATASOURCE::GraphDatabase::DbInstance, ALIYUN::KAFKA::Acl, ALIYUN::KAFKA::SaslUser, DATASOURCE::KMS::Instance, DATASOURCE::KMS::NetworkRule, DATASOURCE::KMS::NetworkRules, DATASOURCE::KMS::Policies, DATASOURCE::KMS::Policy, DATASOURCE::MNS::Queue, DATASOURCE::MNS::Subscription, DATASOURCE::MNS::Topic, DATASOURCE::MONGODB::Instance, DATASOURCE::NAS::AccessGroup, DATASOURCE::OOS::GitCodeRepo, DATASOURCE::PAI::Dataset, DATASOURCE::PAI::Service, DATASOURCE::PAI::Workspace, DATASOURCE::PAI::WorkspaceResourceDlc, DATASOURCE::PAI::WorkspaceResourceDlcs, DATASOURCE::PAI::WorkspaceResourceFlink, DATASOURCE::PAI::WorkspaceResourceFlinks, DATASOURCE::PAI::WorkspaceResourceMaxCompute, DATASOURCE::PAI::WorkspaceResourceMaxComputes, DATASOURCE::PaiDswApi::Instance, DATASOURCE::POLARDB::GlobalDatabaseNetwork, DATASOURCE::POLARDB::ParameterGroup, ALIYUN::RAM::LoginProfile, DATASOURCE::REDIS::Account, DATASOURCE::ROCKETMQ::Instance, DATASOURCE::ROCKETMQ::Topic, ALIYUN::SAE::Ingress, DATASOURCE::VPC::NatGateway, ALIYUN::WAF3::TGW).
- Update ROS function sdk packages (Added the Fn.indent, Fn.index, Fn.lengthOf, Fn.formatTime, Fn.marketplaceImage, Fn.any, Fn.contains, Fn.eachMemberIn, Fn.matchPattern, Fn.cidr).
- Supports the GO package.
- Adds the refreshOptions property to all datasource resources

## [ros-cdk-cli 1.0.52] (2024-06-24)
### Features
- Supplement the minimatch library dependency of the ros-cdk-core library.

## [ros-cdk-cli 1.0.51] (2024-06-21)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::ElasticSearchServerless::App, ALIYUN::ServerlessDev::Project, ALIYUN::ICE::SearchLib, ALIYUN::ARMS::Environment, ALIYUN::ARMS::EnvironmentFeature, ALIYUN::ARMS::AddonRelease, ALIYUN::SLS::OssExport, DATASOURCE::RAM::User, DATASOURCE::RAM::AccountAlias, DATASOURCE::RAM::Role, ALIYUN::ECS::NetworkInterfaces resource type).
- Source.asset supports specifying the object prefix.
- Extend the ossdeployment default timeout and change the resource Id and property name to fixed values.
- Delete the cache bucket on deployment failure.

## [ros-cdk-cli 1.0.50] (2024-05-29)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::ADBLake::DBCluster, ALIYUN::ARMS::ApplyAlertRuleTemplate, ALIYUN::DataWorks::Project, ALIYUN::DDoSPro::Port, ALIYUN::DDoSPro::SceneDefensePolicy, ALIYUN::DDoSPro::SchedulerRule, ALIYUN::DEVOPS::HostGroup, ALIYUN::ECD::DesktopGroup, ALIYUN::ECD::NetworkPackage, DATASOURCE::ECS::Activation, DATASOURCE::ECS::DedicatedHostCluster, DATASOURCE::ECS::DeploymentSet, ALIYUN::GA::AclsListenerAssociation, ALIYUN::GA::ApplicationMonitor, ALIYUN::GA::BasicAccelerateIp, ALIYUN::GA::BasicAccelerator, ALIYUN::GA::BasicAcceleratorIpEndpointRelation, ALIYUN::GA::BasicEndpoint, ALIYUN::GA::BasicEndpointGroup, ALIYUN::GA::BasicIpSet, ALIYUN::GA::EndpointGroups, ALIYUN::KMS::Instance, ALIYUN::NLS::Project, ALIYUN::PAI::WorkspaceResourceDlc, ALIYUN::PAI::WorkspaceResourceFlink, ALIYUN::PAI::WorkspaceResourceMaxCompute, ALIYUN::PAIPlugin::Campaign, ALIYUN::PAIPlugin::InferenceJob, ALIYUN::PAIPlugin::TrainingJob, ALIYUN::SLB::TLSPolicy; deleted the ALIYUN::BrainIndustrial::PidOrganization, ALIYUN::BrainIndustrial::PidProject).
- Asset module Construction
- ros-cdk-assert adds support for regular pattern matching
- ros-cdk-cli modification of stack state record in synchronous deployment mode to record failure states
- Added L2 functions:
  - ros-cdk-fc Function. CodeFromBucket/codeFromInline codeFromAsset from OSS bucket/string/local deployment code in a zip file or folder to fc Function
  - ros-cdk-oss bucket.checkBucketexists checks if a bucket exists. validateBucketName/ validates that the bucket name is valid
  - ros-cdk-ossassets Asset support caching local files/folders into OSS bucket; Asset. AddResourceMetadata add metadata information
  - ros-cdk-ossdeployment Source. The bucket/asset/data/jsonData support object/local files of different bucket with region/string data/json data as a Source of deployment; BucketDeployment deploys the source to the specified OSS bucket

## [ros-cdk-cli 1.0.49] (2024-04-09)
### Features
- Update ROS resource sdk packages (Added the ALIYUN::DDoS::OriginInstance, ALIYUN::DashVector::Cluster, ALIYUN::ENS::Disk, ALIYUN::ENS::Snapshot, ALIYUN::ENS::Network, ALIYUN::ENS::VSwitch, ALIYUN::CLOUDFW::FwSwitch, ALIYUN::CLOUDFW::AllFwSwitch, DATASOURCE::OSS::Bucket, DATASOURCE::KAFKA::Instance, DATASOURCE::EIP::Address, DATASOURCE::REDIS::Instance, DATASOURCE::KAFKA::Topics, DATASOURCE::KAFKA::Topic, DATASOURCE::CR::Instance, DATASOURCE::ClickHouse:DBCluster, DATASOURCE::ApiGateway::Instance, DATASOURCE::AEAIS::Instance, ALIYUN::ENS::SecurityGroup, ALIYUN::ENS::KeyPiar, ALIYUN::ECS::SecurityGroupEgresses, ALIYUN::ECS::SecurityGroupIngresses, DATASOURCE::VPC::HaVip, DATASOURCE::VPC::PublicIpAddressPool, DATASOURCE::VPC::RouteTable, DATASOURCE::VPC::Vpc,DATASOURCE::VPC::VSwitch, DATASOURCE::ECS::Command, DATASOURCE::ECS::Disk, DATASOURCE::ECS::Snapshot, DATASOURCE::ECS::AutoSnapshotPolicy, DATASOURCE::ECS::SecurityGroup, DATASOURCE::ECS::KeyPair, ALIYUN::ENS::NetworkAcl, ALIYUN::ENS::NetworkAclAssociation resource type).

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