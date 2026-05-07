"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosParameter = exports.RosParameterType = void 0;
const ros_element_1 = require("./ros-element");
const ros_reference_1 = require("./private/ros-reference");
const token_1 = require("./token");
var RosParameterType;
(function (RosParameterType) {
    RosParameterType["STRING"] = "String";
    RosParameterType["NUMBER"] = "Number";
    RosParameterType["JSON"] = "Json";
    RosParameterType["BOOLEAN"] = "Boolean";
    RosParameterType["COMMA_DELIMITED_LIST"] = "CommaDelimitedList";
    RosParameterType["OOS_PARAMETER"] = "ALIYUN::OOS::Parameter::Value";
    RosParameterType["OOS_SECRET_PARAMETER"] = "ALIYUN::OOS::SecretParameter::Value";
})(RosParameterType || (exports.RosParameterType = RosParameterType = {}));
/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
class RosParameter extends ros_element_1.RosElement {
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.props = props;
        this.id = id;
        this.type = props.type || RosParameterType.STRING;
        this.validateProperties(props);
    }
    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    get noEcho() {
        return !!this.props.noEcho;
    }
    /**
     * The parameter value as a Token
     */
    get value() {
        return ros_reference_1.RosReference.for(this, 'Ref');
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsString() {
        if (!isStringType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string type`);
        }
        return token_1.Token.asString(this.value);
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsBoolean() {
        if (!isStringType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string type`);
        }
        return token_1.Token.asAny(this.value);
    }
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsAny() {
        return token_1.Token.asAny(this.value);
    }
    /**
     * The parameter value, if it represents a string list.
     */
    get valueAsList() {
        if (!isListType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a string list type`);
        }
        return token_1.Token.asList(this.value);
    }
    /**
     * The parameter value, if it represents a number.
     */
    get valueAsNumber() {
        if (!isNumberType(this.type)) {
            throw new Error(`Parameter type (${this.type}) is not a number type`);
        }
        return token_1.Token.asNumber(this.value);
    }
    /**
     * @internal
     */
    _toRosTemplate() {
        return {
            Parameters: {
                [this.id]: {
                    Type: this.type,
                    Default: this.props.defaultValue,
                    AllowedPattern: this.props.allowedPattern,
                    AllowedValues: this.props.allowedValues,
                    ConstraintDescription: this.props.constraintDescription,
                    Description: this.props.description,
                    MaxLength: this.props.maxLength,
                    MaxValue: this.props.maxValue,
                    MinLength: this.props.minLength,
                    MinValue: this.props.minValue,
                    NoEcho: this.props.noEcho,
                    Label: this.props.label,
                    AssociationProperty: this.props.associationProperty,
                    AssociationPropertyMetadata: this.props.associationPropertyMetadata,
                    Confirm: this.props.confirm,
                    TextArea: this.props.textArea,
                    Required: this.props.required,
                    Placeholder: this.props.placeholder,
                },
            },
        };
    }
    resolve(_context) {
        return this.value;
    }
    validateProperties(props = {}) {
        // check whether the required properties is in parameter(props)
        (0, runtime_1.requireProperty)(props, 'type', this);
        // check whether the associationProperty is allowed value
        // isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
        // check the type of this parameter is allowed
        (0, util_1.isAllowedValue)(props, 'type', this, RosParameter.TYPE_ALLOWED_VALUES);
        // check whether the max length of string is larger than the min length
        if (props.maxLength && props.minLength && props.maxLength < props.minLength) {
            throw new Error(`The max length of string of the parameter ${this.toString()} is lower than its min length.`);
        }
        // check whether the max value of this parameter is larger than the min value
        if (props.maxValue && props.minValue && props.maxValue < props.minValue) {
            throw new Error(`The max value of the parameter ${this.toString()} is lower than its min value.`);
        }
        // check whether the "confirm" property is allowed to be set "true"
        if (props.confirm && (props.type !== 'String' || !props.noEcho)) {
            throw new Error(`The property "confirm" of the parameter ${this.toString()} could be true only if type is "String" and "noEcho" is true.`);
        }
    }
}
exports.RosParameter = RosParameter;
RosParameter.TYPE_ALLOWED_VALUES = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean',
    'ALIYUN::OOS::Parameter::Value', 'ALIYUN::OOS::SecretParameter::Value'];
(function (RosParameter) {
    class AssociationProperty {
    }
    AssociationProperty.ALERT = 'Alert';
    AssociationProperty.ARRAY_ITEMS = 'ArrayItems';
    AssociationProperty.ARRAY_TABLE = 'ArrayTable';
    AssociationProperty.AUTO_COMPLETE_INPUT = 'AutoCompleteInput';
    AssociationProperty.BOOLEAN = 'Boolean';
    AssociationProperty.CASCADER = 'Cascader';
    AssociationProperty.CHARGE_TYPE = 'ChargeType';
    AssociationProperty.CODE = 'Code';
    AssociationProperty.COMMA_DELIMITED_LIST = 'CommaDelimitedList';
    AssociationProperty.CRON = 'Cron';
    AssociationProperty.DATE_PICKER = 'DatePicker';
    AssociationProperty.DATE_TIME = 'DateTime';
    AssociationProperty.EDITABLE = 'Editable';
    AssociationProperty.EDITABLE_POPOVER = 'EditablePopover';
    AssociationProperty.FILE_CONTENT = 'FileContent';
    AssociationProperty.FORM_GRID = 'FormGrid';
    AssociationProperty.FORM_GROUP_COLLAPSE_PAN = 'FormGroupCollapsePan';
    AssociationProperty.FORM_ITEM = 'FormItem';
    AssociationProperty.FORM_ITEM_GROUP = 'FormItemGroup';
    AssociationProperty.FORM_LAYOUT = 'FormLayout';
    AssociationProperty.GMT_ZONE = 'GMTZone';
    AssociationProperty.INPUT = 'Input';
    AssociationProperty.INTEGER = 'Integer';
    AssociationProperty.JSON = 'Json';
    AssociationProperty.LIST = 'List';
    AssociationProperty.LIST_PARAMETER = 'List[Parameter]';
    AssociationProperty.LIST_PARAMETERS = 'List[Parameters]';
    AssociationProperty.NUMBER = 'Number';
    AssociationProperty.NUMBER_PICKER = 'NumberPicker';
    AssociationProperty.OOS_SERVICE_ROLE = 'OOSServiceRole';
    AssociationProperty.PASSWORD = 'Password';
    AssociationProperty.PARSE_TEXT = 'ParseText';
    AssociationProperty.PAY_PERIOD = 'PayPeriod';
    AssociationProperty.PAY_PERIOD_UNIT = 'PayPeriodUnit';
    AssociationProperty.RADIO = 'Radio';
    AssociationProperty.RATE_CONTROL = 'RateControl';
    AssociationProperty.READ_ONLY = 'ReadOnly';
    AssociationProperty.READ_ONLY_ITEM = 'ReadOnlyItem';
    AssociationProperty.REGION_ID = 'RegionId';
    AssociationProperty.SELECT = 'Select';
    AssociationProperty.STRING = 'String';
    AssociationProperty.SWITCH = 'Switch';
    AssociationProperty.TAGS = 'Tags';
    AssociationProperty.TARGETS = 'Targets';
    AssociationProperty.TEMPLATE_NAME = 'TemplateName';
    AssociationProperty.TEMPLATE_PARAMETER = 'TemplateParameter';
    AssociationProperty.TEXT_AREA = 'TextArea';
    AssociationProperty.TIME = 'Time';
    AssociationProperty.TIME_TRIGGER = 'TimeTrigger';
    AssociationProperty.TIME_TRIGGER_WEEKLY = 'TimeTriggerWeekly';
    AssociationProperty.TIME_ZONE = 'TimeZone';
    AssociationProperty.ZONE_ID = 'ZoneId';
    AssociationProperty.ACR_NAMESPACE_NAME = 'ALIYUN::ACR::Namespace::Name';
    AssociationProperty.ACR_REPO_ATTRIBUTE = 'ALIYUN::ACR::Repo::RepoAttribute';
    AssociationProperty.ACR_REPO_TAG = 'ALIYUN::ACR::Repo::Tag';
    AssociationProperty.ALB_ACL_ID = 'ALIYUN::ALB::ACL::ACLId';
    AssociationProperty.ALB_INSTANCE_ID = 'ALIYUN::ALB::Instance::InstanceId';
    AssociationProperty.ALB_LOAD_BALANCER_ID = 'ALIYUN::ALB::LoadBalancer::LoadBalancerId';
    AssociationProperty.BSS_PRICING_MODULE_CODE = 'ALIYUN::BSS::PricingModule::ModuleCode';
    AssociationProperty.CAS_CERTIFICATE = 'ALIYUN::CAS::Certificate';
    AssociationProperty.CAS_CERTIFICATE_ID = 'ALIYUN::CAS::Certificate::CertificateId';
    AssociationProperty.CEN_INSTANCE_CEN_ID = 'ALIYUN::CEN::Instance::CenId';
    AssociationProperty.CEN_TRANSIT_ROUTER_ID = 'ALIYUN::CEN::TransitRouter::TransitRouterId';
    AssociationProperty.CMS_ALARM_METRIC_SELECTOR = 'ALIYUN::CMS::Alarm::MetricSelector';
    AssociationProperty.CMS_ALARM_RULE = 'ALIYUN::CMS::Alarm::Rule';
    AssociationProperty.CMS_ALARM_SILENCE_TIME = 'ALIYUN::CMS::Alarm::SilenceTime';
    AssociationProperty.CMS_ALARM_TRIGGER_RESOURCES = 'ALIYUN::CMS::Alarm::TriggerResources';
    AssociationProperty.CMS_EVENT_FILTER_RULE = 'ALIYUN::CMS::Event::EventFilterRule';
    AssociationProperty.CMS_EVENT_LEVEL = 'ALIYUN::CMS::Event::EventLevel';
    AssociationProperty.CMS_EVENT_NAME = 'ALIYUN::CMS::Event::EventName';
    AssociationProperty.CMS_PRODUCT_TYPE = 'ALIYUN::CMS::Product::ProductType';
    AssociationProperty.CR_INSTANCE_ID = 'ALIYUN::CR::Instance::InstanceId';
    AssociationProperty.CR_NAMESPACE_NAME = 'ALIYUN::CR::NameSpace::Name';
    AssociationProperty.CR_REPOSITORY_REPO_NAME = 'ALIYUN::CR::Repository::RepoName';
    AssociationProperty.CR_REPOSITORY_TAG = 'ALIYUN::CR::Repository::Tag';
    AssociationProperty.CS_CLUSTER_ID = 'ALIYUN::CS::Cluster::ClusterId';
    AssociationProperty.CS_CLUSTER_NODE_POOL = 'ALIYUN::CS::Cluster::ClusterNodePool';
    AssociationProperty.CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR = 'ALIYUN::CS::ManagedKubernetesCluster::ServiceCidr';
    AssociationProperty.COMPUTE_NEST_ARTIFACT_ID = 'ALIYUN::ComputeNest::Artifact::ArtifactId';
    AssociationProperty.COMPUTE_NEST_ARTIFACT_ID_VERSION = 'ALIYUN::ComputeNest::Artifact::ArtifactIdVersion';
    AssociationProperty.COMPUTER_NEST_SERVICE_ID = 'ALIYUN::ComputeNest::Service::ServiceId';
    AssociationProperty.COMPUTER_NEST_SERVICE_INSTANCE_ID = 'ALIYUN::ComputeNest::ServiceInstance::ServiceInstanceId';
    AssociationProperty.COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = 'ALIYUN::ComputeNestSupplier::Service::ServiceVersion';
    AssociationProperty.DNS_DOMAIN_VALIDATE_DOMAIN = 'ALIYUN::DNS::Domain::ValidateDomain';
    AssociationProperty.DASH_VECTOR_API_KEY = 'ALIYUN::DashVector::ApiKey';
    AssociationProperty.DOMAIN_NAME = 'ALIYUN::Domain::DomainName';
    AssociationProperty.EAS_INSTANCE_TYPE = 'ALIYUN::EAS::Instance::InstanceType';
    AssociationProperty.EAS_RESOURCE_ID = 'ALIYUN::EAS::Resource::ResourceId';
    AssociationProperty.ECD_BUNDLE_DESKTOP_TYPE = 'ALIYUN::ECD::Bundle::DesktopType';
    AssociationProperty.ECI_CONTAINER_GROUP_ID = 'ALIYUN::ECI::ContainerGroup::ContainerGroupId';
    AssociationProperty.ECS_COMMAND_ID = 'ALIYUN::ECS::Command::CommandId';
    AssociationProperty.ECS_DEPLOYMENT_SET_ID = 'ALIYUN::ECS::DeploymentSet::DeploymentSetId';
    AssociationProperty.ECS_DATA_DISK_CATEGORY = 'ALIYUN::ECS::Disk::DataDiskCategory';
    AssociationProperty.ECS_DISK_ID = 'ALIYUN::ECS::Disk::DiskId';
    AssociationProperty.ECS_SYSTEM_DISK_CATEGORY = 'ALIYUN::ECS::Disk::SystemDiskCategory';
    AssociationProperty.ECS_IMAGE_ID = 'ALIYUN::ECS::Image::ImageId';
    AssociationProperty.ECS_INSTANCE = 'ALIYUN::ECS::Instance';
    AssociationProperty.ECS_INSTANCE_IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    AssociationProperty.ECS_INSTANCE_ATTRIBUTE_SELECTOR = 'ALIYUN::ECS::Instance::AttributeSelector';
    AssociationProperty.ECS_INSTANCE_ID = 'ALIYUN::ECS::Instance::InstanceId';
    AssociationProperty.ECS_INSTANCE_PROPERTY_EDITOR = 'ALIYUN::ECS::Instance::InstancePropertyEditor';
    AssociationProperty.ECS_INSTANCE_TYPE = 'ALIYUN::ECS::Instance::InstanceType';
    AssociationProperty.ECS_INSTANCE_MAX_BANDWIDTH_IN = 'ALIYUN::ECS::Instance::MaxBandwidthIn';
    AssociationProperty.ECS_INSTANCE_OS_TYPE = 'ALIYUN::ECS::Instance::OSType';
    AssociationProperty.ECS_INSTANCE_PASSWORD = 'ALIYUN::ECS::Instance::Password';
    AssociationProperty.ECS_INSTANCE_RENEW_PERIOD = 'ALIYUN::ECS::Instance::RenewPeriod';
    AssociationProperty.ECS_INSTANCE_STOP_MODE = 'ALIYUN::ECS::Instance::StopMode';
    AssociationProperty.ECS_INSTANCE_ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    AssociationProperty.ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = 'ALIYUN::ECS::InstanceType::AvailableInstanceType';
    AssociationProperty.ECS_KEY_PAIR_NAME = 'ALIYUN::ECS::KeyPair::KeyPairName';
    AssociationProperty.ECS_LAUNCH_TEMPLATE_ID = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateId';
    AssociationProperty.ECS_LAUNCH_TEMPLATE_VERSION = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion';
    AssociationProperty.ECS_MANAGED_INSTANCE_ID = 'ALIYUN::ECS::ManagedInstance::InstanceId';
    AssociationProperty.ECS_RAM_ROLE = 'ALIYUN::ECS::RAM::Role';
    AssociationProperty.ECS_REGION_ID = 'ALIYUN::ECS::RegionId';
    AssociationProperty.ECS_REGION_ID_DEPLOY = 'ALIYUN::ECS::RegionId::RegionDeploy';
    AssociationProperty.ECS_TARGET_REGION_IDS = 'ALIYUN::ECS::RegionId::TargetRegionIds';
    AssociationProperty.ECS_RESOURCE_GROUP_ID = 'ALIYUN::ECS::ResourceGroup::ResourceGroupId';
    AssociationProperty.ECS_SECURITY_GROUP_PORT_RANGE = 'ALIYUN::ECS::SecurityGroup::PortRange';
    AssociationProperty.ECS_SECURITY_GROUP_ID = 'ALIYUN::ECS::SecurityGroup::SecurityGroupId';
    AssociationProperty.ECS_AUTO_SNAPSHOT_POLICY_ID = 'ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId';
    AssociationProperty.ECS_SNAPSHOT_ID = 'ALIYUN::ECS::Snapshot::SnapshotId';
    AssociationProperty.ECS_TAG = 'ALIYUN::ECS::TAG';
    AssociationProperty.ECS_VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    AssociationProperty.ECS_VSWITCH = 'ALIYUN::ECS::VSwitch';
    AssociationProperty.ECS_VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
    AssociationProperty.ECS_ZONE_ID = 'ALIYUN::ECS::ZoneId';
    AssociationProperty.EHPC_CLUSTER_ID = 'ALIYUN::EHPC::Cluster::ClusterId';
    AssociationProperty.EHPC_FILE_SYSTEM_ID = 'ALIYUN::EHPC::FileSystem::FileSystemId';
    AssociationProperty.EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = 'ALIYUN::EHPC::FileSystem::MountTargetDomain';
    AssociationProperty.ESS_AUTO_SCALING_GROUP_ID = 'ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId';
    AssociationProperty.ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME = 'ALIYUN::ESS::ECIScalingConfiguration::ContainerName';
    AssociationProperty.ESS_ECI_SCALING_CONFIGURATION_ID = 'ALIYUN::ESS::ECIScalingConfiguration::ScalingConfigurationId';
    AssociationProperty.ESS_SCALING_CONFIGURATION_ID = 'ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId';
    AssociationProperty.ELASTICSEARCH_INSTANCE_TYPE = 'ALIYUN::Elasticsearch::Instance::InstanceType';
    AssociationProperty.EMR_ECS_CLUSTER_ID = 'ALIYUN::Emr::ECSCluster::ClusterId';
    AssociationProperty.FC_FUNCTION_NAME = 'ALIYUN::FC::Function::FunctionName';
    AssociationProperty.FC_SERVICE_NAME = 'ALIYUN::FC::Service::ServiceName';
    AssociationProperty.FC3_FUNCTION_NAME = 'ALIYUN::FC3::Function::FunctionName';
    AssociationProperty.FLOW_CONNECTION_ID = 'ALIYUN::Flow::Connection::ConnectionId';
    AssociationProperty.FLOW_ORGANIZATION_ID = 'ALIYUN::Flow::Organization::OrganizationId';
    AssociationProperty.HOLOGRES_INSTANCE_ID = 'ALIYUN::Hologres::Instance::InstanceId';
    AssociationProperty.INFLUX_DB_INSTANCE_TYPE = 'ALIYUN::InfluxDB::Instance::InstanceType';
    AssociationProperty.KAFKA_INSTANCE_ID = 'ALIYUN::Kafka::Instance::InstanceId';
    AssociationProperty.LINDORM_INSTANCE_ID = 'ALIYUN::Lindorm::Instance::InstanceId';
    AssociationProperty.MONGODB_INSTANCE_TYPE = 'ALIYUN::MongoDB::Instance::InstanceType';
    AssociationProperty.NAS_FILE_SYSTEM_ID = 'ALIYUN::NAS::FileSystem::FileSystemId';
    AssociationProperty.NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = 'ALIYUN::NAS::FileSystem::MountTargetDomain';
    AssociationProperty.NEST_SERVICE_ID = 'ALIYUN::NEST::Service::ServiceId';
    AssociationProperty.NEST_SERVICE_VERSION = 'ALIYUN::NEST::Service::ServiceVersion';
    AssociationProperty.NLB_LOAD_BALANCER_ID = 'ALIYUN::NLB::LoadBalancer::LoadBalancerId';
    AssociationProperty.NLB_INSTANCE_ID = 'ALIYUN::NLB::Instance::InstanceId';
    AssociationProperty.NLB_ZONE_ID = 'ALIYUN::NLB::Zone::ZoneId';
    AssociationProperty.OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = 'ALIYUN::OOS::Component::BandwidthUpgradeDurationHour';
    AssociationProperty.OOS_COMMAND_CONTENT = 'ALIYUN::OOS::Command::CommandContent';
    AssociationProperty.OOS_COMPONENT_CLEAN_UP_INFO = 'ALIYUN::OOS::Component::CleanUpInfo';
    AssociationProperty.OOS_COMPONENT_ON_OFF_TIME_LINE = 'ALIYUN::OOS::Component::OnOffTimeLine';
    AssociationProperty.OOS_COMPONENT_ON_OFF_TIMES = 'ALIYUN::OOS::Component::OnOffTimes';
    AssociationProperty.OOS_COMPONENT_OPERATION_TYPE = 'ALIYUN::OOS::Component::OperationType';
    AssociationProperty.OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = 'ALIYUN::OOS::Component::PrivateTemplateName';
    AssociationProperty.OOS_COMPONENT_SECTION_TYPE = 'ALIYUN::OOS::Component::SectionType';
    AssociationProperty.OOS_COMPONENT_TARGET_IMAGE_NAME = 'ALIYUN::OOS::Component::TargetImageName';
    AssociationProperty.OOS_COMPONENT_TRANSIT_INSTANCE = 'ALIYUN::OOS::Component::TransitInstance';
    AssociationProperty.OOS_COMPONENT_TIMER_TRIGGER = 'ALIYUN::OOS::Component::TimerTrigger';
    AssociationProperty.OOS_FILE_URL = 'ALIYUN::OOS::File::FileUrl';
    AssociationProperty.OOS_PACKAGE_NAME = 'ALIYUN::OOS::Package::PackageName';
    AssociationProperty.OOS_PACKAGE_VERSION = 'ALIYUN::OOS::Package::PackageVersion';
    AssociationProperty.OOS_PARAMETER_VALUE = 'ALIYUN::OOS::Parameter::Value';
    AssociationProperty.OOS_PATCH_BASE_LINE_NAME = 'ALIYUN::OOS::PatchBaseline::PatchBaselineName';
    AssociationProperty.OOS_SECRET_PARAMETER_VALUE = 'ALIYUN::OOS::SecretParameter::Value';
    AssociationProperty.OOS_TEMPLATE_NAME = 'ALIYUN::OOS::Template::TemplateName';
    AssociationProperty.OOS_TEMPLATE_VERSION = 'ALIYUN::OOS::Template::TemplateVersion';
    AssociationProperty.OSS_BUCKET_NAME = 'ALIYUN::OSS::Bucket::BucketName';
    AssociationProperty.OSS_BUCKET_OBJECT = 'ALIYUN::OSS::Bucket::Object';
    AssociationProperty.OSS_OBJECT_NAME = 'ALIYUN::OSS::Object::ObjectName';
    AssociationProperty.POLARDB_DB_CLUSTER_ID = 'ALIYUN::POLARDB::DBCluster::DBClusterId';
    AssociationProperty.POLARDB_DB_NODE_CLASS = 'ALIYUN::POLARDB::DBCluster::DBNodeClass';
    AssociationProperty.RAM_ROLE = 'ALIYUN::RAM::Role';
    AssociationProperty.RAM_USER = 'ALIYUN::RAM::User';
    AssociationProperty.RDS_ENGINE_ID = 'ALIYUN::RDS::Engine::EngineId';
    AssociationProperty.RDS_ENGINE_VERSION = 'ALIYUN::RDS::Engine::EngineVersion';
    AssociationProperty.RDS_INSTANCE_ACCOUNT_PASSWORD = 'ALIYUN::RDS::Instance::AccountPassword';
    AssociationProperty.RDS_INSTANCE_ID = 'ALIYUN::RDS::Instance::InstanceId';
    AssociationProperty.RDS_INSTANCE_TYPE = 'ALIYUN::RDS::Instance::InstanceType';
    AssociationProperty.REDIS_INSTANCE_ID = 'ALIYUN::Redis::Instance::InstanceId';
    AssociationProperty.REDIS_INSTANCE_TYPE = 'ALIYUN::Redis::Instance::InstanceType';
    AssociationProperty.RESOURCE_MANAGER_ACCOUNT = 'ALIYUN::ResourceManager::Account';
    AssociationProperty.RESOURCE_MANAGER_FOLDER = 'ALIYUN::ResourceManager::Folder';
    AssociationProperty.ROS_TYPE_META_LIST = 'ALIYUN::ROS::Type::MetaList';
    AssociationProperty.SLB_ACL_ID = 'ALIYUN::SLB::ACL::ACLId';
    AssociationProperty.SLB_CERTIFICATE = 'ALIYUN::SLB::Certificate';
    AssociationProperty.SLB_INSTANCE_ID = 'ALIYUN::SLB::Instance::InstanceId';
    AssociationProperty.SLB_INSTANCE_TYPE = 'ALIYUN::SLB::Instance::InstanceType';
    AssociationProperty.SLB_LOAD_BALANCER_ID = 'ALIYUN::SLB::LoadBalancer::LoadBalancerId';
    AssociationProperty.SLB_LOAD_BALANCER_ZONE_ID = 'ALIYUN::SLB::LoadBalancer::ZoneId';
    AssociationProperty.SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = 'ALIYUN::ServiceCatalog::LaunchOption::PortfolioId';
    AssociationProperty.SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = 'ALIYUN::ServiceCatalog::ProductVersion::ProductVersionId';
    AssociationProperty.TAG_KEY = 'ALIYUN::Tag::TagKey';
    AssociationProperty.TAG_VALUE = 'ALIYUN::Tag::TagValue';
    AssociationProperty.USER_ACCOUNT_IDS = 'ALIYUN::User::Account::AccountIds';
    AssociationProperty.USER_ACCOUNT_ID = 'ALIYUN::User::AccountId';
    AssociationProperty.USER_ID = 'ALIYUN::User::UserId';
    AssociationProperty.VPC_EIP_ALLOCATION_ID = 'ALIYUN::VPC::EIP::AllocationId';
    AssociationProperty.VPC_NAT_GATEWAY_ID = 'ALIYUN::VPC::NatGateway::NatGatewayId';
    AssociationProperty.VPC_CIDR_BLOCK = 'ALIYUN::VPC::VPC::CidrBlock';
    AssociationProperty.VSWITCH_CIDR_BLOCK = 'ALIYUN::VPC::VSwitch::CidrBlock';
    AssociationProperty.VPC_VSWITCH_ID = 'ALIYUN::VPC::VSwitch::VSwitchId';
    AssociationProperty.VPC_ROUTER_ROUTE_TABLE_ID = 'ALIYUN::VPC::VirtualBorderRouter::RouteTableId';
    AssociationProperty.VPC_ZONE_ID = 'ALIYUN::VPC::Zone::ZoneId';
    RosParameter.AssociationProperty = AssociationProperty;
})(RosParameter || (exports.RosParameter = RosParameter = {}));
/**
 * Whether the given parameter type looks like a list type
 */
function isListType(type) {
    return type.indexOf('List<') >= 0 || type.indexOf('CommaDelimitedList') >= 0;
}
/**
 * Whether the given parameter type looks like a number type
 */
function isNumberType(type) {
    return type === 'Number';
}
/**
 * Whether the given parameter type looks like a string type
 */
function isStringType(type) {
    return !isListType(type) && !isNumberType(type);
}
const runtime_1 = require("./runtime");
const util_1 = require("./util");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRTNDLDJEQUF1RDtBQUV2RCxtQ0FBZ0M7QUFFaEMsSUFBWSxnQkFRWDtBQVJELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLGlDQUFhLENBQUE7SUFDYix1Q0FBbUIsQ0FBQTtJQUNuQiwrREFBMkMsQ0FBQTtJQUMzQyxtRUFBK0MsQ0FBQTtJQUMvQyxnRkFBNEQsQ0FBQTtBQUM5RCxDQUFDLEVBUlcsZ0JBQWdCLGdDQUFoQixnQkFBZ0IsUUFRM0I7QUF3QkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQWEsU0FBUSx3QkFBVTtJQVExQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFtQixRQUEyQixFQUFFO1FBQ3RGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFEd0MsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFFdEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLE1BQU07UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDZCxPQUFPLDRCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENB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Q0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFDM0IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCx1Q0FBNEM7QUFDNUMsaUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gJy4vcm9zLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IFJvc1JlZmVyZW5jZSB9IGZyb20gJy4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlJztcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tICcuL3Jlc29sdmFibGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGVudW0gUm9zUGFyYW1ldGVyVHlwZSB7XG4gIFNUUklORyA9ICdTdHJpbmcnLFxuICBOVU1CRVIgPSAnTnVtYmVyJyxcbiAgSlNPTiA9ICdKc29uJyxcbiAgQk9PTEVBTiA9ICdCb29sZWFuJyxcbiAgQ09NTUFfREVMSU1JVEVEX0xJU1QgPSAnQ29tbWFEZWxpbWl0ZWRMaXN0JyxcbiAgT09TX1BBUkFNRVRFUiA9ICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZScsXG4gIE9PU19TRUNSRVRfUEFSQU1FVEVSID0gJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3NQYXJhbWV0ZXJQcm9wcyB7XG4gIHJlYWRvbmx5IHR5cGU/OiBSb3NQYXJhbWV0ZXJUeXBlO1xuICByZWFkb25seSBkZWZhdWx0VmFsdWU/OiBhbnk7XG4gIHJlYWRvbmx5IGFsbG93ZWRQYXR0ZXJuPzogc3RyaW5nO1xuICByZWFkb25seSBhbGxvd2VkVmFsdWVzPzogYW55W107XG4gIHJlYWRvbmx5IGNvbnN0cmFpbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1heFZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1pblZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBub0VjaG8/OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGxhYmVsPzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5Pzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5TWV0YWRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgcmVhZG9ubHkgY29uZmlybT86IGJvb2xlYW47XG4gIHJlYWRvbmx5IHRleHRBcmVhPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZWFkb25seSBwbGFjZWhvbGRlcj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xufVxuXG4vKipcbiAqIEEgUk9TIHBhcmFtZXRlci5cbiAqXG4gKiBQYXJhbWV0ZXJzIGVuYWJsZSB5b3UgdG8gaW5wdXQgY3VzdG9tIHZhbHVlcyB0byB5b3VyIHRlbXBsYXRlIGVhY2ggdGltZSB5b3UgY3JlYXRlIG9yXG4gKiB1cGRhdGUgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BhcmFtZXRlciBleHRlbmRzIFJvc0VsZW1lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVFlQRV9BTExPV0VEX1ZBTFVFUzogc3RyaW5nW10gPSBbJ1N0cmluZycsICdOdW1iZXInLCAnQ29tbWFEZWxpbWl0ZWRMaXN0JywgJ0pzb24nLCAnQm9vbGVhbicsXG4gICAgJ0FMSVlVTjo6T09TOjpQYXJhbWV0ZXI6OlZhbHVlJywgJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJ107XG5cbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3NQYXJhbWV0ZXJUeXBlO1xuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBwcm9wczogUm9zUGFyYW1ldGVyUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudHlwZSA9IHByb3BzLnR5cGUgfHwgUm9zUGFyYW1ldGVyVHlwZS5TVFJJTkc7XG4gICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMocHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGlzIHBhcmFtZXRlciBpcyBjb25maWd1cmVkIHdpdGggXCJOb0VjaG9cIiBlbmFibGVkLlxuICAgKi9cbiAgcHVibGljIGdldCBub0VjaG8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5wcm9wcy5ub0VjaG87XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSBhcyBhIFRva2VuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gUm9zUmVmZXJlbmNlLmZvcih0aGlzLCAnUmVmJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICghaXNTdHJpbmdUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzU3RyaW5nKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNCb29sZWFuKCk6IGFueSB7XG4gICAgaWYgKCFpc1N0cmluZ1R5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBzdHJpbmcgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNBbnkodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc0FueSgpOiBhbnkge1xuICAgIHJldHVybiBUb2tlbi5hc0FueSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nIGxpc3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICBpZiAoIWlzTGlzdFR5cGUodGhpcy50eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgdHlwZSAoJHt0aGlzLnR5cGV9KSBpcyBub3QgYSBzdHJpbmcgbGlzdCB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc0xpc3QodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBnZXQgdmFsdWVBc051bWJlcigpOiBudW1iZXIge1xuICAgIGlmICghaXNOdW1iZXJUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgbnVtYmVyIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF90b1Jvc1RlbXBsYXRlKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBhcmFtZXRlcnM6IHtcbiAgICAgICAgW3RoaXMuaWRdOiB7XG4gICAgICAgICAgVHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgIERlZmF1bHQ6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgIEFsbG93ZWRQYXR0ZXJuOiB0aGlzLnByb3BzLmFsbG93ZWRQYXR0ZXJuLFxuICAgICAgICAgIEFsbG93ZWRWYWx1ZXM6IHRoaXMucHJvcHMuYWxsb3dlZFZhbHVlcyxcbiAgICAgICAgICBDb25zdHJhaW50RGVzY3JpcHRpb246IHRoaXMucHJvcHMuY29uc3RyYWludERlc2NyaXB0aW9uLFxuICAgICAgICAgIERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIE1heExlbmd0aDogdGhpcy5wcm9wcy5tYXhMZW5ndGgsXG4gICAgICAgICAgTWF4VmFsdWU6IHRoaXMucHJvcHMubWF4VmFsdWUsXG4gICAgICAgICAgTWluTGVuZ3RoOiB0aGlzLnByb3BzLm1pbkxlbmd0aCxcbiAgICAgICAgICBNaW5WYWx1ZTogdGhpcy5wcm9wcy5taW5WYWx1ZSxcbiAgICAgICAgICBOb0VjaG86IHRoaXMucHJvcHMubm9FY2hvLFxuICAgICAgICAgIExhYmVsOiB0aGlzLnByb3BzLmxhYmVsLFxuICAgICAgICAgIEFzc29jaWF0aW9uUHJvcGVydHk6IHRoaXMucHJvcHMuYXNzb2NpYXRpb25Qcm9wZXJ0eSxcbiAgICAgICAgICBBc3NvY2lhdGlvblByb3BlcnR5TWV0YWRhdGE6IHRoaXMucHJvcHMuYXNzb2NpYXRpb25Qcm9wZXJ0eU1ldGFkYXRhLFxuICAgICAgICAgIENvbmZpcm06IHRoaXMucHJvcHMuY29uZmlybSxcbiAgICAgICAgICBUZXh0QXJlYTogdGhpcy5wcm9wcy50ZXh0QXJlYSxcbiAgICAgICAgICBSZXF1aXJlZDogdGhpcy5wcm9wcy5yZXF1aXJlZCxcbiAgICAgICAgICBQbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKF9jb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlUHJvcGVydGllcyhwcm9wczogUm9zUGFyYW1ldGVyUHJvcHMgPSB7fSk6IHZvaWQge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMgaXMgaW4gcGFyYW1ldGVyKHByb3BzKVxuICAgIHJlcXVpcmVQcm9wZXJ0eShwcm9wcywgJ3R5cGUnLCB0aGlzKTtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBhc3NvY2lhdGlvblByb3BlcnR5IGlzIGFsbG93ZWQgdmFsdWVcbiAgICAvLyBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ2Fzc29jaWF0aW9uUHJvcGVydHknLCB0aGlzLCBSb3NQYXJhbWV0ZXIuQVNTT0NJQVRJT05fUFJPUEVSVFlfQUxMT1dFRF9WQUxVRVMpO1xuICAgIC8vIGNoZWNrIHRoZSB0eXBlIG9mIHRoaXMgcGFyYW1ldGVyIGlzIGFsbG93ZWRcbiAgICBpc0FsbG93ZWRWYWx1ZShwcm9wcywgJ3R5cGUnLCB0aGlzLCBSb3NQYXJhbWV0ZXIuVFlQRV9BTExPV0VEX1ZBTFVFUyk7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgbWF4IGxlbmd0aCBvZiBzdHJpbmcgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbiBsZW5ndGhcbiAgICBpZiAocHJvcHMubWF4TGVuZ3RoICYmIHByb3BzLm1pbkxlbmd0aCAmJiBwcm9wcy5tYXhMZW5ndGggPCBwcm9wcy5taW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCBsZW5ndGggb2Ygc3RyaW5nIG9mIHRoZSBwYXJhbWV0ZXIgJHt0aGlzLnRvU3RyaW5nKCl9IGlzIGxvd2VyIHRoYW4gaXRzIG1pbiBsZW5ndGguYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG1heCB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBsYXJnZXIgdGhhbiB0aGUgbWluIHZhbHVlXG4gICAgaWYgKHByb3BzLm1heFZhbHVlICYmIHByb3BzLm1pblZhbHVlICYmIHByb3BzLm1heFZhbHVlIDwgcHJvcHMubWluVmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heCB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyICR7dGhpcy50b1N0cmluZygpfSBpcyBsb3dlciB0aGFuIGl0cyBtaW4gdmFsdWUuYCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIFwiY29uZmlybVwiIHByb3BlcnR5IGlzIGFsbG93ZWQgdG8gYmUgc2V0IFwidHJ1ZVwiXG4gICAgaWYgKHByb3BzLmNvbmZpcm0gJiYgKHByb3BzLnR5cGUgIT09ICdTdHJpbmcnIHx8ICFwcm9wcy5ub0VjaG8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgcHJvcGVydHkgXCJjb25maXJtXCIgb2YgdGhlIHBhcmFtZXRlciAke3RoaXMudG9TdHJpbmcoKX0gY291bGQgYmUgdHJ1ZSBvbmx5IGlmIHR5cGUgaXMgXCJTdHJpbmdcIiBhbmQgXCJub0VjaG9cIiBpcyB0cnVlLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1BhcmFtZXRlciB7XG4gIGV4cG9ydCBjbGFzcyBBc3NvY2lhdGlvblByb3BlcnR5IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMRVJUID0gJ0FsZXJ0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUkFZX0lURU1TID0gJ0FycmF5SXRlbXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJSQVlfVEFCTEUgPSAnQXJyYXlUYWJsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBVVRPX0NPTVBMRVRFX0lOUFVUID0gJ0F1dG9Db21wbGV0ZUlucHV0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJPT0xFQU4gPSAnQm9vbGVhbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDQVNDQURFUiA9ICdDYXNjYWRlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDSEFSR0VfVFlQRSA9ICdDaGFyZ2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPREUgPSAnQ29kZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01NQV9ERUxJTUlURURfTElTVCA9ICdDb21tYURlbGltaXRlZExpc3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1JPTiA9ICdDcm9uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERBVEVfUElDS0VSID0gJ0RhdGVQaWNrZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9USU1FID0gJ0RhdGVUaW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVESVRBQkxFID0gJ0VkaXRhYmxlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVESVRBQkxFX1BPUE9WRVIgPSAnRWRpdGFibGVQb3BvdmVyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZJTEVfQ09OVEVOVCA9ICdGaWxlQ29udGVudCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGT1JNX0dSSUQgPSAnRm9ybUdyaWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9STV9HUk9VUF9DT0xMQVBTRV9QQU4gPSAnRm9ybUdyb3VwQ29sbGFwc2VQYW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9STV9JVEVNID0gJ0Zvcm1JdGVtJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fSVRFTV9HUk9VUCA9ICdGb3JtSXRlbUdyb3VwJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fTEFZT1VUID0gJ0Zvcm1MYXlvdXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR01UX1pPTkUgPSAnR01UWm9uZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJTlBVVCA9ICdJbnB1dCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJTlRFR0VSID0gJ0ludGVnZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSlNPTiA9ICdKc29uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExJU1QgPSAnTGlzdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMSVNUX1BBUkFNRVRFUiA9ICdMaXN0W1BhcmFtZXRlcl0nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTElTVF9QQVJBTUVURVJTID0gJ0xpc3RbUGFyYW1ldGVyc10nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTlVNQkVSID0gJ051bWJlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOVU1CRVJfUElDS0VSID0gJ051bWJlclBpY2tlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfU0VSVklDRV9ST0xFID0gJ09PU1NlcnZpY2VSb2xlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBU1NXT1JEID0gJ1Bhc3N3b3JkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUlNFX1RFWFQgPSAnUGFyc2VUZXh0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBWV9QRVJJT0QgPSAnUGF5UGVyaW9kJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBWV9QRVJJT0RfVU5JVCA9ICdQYXlQZXJpb2RVbml0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJBRElPID0gJ1JhZGlvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJBVEVfQ09OVFJPTCA9ICdSYXRlQ29udHJvbCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUFEX09OTFkgPSAnUmVhZE9ubHknO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVBRF9PTkxZX0lURU0gPSAnUmVhZE9ubHlJdGVtJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFR0lPTl9JRCA9ICdSZWdpb25JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTRUxFQ1QgPSAnU2VsZWN0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUUklORyA9ICdTdHJpbmcnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1dJVENIID0gJ1N3aXRjaCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUdTID0gJ1RhZ3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUUyA9ICdUYXJnZXRzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFTVBMQVRFX05BTUUgPSAnVGVtcGxhdGVOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFTVBMQVRFX1BBUkFNRVRFUiA9ICdUZW1wbGF0ZVBhcmFtZXRlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhUX0FSRUEgPSAnVGV4dEFyZWEnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVElNRSA9ICdUaW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfVFJJR0dFUiA9ICdUaW1lVHJpZ2dlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUSU1FX1RSSUdHRVJfV0VFS0xZID0gJ1RpbWVUcmlnZ2VyV2Vla2x5JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfWk9ORSA9ICdUaW1lWm9uZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBaT05FX0lEID0gJ1pvbmVJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFDUl9OQU1FU1BBQ0VfTkFNRSA9ICdBTElZVU46OkFDUjo6TmFtZXNwYWNlOjpOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFDUl9SRVBPX0FUVFJJQlVURSA9ICdBTElZVU46OkFDUjo6UmVwbzo6UmVwb0F0dHJpYnV0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBQ1JfUkVQT19UQUcgPSAnQUxJWVVOOjpBQ1I6OlJlcG86OlRhZyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMQl9BQ0xfSUQgPSAnQUxJWVVOOjpBTEI6OkFDTDo6QUNMSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUxCX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6QUxCOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBTEJfTE9BRF9CQUxBTkNFUl9JRCA9ICdBTElZVU46OkFMQjo6TG9hZEJhbGFuY2VyOjpMb2FkQmFsYW5jZXJJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJTU19QUklDSU5HX01PRFVMRV9DT0RFID0gJ0FMSVlVTjo6QlNTOjpQcmljaW5nTW9kdWxlOjpNb2R1bGVDb2RlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0FTX0NFUlRJRklDQVRFID0gJ0FMSVlVTjo6Q0FTOjpDZXJ0aWZpY2F0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDQVNfQ0VSVElGSUNBVEVfSUQgPSAnQUxJWVVOOjpDQVM6OkNlcnRpZmljYXRlOjpDZXJ0aWZpY2F0ZUlkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0VOX0lOU1RBTkNFX0NFTl9JRCA9ICdBTElZVU46OkNFTjo6SW5zdGFuY2U6OkNlbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENFTl9UUkFOU0lUX1JPVVRFUl9JRCA9ICdBTElZVU46OkNFTjo6VHJhbnNpdFJvdXRlcjo6VHJhbnNpdFJvdXRlcklkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0FMQVJNX01FVFJJQ19TRUxFQ1RPUiA9ICdBTElZVU46OkNNUzo6QWxhcm06Ok1ldHJpY1NlbGVjdG9yJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19BTEFSTV9SVUxFID0gJ0FMSVlVTjo6Q01TOjpBbGFybTo6UnVsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfQUxBUk1fU0lMRU5DRV9USU1FID0gJ0FMSVlVTjo6Q01TOjpBbGFybTo6U2lsZW5jZVRpbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0FMQVJNX1RSSUdHRVJfUkVTT1VSQ0VTID0gJ0FMSVlVTjo6Q01TOjpBbGFybTo6VHJpZ2dlclJlc291cmNlcyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfRVZFTlRfRklMVEVSX1JVTEUgPSAnQUxJWVVOOjpDTVM6OkV2ZW50OjpFdmVudEZpbHRlclJ1bGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0VWRU5UX0xFVkVMID0gJ0FMSVlVTjo6Q01TOjpFdmVudDo6RXZlbnRMZXZlbCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfRVZFTlRfTkFNRSA9ICdBTElZVU46OkNNUzo6RXZlbnQ6OkV2ZW50TmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfUFJPRFVDVF9UWVBFID0gJ0FMSVlVTjo6Q01TOjpQcm9kdWN0OjpQcm9kdWN0VHlwZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENSX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6Q1I6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENSX05BTUVTUEFDRV9OQU1FID0gJ0FMSVlVTjo6Q1I6Ok5hbWVTcGFjZTo6TmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDUl9SRVBPU0lUT1JZX1JFUE9fTkFNRSA9ICdBTElZVU46OkNSOjpSZXBvc2l0b3J5OjpSZXBvTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDUl9SRVBPU0lUT1JZX1RBRyA9ICdBTElZVU46OkNSOjpSZXBvc2l0b3J5OjpUYWcnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDU19DTFVTVEVSX0lEID0gJ0FMSVlVTjo6Q1M6OkNsdXN0ZXI6OkNsdXN0ZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDU19DTFVTVEVSX05PREVfUE9PTCA9ICdBTElZVU46OkNTOjpDbHVzdGVyOjpDbHVzdGVyTm9kZVBvb2wnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1NfTUFOQUdFRF9LVUJFUk5FVEVTX0NMVVNURVJfU0VSVklDRV9DSURSID0gJ0FMSVlVTjo6Q1M6Ok1hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlcjo6U2VydmljZUNpZHInO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QVVRFX05FU1RfQVJUSUZBQ1RfSUQgPSAnQUxJWVVOOjpDb21wdXRlTmVzdDo6QXJ0aWZhY3Q6OkFydGlmYWN0SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURV9ORVNUX0FSVElGQUNUX0lEX1ZFUlNJT04gPSAnQUxJWVVOOjpDb21wdXRlTmVzdDo6QXJ0aWZhY3Q6OkFydGlmYWN0SWRWZXJzaW9uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVSX05FU1RfU0VSVklDRV9JRCA9ICdBTElZVU46OkNvbXB1dGVOZXN0OjpTZXJ2aWNlOjpTZXJ2aWNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURVJfTkVTVF9TRVJWSUNFX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6Q29tcHV0ZU5lc3Q6OlNlcnZpY2VJbnN0YW5jZTo6U2VydmljZUluc3RhbmNlSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QVVRFUl9ORVNUX1NVUFBMSUVSX1NFUlZJQ0VfVkVSU0lPTiA9ICdBTElZVU46OkNvbXB1dGVOZXN0U3VwcGxpZXI6OlNlcnZpY2U6OlNlcnZpY2VWZXJzaW9uJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRE5TX0RPTUFJTl9WQUxJREFURV9ET01BSU4gPSAnQUxJWVVOOjpETlM6OkRvbWFpbjo6VmFsaWRhdGVEb21haW4nO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVNIX1ZFQ1RPUl9BUElfS0VZID0gJ0FMSVlVTjo6RGFzaFZlY3Rvcjo6QXBpS2V5JztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRE9NQUlOX05BTUUgPSAnQUxJWVVOOjpEb21haW46OkRvbWFpbk5hbWUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQVNfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVBUzo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQVNfUkVTT1VSQ0VfSUQgPSAnQUxJWVVOOjpFQVM6OlJlc291cmNlOjpSZXNvdXJjZUlkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNEX0JVTkRMRV9ERVNLVE9QX1RZUEUgPSAnQUxJWVVOOjpFQ0Q6OkJ1bmRsZTo6RGVza3RvcFR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ0lfQ09OVEFJTkVSX0dST1VQX0lEID0gJ0FMSVlVTjo6RUNJOjpDb250YWluZXJHcm91cDo6Q29udGFpbmVyR3JvdXBJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19DT01NQU5EX0lEID0gJ0FMSVlVTjo6RUNTOjpDb21tYW5kOjpDb21tYW5kSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0RFUExPWU1FTlRfU0VUX0lEID0gJ0FMSVlVTjo6RUNTOjpEZXBsb3ltZW50U2V0OjpEZXBsb3ltZW50U2V0SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0RBVEFfRElTS19DQVRFR09SWSA9ICdBTElZVU46OkVDUzo6RGlzazo6RGF0YURpc2tDYXRlZ29yeSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfRElTS19JRCA9ICdBTElZVU46OkVDUzo6RGlzazo6RGlza0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19TWVNURU1fRElTS19DQVRFR09SWSA9ICdBTElZVU46OkVDUzo6RGlzazo6U3lzdGVtRGlza0NhdGVnb3J5JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTUFHRV9JRCA9ICdBTElZVU46OkVDUzo6SW1hZ2U6OkltYWdlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfSU1BR0VfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpJbWFnZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9BVFRSSUJVVEVfU0VMRUNUT1IgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpBdHRyaWJ1dGVTZWxlY3Rvcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9QUk9QRVJUWV9FRElUT1IgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpJbnN0YW5jZVByb3BlcnR5RWRpdG9yJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9UWVBFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9NQVhfQkFORFdJRFRIX0lOID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6TWF4QmFuZHdpZHRoSW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX09TX1RZUEUgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpPU1R5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1BBU1NXT1JEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6UGFzc3dvcmQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1JFTkVXX1BFUklPRCA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OlJlbmV3UGVyaW9kJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9TVE9QX01PREUgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpTdG9wTW9kZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfWk9ORV9JRCA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OlpvbmVJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfVFlQRV9BVkFJTEFCTEVfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2VUeXBlOjpBdmFpbGFibGVJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0tFWV9QQUlSX05BTUUgPSAnQUxJWVVOOjpFQ1M6OktleVBhaXI6OktleVBhaXJOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19MQVVOQ0hfVEVNUExBVEVfSUQgPSAnQUxJWVVOOjpFQ1M6OkxhdW5jaFRlbXBsYXRlOjpMYXVuY2hUZW1wbGF0ZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19MQVVOQ0hfVEVNUExBVEVfVkVSU0lPTiA9ICdBTElZVU46OkVDUzo6TGF1bmNoVGVtcGxhdGU6OkxhdW5jaFRlbXBsYXRlVmVyc2lvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfTUFOQUdFRF9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkVDUzo6TWFuYWdlZEluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19SQU1fUk9MRSA9ICdBTElZVU46OkVDUzo6UkFNOjpSb2xlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19SRUdJT05fSUQgPSAnQUxJWVVOOjpFQ1M6OlJlZ2lvbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19SRUdJT05fSURfREVQTE9ZID0gJ0FMSVlVTjo6RUNTOjpSZWdpb25JZDo6UmVnaW9uRGVwbG95JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19UQVJHRVRfUkVHSU9OX0lEUyA9ICdBTElZVU46OkVDUzo6UmVnaW9uSWQ6OlRhcmdldFJlZ2lvbklkcyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfUkVTT1VSQ0VfR1JPVVBfSUQgPSAnQUxJWVVOOjpFQ1M6OlJlc291cmNlR3JvdXA6OlJlc291cmNlR3JvdXBJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU0VDVVJJVFlfR1JPVVBfUE9SVF9SQU5HRSA9ICdBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cDo6UG9ydFJhbmdlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19TRUNVUklUWV9HUk9VUF9JRCA9ICdBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cDo6U2VjdXJpdHlHcm91cElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19BVVRPX1NOQVBTSE9UX1BPTElDWV9JRCA9ICdBTElZVU46OkVDUzo6U25hcHNob3Q6OkF1dG9TbmFwc2hvdFBvbGljeUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19TTkFQU0hPVF9JRCA9ICdBTElZVU46OkVDUzo6U25hcHNob3Q6OlNuYXBzaG90SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1RBRyA9ICdBTElZVU46OkVDUzo6VEFHJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19WUENfSUQgPSAnQUxJWVVOOjpFQ1M6OlZQQzo6VlBDSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1ZTV0lUQ0ggPSAnQUxJWVVOOjpFQ1M6OlZTd2l0Y2gnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1ZTV0lUQ0hfSUQgPSAnQUxJWVVOOjpFQ1M6OlZTd2l0Y2g6OlZTd2l0Y2hJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfWk9ORV9JRCA9ICdBTElZVU46OkVDUzo6Wm9uZUlkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUhQQ19DTFVTVEVSX0lEID0gJ0FMSVlVTjo6RUhQQzo6Q2x1c3Rlcjo6Q2x1c3RlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVIUENfRklMRV9TWVNURU1fSUQgPSAnQUxJWVVOOjpFSFBDOjpGaWxlU3lzdGVtOjpGaWxlU3lzdGVtSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUhQQ19GSUxFX1NZU1RFTV9NT1VOVF9UQVJHRVRfRE9NQUlOID0gJ0FMSVlVTjo6RUhQQzo6RmlsZVN5c3RlbTo6TW91bnRUYXJnZXREb21haW4nO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU1NfQVVUT19TQ0FMSU5HX0dST1VQX0lEID0gJ0FMSVlVTjo6RVNTOjpBdXRvU2NhbGluZ0dyb3VwOjpBdXRvU2NhbGluZ0dyb3VwSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVNTX0VDSV9TQ0FMSU5HX0NPTkZJR1VSQVRJT05fQ09OVEFJTkVSX05BTUUgPSAnQUxJWVVOOjpFU1M6OkVDSVNjYWxpbmdDb25maWd1cmF0aW9uOjpDb250YWluZXJOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTU19FQ0lfU0NBTElOR19DT05GSUdVUkFUSU9OX0lEID0gJ0FMSVlVTjo6RVNTOjpFQ0lTY2FsaW5nQ29uZmlndXJhdGlvbjo6U2NhbGluZ0NvbmZpZ3VyYXRpb25JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU1NfU0NBTElOR19DT05GSUdVUkFUSU9OX0lEID0gJ0FMSVlVTjo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbjo6U2NhbGluZ0NvbmZpZ3VyYXRpb25JZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVMQVNUSUNTRUFSQ0hfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVsYXN0aWNzZWFyY2g6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTVJfRUNTX0NMVVNURVJfSUQgPSAnQUxJWVVOOjpFbXI6OkVDU0NsdXN0ZXI6OkNsdXN0ZXJJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZDX0ZVTkNUSU9OX05BTUUgPSAnQUxJWVVOOjpGQzo6RnVuY3Rpb246OkZ1bmN0aW9uTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGQ19TRVJWSUNFX05BTUUgPSAnQUxJWVVOOjpGQzo6U2VydmljZTo6U2VydmljZU5hbWUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGQzNfRlVOQ1RJT05fTkFNRSA9ICdBTElZVU46OkZDMzo6RnVuY3Rpb246OkZ1bmN0aW9uTmFtZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZMT1dfQ09OTkVDVElPTl9JRCA9ICdBTElZVU46OkZsb3c6OkNvbm5lY3Rpb246OkNvbm5lY3Rpb25JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGTE9XX09SR0FOSVpBVElPTl9JRCA9ICdBTElZVU46OkZsb3c6Ok9yZ2FuaXphdGlvbjo6T3JnYW5pemF0aW9uSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBIT0xPR1JFU19JTlNUQU5DRV9JRCA9ICdBTElZVU46OkhvbG9ncmVzOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElORkxVWF9EQl9JTlNUQU5DRV9UWVBFID0gJ0FMSVlVTjo6SW5mbHV4REI6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLQUZLQV9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkthZmthOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExJTkRPUk1fSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpMaW5kb3JtOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PTkdPREJfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46Ok1vbmdvREI6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQVNfRklMRV9TWVNURU1fSUQgPSAnQUxJWVVOOjpOQVM6OkZpbGVTeXN0ZW06OkZpbGVTeXN0ZW1JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQVNfRklMRV9TWVNURU1fTU9VTlRfVEFSR0VUX0RPTUFJTiA9ICdBTElZVU46Ok5BUzo6RmlsZVN5c3RlbTo6TW91bnRUYXJnZXREb21haW4nO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBORVNUX1NFUlZJQ0VfSUQgPSAnQUxJWVVOOjpORVNUOjpTZXJ2aWNlOjpTZXJ2aWNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkVTVF9TRVJWSUNFX1ZFUlNJT04gPSAnQUxJWVVOOjpORVNUOjpTZXJ2aWNlOjpTZXJ2aWNlVmVyc2lvbic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5MQl9MT0FEX0JBTEFOQ0VSX0lEID0gJ0FMSVlVTjo6TkxCOjpMb2FkQmFsYW5jZXI6OkxvYWRCYWxhbmNlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5MQl9JTlNUQU5DRV9JRCA9ICdBTElZVU46Ok5MQjo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkxCX1pPTkVfSUQgPSAnQUxJWVVOOjpOTEI6OlpvbmU6OlpvbmVJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfQkFORFdJRFRIX1VQR1JBREVfRFVSQVRJT05fSE9VUiA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpCYW5kd2lkdGhVcGdyYWRlRHVyYXRpb25Ib3VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01NQU5EX0NPTlRFTlQgPSAnQUxJWVVOOjpPT1M6OkNvbW1hbmQ6OkNvbW1hbmRDb250ZW50JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfQ0xFQU5fVVBfSU5GTyA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpDbGVhblVwSW5mbyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX09OX09GRl9USU1FX0xJTkUgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6T25PZmZUaW1lTGluZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX09OX09GRl9USU1FUyA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpPbk9mZlRpbWVzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfT1BFUkFUSU9OX1RZUEUgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6T3BlcmF0aW9uVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX1BSSVZBVEVfVEVNUExBVEVfTkFNRSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpQcml2YXRlVGVtcGxhdGVOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfU0VDVElPTl9UWVBFID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlNlY3Rpb25UeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfVEFSR0VUX0lNQUdFX05BTUUgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6VGFyZ2V0SW1hZ2VOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfVFJBTlNJVF9JTlNUQU5DRSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpUcmFuc2l0SW5zdGFuY2UnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9USU1FUl9UUklHR0VSID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlRpbWVyVHJpZ2dlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfRklMRV9VUkwgPSAnQUxJWVVOOjpPT1M6OkZpbGU6OkZpbGVVcmwnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX1BBQ0tBR0VfTkFNRSA9ICdBTElZVU46Ok9PUzo6UGFja2FnZTo6UGFja2FnZU5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX1BBQ0tBR0VfVkVSU0lPTiA9ICdBTElZVU46Ok9PUzo6UGFja2FnZTo6UGFja2FnZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX1BBUkFNRVRFUl9WQUxVRSA9ICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfUEFUQ0hfQkFTRV9MSU5FX05BTUUgPSAnQUxJWVVOOjpPT1M6OlBhdGNoQmFzZWxpbmU6OlBhdGNoQmFzZWxpbmVOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19TRUNSRVRfUEFSQU1FVEVSX1ZBTFVFID0gJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19URU1QTEFURV9OQU1FID0gJ0FMSVlVTjo6T09TOjpUZW1wbGF0ZTo6VGVtcGxhdGVOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19URU1QTEFURV9WRVJTSU9OID0gJ0FMSVlVTjo6T09TOjpUZW1wbGF0ZTo6VGVtcGxhdGVWZXJzaW9uJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1NTX0JVQ0tFVF9OQU1FID0gJ0FMSVlVTjo6T1NTOjpCdWNrZXQ6OkJ1Y2tldE5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1NTX0JVQ0tFVF9PQkpFQ1QgPSAnQUxJWVVOOjpPU1M6OkJ1Y2tldDo6T2JqZWN0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9TU19PQkpFQ1RfTkFNRSA9ICdBTElZVU46Ok9TUzo6T2JqZWN0OjpPYmplY3ROYW1lJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9MQVJEQl9EQl9DTFVTVEVSX0lEID0gJ0FMSVlVTjo6UE9MQVJEQjo6REJDbHVzdGVyOjpEQkNsdXN0ZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQT0xBUkRCX0RCX05PREVfQ0xBU1MgPSAnQUxJWVVOOjpQT0xBUkRCOjpEQkNsdXN0ZXI6OkRCTm9kZUNsYXNzJ1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fUk9MRSA9ICdBTElZVU46OlJBTTo6Um9sZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fVVNFUiA9ICdBTElZVU46OlJBTTo6VXNlcic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJEU19FTkdJTkVfSUQgPSAnQUxJWVVOOjpSRFM6OkVuZ2luZTo6RW5naW5lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkRTX0VOR0lORV9WRVJTSU9OID0gJ0FMSVlVTjo6UkRTOjpFbmdpbmU6OkVuZ2luZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkRTX0lOU1RBTkNFX0FDQ09VTlRfUEFTU1dPUkQgPSAnQUxJWVVOOjpSRFM6Okluc3RhbmNlOjpBY2NvdW50UGFzc3dvcmQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkRTX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6UkRTOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRFNfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OlJEUzo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRElTX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6UmVkaXM6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRElTX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpSZWRpczo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFU09VUkNFX01BTkFHRVJfQUNDT1VOVCA9ICdBTElZVU46OlJlc291cmNlTWFuYWdlcjo6QWNjb3VudCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRVNPVVJDRV9NQU5BR0VSX0ZPTERFUiA9ICdBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Rm9sZGVyJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1RZUEVfTUVUQV9MSVNUID0gJ0FMSVlVTjo6Uk9TOjpUeXBlOjpNZXRhTGlzdCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9BQ0xfSUQgPSAnQUxJWVVOOjpTTEI6OkFDTDo6QUNMSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0xCX0NFUlRJRklDQVRFID0gJ0FMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpTTEI6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9JTlNUQU5DRV9UWVBFID0gJ0FMSVlVTjo6U0xCOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9MT0FEX0JBTEFOQ0VSX0lEID0gJ0FMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXI6OkxvYWRCYWxhbmNlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9MT0FEX0JBTEFOQ0VSX1pPTkVfSUQgPSAnQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlcjo6Wm9uZUlkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0VSVklDRV9DQVRBX0xPR19MQVVOQ0hfT1BUSU9OX1BPUlRGT0xJT19JRCA9ICdBTElZVU46OlNlcnZpY2VDYXRhbG9nOjpMYXVuY2hPcHRpb246OlBvcnRmb2xpb0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNFUlZJQ0VfQ0FUQV9MT0dfTEFVTkNIX1BST0RVQ1RfVkVSU0lPTl9JRCA9ICdBTElZVU46OlNlcnZpY2VDYXRhbG9nOjpQcm9kdWN0VmVyc2lvbjo6UHJvZHVjdFZlcnNpb25JZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBR19LRVkgPSAnQUxJWVVOOjpUYWc6OlRhZ0tleSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUdfVkFMVUUgPSAnQUxJWVVOOjpUYWc6OlRhZ1ZhbHVlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUl9BQ0NPVU5UX0lEUyA9ICdBTElZVU46OlVzZXI6OkFjY291bnQ6OkFjY291bnRJZHMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUl9BQ0NPVU5UX0lEID0gJ0FMSVlVTjo6VXNlcjo6QWNjb3VudElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVTRVJfSUQgPSAnQUxJWVVOOjpVc2VyOjpVc2VySWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfRUlQX0FMTE9DQVRJT05fSUQgPSAnQUxJWVVOOjpWUEM6OkVJUDo6QWxsb2NhdGlvbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZQQ19OQVRfR0FURVdBWV9JRCA9ICdBTElZVU46OlZQQzo6TmF0R2F0ZXdheTo6TmF0R2F0ZXdheUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZQQ19DSURSX0JMT0NLID0gJ0FMSVlVTjo6VlBDOjpWUEM6OkNpZHJCbG9jayc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWU1dJVENIX0NJRFJfQkxPQ0sgPSAnQUxJWVVOOjpWUEM6OlZTd2l0Y2g6OkNpZHJCbG9jayc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfVlNXSVRDSF9JRCA9ICdBTElZVU46OlZQQzo6VlN3aXRjaDo6VlN3aXRjaElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZQQ19ST1VURVJfUk9VVEVfVEFCTEVfSUQgPSAnQUxJWVVOOjpWUEM6OlZpcnR1YWxCb3JkZXJSb3V0ZXI6OlJvdXRlVGFibGVJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfWk9ORV9JRCA9ICdBTElZVU46OlZQQzo6Wm9uZTo6Wm9uZUlkJztcbiAgfVxufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIHBhcmFtZXRlciB0eXBlIGxvb2tzIGxpa2UgYSBsaXN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNMaXN0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGUuaW5kZXhPZignTGlzdDwnKSA+PSAwIHx8IHR5cGUuaW5kZXhPZignQ29tbWFEZWxpbWl0ZWRMaXN0JykgPj0gMDtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBnaXZlbiBwYXJhbWV0ZXIgdHlwZSBsb29rcyBsaWtlIGEgbnVtYmVyIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXJUeXBlKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gdHlwZSA9PT0gJ051bWJlcic7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIHR5cGUgbG9va3MgbGlrZSBhIHN0cmluZyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc0xpc3RUeXBlKHR5cGUpICYmICFpc051bWJlclR5cGUodHlwZSk7XG59XG5cbmltcG9ydCB7IHJlcXVpcmVQcm9wZXJ0eSB9IGZyb20gJy4vcnVudGltZSc7XG5pbXBvcnQgeyBpc0FsbG93ZWRWYWx1ZSB9IGZyb20gJy4vdXRpbCc7XG4iXX0=