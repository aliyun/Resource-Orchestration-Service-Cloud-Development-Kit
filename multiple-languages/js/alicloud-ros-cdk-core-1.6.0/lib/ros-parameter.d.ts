import { RosElement } from './ros-element';
import { Construct } from './construct-compat';
import { IResolvable, IResolveContext } from './resolvable';
export declare enum RosParameterType {
    STRING = "String",
    NUMBER = "Number",
    JSON = "Json",
    BOOLEAN = "Boolean",
    COMMA_DELIMITED_LIST = "CommaDelimitedList",
    OOS_PARAMETER = "ALIYUN::OOS::Parameter::Value",
    OOS_SECRET_PARAMETER = "ALIYUN::OOS::SecretParameter::Value"
}
export interface RosParameterProps {
    readonly type?: RosParameterType;
    readonly defaultValue?: any;
    readonly allowedPattern?: string;
    readonly allowedValues?: any[];
    readonly constraintDescription?: string | {
        [key: string]: string;
    };
    readonly description?: string | {
        [key: string]: string;
    };
    readonly maxLength?: number;
    readonly maxValue?: number;
    readonly minLength?: number;
    readonly minValue?: number;
    readonly noEcho?: boolean;
    readonly label?: string;
    readonly associationProperty?: string;
    readonly associationPropertyMetadata?: {
        [key: string]: any;
    };
    readonly confirm?: boolean;
    readonly textArea?: boolean;
    readonly required?: boolean;
    readonly placeholder?: string | {
        [key: string]: string;
    };
}
/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
export declare class RosParameter extends RosElement {
    private readonly props;
    static readonly TYPE_ALLOWED_VALUES: string[];
    private readonly type;
    private readonly id;
    constructor(scope: Construct, id: string, props?: RosParameterProps);
    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    get noEcho(): boolean;
    /**
     * The parameter value as a Token
     */
    get value(): IResolvable;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsString(): string;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsBoolean(): any;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsAny(): any;
    /**
     * The parameter value, if it represents a string list.
     */
    get valueAsList(): string[];
    /**
     * The parameter value, if it represents a number.
     */
    get valueAsNumber(): number;
    /**
     * @internal
     */
    _toRosTemplate(): object;
    resolve(_context: IResolveContext): any;
    validateProperties(props?: RosParameterProps): void;
}
export declare namespace RosParameter {
    class AssociationProperty {
        static readonly ALERT = "Alert";
        static readonly ARRAY_ITEMS = "ArrayItems";
        static readonly ARRAY_TABLE = "ArrayTable";
        static readonly AUTO_COMPLETE_INPUT = "AutoCompleteInput";
        static readonly BOOLEAN = "Boolean";
        static readonly CASCADER = "Cascader";
        static readonly CHARGE_TYPE = "ChargeType";
        static readonly CODE = "Code";
        static readonly COMMA_DELIMITED_LIST = "CommaDelimitedList";
        static readonly CRON = "Cron";
        static readonly DATE_PICKER = "DatePicker";
        static readonly DATE_TIME = "DateTime";
        static readonly EDITABLE = "Editable";
        static readonly EDITABLE_POPOVER = "EditablePopover";
        static readonly FILE_CONTENT = "FileContent";
        static readonly FORM_GRID = "FormGrid";
        static readonly FORM_GROUP_COLLAPSE_PAN = "FormGroupCollapsePan";
        static readonly FORM_ITEM = "FormItem";
        static readonly FORM_ITEM_GROUP = "FormItemGroup";
        static readonly FORM_LAYOUT = "FormLayout";
        static readonly GMT_ZONE = "GMTZone";
        static readonly INPUT = "Input";
        static readonly INTEGER = "Integer";
        static readonly JSON = "Json";
        static readonly LIST = "List";
        static readonly LIST_PARAMETER = "List[Parameter]";
        static readonly LIST_PARAMETERS = "List[Parameters]";
        static readonly NUMBER = "Number";
        static readonly NUMBER_PICKER = "NumberPicker";
        static readonly OOS_SERVICE_ROLE = "OOSServiceRole";
        static readonly PASSWORD = "Password";
        static readonly PARSE_TEXT = "ParseText";
        static readonly PAY_PERIOD = "PayPeriod";
        static readonly PAY_PERIOD_UNIT = "PayPeriodUnit";
        static readonly RADIO = "Radio";
        static readonly RATE_CONTROL = "RateControl";
        static readonly READ_ONLY = "ReadOnly";
        static readonly READ_ONLY_ITEM = "ReadOnlyItem";
        static readonly REGION_ID = "RegionId";
        static readonly SELECT = "Select";
        static readonly STRING = "String";
        static readonly SWITCH = "Switch";
        static readonly TAGS = "Tags";
        static readonly TARGETS = "Targets";
        static readonly TEMPLATE_NAME = "TemplateName";
        static readonly TEMPLATE_PARAMETER = "TemplateParameter";
        static readonly TEXT_AREA = "TextArea";
        static readonly TIME = "Time";
        static readonly TIME_TRIGGER = "TimeTrigger";
        static readonly TIME_TRIGGER_WEEKLY = "TimeTriggerWeekly";
        static readonly TIME_ZONE = "TimeZone";
        static readonly ZONE_ID = "ZoneId";
        static readonly ACR_NAMESPACE_NAME = "ALIYUN::ACR::Namespace::Name";
        static readonly ACR_REPO_ATTRIBUTE = "ALIYUN::ACR::Repo::RepoAttribute";
        static readonly ACR_REPO_TAG = "ALIYUN::ACR::Repo::Tag";
        static readonly ALB_ACL_ID = "ALIYUN::ALB::ACL::ACLId";
        static readonly ALB_INSTANCE_ID = "ALIYUN::ALB::Instance::InstanceId";
        static readonly ALB_LOAD_BALANCER_ID = "ALIYUN::ALB::LoadBalancer::LoadBalancerId";
        static readonly BSS_PRICING_MODULE_CODE = "ALIYUN::BSS::PricingModule::ModuleCode";
        static readonly CAS_CERTIFICATE = "ALIYUN::CAS::Certificate";
        static readonly CAS_CERTIFICATE_ID = "ALIYUN::CAS::Certificate::CertificateId";
        static readonly CEN_INSTANCE_CEN_ID = "ALIYUN::CEN::Instance::CenId";
        static readonly CEN_TRANSIT_ROUTER_ID = "ALIYUN::CEN::TransitRouter::TransitRouterId";
        static readonly CMS_ALARM_METRIC_SELECTOR = "ALIYUN::CMS::Alarm::MetricSelector";
        static readonly CMS_ALARM_RULE = "ALIYUN::CMS::Alarm::Rule";
        static readonly CMS_ALARM_SILENCE_TIME = "ALIYUN::CMS::Alarm::SilenceTime";
        static readonly CMS_ALARM_TRIGGER_RESOURCES = "ALIYUN::CMS::Alarm::TriggerResources";
        static readonly CMS_EVENT_FILTER_RULE = "ALIYUN::CMS::Event::EventFilterRule";
        static readonly CMS_EVENT_LEVEL = "ALIYUN::CMS::Event::EventLevel";
        static readonly CMS_EVENT_NAME = "ALIYUN::CMS::Event::EventName";
        static readonly CMS_PRODUCT_TYPE = "ALIYUN::CMS::Product::ProductType";
        static readonly CR_INSTANCE_ID = "ALIYUN::CR::Instance::InstanceId";
        static readonly CR_NAMESPACE_NAME = "ALIYUN::CR::NameSpace::Name";
        static readonly CR_REPOSITORY_REPO_NAME = "ALIYUN::CR::Repository::RepoName";
        static readonly CR_REPOSITORY_TAG = "ALIYUN::CR::Repository::Tag";
        static readonly CS_CLUSTER_ID = "ALIYUN::CS::Cluster::ClusterId";
        static readonly CS_CLUSTER_NODE_POOL = "ALIYUN::CS::Cluster::ClusterNodePool";
        static readonly CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR = "ALIYUN::CS::ManagedKubernetesCluster::ServiceCidr";
        static readonly COMPUTE_NEST_ARTIFACT_ID = "ALIYUN::ComputeNest::Artifact::ArtifactId";
        static readonly COMPUTE_NEST_ARTIFACT_ID_VERSION = "ALIYUN::ComputeNest::Artifact::ArtifactIdVersion";
        static readonly COMPUTER_NEST_SERVICE_ID = "ALIYUN::ComputeNest::Service::ServiceId";
        static readonly COMPUTER_NEST_SERVICE_INSTANCE_ID = "ALIYUN::ComputeNest::ServiceInstance::ServiceInstanceId";
        static readonly COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = "ALIYUN::ComputeNestSupplier::Service::ServiceVersion";
        static readonly DNS_DOMAIN_VALIDATE_DOMAIN = "ALIYUN::DNS::Domain::ValidateDomain";
        static readonly DASH_VECTOR_API_KEY = "ALIYUN::DashVector::ApiKey";
        static readonly DOMAIN_NAME = "ALIYUN::Domain::DomainName";
        static readonly EAS_INSTANCE_TYPE = "ALIYUN::EAS::Instance::InstanceType";
        static readonly EAS_RESOURCE_ID = "ALIYUN::EAS::Resource::ResourceId";
        static readonly ECD_BUNDLE_DESKTOP_TYPE = "ALIYUN::ECD::Bundle::DesktopType";
        static readonly ECI_CONTAINER_GROUP_ID = "ALIYUN::ECI::ContainerGroup::ContainerGroupId";
        static readonly ECS_COMMAND_ID = "ALIYUN::ECS::Command::CommandId";
        static readonly ECS_DEPLOYMENT_SET_ID = "ALIYUN::ECS::DeploymentSet::DeploymentSetId";
        static readonly ECS_DATA_DISK_CATEGORY = "ALIYUN::ECS::Disk::DataDiskCategory";
        static readonly ECS_DISK_ID = "ALIYUN::ECS::Disk::DiskId";
        static readonly ECS_SYSTEM_DISK_CATEGORY = "ALIYUN::ECS::Disk::SystemDiskCategory";
        static readonly ECS_IMAGE_ID = "ALIYUN::ECS::Image::ImageId";
        static readonly ECS_INSTANCE = "ALIYUN::ECS::Instance";
        static readonly ECS_INSTANCE_IMAGE_ID = "ALIYUN::ECS::Instance::ImageId";
        static readonly ECS_INSTANCE_ATTRIBUTE_SELECTOR = "ALIYUN::ECS::Instance::AttributeSelector";
        static readonly ECS_INSTANCE_ID = "ALIYUN::ECS::Instance::InstanceId";
        static readonly ECS_INSTANCE_PROPERTY_EDITOR = "ALIYUN::ECS::Instance::InstancePropertyEditor";
        static readonly ECS_INSTANCE_TYPE = "ALIYUN::ECS::Instance::InstanceType";
        static readonly ECS_INSTANCE_MAX_BANDWIDTH_IN = "ALIYUN::ECS::Instance::MaxBandwidthIn";
        static readonly ECS_INSTANCE_OS_TYPE = "ALIYUN::ECS::Instance::OSType";
        static readonly ECS_INSTANCE_PASSWORD = "ALIYUN::ECS::Instance::Password";
        static readonly ECS_INSTANCE_RENEW_PERIOD = "ALIYUN::ECS::Instance::RenewPeriod";
        static readonly ECS_INSTANCE_STOP_MODE = "ALIYUN::ECS::Instance::StopMode";
        static readonly ECS_INSTANCE_ZONE_ID = "ALIYUN::ECS::Instance::ZoneId";
        static readonly ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = "ALIYUN::ECS::InstanceType::AvailableInstanceType";
        static readonly ECS_KEY_PAIR_NAME = "ALIYUN::ECS::KeyPair::KeyPairName";
        static readonly ECS_LAUNCH_TEMPLATE_ID = "ALIYUN::ECS::LaunchTemplate::LaunchTemplateId";
        static readonly ECS_LAUNCH_TEMPLATE_VERSION = "ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion";
        static readonly ECS_MANAGED_INSTANCE_ID = "ALIYUN::ECS::ManagedInstance::InstanceId";
        static readonly ECS_RAM_ROLE = "ALIYUN::ECS::RAM::Role";
        static readonly ECS_REGION_ID = "ALIYUN::ECS::RegionId";
        static readonly ECS_REGION_ID_DEPLOY = "ALIYUN::ECS::RegionId::RegionDeploy";
        static readonly ECS_TARGET_REGION_IDS = "ALIYUN::ECS::RegionId::TargetRegionIds";
        static readonly ECS_RESOURCE_GROUP_ID = "ALIYUN::ECS::ResourceGroup::ResourceGroupId";
        static readonly ECS_SECURITY_GROUP_PORT_RANGE = "ALIYUN::ECS::SecurityGroup::PortRange";
        static readonly ECS_SECURITY_GROUP_ID = "ALIYUN::ECS::SecurityGroup::SecurityGroupId";
        static readonly ECS_AUTO_SNAPSHOT_POLICY_ID = "ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId";
        static readonly ECS_SNAPSHOT_ID = "ALIYUN::ECS::Snapshot::SnapshotId";
        static readonly ECS_TAG = "ALIYUN::ECS::TAG";
        static readonly ECS_VPC_ID = "ALIYUN::ECS::VPC::VPCId";
        static readonly ECS_VSWITCH = "ALIYUN::ECS::VSwitch";
        static readonly ECS_VSWITCH_ID = "ALIYUN::ECS::VSwitch::VSwitchId";
        static readonly ECS_ZONE_ID = "ALIYUN::ECS::ZoneId";
        static readonly EHPC_CLUSTER_ID = "ALIYUN::EHPC::Cluster::ClusterId";
        static readonly EHPC_FILE_SYSTEM_ID = "ALIYUN::EHPC::FileSystem::FileSystemId";
        static readonly EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = "ALIYUN::EHPC::FileSystem::MountTargetDomain";
        static readonly ESS_AUTO_SCALING_GROUP_ID = "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId";
        static readonly ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME = "ALIYUN::ESS::ECIScalingConfiguration::ContainerName";
        static readonly ESS_ECI_SCALING_CONFIGURATION_ID = "ALIYUN::ESS::ECIScalingConfiguration::ScalingConfigurationId";
        static readonly ESS_SCALING_CONFIGURATION_ID = "ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId";
        static readonly ELASTICSEARCH_INSTANCE_TYPE = "ALIYUN::Elasticsearch::Instance::InstanceType";
        static readonly EMR_ECS_CLUSTER_ID = "ALIYUN::Emr::ECSCluster::ClusterId";
        static readonly FC_FUNCTION_NAME = "ALIYUN::FC::Function::FunctionName";
        static readonly FC_SERVICE_NAME = "ALIYUN::FC::Service::ServiceName";
        static readonly FC3_FUNCTION_NAME = "ALIYUN::FC3::Function::FunctionName";
        static readonly FLOW_CONNECTION_ID = "ALIYUN::Flow::Connection::ConnectionId";
        static readonly FLOW_ORGANIZATION_ID = "ALIYUN::Flow::Organization::OrganizationId";
        static readonly HOLOGRES_INSTANCE_ID = "ALIYUN::Hologres::Instance::InstanceId";
        static readonly INFLUX_DB_INSTANCE_TYPE = "ALIYUN::InfluxDB::Instance::InstanceType";
        static readonly KAFKA_INSTANCE_ID = "ALIYUN::Kafka::Instance::InstanceId";
        static readonly LINDORM_INSTANCE_ID = "ALIYUN::Lindorm::Instance::InstanceId";
        static readonly MONGODB_INSTANCE_TYPE = "ALIYUN::MongoDB::Instance::InstanceType";
        static readonly NAS_FILE_SYSTEM_ID = "ALIYUN::NAS::FileSystem::FileSystemId";
        static readonly NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = "ALIYUN::NAS::FileSystem::MountTargetDomain";
        static readonly NEST_SERVICE_ID = "ALIYUN::NEST::Service::ServiceId";
        static readonly NEST_SERVICE_VERSION = "ALIYUN::NEST::Service::ServiceVersion";
        static readonly NLB_LOAD_BALANCER_ID = "ALIYUN::NLB::LoadBalancer::LoadBalancerId";
        static readonly NLB_INSTANCE_ID = "ALIYUN::NLB::Instance::InstanceId";
        static readonly NLB_ZONE_ID = "ALIYUN::NLB::Zone::ZoneId";
        static readonly OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = "ALIYUN::OOS::Component::BandwidthUpgradeDurationHour";
        static readonly OOS_COMMAND_CONTENT = "ALIYUN::OOS::Command::CommandContent";
        static readonly OOS_COMPONENT_CLEAN_UP_INFO = "ALIYUN::OOS::Component::CleanUpInfo";
        static readonly OOS_COMPONENT_ON_OFF_TIME_LINE = "ALIYUN::OOS::Component::OnOffTimeLine";
        static readonly OOS_COMPONENT_ON_OFF_TIMES = "ALIYUN::OOS::Component::OnOffTimes";
        static readonly OOS_COMPONENT_OPERATION_TYPE = "ALIYUN::OOS::Component::OperationType";
        static readonly OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = "ALIYUN::OOS::Component::PrivateTemplateName";
        static readonly OOS_COMPONENT_SECTION_TYPE = "ALIYUN::OOS::Component::SectionType";
        static readonly OOS_COMPONENT_TARGET_IMAGE_NAME = "ALIYUN::OOS::Component::TargetImageName";
        static readonly OOS_COMPONENT_TRANSIT_INSTANCE = "ALIYUN::OOS::Component::TransitInstance";
        static readonly OOS_COMPONENT_TIMER_TRIGGER = "ALIYUN::OOS::Component::TimerTrigger";
        static readonly OOS_FILE_URL = "ALIYUN::OOS::File::FileUrl";
        static readonly OOS_PACKAGE_NAME = "ALIYUN::OOS::Package::PackageName";
        static readonly OOS_PACKAGE_VERSION = "ALIYUN::OOS::Package::PackageVersion";
        static readonly OOS_PARAMETER_VALUE = "ALIYUN::OOS::Parameter::Value";
        static readonly OOS_PATCH_BASE_LINE_NAME = "ALIYUN::OOS::PatchBaseline::PatchBaselineName";
        static readonly OOS_SECRET_PARAMETER_VALUE = "ALIYUN::OOS::SecretParameter::Value";
        static readonly OOS_TEMPLATE_NAME = "ALIYUN::OOS::Template::TemplateName";
        static readonly OOS_TEMPLATE_VERSION = "ALIYUN::OOS::Template::TemplateVersion";
        static readonly OSS_BUCKET_NAME = "ALIYUN::OSS::Bucket::BucketName";
        static readonly OSS_BUCKET_OBJECT = "ALIYUN::OSS::Bucket::Object";
        static readonly OSS_OBJECT_NAME = "ALIYUN::OSS::Object::ObjectName";
        static readonly POLARDB_DB_CLUSTER_ID = "ALIYUN::POLARDB::DBCluster::DBClusterId";
        static readonly POLARDB_DB_NODE_CLASS = "ALIYUN::POLARDB::DBCluster::DBNodeClass";
        static readonly RAM_ROLE = "ALIYUN::RAM::Role";
        static readonly RAM_USER = "ALIYUN::RAM::User";
        static readonly RDS_ENGINE_ID = "ALIYUN::RDS::Engine::EngineId";
        static readonly RDS_ENGINE_VERSION = "ALIYUN::RDS::Engine::EngineVersion";
        static readonly RDS_INSTANCE_ACCOUNT_PASSWORD = "ALIYUN::RDS::Instance::AccountPassword";
        static readonly RDS_INSTANCE_ID = "ALIYUN::RDS::Instance::InstanceId";
        static readonly RDS_INSTANCE_TYPE = "ALIYUN::RDS::Instance::InstanceType";
        static readonly REDIS_INSTANCE_ID = "ALIYUN::Redis::Instance::InstanceId";
        static readonly REDIS_INSTANCE_TYPE = "ALIYUN::Redis::Instance::InstanceType";
        static readonly RESOURCE_MANAGER_ACCOUNT = "ALIYUN::ResourceManager::Account";
        static readonly RESOURCE_MANAGER_FOLDER = "ALIYUN::ResourceManager::Folder";
        static readonly ROS_TYPE_META_LIST = "ALIYUN::ROS::Type::MetaList";
        static readonly SLB_ACL_ID = "ALIYUN::SLB::ACL::ACLId";
        static readonly SLB_CERTIFICATE = "ALIYUN::SLB::Certificate";
        static readonly SLB_INSTANCE_ID = "ALIYUN::SLB::Instance::InstanceId";
        static readonly SLB_INSTANCE_TYPE = "ALIYUN::SLB::Instance::InstanceType";
        static readonly SLB_LOAD_BALANCER_ID = "ALIYUN::SLB::LoadBalancer::LoadBalancerId";
        static readonly SLB_LOAD_BALANCER_ZONE_ID = "ALIYUN::SLB::LoadBalancer::ZoneId";
        static readonly SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = "ALIYUN::ServiceCatalog::LaunchOption::PortfolioId";
        static readonly SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = "ALIYUN::ServiceCatalog::ProductVersion::ProductVersionId";
        static readonly TAG_KEY = "ALIYUN::Tag::TagKey";
        static readonly TAG_VALUE = "ALIYUN::Tag::TagValue";
        static readonly USER_ACCOUNT_IDS = "ALIYUN::User::Account::AccountIds";
        static readonly USER_ACCOUNT_ID = "ALIYUN::User::AccountId";
        static readonly USER_ID = "ALIYUN::User::UserId";
        static readonly VPC_EIP_ALLOCATION_ID = "ALIYUN::VPC::EIP::AllocationId";
        static readonly VPC_NAT_GATEWAY_ID = "ALIYUN::VPC::NatGateway::NatGatewayId";
        static readonly VPC_CIDR_BLOCK = "ALIYUN::VPC::VPC::CidrBlock";
        static readonly VSWITCH_CIDR_BLOCK = "ALIYUN::VPC::VSwitch::CidrBlock";
        static readonly VPC_VSWITCH_ID = "ALIYUN::VPC::VSwitch::VSwitchId";
        static readonly VPC_ROUTER_ROUTE_TABLE_ID = "ALIYUN::VPC::VirtualBorderRouter::RouteTableId";
        static readonly VPC_ZONE_ID = "ALIYUN::VPC::Zone::ZoneId";
    }
}
