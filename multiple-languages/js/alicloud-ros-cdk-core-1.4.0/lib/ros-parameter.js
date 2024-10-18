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
})(RosParameterType = exports.RosParameterType || (exports.RosParameterType = {}));
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
        runtime_1.requireProperty(props, 'type', this);
        // check whether the associationProperty is allowed value
        // isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
        // check the type of this parameter is allowed
        util_1.isAllowedValue(props, 'type', this, RosParameter.TYPE_ALLOWED_VALUES);
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
})(RosParameter = exports.RosParameter || (exports.RosParameter = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRTNDLDJEQUF1RDtBQUV2RCxtQ0FBZ0M7QUFFaEMsSUFBWSxnQkFRWDtBQVJELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLGlDQUFhLENBQUE7SUFDYix1Q0FBbUIsQ0FBQTtJQUNuQiwrREFBMkMsQ0FBQTtJQUMzQyxtRUFBK0MsQ0FBQTtJQUMvQyxnRkFBNEQsQ0FBQTtBQUM5RCxDQUFDLEVBUlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFRM0I7QUF3QkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQWEsU0FBUSx3QkFBVTtJQVExQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFtQixRQUEyQixFQUFFO1FBQ3RGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFEd0MsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFFdEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLE1BQU07UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDZCxPQUFPLDRCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVks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QUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFDLElBQVk7SUFDaEMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDO0FBQzNCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFDLElBQVk7SUFDaEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsdUNBQTRDO0FBQzVDLGlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvc0VsZW1lbnQgfSBmcm9tICcuL3Jvcy1lbGVtZW50JztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJy4vY29uc3RydWN0LWNvbXBhdCc7XG5pbXBvcnQgeyBSb3NSZWZlcmVuY2UgfSBmcm9tICcuL3ByaXZhdGUvcm9zLXJlZmVyZW5jZSc7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSwgSVJlc29sdmVDb250ZXh0IH0gZnJvbSAnLi9yZXNvbHZhYmxlJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi90b2tlbic7XG5cbmV4cG9ydCBlbnVtIFJvc1BhcmFtZXRlclR5cGUge1xuICBTVFJJTkcgPSAnU3RyaW5nJyxcbiAgTlVNQkVSID0gJ051bWJlcicsXG4gIEpTT04gPSAnSnNvbicsXG4gIEJPT0xFQU4gPSAnQm9vbGVhbicsXG4gIENPTU1BX0RFTElNSVRFRF9MSVNUID0gJ0NvbW1hRGVsaW1pdGVkTGlzdCcsXG4gIE9PU19QQVJBTUVURVIgPSAnQUxJWVVOOjpPT1M6OlBhcmFtZXRlcjo6VmFsdWUnLFxuICBPT1NfU0VDUkVUX1BBUkFNRVRFUiA9ICdBTElZVU46Ok9PUzo6U2VjcmV0UGFyYW1ldGVyOjpWYWx1ZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUGFyYW1ldGVyUHJvcHMge1xuICByZWFkb25seSB0eXBlPzogUm9zUGFyYW1ldGVyVHlwZTtcbiAgcmVhZG9ubHkgZGVmYXVsdFZhbHVlPzogYW55O1xuICByZWFkb25seSBhbGxvd2VkUGF0dGVybj86IHN0cmluZztcbiAgcmVhZG9ubHkgYWxsb3dlZFZhbHVlcz86IGFueVtdO1xuICByZWFkb25seSBjb25zdHJhaW50RGVzY3JpcHRpb24/OiBzdHJpbmcgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcmVhZG9ubHkgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICByZWFkb25seSBtYXhWYWx1ZT86IG51bWJlcjtcbiAgcmVhZG9ubHkgbWluTGVuZ3RoPzogbnVtYmVyO1xuICByZWFkb25seSBtaW5WYWx1ZT86IG51bWJlcjtcbiAgcmVhZG9ubHkgbm9FY2hvPzogYm9vbGVhbjtcblxuICByZWFkb25seSBsYWJlbD86IHN0cmluZztcbiAgcmVhZG9ubHkgYXNzb2NpYXRpb25Qcm9wZXJ0eT86IHN0cmluZztcbiAgcmVhZG9ubHkgYXNzb2NpYXRpb25Qcm9wZXJ0eU1ldGFkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX07XG4gIHJlYWRvbmx5IGNvbmZpcm0/OiBib29sZWFuO1xuICByZWFkb25seSB0ZXh0QXJlYT86IGJvb2xlYW47XG4gIHJlYWRvbmx5IHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcGxhY2Vob2xkZXI/OiBzdHJpbmcgfCB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbn1cblxuLyoqXG4gKiBBIFJPUyBwYXJhbWV0ZXIuXG4gKlxuICogUGFyYW1ldGVycyBlbmFibGUgeW91IHRvIGlucHV0IGN1c3RvbSB2YWx1ZXMgdG8geW91ciB0ZW1wbGF0ZSBlYWNoIHRpbWUgeW91IGNyZWF0ZSBvclxuICogdXBkYXRlIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQYXJhbWV0ZXIgZXh0ZW5kcyBSb3NFbGVtZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRZUEVfQUxMT1dFRF9WQUxVRVM6IHN0cmluZ1tdID0gWydTdHJpbmcnLCAnTnVtYmVyJywgJ0NvbW1hRGVsaW1pdGVkTGlzdCcsICdKc29uJywgJ0Jvb2xlYW4nLFxuICAgICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZScsICdBTElZVU46Ok9PUzo6U2VjcmV0UGFyYW1ldGVyOjpWYWx1ZSddO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm9zUGFyYW1ldGVyVHlwZTtcbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IFJvc1BhcmFtZXRlclByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlIHx8IFJvc1BhcmFtZXRlclR5cGUuU1RSSU5HO1xuICAgIHRoaXMudmFsaWRhdGVQcm9wZXJ0aWVzKHByb3BzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhpcyBwYXJhbWV0ZXIgaXMgY29uZmlndXJlZCB3aXRoIFwiTm9FY2hvXCIgZW5hYmxlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgbm9FY2hvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMucHJvcHMubm9FY2hvO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUgYXMgYSBUb2tlblxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFJvc1JlZmVyZW5jZS5mb3IodGhpcywgJ1JlZicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzU3RyaW5nVHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIHN0cmluZyB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzQm9vbGVhbigpOiBhbnkge1xuICAgIGlmICghaXNTdHJpbmdUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNBbnkoKTogYW55IHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZyBsaXN0LlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgaWYgKCFpc0xpc3RUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIGxpc3QgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNMaXN0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBpZiAoIWlzTnVtYmVyVHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIG51bWJlciB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc051bWJlcih0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfdG9Sb3NUZW1wbGF0ZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBQYXJhbWV0ZXJzOiB7XG4gICAgICAgIFt0aGlzLmlkXToge1xuICAgICAgICAgIFR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICBEZWZhdWx0OiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICBBbGxvd2VkUGF0dGVybjogdGhpcy5wcm9wcy5hbGxvd2VkUGF0dGVybixcbiAgICAgICAgICBBbGxvd2VkVmFsdWVzOiB0aGlzLnByb3BzLmFsbG93ZWRWYWx1ZXMsXG4gICAgICAgICAgQ29uc3RyYWludERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmNvbnN0cmFpbnREZXNjcmlwdGlvbixcbiAgICAgICAgICBEZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBNYXhMZW5ndGg6IHRoaXMucHJvcHMubWF4TGVuZ3RoLFxuICAgICAgICAgIE1heFZhbHVlOiB0aGlzLnByb3BzLm1heFZhbHVlLFxuICAgICAgICAgIE1pbkxlbmd0aDogdGhpcy5wcm9wcy5taW5MZW5ndGgsXG4gICAgICAgICAgTWluVmFsdWU6IHRoaXMucHJvcHMubWluVmFsdWUsXG4gICAgICAgICAgTm9FY2hvOiB0aGlzLnByb3BzLm5vRWNobyxcbiAgICAgICAgICBMYWJlbDogdGhpcy5wcm9wcy5sYWJlbCxcbiAgICAgICAgICBBc3NvY2lhdGlvblByb3BlcnR5OiB0aGlzLnByb3BzLmFzc29jaWF0aW9uUHJvcGVydHksXG4gICAgICAgICAgQXNzb2NpYXRpb25Qcm9wZXJ0eU1ldGFkYXRhOiB0aGlzLnByb3BzLmFzc29jaWF0aW9uUHJvcGVydHlNZXRhZGF0YSxcbiAgICAgICAgICBDb25maXJtOiB0aGlzLnByb3BzLmNvbmZpcm0sXG4gICAgICAgICAgVGV4dEFyZWE6IHRoaXMucHJvcHMudGV4dEFyZWEsXG4gICAgICAgICAgUmVxdWlyZWQ6IHRoaXMucHJvcHMucmVxdWlyZWQsXG4gICAgICAgICAgUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZShfY29udGV4dDogSVJlc29sdmVDb250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZVByb3BlcnRpZXMocHJvcHM6IFJvc1BhcmFtZXRlclByb3BzID0ge30pOiB2b2lkIHtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzIGlzIGluIHBhcmFtZXRlcihwcm9wcylcbiAgICByZXF1aXJlUHJvcGVydHkocHJvcHMsICd0eXBlJywgdGhpcyk7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgYXNzb2NpYXRpb25Qcm9wZXJ0eSBpcyBhbGxvd2VkIHZhbHVlXG4gICAgLy8gaXNBbGxvd2VkVmFsdWUocHJvcHMsICdhc3NvY2lhdGlvblByb3BlcnR5JywgdGhpcywgUm9zUGFyYW1ldGVyLkFTU09DSUFUSU9OX1BST1BFUlRZX0FMTE9XRURfVkFMVUVTKTtcbiAgICAvLyBjaGVjayB0aGUgdHlwZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBhbGxvd2VkXG4gICAgaXNBbGxvd2VkVmFsdWUocHJvcHMsICd0eXBlJywgdGhpcywgUm9zUGFyYW1ldGVyLlRZUEVfQUxMT1dFRF9WQUxVRVMpO1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG1heCBsZW5ndGggb2Ygc3RyaW5nIGlzIGxhcmdlciB0aGFuIHRoZSBtaW4gbGVuZ3RoXG4gICAgaWYgKHByb3BzLm1heExlbmd0aCAmJiBwcm9wcy5taW5MZW5ndGggJiYgcHJvcHMubWF4TGVuZ3RoIDwgcHJvcHMubWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXggbGVuZ3RoIG9mIHN0cmluZyBvZiB0aGUgcGFyYW1ldGVyICR7dGhpcy50b1N0cmluZygpfSBpcyBsb3dlciB0aGFuIGl0cyBtaW4gbGVuZ3RoLmApO1xuICAgIH1cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBtYXggdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbiB2YWx1ZVxuICAgIGlmIChwcm9wcy5tYXhWYWx1ZSAmJiBwcm9wcy5taW5WYWx1ZSAmJiBwcm9wcy5tYXhWYWx1ZSA8IHByb3BzLm1pblZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXggdmFsdWUgb2YgdGhlIHBhcmFtZXRlciAke3RoaXMudG9TdHJpbmcoKX0gaXMgbG93ZXIgdGhhbiBpdHMgbWluIHZhbHVlLmApO1xuICAgIH1cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBcImNvbmZpcm1cIiBwcm9wZXJ0eSBpcyBhbGxvd2VkIHRvIGJlIHNldCBcInRydWVcIlxuICAgIGlmIChwcm9wcy5jb25maXJtICYmIChwcm9wcy50eXBlICE9PSAnU3RyaW5nJyB8fCAhcHJvcHMubm9FY2hvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIHByb3BlcnR5IFwiY29uZmlybVwiIG9mIHRoZSBwYXJhbWV0ZXIgJHt0aGlzLnRvU3RyaW5nKCl9IGNvdWxkIGJlIHRydWUgb25seSBpZiB0eXBlIGlzIFwiU3RyaW5nXCIgYW5kIFwibm9FY2hvXCIgaXMgdHJ1ZS5gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NQYXJhbWV0ZXIge1xuICBleHBvcnQgY2xhc3MgQXNzb2NpYXRpb25Qcm9wZXJ0eSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBTEVSVCA9ICdBbGVydCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBUlJBWV9JVEVNUyA9ICdBcnJheUl0ZW1zJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUkFZX1RBQkxFID0gJ0FycmF5VGFibGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVVUT19DT01QTEVURV9JTlBVVCA9ICdBdXRvQ29tcGxldGVJbnB1dCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCT09MRUFOID0gJ0Jvb2xlYW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0FTQ0FERVIgPSAnQ2FzY2FkZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBUkdFX1RZUEUgPSAnQ2hhcmdlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0RFID0gJ0NvZGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NTUFfREVMSU1JVEVEX0xJU1QgPSAnQ29tbWFEZWxpbWl0ZWRMaXN0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENST04gPSAnQ3Jvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVRFX1BJQ0tFUiA9ICdEYXRlUGlja2VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERBVEVfVElNRSA9ICdEYXRlVGltZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFRElUQUJMRSA9ICdFZGl0YWJsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFRElUQUJMRV9QT1BPVkVSID0gJ0VkaXRhYmxlUG9wb3Zlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGSUxFX0NPTlRFTlQgPSAnRmlsZUNvbnRlbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9STV9HUklEID0gJ0Zvcm1HcmlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fR1JPVVBfQ09MTEFQU0VfUEFOID0gJ0Zvcm1Hcm91cENvbGxhcHNlUGFuJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fSVRFTSA9ICdGb3JtSXRlbSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGT1JNX0lURU1fR1JPVVAgPSAnRm9ybUl0ZW1Hcm91cCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGT1JNX0xBWU9VVCA9ICdGb3JtTGF5b3V0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdNVF9aT05FID0gJ0dNVFpvbmUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5QVVQgPSAnSW5wdXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5URUdFUiA9ICdJbnRlZ2VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEpTT04gPSAnSnNvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMSVNUID0gJ0xpc3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTElTVF9QQVJBTUVURVIgPSAnTGlzdFtQYXJhbWV0ZXJdJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExJU1RfUEFSQU1FVEVSUyA9ICdMaXN0W1BhcmFtZXRlcnNdJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5VTUJFUiA9ICdOdW1iZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTlVNQkVSX1BJQ0tFUiA9ICdOdW1iZXJQaWNrZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX1NFUlZJQ0VfUk9MRSA9ICdPT1NTZXJ2aWNlUm9sZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVNTV09SRCA9ICdQYXNzd29yZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVJTRV9URVhUID0gJ1BhcnNlVGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVlfUEVSSU9EID0gJ1BheVBlcmlvZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVlfUEVSSU9EX1VOSVQgPSAnUGF5UGVyaW9kVW5pdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQURJTyA9ICdSYWRpbyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQVRFX0NPTlRST0wgPSAnUmF0ZUNvbnRyb2wnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVBRF9PTkxZID0gJ1JlYWRPbmx5JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFQURfT05MWV9JVEVNID0gJ1JlYWRPbmx5SXRlbSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUdJT05fSUQgPSAnUmVnaW9uSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0VMRUNUID0gJ1NlbGVjdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVFJJTkcgPSAnU3RyaW5nJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNXSVRDSCA9ICdTd2l0Y2gnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFHUyA9ICdUYWdzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBUkdFVFMgPSAnVGFyZ2V0cyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURU1QTEFURV9OQU1FID0gJ1RlbXBsYXRlTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURU1QTEFURV9QQVJBTUVURVIgPSAnVGVtcGxhdGVQYXJhbWV0ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYVF9BUkVBID0gJ1RleHRBcmVhJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUUgPSAnVGltZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUSU1FX1RSSUdHRVIgPSAnVGltZVRyaWdnZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVElNRV9UUklHR0VSX1dFRUtMWSA9ICdUaW1lVHJpZ2dlcldlZWtseSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUSU1FX1pPTkUgPSAnVGltZVpvbmUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWk9ORV9JRCA9ICdab25lSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBQ1JfTkFNRVNQQUNFX05BTUUgPSAnQUxJWVVOOjpBQ1I6Ok5hbWVzcGFjZTo6TmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBQ1JfUkVQT19BVFRSSUJVVEUgPSAnQUxJWVVOOjpBQ1I6OlJlcG86OlJlcG9BdHRyaWJ1dGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUNSX1JFUE9fVEFHID0gJ0FMSVlVTjo6QUNSOjpSZXBvOjpUYWcnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBTEJfQUNMX0lEID0gJ0FMSVlVTjo6QUxCOjpBQ0w6OkFDTElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMQl9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkFMQjo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUxCX0xPQURfQkFMQU5DRVJfSUQgPSAnQUxJWVVOOjpBTEI6OkxvYWRCYWxhbmNlcjo6TG9hZEJhbGFuY2VySWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCU1NfUFJJQ0lOR19NT0RVTEVfQ09ERSA9ICdBTElZVU46OkJTUzo6UHJpY2luZ01vZHVsZTo6TW9kdWxlQ29kZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENBU19DRVJUSUZJQ0FURSA9ICdBTElZVU46OkNBUzo6Q2VydGlmaWNhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0FTX0NFUlRJRklDQVRFX0lEID0gJ0FMSVlVTjo6Q0FTOjpDZXJ0aWZpY2F0ZTo6Q2VydGlmaWNhdGVJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENFTl9JTlNUQU5DRV9DRU5fSUQgPSAnQUxJWVVOOjpDRU46Okluc3RhbmNlOjpDZW5JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDRU5fVFJBTlNJVF9ST1VURVJfSUQgPSAnQUxJWVVOOjpDRU46OlRyYW5zaXRSb3V0ZXI6OlRyYW5zaXRSb3V0ZXJJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19BTEFSTV9NRVRSSUNfU0VMRUNUT1IgPSAnQUxJWVVOOjpDTVM6OkFsYXJtOjpNZXRyaWNTZWxlY3Rvcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfQUxBUk1fUlVMRSA9ICdBTElZVU46OkNNUzo6QWxhcm06OlJ1bGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0FMQVJNX1NJTEVOQ0VfVElNRSA9ICdBTElZVU46OkNNUzo6QWxhcm06OlNpbGVuY2VUaW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19BTEFSTV9UUklHR0VSX1JFU09VUkNFUyA9ICdBTElZVU46OkNNUzo6QWxhcm06OlRyaWdnZXJSZXNvdXJjZXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0VWRU5UX0ZJTFRFUl9SVUxFID0gJ0FMSVlVTjo6Q01TOjpFdmVudDo6RXZlbnRGaWx0ZXJSdWxlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19FVkVOVF9MRVZFTCA9ICdBTElZVU46OkNNUzo6RXZlbnQ6OkV2ZW50TGV2ZWwnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0VWRU5UX05BTUUgPSAnQUxJWVVOOjpDTVM6OkV2ZW50OjpFdmVudE5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX1BST0RVQ1RfVFlQRSA9ICdBTElZVU46OkNNUzo6UHJvZHVjdDo6UHJvZHVjdFR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDUl9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkNSOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDUl9OQU1FU1BBQ0VfTkFNRSA9ICdBTElZVU46OkNSOjpOYW1lU3BhY2U6Ok5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1JfUkVQT1NJVE9SWV9SRVBPX05BTUUgPSAnQUxJWVVOOjpDUjo6UmVwb3NpdG9yeTo6UmVwb05hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1JfUkVQT1NJVE9SWV9UQUcgPSAnQUxJWVVOOjpDUjo6UmVwb3NpdG9yeTo6VGFnJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1NfQ0xVU1RFUl9JRCA9ICdBTElZVU46OkNTOjpDbHVzdGVyOjpDbHVzdGVySWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ1NfQ0xVU1RFUl9OT0RFX1BPT0wgPSAnQUxJWVVOOjpDUzo6Q2x1c3Rlcjo6Q2x1c3Rlck5vZGVQb29sJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENTX01BTkFHRURfS1VCRVJORVRFU19DTFVTVEVSX1NFUlZJQ0VfQ0lEUiA9ICdBTElZVU46OkNTOjpNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXI6OlNlcnZpY2VDaWRyJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURV9ORVNUX0FSVElGQUNUX0lEID0gJ0FMSVlVTjo6Q29tcHV0ZU5lc3Q6OkFydGlmYWN0OjpBcnRpZmFjdElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVfTkVTVF9BUlRJRkFDVF9JRF9WRVJTSU9OID0gJ0FMSVlVTjo6Q29tcHV0ZU5lc3Q6OkFydGlmYWN0OjpBcnRpZmFjdElkVmVyc2lvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QVVRFUl9ORVNUX1NFUlZJQ0VfSUQgPSAnQUxJWVVOOjpDb21wdXRlTmVzdDo6U2VydmljZTo6U2VydmljZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVSX05FU1RfU0VSVklDRV9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkNvbXB1dGVOZXN0OjpTZXJ2aWNlSW5zdGFuY2U6OlNlcnZpY2VJbnN0YW5jZUlkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURVJfTkVTVF9TVVBQTElFUl9TRVJWSUNFX1ZFUlNJT04gPSAnQUxJWVVOOjpDb21wdXRlTmVzdFN1cHBsaWVyOjpTZXJ2aWNlOjpTZXJ2aWNlVmVyc2lvbic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEROU19ET01BSU5fVkFMSURBVEVfRE9NQUlOID0gJ0FMSVlVTjo6RE5TOjpEb21haW46OlZhbGlkYXRlRG9tYWluJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFTSF9WRUNUT1JfQVBJX0tFWSA9ICdBTElZVU46OkRhc2hWZWN0b3I6OkFwaUtleSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERPTUFJTl9OQU1FID0gJ0FMSVlVTjo6RG9tYWluOjpEb21haW5OYW1lJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUFTX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpFQVM6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUFTX1JFU09VUkNFX0lEID0gJ0FMSVlVTjo6RUFTOjpSZXNvdXJjZTo6UmVzb3VyY2VJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDRF9CVU5ETEVfREVTS1RPUF9UWVBFID0gJ0FMSVlVTjo6RUNEOjpCdW5kbGU6OkRlc2t0b3BUeXBlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNJX0NPTlRBSU5FUl9HUk9VUF9JRCA9ICdBTElZVU46OkVDSTo6Q29udGFpbmVyR3JvdXA6OkNvbnRhaW5lckdyb3VwSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfQ09NTUFORF9JRCA9ICdBTElZVU46OkVDUzo6Q29tbWFuZDo6Q29tbWFuZElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19ERVBMT1lNRU5UX1NFVF9JRCA9ICdBTElZVU46OkVDUzo6RGVwbG95bWVudFNldDo6RGVwbG95bWVudFNldElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19EQVRBX0RJU0tfQ0FURUdPUlkgPSAnQUxJWVVOOjpFQ1M6OkRpc2s6OkRhdGFEaXNrQ2F0ZWdvcnknO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0RJU0tfSUQgPSAnQUxJWVVOOjpFQ1M6OkRpc2s6OkRpc2tJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU1lTVEVNX0RJU0tfQ0FURUdPUlkgPSAnQUxJWVVOOjpFQ1M6OkRpc2s6OlN5c3RlbURpc2tDYXRlZ29yeSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU1BR0VfSUQgPSAnQUxJWVVOOjpFQ1M6OkltYWdlOjpJbWFnZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRSA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2UnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX0lNQUdFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW1hZ2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfQVRUUklCVVRFX1NFTEVDVE9SID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6QXR0cmlidXRlU2VsZWN0b3InO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfUFJPUEVSVFlfRURJVE9SID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VQcm9wZXJ0eUVkaXRvcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfTUFYX0JBTkRXSURUSF9JTiA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6Ok1heEJhbmR3aWR0aEluJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9PU19UWVBFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6T1NUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9QQVNTV09SRCA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OlBhc3N3b3JkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9SRU5FV19QRVJJT0QgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpSZW5ld1BlcmlvZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfU1RPUF9NT0RFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6U3RvcE1vZGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1pPTkVfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpab25lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1RZUEVfQVZBSUxBQkxFX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlVHlwZTo6QXZhaWxhYmxlSW5zdGFuY2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19LRVlfUEFJUl9OQU1FID0gJ0FMSVlVTjo6RUNTOjpLZXlQYWlyOjpLZXlQYWlyTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfTEFVTkNIX1RFTVBMQVRFX0lEID0gJ0FMSVlVTjo6RUNTOjpMYXVuY2hUZW1wbGF0ZTo6TGF1bmNoVGVtcGxhdGVJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfTEFVTkNIX1RFTVBMQVRFX1ZFUlNJT04gPSAnQUxJWVVOOjpFQ1M6OkxhdW5jaFRlbXBsYXRlOjpMYXVuY2hUZW1wbGF0ZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX01BTkFHRURfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpFQ1M6Ok1hbmFnZWRJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfUkFNX1JPTEUgPSAnQUxJWVVOOjpFQ1M6OlJBTTo6Um9sZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfUkVHSU9OX0lEID0gJ0FMSVlVTjo6RUNTOjpSZWdpb25JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfUkVHSU9OX0lEX0RFUExPWSA9ICdBTElZVU46OkVDUzo6UmVnaW9uSWQ6OlJlZ2lvbkRlcGxveSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfVEFSR0VUX1JFR0lPTl9JRFMgPSAnQUxJWVVOOjpFQ1M6OlJlZ2lvbklkOjpUYXJnZXRSZWdpb25JZHMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1JFU09VUkNFX0dST1VQX0lEID0gJ0FMSVlVTjo6RUNTOjpSZXNvdXJjZUdyb3VwOjpSZXNvdXJjZUdyb3VwSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1NFQ1VSSVRZX0dST1VQX1BPUlRfUkFOR0UgPSAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlBvcnRSYW5nZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU0VDVVJJVFlfR1JPVVBfSUQgPSAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlNlY3VyaXR5R3JvdXBJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfQVVUT19TTkFQU0hPVF9QT0xJQ1lfSUQgPSAnQUxJWVVOOjpFQ1M6OlNuYXBzaG90OjpBdXRvU25hcHNob3RQb2xpY3lJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU05BUFNIT1RfSUQgPSAnQUxJWVVOOjpFQ1M6OlNuYXBzaG90OjpTbmFwc2hvdElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19UQUcgPSAnQUxJWVVOOjpFQ1M6OlRBRyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfVlBDX0lEID0gJ0FMSVlVTjo6RUNTOjpWUEM6OlZQQ0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19WU1dJVENIID0gJ0FMSVlVTjo6RUNTOjpWU3dpdGNoJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19WU1dJVENIX0lEID0gJ0FMSVlVTjo6RUNTOjpWU3dpdGNoOjpWU3dpdGNoSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1pPTkVfSUQgPSAnQUxJWVVOOjpFQ1M6OlpvbmVJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVIUENfQ0xVU1RFUl9JRCA9ICdBTElZVU46OkVIUEM6OkNsdXN0ZXI6OkNsdXN0ZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFSFBDX0ZJTEVfU1lTVEVNX0lEID0gJ0FMSVlVTjo6RUhQQzo6RmlsZVN5c3RlbTo6RmlsZVN5c3RlbUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVIUENfRklMRV9TWVNURU1fTU9VTlRfVEFSR0VUX0RPTUFJTiA9ICdBTElZVU46OkVIUEM6OkZpbGVTeXN0ZW06Ok1vdW50VGFyZ2V0RG9tYWluJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVNTX0FVVE9fU0NBTElOR19HUk9VUF9JRCA9ICdBTElZVU46OkVTUzo6QXV0b1NjYWxpbmdHcm91cDo6QXV0b1NjYWxpbmdHcm91cElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTU19FQ0lfU0NBTElOR19DT05GSUdVUkFUSU9OX0NPTlRBSU5FUl9OQU1FID0gJ0FMSVlVTjo6RVNTOjpFQ0lTY2FsaW5nQ29uZmlndXJhdGlvbjo6Q29udGFpbmVyTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFU1NfRUNJX1NDQUxJTkdfQ09ORklHVVJBVElPTl9JRCA9ICdBTElZVU46OkVTUzo6RUNJU2NhbGluZ0NvbmZpZ3VyYXRpb246OlNjYWxpbmdDb25maWd1cmF0aW9uSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVNTX1NDQUxJTkdfQ09ORklHVVJBVElPTl9JRCA9ICdBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb246OlNjYWxpbmdDb25maWd1cmF0aW9uSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTEFTVElDU0VBUkNIX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpFbGFzdGljc2VhcmNoOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRU1SX0VDU19DTFVTVEVSX0lEID0gJ0FMSVlVTjo6RW1yOjpFQ1NDbHVzdGVyOjpDbHVzdGVySWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGQ19GVU5DVElPTl9OQU1FID0gJ0FMSVlVTjo6RkM6OkZ1bmN0aW9uOjpGdW5jdGlvbk5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRkNfU0VSVklDRV9OQU1FID0gJ0FMSVlVTjo6RkM6OlNlcnZpY2U6OlNlcnZpY2VOYW1lJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRkMzX0ZVTkNUSU9OX05BTUUgPSAnQUxJWVVOOjpGQzM6OkZ1bmN0aW9uOjpGdW5jdGlvbk5hbWUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGTE9XX0NPTk5FQ1RJT05fSUQgPSAnQUxJWVVOOjpGbG93OjpDb25uZWN0aW9uOjpDb25uZWN0aW9uSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRkxPV19PUkdBTklaQVRJT05fSUQgPSAnQUxJWVVOOjpGbG93OjpPcmdhbml6YXRpb246Ok9yZ2FuaXphdGlvbklkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSE9MT0dSRVNfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpIb2xvZ3Jlczo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJTkZMVVhfREJfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkluZmx1eERCOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0FGS0FfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpLYWZrYTo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMSU5ET1JNX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6TGluZG9ybTo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNT05HT0RCX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpNb25nb0RCOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFTX0ZJTEVfU1lTVEVNX0lEID0gJ0FMSVlVTjo6TkFTOjpGaWxlU3lzdGVtOjpGaWxlU3lzdGVtSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFTX0ZJTEVfU1lTVEVNX01PVU5UX1RBUkdFVF9ET01BSU4gPSAnQUxJWVVOOjpOQVM6OkZpbGVTeXN0ZW06Ok1vdW50VGFyZ2V0RG9tYWluJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkVTVF9TRVJWSUNFX0lEID0gJ0FMSVlVTjo6TkVTVDo6U2VydmljZTo6U2VydmljZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5FU1RfU0VSVklDRV9WRVJTSU9OID0gJ0FMSVlVTjo6TkVTVDo6U2VydmljZTo6U2VydmljZVZlcnNpb24nO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOTEJfTE9BRF9CQUxBTkNFUl9JRCA9ICdBTElZVU46Ok5MQjo6TG9hZEJhbGFuY2VyOjpMb2FkQmFsYW5jZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOTEJfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpOTEI6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5MQl9aT05FX0lEID0gJ0FMSVlVTjo6TkxCOjpab25lOjpab25lSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX0JBTkRXSURUSF9VUEdSQURFX0RVUkFUSU9OX0hPVVIgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6QmFuZHdpZHRoVXBncmFkZUR1cmF0aW9uSG91cic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NTUFORF9DT05URU5UID0gJ0FMSVlVTjo6T09TOjpDb21tYW5kOjpDb21tYW5kQ29udGVudCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX0NMRUFOX1VQX0lORk8gPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6Q2xlYW5VcEluZm8nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9PTl9PRkZfVElNRV9MSU5FID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6Ok9uT2ZmVGltZUxpbmUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9PTl9PRkZfVElNRVMgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6T25PZmZUaW1lcyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX09QRVJBVElPTl9UWVBFID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6Ok9wZXJhdGlvblR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9QUklWQVRFX1RFTVBMQVRFX05BTUUgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6UHJpdmF0ZVRlbXBsYXRlTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX1NFQ1RJT05fVFlQRSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpTZWN0aW9uVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX1RBUkdFVF9JTUFHRV9OQU1FID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlRhcmdldEltYWdlTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfQ09NUE9ORU5UX1RSQU5TSVRfSU5TVEFOQ0UgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6VHJhbnNpdEluc3RhbmNlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfVElNRVJfVFJJR0dFUiA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpUaW1lclRyaWdnZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0ZJTEVfVVJMID0gJ0FMSVlVTjo6T09TOjpGaWxlOjpGaWxlVXJsJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19QQUNLQUdFX05BTUUgPSAnQUxJWVVOOjpPT1M6OlBhY2thZ2U6OlBhY2thZ2VOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19QQUNLQUdFX1ZFUlNJT04gPSAnQUxJWVVOOjpPT1M6OlBhY2thZ2U6OlBhY2thZ2VWZXJzaW9uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19QQVJBTUVURVJfVkFMVUUgPSAnQUxJWVVOOjpPT1M6OlBhcmFtZXRlcjo6VmFsdWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX1BBVENIX0JBU0VfTElORV9OQU1FID0gJ0FMSVlVTjo6T09TOjpQYXRjaEJhc2VsaW5lOjpQYXRjaEJhc2VsaW5lTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfU0VDUkVUX1BBUkFNRVRFUl9WQUxVRSA9ICdBTElZVU46Ok9PUzo6U2VjcmV0UGFyYW1ldGVyOjpWYWx1ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfVEVNUExBVEVfTkFNRSA9ICdBTElZVU46Ok9PUzo6VGVtcGxhdGU6OlRlbXBsYXRlTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfVEVNUExBVEVfVkVSU0lPTiA9ICdBTElZVU46Ok9PUzo6VGVtcGxhdGU6OlRlbXBsYXRlVmVyc2lvbic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9TU19CVUNLRVRfTkFNRSA9ICdBTElZVU46Ok9TUzo6QnVja2V0OjpCdWNrZXROYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9TU19CVUNLRVRfT0JKRUNUID0gJ0FMSVlVTjo6T1NTOjpCdWNrZXQ6Ok9iamVjdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPU1NfT0JKRUNUX05BTUUgPSAnQUxJWVVOOjpPU1M6Ok9iamVjdDo6T2JqZWN0TmFtZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBPTEFSREJfREJfQ0xVU1RFUl9JRCA9ICdBTElZVU46OlBPTEFSREI6OkRCQ2x1c3Rlcjo6REJDbHVzdGVySWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9MQVJEQl9EQl9OT0RFX0NMQVNTID0gJ0FMSVlVTjo6UE9MQVJEQjo6REJDbHVzdGVyOjpEQk5vZGVDbGFzcydcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkFNX1JPTEUgPSAnQUxJWVVOOjpSQU06OlJvbGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkFNX1VTRVIgPSAnQUxJWVVOOjpSQU06OlVzZXInO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRFNfRU5HSU5FX0lEID0gJ0FMSVlVTjo6UkRTOjpFbmdpbmU6OkVuZ2luZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJEU19FTkdJTkVfVkVSU0lPTiA9ICdBTElZVU46OlJEUzo6RW5naW5lOjpFbmdpbmVWZXJzaW9uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJEU19JTlNUQU5DRV9BQ0NPVU5UX1BBU1NXT1JEID0gJ0FMSVlVTjo6UkRTOjpJbnN0YW5jZTo6QWNjb3VudFBhc3N3b3JkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJEU19JTlNUQU5DRV9JRCA9ICdBTElZVU46OlJEUzo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkRTX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpSRFM6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRURJU19JTlNUQU5DRV9JRCA9ICdBTElZVU46OlJlZGlzOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRURJU19JTlNUQU5DRV9UWVBFID0gJ0FMSVlVTjo6UmVkaXM6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRVNPVVJDRV9NQU5BR0VSX0FDQ09VTlQgPSAnQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkFjY291bnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTT1VSQ0VfTUFOQUdFUl9GT0xERVIgPSAnQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkZvbGRlcic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19UWVBFX01FVEFfTElTVCA9ICdBTElZVU46OlJPUzo6VHlwZTo6TWV0YUxpc3QnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfQUNMX0lEID0gJ0FMSVlVTjo6U0xCOjpBQ0w6OkFDTElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9DRVJUSUZJQ0FURSA9ICdBTElZVU46OlNMQjo6Q2VydGlmaWNhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0xCX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6U0xCOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OlNMQjo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfTE9BRF9CQUxBTkNFUl9JRCA9ICdBTElZVU46OlNMQjo6TG9hZEJhbGFuY2VyOjpMb2FkQmFsYW5jZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfTE9BRF9CQUxBTkNFUl9aT05FX0lEID0gJ0FMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXI6OlpvbmVJZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNFUlZJQ0VfQ0FUQV9MT0dfTEFVTkNIX09QVElPTl9QT1JURk9MSU9fSUQgPSAnQUxJWVVOOjpTZXJ2aWNlQ2F0YWxvZzo6TGF1bmNoT3B0aW9uOjpQb3J0Zm9saW9JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTRVJWSUNFX0NBVEFfTE9HX0xBVU5DSF9QUk9EVUNUX1ZFUlNJT05fSUQgPSAnQUxJWVVOOjpTZXJ2aWNlQ2F0YWxvZzo6UHJvZHVjdFZlcnNpb246OlByb2R1Y3RWZXJzaW9uSWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUdfS0VZID0gJ0FMSVlVTjo6VGFnOjpUYWdLZXknO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFHX1ZBTFVFID0gJ0FMSVlVTjo6VGFnOjpUYWdWYWx1ZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVTRVJfQUNDT1VOVF9JRFMgPSAnQUxJWVVOOjpVc2VyOjpBY2NvdW50OjpBY2NvdW50SWRzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVTRVJfQUNDT1VOVF9JRCA9ICdBTElZVU46OlVzZXI6OkFjY291bnRJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVU0VSX0lEID0gJ0FMSVlVTjo6VXNlcjo6VXNlcklkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX0VJUF9BTExPQ0FUSU9OX0lEID0gJ0FMSVlVTjo6VlBDOjpFSVA6OkFsbG9jYXRpb25JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfTkFUX0dBVEVXQVlfSUQgPSAnQUxJWVVOOjpWUEM6Ok5hdEdhdGV3YXk6Ok5hdEdhdGV3YXlJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfQ0lEUl9CTE9DSyA9ICdBTElZVU46OlZQQzo6VlBDOjpDaWRyQmxvY2snO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlNXSVRDSF9DSURSX0JMT0NLID0gJ0FMSVlVTjo6VlBDOjpWU3dpdGNoOjpDaWRyQmxvY2snO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX1ZTV0lUQ0hfSUQgPSAnQUxJWVVOOjpWUEM6OlZTd2l0Y2g6OlZTd2l0Y2hJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfUk9VVEVSX1JPVVRFX1RBQkxFX0lEID0gJ0FMSVlVTjo6VlBDOjpWaXJ0dWFsQm9yZGVyUm91dGVyOjpSb3V0ZVRhYmxlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX1pPTkVfSUQgPSAnQUxJWVVOOjpWUEM6OlpvbmU6OlpvbmVJZCc7XG4gIH1cbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBnaXZlbiBwYXJhbWV0ZXIgdHlwZSBsb29rcyBsaWtlIGEgbGlzdCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzTGlzdFR5cGUodHlwZTogc3RyaW5nKSB7XG4gIHJldHVybiB0eXBlLmluZGV4T2YoJ0xpc3Q8JykgPj0gMCB8fCB0eXBlLmluZGV4T2YoJ0NvbW1hRGVsaW1pdGVkTGlzdCcpID49IDA7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIHR5cGUgbG9va3MgbGlrZSBhIG51bWJlciB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICdOdW1iZXInO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIHBhcmFtZXRlciB0eXBlIGxvb2tzIGxpa2UgYSBzdHJpbmcgdHlwZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZ1R5cGUodHlwZTogc3RyaW5nKSB7XG4gIHJldHVybiAhaXNMaXN0VHlwZSh0eXBlKSAmJiAhaXNOdW1iZXJUeXBlKHR5cGUpO1xufVxuXG5pbXBvcnQgeyByZXF1aXJlUHJvcGVydHkgfSBmcm9tICcuL3J1bnRpbWUnO1xuaW1wb3J0IHsgaXNBbGxvd2VkVmFsdWUgfSBmcm9tICcuL3V0aWwnO1xuIl19