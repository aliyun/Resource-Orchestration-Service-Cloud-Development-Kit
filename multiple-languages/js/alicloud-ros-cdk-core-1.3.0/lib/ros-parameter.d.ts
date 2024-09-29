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
        static readonly PASSWORD = "Password";
        static readonly TEXT_AREA = "TextArea";
        static readonly JSON = "Json";
        static readonly COMMA_DELIMITED_LIST = "CommaDelimitedList";
        static readonly CODE = "Code";
        static readonly FILE_CONTENT = "FileContent";
        static readonly CRON = "Cron";
        static readonly CHARGE_TYPE = "ChargeType";
        static readonly LIST_PARAMETER = "List[Parameter]";
        static readonly LIST_PARAMETERS = "List[Parameters]";
        static readonly DATE_TIME = "DateTime";
        static readonly GMT_ZONE = "GMTZone";
        static readonly OOS_SERVICE_ROLE = "OOSServiceRole";
        static readonly RATE_CONTROL = "RateControl";
        static readonly TAGS = "Tags";
        static readonly TARGETS = "Targets";
        static readonly TIME_TRIGGER_WEEKLY = "TimeTriggerWeekly";
        static readonly TIME_ZONE = "TimeZone";
        static readonly ECS_REGION_ID = "ALIYUN::ECS::RegionId";
        static readonly ECS_ZONE_ID = "ALIYUN::ECS::ZoneId";
        static readonly ECS_INSTANCE_ID = "ALIYUN::ECS::Instance::InstanceId";
        static readonly ECS_INSTANCE_PASSWORD = "ALIYUN::ECS::Instance::Password";
        static readonly RDS_INSTANCE_ID = "ALIYUN::RDS::Instance::InstanceId";
        static readonly RDS_ENGINE_ID = "ALIYUN::RDS::Engine::EngineId";
        static readonly RDS_ENGINE_VERSION = "ALIYUN::RDS::Engine::EngineVersion";
        static readonly ECS_DATA_DISK_CATEGORY = "ALIYUN::ECS::Disk::DataDiskCategory";
        static readonly ECS_SYSTEM_DISK_CATEGORY = "ALIYUN::ECS::Disk::SystemDiskCategory";
        static readonly ECS_DISK_ID = "ALIYUN::ECS::Disk::DiskId";
        static readonly ECS_VPC_ID = "ALIYUN::ECS::VPC::VPCId";
        static readonly ECS_VSWITCH_ID = "ALIYUN::ECS::VSwitch::VSwitchId";
        static readonly ECS_INSTANCE_TYPE = "ALIYUN::ECS::Instance::InstanceType";
        static readonly ECS_SECURITY_GROUP_ID = "ALIYUN::ECS::SecurityGroup::SecurityGroupId";
        static readonly ECS_KEY_PAIR_NAME = "ALIYUN::ECS::KeyPair::KeyPairName";
        static readonly ECS_AUTO_SNAPSHOT_POLICY_ID = "ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId";
        static readonly ECS_COMMAND_ID = "ALIYUN::ECS::Command::CommandId";
        static readonly ECS_IMAGE_ID = "ALIYUN::ECS::Image::ImageId";
        static readonly ECS_RESOURCE_GROUP_ID = "ALIYUN::ECS::ResourceGroup::ResourceGroupId";
        static readonly ECS_LAUNCH_TEMPLATE_ID = "ALIYUN::ECS::LaunchTemplate::LaunchTemplateId";
        static readonly ECS_LAUNCH_TEMPLATE_VERSION = "ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion";
        static readonly RDS_INSTANCE_TYPE = "ALIYUN::RDS::Instance::InstanceType";
        static readonly SLB_INSTANCE_TYPE = "ALIYUN::SLB::Instance::InstanceType";
        static readonly SLB_CERTIFICATE = "ALIYUN::SLB::Certificate";
        static readonly SLB_INSTANCE_ID = "ALIYUN::SLB::Instance::InstanceId";
        static readonly SLB_ACL_ID = "ALIYUN::SLB::ACL::ACLId";
        static readonly OOS_TEMPLATE_NAME = "ALIYUN::OOS::Template::TemplateName";
        static readonly OOS_TEMPLATE_VERSION = "ALIYUN::OOS::Template::TemplateVersion";
        static readonly OOS_PARAMETER_VALUE = "ALIYUN::OOS::Parameter::Value";
        static readonly OOS_SECRET_PARAMETER_VALUE = "ALIYUN::OOS::SecretParameter::Value";
        static readonly OOS_PACKAGE_NAME = "ALIYUN::OOS::Package::PackageName";
        static readonly OOS_PACKAGE_VERSION = "ALIYUN::OOS::Package::PackageVersion";
        static readonly OOS_COMMAND_CONTENT = "ALIYUN::OOS::Command::CommandContent";
        static readonly OOS_COMPONENT_CLEAN_UP_INFO = "ALIYUN::OOS::Component::CleanUpInfo";
        static readonly OOS_FILE_URL = "ALIYUN::OOS::File::FileUrl";
        static readonly OSS_BUCKET_NAME = "ALIYUN::OSS::Bucket::BucketName";
        static readonly OSS_OBJECT_NAME = "ALIYUN::OSS::Object::ObjectName";
        static readonly OOS_COMPONENT_TIMER_TRIGGER = "ALIYUN::OOS::Component::TimerTrigger";
        static readonly VPC_ROUTER_ROUTE_TABLE_ID = "ALIYUN::VPC::VirtualBorderRouter::RouteTableId";
        static readonly VPC_NAT_GATEWAY_ID = "ALIYUN::VPC::NatGateway::NatGatewayId";
        static readonly VSWITCH_CIDR_BLOCK = "ALIYUN::VPC::VSwitch::CidrBlock";
        static readonly VPC_CIDR_BLOCK = "ALIYUN::VPC::VPC::CidrBlock";
        static readonly ESS_SCALING_CONFIGURATION_ID = "ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId";
        static readonly ESS_AUTO_SCALING_GROUP_ID = "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId";
        static readonly RAM_USER = "ALIYUN::RAM::User";
        static readonly RAM_ROLE = "ALIYUN::RAM::Role";
        static readonly CAS_CERTIFICATE_ID = "ALIYUN::CAS::Certificate::CertificateId";
        static readonly ELASTICSEARCH_INSTANCE_TYPE = "ALIYUN::Elasticsearch::Instance::InstanceType";
        static readonly INFLUX_DB_INSTANCE_TYPE = "ALIYUN::InfluxDB::Instance::InstanceType";
        static readonly REDIS_INSTANCE_TYPE = "ALIYUN::Redis::Instance::InstanceType";
        static readonly EHPC_FILE_SYSTEM_ID = "ALIYUN::EHPC::FileSystem::FileSystemId";
        static readonly EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = "ALIYUN::EHPC::FileSystem::MountTargetDomain";
        static readonly EHPC_CLUSTER_ID = "ALIYUN::EHPC::Cluster::ClusterId";
        static readonly ALB_INSTANCE_ID = "ALIYUN::ALB::Instance::InstanceId";
        static readonly ALB_ACL_ID = "ALIYUN::ALB::ACL::ACLId";
        static readonly RESOURCE_MANAGER_FOLDER = "ALIYUN::ResourceManager::Folder";
        static readonly RESOURCE_MANAGER_ACCOUNT = "ALIYUN::ResourceManager::Account";
        static readonly ALB_LOAD_BALANCER_ID = "ALIYUN::ALB::LoadBalancer::LoadBalancerId";
        static readonly CAS_CERTIFICATE = "ALIYUN::CAS::Certificate";
        static readonly CMS_ALARM_RULE = "ALIYUN::CMS::Alarm::Rule";
        static readonly CMS_ALARM_SILENCE_TIME = "ALIYUN::CMS::Alarm::SilenceTime";
        static readonly CMS_ALARM_TRIGGER_RESOURCES = "ALIYUN::CMS::Alarm::TriggerResources";
        static readonly CMS_EVENT_FILTER_RULE = "ALIYUN::CMS::Event::EventFilterRule";
        static readonly CMS_EVENT_LEVEL = "ALIYUN::CMS::Event::EventLevel";
        static readonly CMS_EVENT_NAME = "ALIYUN::CMS::Event::EventName";
        static readonly CMS_PRODUCT_TYPE = "ALIYUN::CMS::Product::ProductType";
        static readonly CS_CLUSTER_ID = "ALIYUN::CS::Cluster::ClusterId";
        static readonly CS_CLUSTER_NODE_POOL = "ALIYUN::CS::Cluster::ClusterNodePool";
        static readonly COMPUTER_NEST_SERVICE_ID = "ALIYUN::ComputeNest::Service::ServiceId";
        static readonly COMPUTER_NEST_SERVICE_INSTANCE_ID = "ALIYUN::ComputeNest::ServiceInstance::ServiceInstanceId";
        static readonly COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = "ALIYUN::ComputeNestSupplier::Service::ServiceVersion";
        static readonly ECS_INSTANCE = "ALIYUN::ECS::Instance";
        static readonly ECS_INSTANCE_ATTRIBUTE_SELECTOR = "ALIYUN::ECS::Instance::AttributeSelector";
        static readonly ECS_INSTANCE_IMAGE_ID = "ALIYUN::ECS::Instance::ImageId";
        static readonly ECS_INSTANCE_PROPERTY_EDITOR = "ALIYUN::ECS::Instance::InstancePropertyEditor";
        static readonly ECS_INSTANCE_MAX_BANDWIDTH_IN = "ALIYUN::ECS::Instance::MaxBandwidthIn";
        static readonly ECS_INSTANCE_RENEW_PERIOD = "ALIYUN::ECS::Instance::RenewPeriod";
        static readonly ECS_INSTANCE_STOP_MODE = "ALIYUN::ECS::Instance::StopMode";
        static readonly ECS_INSTANCE_ZONE_ID = "ALIYUN::ECS::Instance::ZoneId";
        static readonly ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = "ALIYUN::ECS::InstanceType::AvailableInstanceType";
        static readonly ECS_MANAGED_INSTANCE_ID = "ALIYUN::ECS::ManagedInstance::InstanceId";
        static readonly ECS_RAM_ROLE = "ALIYUN::ECS::RAM::Role";
        static readonly ECS_TARGET_REGION_IDS = "ALIYUN::ECS::RegionId::TargetRegionIds";
        static readonly ECS_SNAPSHOT_ID = "ALIYUN::ECS::Snapshot::SnapshotId";
        static readonly ECS_TAG = "ALIYUN::ECS::TAG";
        static readonly ECS_VSWITCH = "ALIYUN::ECS::VSwitch";
        static readonly MONGODB_INSTANCE_TYPE = "ALIYUN::MongoDB::Instance::InstanceType";
        static readonly NEST_SERVICE_ID = "ALIYUN::NEST::Service::ServiceId";
        static readonly NEST_SERVICE_VERSION = "ALIYUN::NEST::Service::ServiceVersion";
        static readonly NLB_INSTANCE_ID = "ALIYUN::NLB::Instance::InstanceId";
        static readonly NLB_LOAD_BALANCER_ID = "ALIYUN::NLB::LoadBalancer::LoadBalancerId";
        static readonly NLB_ZONE_ID = "ALIYUN::NLB::Zone::ZoneId";
        static readonly OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = "ALIYUN::OOS::Component::BandwidthUpgradeDurationHour";
        static readonly OOS_COMPONENT_ON_OFF_TIME_LINE = "ALIYUN::OOS::Component::OnOffTimeLine";
        static readonly OOS_COMPONENT_ON_OFF_TIMES = "ALIYUN::OOS::Component::OnOffTimes";
        static readonly OOS_COMPONENT_OPERATION_TYPE = "ALIYUN::OOS::Component::OperationType";
        static readonly OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = "ALIYUN::OOS::Component::PrivateTemplateName";
        static readonly OOS_COMPONENT_SECTION_TYPE = "ALIYUN::OOS::Component::SectionType";
        static readonly OOS_COMPONENT_TARGET_IMAGE_NAME = "ALIYUN::OOS::Component::TargetImageName";
        static readonly OOS_COMPONENT_TRANSIT_INSTANCE = "ALIYUN::OOS::Component::TransitInstance";
        static readonly OSS_BUCKET_OBJECT = "ALIYUN::OSS::Bucket::Object";
        static readonly POLARDB_DB_CLUSTER_ID = "ALIYUN::POLARDB::DBCluster::DBClusterId";
        static readonly RDS_INSTANCE_ACCOUNT_PASSWORD = "ALIYUN::RDS::Instance::AccountPassword";
        static readonly ROS_TYPE_META_LIST = "ALIYUN::ROS::Type::MetaList";
        static readonly REDIS_INSTANCE_ID = "ALIYUN::Redis::Instance::InstanceId";
        static readonly SLB_LOAD_BALANCER_ID = "ALIYUN::SLB::LoadBalancer::LoadBalancerId";
        static readonly SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = "ALIYUN::ServiceCatalog::LaunchOption::PortfolioId";
        static readonly SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = "ALIYUN::ServiceCatalog::ProductVersion::ProductVersionId";
        static readonly USER_ACCOUNT_IDS = "ALIYUN::User::Account::AccountIds";
        static readonly VPC_VSWITCH_ID = "ALIYUN::VPC::VSwitch::VSwitchId";
        static readonly VPC_ZONE_ID = "ALIYUN::VPC::Zone::ZoneId";
        static readonly ALERT = "Alert";
        static readonly ARRAY_ITEMS = "ArrayItems";
        static readonly ARRAY_TABLE = "ArrayTable";
        static readonly BOOLEAN = "Boolean";
        static readonly CASCADER = "Cascader";
        static readonly DATE_PICKER = "DatePicker";
        static readonly EDITABLE = "Editable";
        static readonly EDITABLE_POPOVER = "EditablePopover";
        static readonly FORM_GRID = "FormGrid";
        static readonly FORM_GROUP_COLLAPSE_PAN = "FormGroupCollapsePan";
        static readonly FORM_ITEM = "FormItem";
        static readonly FORM_ITEM_GROUP = "FormItemGroup";
        static readonly FORM_LAYOUT = "FormLayout";
        static readonly INPUT = "Input";
        static readonly INTEGER = "Integer";
        static readonly LIST = "List";
        static readonly NUMBER = "Number";
        static readonly NUMBER_PICKER = "NumberPicker";
        static readonly PARSE_TEXT = "ParseText";
        static readonly PAY_PERIOD = "PayPeriod";
        static readonly PAY_PERIOD_UNIT = "PayPeriodUnit";
        static readonly RADIO = "Radio";
        static readonly READ_ONLY = "ReadOnly";
        static readonly READ_ONLY_ITEM = "ReadOnlyItem";
        static readonly REGION_ID = "RegionId";
        static readonly SELECT = "Select";
        static readonly STRING = "String";
        static readonly SWITCH = "Switch";
        static readonly TEMPLATE_NAME = "TemplateName";
        static readonly TEMPLATE_PARAMETER = "TemplateParameter";
        static readonly TIME = "Time";
        static readonly TIME_TRIGGER = "TimeTrigger";
        static readonly ZONE_ID = "ZoneId";
    }
}
