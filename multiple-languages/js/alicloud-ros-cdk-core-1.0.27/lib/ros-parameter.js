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
// public static readonly ASSOCIATION_PROPERTY_ALLOWED_VALUES: string[] = ['Password',
//   'TextArea',
//   'Json',
//   'CommaDelimitedList',
//   'Code',
//   'FileContent',
//   'Cron',
//   'ChargeType',
//   'List[Parameter]',
//   'List[Parameters]',
//   'DateTime',
//   'GMTZone',
//   'OOSServiceRole',
//   'RateControl',
//   'Tags',
//   'Targets',
//   'TimeTriggerWeekly',
//   'TimeZone',
//   'ALIYUN::ECS::RegionId',
//   'ALIYUN::ECS::ZoneId',
//   'ALIYUN::ECS::Instance::InstanceId',
//   'ALIYUN::ECS::Instance::Password',
//   'ALIYUN::RDS::Instance::InstanceId',
//   'ALIYUN::RDS::Engine::EngineId',
//   'ALIYUN::RDS::Engine::EngineVersion',
//   'ALIYUN::ECS::Disk::DataDiskCategory',
//   'ALIYUN::ECS::Disk::SystemDiskCategory',
//   'ALIYUN::ECS::Disk::DiskId',
//   'ALIYUN::ECS::VPC::VPCId',
//   'ALIYUN::ECS::VSwitch::VSwitchId',
//   'ALIYUN::ECS::Instance::InstanceType',
//   'ALIYUN::ECS::SecurityGroup::SecurityGroupId',
//   'ALIYUN::ECS::KeyPair::KeyPairName',
//   'ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId',
//   'ALIYUN::ECS::Command::CommandId',
//   'ALIYUN::ECS::Image::ImageId',
//   'ALIYUN::ECS::ResourceGroup::ResourceGroupId',
//   'ALIYUN::ECS::LaunchTemplate::LaunchTemplateId',
//   'ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion',
//   'ALIYUN::RDS::Instance::InstanceType',
//   'ALIYUN::SLB::Instance::InstanceType',
//   'ALIYUN::SLB::Certificate',
//   'ALIYUN::SLB::Instance::InstanceId',
//   'ALIYUN::SLB::ACL::ACLId',
//   'ALIYUN::OOS::Template::TemplateName',
//   'ALIYUN::OOS::Template::TemplateVersion',
//   'ALIYUN::OOS::Parameter::Value',
//   'ALIYUN::OOS::SecretParameter::Value',
//   'ALIYUN::OOS::Package::PackageName',
//   'ALIYUN::OOS::Package::PackageVersion',
//   'ALIYUN::OOS::Command::CommandContent',
//   'ALIYUN::OOS::Component::CleanUpInfo',
//   'ALIYUN::OOS::File::FileUrl',
//   'ALIYUN::OSS::Bucket::BucketName',
//   'ALIYUN::OSS::Object::ObjectName',
//   'ALIYUN::OOS::Component::TimerTrigger',
//   'ALIYUN::VPC::VirtualBorderRouter::RouteTableId',
//   'ALIYUN::VPC::NatGateway::NatGatewayId',
//   'ALIYUN::VPC::VSwitch::CidrBlock',
//   'ALIYUN::VPC::VPC::CidrBlock',
//   'ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId',
//   'ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId',
//   'ALIYUN::RAM::User',
//   'ALIYUN::RAM::Role',
//   'ALIYUN::CAS::Certificate::CertificateId',
//   'ALIYUN::Elasticsearch::Instance::InstanceType',
//   'ALIYUN::InfluxDB::Instance::InstanceType',
//   'ALIYUN::Redis::Instance::InstanceType',
//   'ALIYUN::EHPC::FileSystem::FileSystemId',
//   'ALIYUN::EHPC::FileSystem::MountTargetDomain',
//   'ALIYUN::EHPC::Cluster::ClusterId',
//   'ALIYUN::ALB::Instance::InstanceId',
//   'ALIYUN::ALB::ACL::ACLId',
//   'ALIYUN::ResourceManager::Folder',
//   'ALIYUN::ResourceManager::Account'
// ];
RosParameter.TYPE_ALLOWED_VALUES = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean',
    'ALIYUN::OOS::Parameter::Value', 'ALIYUN::OOS::SecretParameter::Value'];
(function (RosParameter) {
    class AssociationProperty {
    }
    AssociationProperty.PASSWORD = 'Password';
    AssociationProperty.TEXT_AREA = 'TextArea';
    AssociationProperty.JSON = 'Json';
    AssociationProperty.COMMA_DELIMITED_LIST = 'CommaDelimitedList';
    AssociationProperty.CODE = 'Code';
    AssociationProperty.FILE_CONTENT = 'FileContent';
    AssociationProperty.CRON = 'Cron';
    AssociationProperty.CHARGE_TYPE = 'ChargeType';
    AssociationProperty.LIST_PARAMETER = 'List[Parameter]';
    AssociationProperty.LIST_PARAMETERS = 'List[Parameters]';
    AssociationProperty.DATE_TIME = 'DateTime';
    AssociationProperty.GMT_ZONE = 'GMTZone';
    AssociationProperty.OOS_SERVICE_ROLE = 'OOSServiceRole';
    AssociationProperty.RATE_CONTROL = 'RateControl';
    AssociationProperty.TAGS = 'Tags';
    AssociationProperty.TARGETS = 'Targets';
    AssociationProperty.TIME_TRIGGER_WEEKLY = 'TimeTriggerWeekly';
    AssociationProperty.TIME_ZONE = 'TimeZone';
    AssociationProperty.ECS_REGION_ID = 'ALIYUN::ECS::RegionId';
    AssociationProperty.ECS_ZONE_ID = 'ALIYUN::ECS::ZoneId';
    AssociationProperty.ECS_INSTANCE_ID = 'ALIYUN::ECS::Instance::InstanceId';
    AssociationProperty.ECS_INSTANCE_PASSWORD = 'ALIYUN::ECS::Instance::Password';
    AssociationProperty.RDS_INSTANCE_ID = 'ALIYUN::RDS::Instance::InstanceId';
    AssociationProperty.RDS_ENGINE_ID = 'ALIYUN::RDS::Engine::EngineId';
    AssociationProperty.RDS_ENGINE_VERSION = 'ALIYUN::RDS::Engine::EngineVersion';
    AssociationProperty.ECS_DATA_DISK_CATEGORY = 'ALIYUN::ECS::Disk::DataDiskCategory';
    AssociationProperty.ECS_SYSTEM_DISK_CATEGORY = 'ALIYUN::ECS::Disk::SystemDiskCategory';
    AssociationProperty.ECS_DISK_ID = 'ALIYUN::ECS::Disk::DiskId';
    AssociationProperty.ECS_VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    AssociationProperty.ECS_VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
    AssociationProperty.ECS_INSTANCE_TYPE = 'ALIYUN::ECS::Instance::InstanceType';
    AssociationProperty.ECS_SECURITY_GROUP_ID = 'ALIYUN::ECS::SecurityGroup::SecurityGroupId';
    AssociationProperty.ECS_KEY_PAIR_NAME = 'ALIYUN::ECS::KeyPair::KeyPairName';
    AssociationProperty.ECS_AUTO_SNAPSHOT_POLICY_ID = 'ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId';
    AssociationProperty.ECS_COMMAND_ID = 'ALIYUN::ECS::Command::CommandId';
    AssociationProperty.ECS_IMAGE_ID = 'ALIYUN::ECS::Image::ImageId';
    AssociationProperty.ECS_RESOURCE_GROUP_ID = 'ALIYUN::ECS::ResourceGroup::ResourceGroupId';
    AssociationProperty.ECS_LAUNCH_TEMPLATE_ID = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateId';
    AssociationProperty.ECS_LAUNCH_TEMPLATE_VERSION = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion';
    AssociationProperty.RDS_INSTANCE_TYPE = 'ALIYUN::RDS::Instance::InstanceType';
    AssociationProperty.SLB_INSTANCE_TYPE = 'ALIYUN::SLB::Instance::InstanceType';
    AssociationProperty.SLB_CERTIFICATE = 'ALIYUN::SLB::Certificate';
    AssociationProperty.SLB_INSTANCE_ID = 'ALIYUN::SLB::Instance::InstanceId';
    AssociationProperty.SLB_ACL_ID = 'ALIYUN::SLB::ACL::ACLId';
    AssociationProperty.OOS_TEMPLATE_NAME = 'ALIYUN::OOS::Template::TemplateName';
    AssociationProperty.OOS_TEMPLATE_VERSION = 'ALIYUN::OOS::Template::TemplateVersion';
    AssociationProperty.OOS_PARAMETER_VALUE = 'ALIYUN::OOS::Parameter::Value';
    AssociationProperty.OOS_SECRET_PARAMETER_VALUE = 'ALIYUN::OOS::SecretParameter::Value';
    AssociationProperty.OOS_PACKAGE_NAME = 'ALIYUN::OOS::Package::PackageName';
    AssociationProperty.OOS_PACKAGE_VERSION = 'ALIYUN::OOS::Package::PackageVersion';
    AssociationProperty.OOS_COMMAND_CONTENT = 'ALIYUN::OOS::Command::CommandContent';
    AssociationProperty.OOS_COMPONENT_CLEAN_UP_INFO = 'ALIYUN::OOS::Component::CleanUpInfo';
    AssociationProperty.OOS_FILE_URL = 'ALIYUN::OOS::File::FileUrl';
    AssociationProperty.OSS_BUCKET_NAME = 'ALIYUN::OSS::Bucket::BucketName';
    AssociationProperty.OSS_OBJECT_NAME = 'ALIYUN::OSS::Object::ObjectName';
    AssociationProperty.OOS_COMPONENT_TIMER_TRIGGER = 'ALIYUN::OOS::Component::TimerTrigger';
    AssociationProperty.VPC_ROUTER_ROUTE_TABLE_ID = 'ALIYUN::VPC::VirtualBorderRouter::RouteTableId';
    AssociationProperty.VPC_NAT_GATEWAY_ID = 'ALIYUN::VPC::NatGateway::NatGatewayId';
    AssociationProperty.VSWITCH_CIDR_BLOCK = 'ALIYUN::VPC::VSwitch::CidrBlock';
    AssociationProperty.VPC_CIDR_BLOCK = 'ALIYUN::VPC::VPC::CidrBlock';
    AssociationProperty.ESS_SCALING_CONFIGURATION_ID = 'ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId';
    AssociationProperty.ESS_AUTO_SCALING_GROUP_ID = 'ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId';
    AssociationProperty.RAM_USER = 'ALIYUN::RAM::User';
    AssociationProperty.RAM_ROLE = 'ALIYUN::RAM::Role';
    AssociationProperty.CAS_CERTIFICATE_ID = 'ALIYUN::CAS::Certificate::CertificateId';
    AssociationProperty.ELASTICSEARCH_INSTANCE_TYPE = 'ALIYUN::Elasticsearch::Instance::InstanceType';
    AssociationProperty.INFLUX_DB_INSTANCE_TYPE = 'ALIYUN::InfluxDB::Instance::InstanceType';
    AssociationProperty.REDIS_INSTANCE_TYPE = 'ALIYUN::Redis::Instance::InstanceType';
    AssociationProperty.EHPC_FILE_SYSTEM_ID = 'ALIYUN::EHPC::FileSystem::FileSystemId';
    AssociationProperty.EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = 'ALIYUN::EHPC::FileSystem::MountTargetDomain';
    AssociationProperty.EHPC_CLUSTER_ID = 'ALIYUN::EHPC::Cluster::ClusterId';
    AssociationProperty.ALB_INSTANCE_ID = 'ALIYUN::ALB::Instance::InstanceId';
    AssociationProperty.ALB_ACL_ID = 'ALIYUN::ALB::ACL::ACLId';
    AssociationProperty.RESOURCE_MANAGER_FOLDER = 'ALIYUN::ResourceManager::Folder';
    AssociationProperty.RESOURCE_MANAGER_ACCOUNT = 'ALIYUN::ResourceManager::Account';
    AssociationProperty.ALB_LOAD_BALANCER_ID = 'ALIYUN::ALB::LoadBalancer::LoadBalancerId';
    AssociationProperty.CAS_CERTIFICATE = 'ALIYUN::CAS::Certificate';
    AssociationProperty.CMS_ALARM_RULE = 'ALIYUN::CMS::Alarm::Rule';
    AssociationProperty.CMS_ALARM_SILENCE_TIME = 'ALIYUN::CMS::Alarm::SilenceTime';
    AssociationProperty.CMS_ALARM_TRIGGER_RESOURCES = 'ALIYUN::CMS::Alarm::TriggerResources';
    AssociationProperty.CMS_EVENT_FILTER_RULE = 'ALIYUN::CMS::Event::EventFilterRule';
    AssociationProperty.CMS_EVENT_LEVEL = 'ALIYUN::CMS::Event::EventLevel';
    AssociationProperty.CMS_EVENT_NAME = 'ALIYUN::CMS::Event::EventName';
    AssociationProperty.CMS_PRODUCT_TYPE = 'ALIYUN::CMS::Product::ProductType';
    AssociationProperty.CS_CLUSTER_ID = 'ALIYUN::CS::Cluster::ClusterId';
    AssociationProperty.CS_CLUSTER_NODE_POOL = 'ALIYUN::CS::Cluster::ClusterNodePool';
    AssociationProperty.COMPUTER_NEST_SERVICE_ID = 'ALIYUN::ComputeNest::Service::ServiceId';
    AssociationProperty.COMPUTER_NEST_SERVICE_INSTANCE_ID = 'ALIYUN::ComputeNest::ServiceInstance::ServiceInstanceId';
    AssociationProperty.COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = 'ALIYUN::ComputeNestSupplier::Service::ServiceVersion';
    AssociationProperty.ECS_INSTANCE = 'ALIYUN::ECS::Instance';
    AssociationProperty.ECS_INSTANCE_ATTRIBUTE_SELECTOR = 'ALIYUN::ECS::Instance::AttributeSelector';
    AssociationProperty.ECS_INSTANCE_IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    AssociationProperty.ECS_INSTANCE_PROPERTY_EDITOR = 'ALIYUN::ECS::Instance::InstancePropertyEditor';
    AssociationProperty.ECS_INSTANCE_MAX_BANDWIDTH_IN = 'ALIYUN::ECS::Instance::MaxBandwidthIn';
    AssociationProperty.ECS_INSTANCE_RENEW_PERIOD = 'ALIYUN::ECS::Instance::RenewPeriod';
    AssociationProperty.ECS_INSTANCE_STOP_MODE = 'ALIYUN::ECS::Instance::StopMode';
    AssociationProperty.ECS_INSTANCE_ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    AssociationProperty.ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = 'ALIYUN::ECS::InstanceType::AvailableInstanceType';
    AssociationProperty.ECS_MANAGED_INSTANCE_ID = 'ALIYUN::ECS::ManagedInstance::InstanceId';
    AssociationProperty.ECS_RAM_ROLE = 'ALIYUN::ECS::RAM::Role';
    AssociationProperty.ECS_TARGET_REGION_IDS = 'ALIYUN::ECS::RegionId::TargetRegionIds';
    AssociationProperty.ECS_SNAPSHOT_ID = 'ALIYUN::ECS::Snapshot::SnapshotId';
    AssociationProperty.ECS_TAG = 'ALIYUN::ECS::TAG';
    AssociationProperty.ECS_VSWITCH = 'ALIYUN::ECS::VSwitch';
    AssociationProperty.MONGODB_INSTANCE_TYPE = 'ALIYUN::MongoDB::Instance::InstanceType';
    AssociationProperty.NEST_SERVICE_ID = 'ALIYUN::NEST::Service::ServiceId';
    AssociationProperty.NEST_SERVICE_VERSION = 'ALIYUN::NEST::Service::ServiceVersion';
    AssociationProperty.NLB_INSTANCE_ID = 'ALIYUN::NLB::Instance::InstanceId';
    AssociationProperty.NLB_LOAD_BALANCER_ID = 'ALIYUN::NLB::LoadBalancer::LoadBalancerId';
    AssociationProperty.NLB_ZONE_ID = 'ALIYUN::NLB::Zone::ZoneId';
    AssociationProperty.OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = 'ALIYUN::OOS::Component::BandwidthUpgradeDurationHour';
    AssociationProperty.OOS_COMPONENT_ON_OFF_TIME_LINE = 'ALIYUN::OOS::Component::OnOffTimeLine';
    AssociationProperty.OOS_COMPONENT_ON_OFF_TIMES = 'ALIYUN::OOS::Component::OnOffTimes';
    AssociationProperty.OOS_COMPONENT_OPERATION_TYPE = 'ALIYUN::OOS::Component::OperationType';
    AssociationProperty.OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = 'ALIYUN::OOS::Component::PrivateTemplateName';
    AssociationProperty.OOS_COMPONENT_SECTION_TYPE = 'ALIYUN::OOS::Component::SectionType';
    AssociationProperty.OOS_COMPONENT_TARGET_IMAGE_NAME = 'ALIYUN::OOS::Component::TargetImageName';
    AssociationProperty.OOS_COMPONENT_TRANSIT_INSTANCE = 'ALIYUN::OOS::Component::TransitInstance';
    AssociationProperty.OSS_BUCKET_OBJECT = 'ALIYUN::OSS::Bucket::Object';
    AssociationProperty.POLARDB_DB_CLUSTER_ID = 'ALIYUN::POLARDB::DBCluster::DBClusterId';
    AssociationProperty.RDS_INSTANCE_ACCOUNT_PASSWORD = 'ALIYUN::RDS::Instance::AccountPassword';
    AssociationProperty.ROS_TYPE_META_LIST = 'ALIYUN::ROS::Type::MetaList';
    AssociationProperty.REDIS_INSTANCE_ID = 'ALIYUN::Redis::Instance::InstanceId';
    AssociationProperty.SLB_LOAD_BALANCER_ID = 'ALIYUN::SLB::LoadBalancer::LoadBalancerId';
    AssociationProperty.SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = 'ALIYUN::ServiceCatalog::LaunchOption::PortfolioId';
    AssociationProperty.SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = 'ALIYUN::ServiceCatalog::ProductVersion::ProductVersionId';
    AssociationProperty.USER_ACCOUNT_IDS = 'ALIYUN::User::Account::AccountIds';
    AssociationProperty.VPC_VSWITCH_ID = 'ALIYUN::VPC::VSwitch::VSwitchId';
    AssociationProperty.VPC_ZONE_ID = 'ALIYUN::VPC::Zone::ZoneId';
    AssociationProperty.ALERT = 'Alert';
    AssociationProperty.ARRAY_ITEMS = 'ArrayItems';
    AssociationProperty.ARRAY_TABLE = 'ArrayTable';
    AssociationProperty.BOOLEAN = 'Boolean';
    AssociationProperty.CASCADER = 'Cascader';
    AssociationProperty.DATE_PICKER = 'DatePicker';
    AssociationProperty.EDITABLE = 'Editable';
    AssociationProperty.EDITABLE_POPOVER = 'EditablePopover';
    AssociationProperty.FORM_GRID = 'FormGrid';
    AssociationProperty.FORM_GROUP_COLLAPSE_PAN = 'FormGroupCollapsePan';
    AssociationProperty.FORM_ITEM = 'FormItem';
    AssociationProperty.FORM_ITEM_GROUP = 'FormItemGroup';
    AssociationProperty.FORM_LAYOUT = 'FormLayout';
    AssociationProperty.INPUT = 'Input';
    AssociationProperty.INTEGER = 'Integer';
    AssociationProperty.LIST = 'List';
    AssociationProperty.NUMBER = 'Number';
    AssociationProperty.NUMBER_PICKER = 'NumberPicker';
    AssociationProperty.PARSE_TEXT = 'ParseText';
    AssociationProperty.PAY_PERIOD = 'PayPeriod';
    AssociationProperty.PAY_PERIOD_UNIT = 'PayPeriodUnit';
    AssociationProperty.RADIO = 'Radio';
    AssociationProperty.READ_ONLY = 'ReadOnly';
    AssociationProperty.READ_ONLY_ITEM = 'ReadOnlyItem';
    AssociationProperty.REGION_ID = 'RegionId';
    AssociationProperty.SELECT = 'Select';
    AssociationProperty.STRING = 'String';
    AssociationProperty.SWITCH = 'Switch';
    AssociationProperty.TEMPLATE_NAME = 'TemplateName';
    AssociationProperty.TEMPLATE_PARAMETER = 'TemplateParameter';
    AssociationProperty.TIME = 'Time';
    AssociationProperty.TIME_TRIGGER = 'TimeTrigger';
    AssociationProperty.ZONE_ID = 'ZoneId';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRTNDLDJEQUF1RDtBQUV2RCxtQ0FBZ0M7QUFFaEMsSUFBWSxnQkFRWDtBQVJELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLGlDQUFhLENBQUE7SUFDYix1Q0FBbUIsQ0FBQTtJQUNuQiwrREFBMkMsQ0FBQTtJQUMzQyxtRUFBK0MsQ0FBQTtJQUMvQyxnRkFBNEQsQ0FBQTtBQUM5RCxDQUFDLEVBUlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFRM0I7QUFzQkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQWEsU0FBUSx3QkFBVTtJQW9GMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBbUIsUUFBMkIsRUFBRTtRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRHdDLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBRXRGLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLO1FBQ2QsT0FBTyw0QkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxhQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZ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QUM7SUFDdkIsMEJBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsMEJBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsMEJBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsaUNBQWEsR0FBRyxjQUFjLENBQUM7SUFDL0Isc0NBQWtCLEdBQUcsbUJBQW1CLENBQUM7SUFDekMsd0JBQUksR0FBRyxNQUFNLENBQUM7SUFDZCxnQ0FBWSxHQUFHLGFBQWEsQ0FBQztJQUM3QiwyQkFBTyxHQUFHLFFBQVEsQ0FBQztJQWxLL0IsZ0NBQW1CLHNCQW1LL0IsQ0FBQTtBQUNILENBQUMsRUFyS2dCLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBcUs1QjtBQUVEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsSUFBWTtJQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFDM0IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCx1Q0FBNEM7QUFDNUMsaUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gJy4vcm9zLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IFJvc1JlZmVyZW5jZSB9IGZyb20gJy4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlJztcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tICcuL3Jlc29sdmFibGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGVudW0gUm9zUGFyYW1ldGVyVHlwZSB7XG4gIFNUUklORyA9ICdTdHJpbmcnLFxuICBOVU1CRVIgPSAnTnVtYmVyJyxcbiAgSlNPTiA9ICdKc29uJyxcbiAgQk9PTEVBTiA9ICdCb29sZWFuJyxcbiAgQ09NTUFfREVMSU1JVEVEX0xJU1QgPSAnQ29tbWFEZWxpbWl0ZWRMaXN0JyxcbiAgT09TX1BBUkFNRVRFUiA9ICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZScsXG4gIE9PU19TRUNSRVRfUEFSQU1FVEVSID0gJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3NQYXJhbWV0ZXJQcm9wcyB7XG4gIHJlYWRvbmx5IHR5cGU/OiBSb3NQYXJhbWV0ZXJUeXBlO1xuICByZWFkb25seSBkZWZhdWx0VmFsdWU/OiBhbnk7XG4gIHJlYWRvbmx5IGFsbG93ZWRQYXR0ZXJuPzogc3RyaW5nO1xuICByZWFkb25seSBhbGxvd2VkVmFsdWVzPzogYW55W107XG4gIHJlYWRvbmx5IGNvbnN0cmFpbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICByZWFkb25seSBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1heFZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1pblZhbHVlPzogbnVtYmVyO1xuICByZWFkb25seSBub0VjaG8/OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGxhYmVsPzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5Pzogc3RyaW5nO1xuICByZWFkb25seSBhc3NvY2lhdGlvblByb3BlcnR5TWV0YWRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgcmVhZG9ubHkgY29uZmlybT86IGJvb2xlYW47XG4gIHJlYWRvbmx5IHRleHRBcmVhPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIFJPUyBwYXJhbWV0ZXIuXG4gKlxuICogUGFyYW1ldGVycyBlbmFibGUgeW91IHRvIGlucHV0IGN1c3RvbSB2YWx1ZXMgdG8geW91ciB0ZW1wbGF0ZSBlYWNoIHRpbWUgeW91IGNyZWF0ZSBvclxuICogdXBkYXRlIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQYXJhbWV0ZXIgZXh0ZW5kcyBSb3NFbGVtZW50IHtcbiAgLy8gcHVibGljIHN0YXRpYyByZWFkb25seSBBU1NPQ0lBVElPTl9QUk9QRVJUWV9BTExPV0VEX1ZBTFVFUzogc3RyaW5nW10gPSBbJ1Bhc3N3b3JkJyxcbiAgLy8gICAnVGV4dEFyZWEnLFxuICAvLyAgICdKc29uJyxcbiAgLy8gICAnQ29tbWFEZWxpbWl0ZWRMaXN0JyxcbiAgLy8gICAnQ29kZScsXG4gIC8vICAgJ0ZpbGVDb250ZW50JyxcbiAgLy8gICAnQ3JvbicsXG4gIC8vICAgJ0NoYXJnZVR5cGUnLFxuICAvLyAgICdMaXN0W1BhcmFtZXRlcl0nLFxuICAvLyAgICdMaXN0W1BhcmFtZXRlcnNdJyxcbiAgLy8gICAnRGF0ZVRpbWUnLFxuICAvLyAgICdHTVRab25lJyxcbiAgLy8gICAnT09TU2VydmljZVJvbGUnLFxuICAvLyAgICdSYXRlQ29udHJvbCcsXG4gIC8vICAgJ1RhZ3MnLFxuICAvLyAgICdUYXJnZXRzJyxcbiAgLy8gICAnVGltZVRyaWdnZXJXZWVrbHknLFxuICAvLyAgICdUaW1lWm9uZScsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpSZWdpb25JZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpab25lSWQnLFxuICAvLyAgICdBTElZVU46OkVDUzo6SW5zdGFuY2U6Okluc3RhbmNlSWQnLFxuICAvLyAgICdBTElZVU46OkVDUzo6SW5zdGFuY2U6OlBhc3N3b3JkJyxcbiAgLy8gICAnQUxJWVVOOjpSRFM6Okluc3RhbmNlOjpJbnN0YW5jZUlkJyxcbiAgLy8gICAnQUxJWVVOOjpSRFM6OkVuZ2luZTo6RW5naW5lSWQnLFxuICAvLyAgICdBTElZVU46OlJEUzo6RW5naW5lOjpFbmdpbmVWZXJzaW9uJyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OkRpc2s6OkRhdGFEaXNrQ2F0ZWdvcnknLFxuICAvLyAgICdBTElZVU46OkVDUzo6RGlzazo6U3lzdGVtRGlza0NhdGVnb3J5JyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OkRpc2s6OkRpc2tJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpWUEM6OlZQQ0lkJyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OlZTd2l0Y2g6OlZTd2l0Y2hJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlNlY3VyaXR5R3JvdXBJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpLZXlQYWlyOjpLZXlQYWlyTmFtZScsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpTbmFwc2hvdDo6QXV0b1NuYXBzaG90UG9saWN5SWQnLFxuICAvLyAgICdBTElZVU46OkVDUzo6Q29tbWFuZDo6Q29tbWFuZElkJyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OkltYWdlOjpJbWFnZUlkJyxcbiAgLy8gICAnQUxJWVVOOjpFQ1M6OlJlc291cmNlR3JvdXA6OlJlc291cmNlR3JvdXBJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpMYXVuY2hUZW1wbGF0ZTo6TGF1bmNoVGVtcGxhdGVJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RUNTOjpMYXVuY2hUZW1wbGF0ZTo6TGF1bmNoVGVtcGxhdGVWZXJzaW9uJyxcbiAgLy8gICAnQUxJWVVOOjpSRFM6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnLFxuICAvLyAgICdBTElZVU46OlNMQjo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZScsXG4gIC8vICAgJ0FMSVlVTjo6U0xCOjpDZXJ0aWZpY2F0ZScsXG4gIC8vICAgJ0FMSVlVTjo6U0xCOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCcsXG4gIC8vICAgJ0FMSVlVTjo6U0xCOjpBQ0w6OkFDTElkJyxcbiAgLy8gICAnQUxJWVVOOjpPT1M6OlRlbXBsYXRlOjpUZW1wbGF0ZU5hbWUnLFxuICAvLyAgICdBTElZVU46Ok9PUzo6VGVtcGxhdGU6OlRlbXBsYXRlVmVyc2lvbicsXG4gIC8vICAgJ0FMSVlVTjo6T09TOjpQYXJhbWV0ZXI6OlZhbHVlJyxcbiAgLy8gICAnQUxJWVVOOjpPT1M6OlNlY3JldFBhcmFtZXRlcjo6VmFsdWUnLFxuICAvLyAgICdBTElZVU46Ok9PUzo6UGFja2FnZTo6UGFja2FnZU5hbWUnLFxuICAvLyAgICdBTElZVU46Ok9PUzo6UGFja2FnZTo6UGFja2FnZVZlcnNpb24nLFxuICAvLyAgICdBTElZVU46Ok9PUzo6Q29tbWFuZDo6Q29tbWFuZENvbnRlbnQnLFxuICAvLyAgICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpDbGVhblVwSW5mbycsXG4gIC8vICAgJ0FMSVlVTjo6T09TOjpGaWxlOjpGaWxlVXJsJyxcbiAgLy8gICAnQUxJWVVOOjpPU1M6OkJ1Y2tldDo6QnVja2V0TmFtZScsXG4gIC8vICAgJ0FMSVlVTjo6T1NTOjpPYmplY3Q6Ok9iamVjdE5hbWUnLFxuICAvLyAgICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpUaW1lclRyaWdnZXInLFxuICAvLyAgICdBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcjo6Um91dGVUYWJsZUlkJyxcbiAgLy8gICAnQUxJWVVOOjpWUEM6Ok5hdEdhdGV3YXk6Ok5hdEdhdGV3YXlJZCcsXG4gIC8vICAgJ0FMSVlVTjo6VlBDOjpWU3dpdGNoOjpDaWRyQmxvY2snLFxuICAvLyAgICdBTElZVU46OlZQQzo6VlBDOjpDaWRyQmxvY2snLFxuICAvLyAgICdBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb246OlNjYWxpbmdDb25maWd1cmF0aW9uSWQnLFxuICAvLyAgICdBTElZVU46OkVTUzo6QXV0b1NjYWxpbmdHcm91cDo6QXV0b1NjYWxpbmdHcm91cElkJyxcbiAgLy8gICAnQUxJWVVOOjpSQU06OlVzZXInLFxuICAvLyAgICdBTElZVU46OlJBTTo6Um9sZScsXG4gIC8vICAgJ0FMSVlVTjo6Q0FTOjpDZXJ0aWZpY2F0ZTo6Q2VydGlmaWNhdGVJZCcsXG4gIC8vICAgJ0FMSVlVTjo6RWxhc3RpY3NlYXJjaDo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZScsXG4gIC8vICAgJ0FMSVlVTjo6SW5mbHV4REI6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnLFxuICAvLyAgICdBTElZVU46OlJlZGlzOjpJbnN0YW5jZTo6SW5zdGFuY2VUeXBlJyxcbiAgLy8gICAnQUxJWVVOOjpFSFBDOjpGaWxlU3lzdGVtOjpGaWxlU3lzdGVtSWQnLFxuICAvLyAgICdBTElZVU46OkVIUEM6OkZpbGVTeXN0ZW06Ok1vdW50VGFyZ2V0RG9tYWluJyxcbiAgLy8gICAnQUxJWVVOOjpFSFBDOjpDbHVzdGVyOjpDbHVzdGVySWQnLFxuICAvLyAgICdBTElZVU46OkFMQjo6SW5zdGFuY2U6Okluc3RhbmNlSWQnLFxuICAvLyAgICdBTElZVU46OkFMQjo6QUNMOjpBQ0xJZCcsXG4gIC8vICAgJ0FMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXInLFxuICAvLyAgICdBTElZVU46OlJlc291cmNlTWFuYWdlcjo6QWNjb3VudCdcbiAgLy8gXTtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRZUEVfQUxMT1dFRF9WQUxVRVM6IHN0cmluZ1tdID0gWydTdHJpbmcnLCAnTnVtYmVyJywgJ0NvbW1hRGVsaW1pdGVkTGlzdCcsICdKc29uJywgJ0Jvb2xlYW4nLFxuICAgICdBTElZVU46Ok9PUzo6UGFyYW1ldGVyOjpWYWx1ZScsICdBTElZVU46Ok9PUzo6U2VjcmV0UGFyYW1ldGVyOjpWYWx1ZSddO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm9zUGFyYW1ldGVyVHlwZTtcbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IFJvc1BhcmFtZXRlclByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlIHx8IFJvc1BhcmFtZXRlclR5cGUuU1RSSU5HO1xuICAgIHRoaXMudmFsaWRhdGVQcm9wZXJ0aWVzKHByb3BzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhpcyBwYXJhbWV0ZXIgaXMgY29uZmlndXJlZCB3aXRoIFwiTm9FY2hvXCIgZW5hYmxlZC5cbiAgICovXG4gIHB1YmxpYyBnZXQgbm9FY2hvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMucHJvcHMubm9FY2hvO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUgYXMgYSBUb2tlblxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFJvc1JlZmVyZW5jZS5mb3IodGhpcywgJ1JlZicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzU3RyaW5nVHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIHN0cmluZyB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHZhbHVlLCBpZiBpdCByZXByZXNlbnRzIGEgc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzQm9vbGVhbigpOiBhbnkge1xuICAgIGlmICghaXNTdHJpbmdUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIHR5cGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNBbnkoKTogYW55IHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSwgaWYgaXQgcmVwcmVzZW50cyBhIHN0cmluZyBsaXN0LlxuICAgKi9cbiAgcHVibGljIGdldCB2YWx1ZUFzTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgaWYgKCFpc0xpc3RUeXBlKHRoaXMudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHR5cGUgKCR7dGhpcy50eXBlfSkgaXMgbm90IGEgc3RyaW5nIGxpc3QgdHlwZWApO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW4uYXNMaXN0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUsIGlmIGl0IHJlcHJlc2VudHMgYSBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlQXNOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBpZiAoIWlzTnVtYmVyVHlwZSh0aGlzLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciB0eXBlICgke3RoaXMudHlwZX0pIGlzIG5vdCBhIG51bWJlciB0eXBlYCk7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5hc051bWJlcih0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfdG9Sb3NUZW1wbGF0ZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBQYXJhbWV0ZXJzOiB7XG4gICAgICAgIFt0aGlzLmlkXToge1xuICAgICAgICAgIFR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICBEZWZhdWx0OiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICBBbGxvd2VkUGF0dGVybjogdGhpcy5wcm9wcy5hbGxvd2VkUGF0dGVybixcbiAgICAgICAgICBBbGxvd2VkVmFsdWVzOiB0aGlzLnByb3BzLmFsbG93ZWRWYWx1ZXMsXG4gICAgICAgICAgQ29uc3RyYWludERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmNvbnN0cmFpbnREZXNjcmlwdGlvbixcbiAgICAgICAgICBEZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBNYXhMZW5ndGg6IHRoaXMucHJvcHMubWF4TGVuZ3RoLFxuICAgICAgICAgIE1heFZhbHVlOiB0aGlzLnByb3BzLm1heFZhbHVlLFxuICAgICAgICAgIE1pbkxlbmd0aDogdGhpcy5wcm9wcy5taW5MZW5ndGgsXG4gICAgICAgICAgTWluVmFsdWU6IHRoaXMucHJvcHMubWluVmFsdWUsXG4gICAgICAgICAgTm9FY2hvOiB0aGlzLnByb3BzLm5vRWNobyxcbiAgICAgICAgICBMYWJlbDogdGhpcy5wcm9wcy5sYWJlbCxcbiAgICAgICAgICBBc3NvY2lhdGlvblByb3BlcnR5OiB0aGlzLnByb3BzLmFzc29jaWF0aW9uUHJvcGVydHksXG4gICAgICAgICAgQXNzb2NpYXRpb25Qcm9wZXJ0eU1ldGFkYXRhOiB0aGlzLnByb3BzLmFzc29jaWF0aW9uUHJvcGVydHlNZXRhZGF0YSxcbiAgICAgICAgICBDb25maXJtOiB0aGlzLnByb3BzLmNvbmZpcm0sXG4gICAgICAgICAgVGV4dEFyZWE6IHRoaXMucHJvcHMudGV4dEFyZWEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZShfY29udGV4dDogSVJlc29sdmVDb250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZVByb3BlcnRpZXMocHJvcHM6IFJvc1BhcmFtZXRlclByb3BzID0ge30pOiB2b2lkIHtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzIGlzIGluIHBhcmFtZXRlcihwcm9wcylcbiAgICByZXF1aXJlUHJvcGVydHkocHJvcHMsICd0eXBlJywgdGhpcyk7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgYXNzb2NpYXRpb25Qcm9wZXJ0eSBpcyBhbGxvd2VkIHZhbHVlXG4gICAgLy8gaXNBbGxvd2VkVmFsdWUocHJvcHMsICdhc3NvY2lhdGlvblByb3BlcnR5JywgdGhpcywgUm9zUGFyYW1ldGVyLkFTU09DSUFUSU9OX1BST1BFUlRZX0FMTE9XRURfVkFMVUVTKTtcbiAgICAvLyBjaGVjayB0aGUgdHlwZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBhbGxvd2VkXG4gICAgaXNBbGxvd2VkVmFsdWUocHJvcHMsICd0eXBlJywgdGhpcywgUm9zUGFyYW1ldGVyLlRZUEVfQUxMT1dFRF9WQUxVRVMpO1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG1heCBsZW5ndGggb2Ygc3RyaW5nIGlzIGxhcmdlciB0aGFuIHRoZSBtaW4gbGVuZ3RoXG4gICAgaWYgKHByb3BzLm1heExlbmd0aCAmJiBwcm9wcy5taW5MZW5ndGggJiYgcHJvcHMubWF4TGVuZ3RoIDwgcHJvcHMubWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXggbGVuZ3RoIG9mIHN0cmluZyBvZiB0aGUgcGFyYW1ldGVyICR7dGhpcy50b1N0cmluZygpfSBpcyBsb3dlciB0aGFuIGl0cyBtaW4gbGVuZ3RoLmApO1xuICAgIH1cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBtYXggdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbiB2YWx1ZVxuICAgIGlmIChwcm9wcy5tYXhWYWx1ZSAmJiBwcm9wcy5taW5WYWx1ZSAmJiBwcm9wcy5tYXhWYWx1ZSA8IHByb3BzLm1pblZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXggdmFsdWUgb2YgdGhlIHBhcmFtZXRlciAke3RoaXMudG9TdHJpbmcoKX0gaXMgbG93ZXIgdGhhbiBpdHMgbWluIHZhbHVlLmApO1xuICAgIH1cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBcImNvbmZpcm1cIiBwcm9wZXJ0eSBpcyBhbGxvd2VkIHRvIGJlIHNldCBcInRydWVcIlxuICAgIGlmIChwcm9wcy5jb25maXJtICYmIChwcm9wcy50eXBlICE9PSAnU3RyaW5nJyB8fCAhcHJvcHMubm9FY2hvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIHByb3BlcnR5IFwiY29uZmlybVwiIG9mIHRoZSBwYXJhbWV0ZXIgJHt0aGlzLnRvU3RyaW5nKCl9IGNvdWxkIGJlIHRydWUgb25seSBpZiB0eXBlIGlzIFwiU3RyaW5nXCIgYW5kIFwibm9FY2hvXCIgaXMgdHJ1ZS5gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NQYXJhbWV0ZXIge1xuICBleHBvcnQgY2xhc3MgQXNzb2NpYXRpb25Qcm9wZXJ0eSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQQVNTV09SRCA9ICdQYXNzd29yZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhUX0FSRUEgPSAnVGV4dEFyZWEnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSlNPTiA9ICdKc29uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTU1BX0RFTElNSVRFRF9MSVNUID0gJ0NvbW1hRGVsaW1pdGVkTGlzdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0RFID0gJ0NvZGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRklMRV9DT05URU5UID0gJ0ZpbGVDb250ZW50JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENST04gPSAnQ3Jvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDSEFSR0VfVFlQRSA9ICdDaGFyZ2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExJU1RfUEFSQU1FVEVSID0gJ0xpc3RbUGFyYW1ldGVyXSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMSVNUX1BBUkFNRVRFUlMgPSAnTGlzdFtQYXJhbWV0ZXJzXSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQVRFX1RJTUUgPSAnRGF0ZVRpbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR01UX1pPTkUgPSAnR01UWm9uZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfU0VSVklDRV9ST0xFID0gJ09PU1NlcnZpY2VSb2xlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJBVEVfQ09OVFJPTCA9ICdSYXRlQ29udHJvbCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUdTID0gJ1RhZ3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUUyA9ICdUYXJnZXRzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfVFJJR0dFUl9XRUVLTFkgPSAnVGltZVRyaWdnZXJXZWVrbHknO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVElNRV9aT05FID0gJ1RpbWVab25lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19SRUdJT05fSUQgPSAnQUxJWVVOOjpFQ1M6OlJlZ2lvbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19aT05FX0lEID0gJ0FMSVlVTjo6RUNTOjpab25lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfUEFTU1dPUkQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpQYXNzd29yZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRFNfSU5TVEFOQ0VfSUQgPSAnQUxJWVVOOjpSRFM6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJEU19FTkdJTkVfSUQgPSAnQUxJWVVOOjpSRFM6OkVuZ2luZTo6RW5naW5lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkRTX0VOR0lORV9WRVJTSU9OID0gJ0FMSVlVTjo6UkRTOjpFbmdpbmU6OkVuZ2luZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0RBVEFfRElTS19DQVRFR09SWSA9ICdBTElZVU46OkVDUzo6RGlzazo6RGF0YURpc2tDYXRlZ29yeSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU1lTVEVNX0RJU0tfQ0FURUdPUlkgPSAnQUxJWVVOOjpFQ1M6OkRpc2s6OlN5c3RlbURpc2tDYXRlZ29yeSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfRElTS19JRCA9ICdBTElZVU46OkVDUzo6RGlzazo6RGlza0lkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19WUENfSUQgPSAnQUxJWVVOOjpFQ1M6OlZQQzo6VlBDSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1ZTV0lUQ0hfSUQgPSAnQUxJWVVOOjpFQ1M6OlZTd2l0Y2g6OlZTd2l0Y2hJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfU0VDVVJJVFlfR1JPVVBfSUQgPSAnQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXA6OlNlY3VyaXR5R3JvdXBJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfS0VZX1BBSVJfTkFNRSA9ICdBTElZVU46OkVDUzo6S2V5UGFpcjo6S2V5UGFpck5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0FVVE9fU05BUFNIT1RfUE9MSUNZX0lEID0gJ0FMSVlVTjo6RUNTOjpTbmFwc2hvdDo6QXV0b1NuYXBzaG90UG9saWN5SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0NPTU1BTkRfSUQgPSAnQUxJWVVOOjpFQ1M6OkNvbW1hbmQ6OkNvbW1hbmRJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU1BR0VfSUQgPSAnQUxJWVVOOjpFQ1M6OkltYWdlOjpJbWFnZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19SRVNPVVJDRV9HUk9VUF9JRCA9ICdBTElZVU46OkVDUzo6UmVzb3VyY2VHcm91cDo6UmVzb3VyY2VHcm91cElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19MQVVOQ0hfVEVNUExBVEVfSUQgPSAnQUxJWVVOOjpFQ1M6OkxhdW5jaFRlbXBsYXRlOjpMYXVuY2hUZW1wbGF0ZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19MQVVOQ0hfVEVNUExBVEVfVkVSU0lPTiA9ICdBTElZVU46OkVDUzo6TGF1bmNoVGVtcGxhdGU6OkxhdW5jaFRlbXBsYXRlVmVyc2lvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRFNfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OlJEUzo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OlNMQjo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTEJfQ0VSVElGSUNBVEUgPSAnQUxJWVVOOjpTTEI6OkNlcnRpZmljYXRlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9JTlNUQU5DRV9JRCA9ICdBTElZVU46OlNMQjo6SW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0xCX0FDTF9JRCA9ICdBTElZVU46OlNMQjo6QUNMOjpBQ0xJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfVEVNUExBVEVfTkFNRSA9ICdBTElZVU46Ok9PUzo6VGVtcGxhdGU6OlRlbXBsYXRlTmFtZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfVEVNUExBVEVfVkVSU0lPTiA9ICdBTElZVU46Ok9PUzo6VGVtcGxhdGU6OlRlbXBsYXRlVmVyc2lvbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfUEFSQU1FVEVSX1ZBTFVFID0gJ0FMSVlVTjo6T09TOjpQYXJhbWV0ZXI6OlZhbHVlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19TRUNSRVRfUEFSQU1FVEVSX1ZBTFVFID0gJ0FMSVlVTjo6T09TOjpTZWNyZXRQYXJhbWV0ZXI6OlZhbHVlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19QQUNLQUdFX05BTUUgPSAnQUxJWVVOOjpPT1M6OlBhY2thZ2U6OlBhY2thZ2VOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19QQUNLQUdFX1ZFUlNJT04gPSAnQUxJWVVOOjpPT1M6OlBhY2thZ2U6OlBhY2thZ2VWZXJzaW9uJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01NQU5EX0NPTlRFTlQgPSAnQUxJWVVOOjpPT1M6OkNvbW1hbmQ6OkNvbW1hbmRDb250ZW50JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfQ0xFQU5fVVBfSU5GTyA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpDbGVhblVwSW5mbyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPT1NfRklMRV9VUkwgPSAnQUxJWVVOOjpPT1M6OkZpbGU6OkZpbGVVcmwnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1NTX0JVQ0tFVF9OQU1FID0gJ0FMSVlVTjo6T1NTOjpCdWNrZXQ6OkJ1Y2tldE5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1NTX09CSkVDVF9OQU1FID0gJ0FMSVlVTjo6T1NTOjpPYmplY3Q6Ok9iamVjdE5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9USU1FUl9UUklHR0VSID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlRpbWVyVHJpZ2dlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfUk9VVEVSX1JPVVRFX1RBQkxFX0lEID0gJ0FMSVlVTjo6VlBDOjpWaXJ0dWFsQm9yZGVyUm91dGVyOjpSb3V0ZVRhYmxlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX05BVF9HQVRFV0FZX0lEID0gJ0FMSVlVTjo6VlBDOjpOYXRHYXRld2F5OjpOYXRHYXRld2F5SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlNXSVRDSF9DSURSX0JMT0NLID0gJ0FMSVlVTjo6VlBDOjpWU3dpdGNoOjpDaWRyQmxvY2snO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX0NJRFJfQkxPQ0sgPSAnQUxJWVVOOjpWUEM6OlZQQzo6Q2lkckJsb2NrJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTU19TQ0FMSU5HX0NPTkZJR1VSQVRJT05fSUQgPSAnQUxJWVVOOjpFU1M6OlNjYWxpbmdDb25maWd1cmF0aW9uOjpTY2FsaW5nQ29uZmlndXJhdGlvbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVTU19BVVRPX1NDQUxJTkdfR1JPVVBfSUQgPSAnQUxJWVVOOjpFU1M6OkF1dG9TY2FsaW5nR3JvdXA6OkF1dG9TY2FsaW5nR3JvdXBJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fVVNFUiA9ICdBTElZVU46OlJBTTo6VXNlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSQU1fUk9MRSA9ICdBTElZVU46OlJBTTo6Um9sZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDQVNfQ0VSVElGSUNBVEVfSUQgPSAnQUxJWVVOOjpDQVM6OkNlcnRpZmljYXRlOjpDZXJ0aWZpY2F0ZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVMQVNUSUNTRUFSQ0hfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46OkVsYXN0aWNzZWFyY2g6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5GTFVYX0RCX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpJbmZsdXhEQjo6SW5zdGFuY2U6Okluc3RhbmNlVHlwZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRURJU19JTlNUQU5DRV9UWVBFID0gJ0FMSVlVTjo6UmVkaXM6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUhQQ19GSUxFX1NZU1RFTV9JRCA9ICdBTElZVU46OkVIUEM6OkZpbGVTeXN0ZW06OkZpbGVTeXN0ZW1JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFSFBDX0ZJTEVfU1lTVEVNX01PVU5UX1RBUkdFVF9ET01BSU4gPSAnQUxJWVVOOjpFSFBDOjpGaWxlU3lzdGVtOjpNb3VudFRhcmdldERvbWFpbic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFSFBDX0NMVVNURVJfSUQgPSAnQUxJWVVOOjpFSFBDOjpDbHVzdGVyOjpDbHVzdGVySWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUxCX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6QUxCOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBTEJfQUNMX0lEID0gJ0FMSVlVTjo6QUxCOjpBQ0w6OkFDTElkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFU09VUkNFX01BTkFHRVJfRk9MREVSID0gJ0FMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTT1VSQ0VfTUFOQUdFUl9BQ0NPVU5UID0gJ0FMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMQl9MT0FEX0JBTEFOQ0VSX0lEID0gJ0FMSVlVTjo6QUxCOjpMb2FkQmFsYW5jZXI6OkxvYWRCYWxhbmNlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENBU19DRVJUSUZJQ0FURSA9ICdBTElZVU46OkNBUzo6Q2VydGlmaWNhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ01TX0FMQVJNX1JVTEUgPSAnQUxJWVVOOjpDTVM6OkFsYXJtOjpSdWxlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19BTEFSTV9TSUxFTkNFX1RJTUUgPSAnQUxJWVVOOjpDTVM6OkFsYXJtOjpTaWxlbmNlVGltZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfQUxBUk1fVFJJR0dFUl9SRVNPVVJDRVMgPSAnQUxJWVVOOjpDTVM6OkFsYXJtOjpUcmlnZ2VyUmVzb3VyY2VzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19FVkVOVF9GSUxURVJfUlVMRSA9ICdBTElZVU46OkNNUzo6RXZlbnQ6OkV2ZW50RmlsdGVyUnVsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDTVNfRVZFTlRfTEVWRUwgPSAnQUxJWVVOOjpDTVM6OkV2ZW50OjpFdmVudExldmVsJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19FVkVOVF9OQU1FID0gJ0FMSVlVTjo6Q01TOjpFdmVudDo6RXZlbnROYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENNU19QUk9EVUNUX1RZUEUgPSAnQUxJWVVOOjpDTVM6OlByb2R1Y3Q6OlByb2R1Y3RUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENTX0NMVVNURVJfSUQgPSAnQUxJWVVOOjpDUzo6Q2x1c3Rlcjo6Q2x1c3RlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENTX0NMVVNURVJfTk9ERV9QT09MID0gJ0FMSVlVTjo6Q1M6OkNsdXN0ZXI6OkNsdXN0ZXJOb2RlUG9vbCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QVVRFUl9ORVNUX1NFUlZJQ0VfSUQgPSAnQUxJWVVOOjpDb21wdXRlTmVzdDo6U2VydmljZTo6U2VydmljZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVSX05FU1RfU0VSVklDRV9JTlNUQU5DRV9JRCA9ICdBTElZVU46OkNvbXB1dGVOZXN0OjpTZXJ2aWNlSW5zdGFuY2U6OlNlcnZpY2VJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVSX05FU1RfU1VQUExJRVJfU0VSVklDRV9WRVJTSU9OID0gJ0FMSVlVTjo6Q29tcHV0ZU5lc3RTdXBwbGllcjo6U2VydmljZTo6U2VydmljZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfQVRUUklCVVRFX1NFTEVDVE9SID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6QXR0cmlidXRlU2VsZWN0b3InO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX0lNQUdFX0lEID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW1hZ2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfUFJPUEVSVFlfRURJVE9SID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6SW5zdGFuY2VQcm9wZXJ0eUVkaXRvcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfTUFYX0JBTkRXSURUSF9JTiA9ICdBTElZVU46OkVDUzo6SW5zdGFuY2U6Ok1heEJhbmR3aWR0aEluJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19JTlNUQU5DRV9SRU5FV19QRVJJT0QgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpSZW5ld1BlcmlvZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFQ1NfSU5TVEFOQ0VfU1RPUF9NT0RFID0gJ0FMSVlVTjo6RUNTOjpJbnN0YW5jZTo6U3RvcE1vZGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1pPTkVfSUQgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlOjpab25lSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX0lOU1RBTkNFX1RZUEVfQVZBSUxBQkxFX0lOU1RBTkNFX1RZUEUgPSAnQUxJWVVOOjpFQ1M6Okluc3RhbmNlVHlwZTo6QXZhaWxhYmxlSW5zdGFuY2VUeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19NQU5BR0VEX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6RUNTOjpNYW5hZ2VkSW5zdGFuY2U6Okluc3RhbmNlSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1JBTV9ST0xFID0gJ0FMSVlVTjo6RUNTOjpSQU06OlJvbGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1RBUkdFVF9SRUdJT05fSURTID0gJ0FMSVlVTjo6RUNTOjpSZWdpb25JZDo6VGFyZ2V0UmVnaW9uSWRzJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19TTkFQU0hPVF9JRCA9ICdBTElZVU46OkVDUzo6U25hcHNob3Q6OlNuYXBzaG90SWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRUNTX1RBRyA9ICdBTElZVU46OkVDUzo6VEFHJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVDU19WU1dJVENIID0gJ0FMSVlVTjo6RUNTOjpWU3dpdGNoJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PTkdPREJfSU5TVEFOQ0VfVFlQRSA9ICdBTElZVU46Ok1vbmdvREI6Okluc3RhbmNlOjpJbnN0YW5jZVR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkVTVF9TRVJWSUNFX0lEID0gJ0FMSVlVTjo6TkVTVDo6U2VydmljZTo6U2VydmljZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5FU1RfU0VSVklDRV9WRVJTSU9OID0gJ0FMSVlVTjo6TkVTVDo6U2VydmljZTo6U2VydmljZVZlcnNpb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkxCX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6TkxCOjpJbnN0YW5jZTo6SW5zdGFuY2VJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOTEJfTE9BRF9CQUxBTkNFUl9JRCA9ICdBTElZVU46Ok5MQjo6TG9hZEJhbGFuY2VyOjpMb2FkQmFsYW5jZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOTEJfWk9ORV9JRCA9ICdBTElZVU46Ok5MQjo6Wm9uZTo6Wm9uZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfQkFORFdJRFRIX1VQR1JBREVfRFVSQVRJT05fSE9VUiA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpCYW5kd2lkdGhVcGdyYWRlRHVyYXRpb25Ib3VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfT05fT0ZGX1RJTUVfTElORSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpPbk9mZlRpbWVMaW5lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfT05fT0ZGX1RJTUVTID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6Ok9uT2ZmVGltZXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9PUEVSQVRJT05fVFlQRSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpPcGVyYXRpb25UeXBlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9PU19DT01QT05FTlRfUFJJVkFURV9URU1QTEFURV9OQU1FID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlByaXZhdGVUZW1wbGF0ZU5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9TRUNUSU9OX1RZUEUgPSAnQUxJWVVOOjpPT1M6OkNvbXBvbmVudDo6U2VjdGlvblR5cGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9UQVJHRVRfSU1BR0VfTkFNRSA9ICdBTElZVU46Ok9PUzo6Q29tcG9uZW50OjpUYXJnZXRJbWFnZU5hbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT09TX0NPTVBPTkVOVF9UUkFOU0lUX0lOU1RBTkNFID0gJ0FMSVlVTjo6T09TOjpDb21wb25lbnQ6OlRyYW5zaXRJbnN0YW5jZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPU1NfQlVDS0VUX09CSkVDVCA9ICdBTElZVU46Ok9TUzo6QnVja2V0OjpPYmplY3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9MQVJEQl9EQl9DTFVTVEVSX0lEID0gJ0FMSVlVTjo6UE9MQVJEQjo6REJDbHVzdGVyOjpEQkNsdXN0ZXJJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRFNfSU5TVEFOQ0VfQUNDT1VOVF9QQVNTV09SRCA9ICdBTElZVU46OlJEUzo6SW5zdGFuY2U6OkFjY291bnRQYXNzd29yZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfVFlQRV9NRVRBX0xJU1QgPSAnQUxJWVVOOjpST1M6OlR5cGU6Ok1ldGFMaXN0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFRElTX0lOU1RBTkNFX0lEID0gJ0FMSVlVTjo6UmVkaXM6Okluc3RhbmNlOjpJbnN0YW5jZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNMQl9MT0FEX0JBTEFOQ0VSX0lEID0gJ0FMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXI6OkxvYWRCYWxhbmNlcklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNFUlZJQ0VfQ0FUQV9MT0dfTEFVTkNIX09QVElPTl9QT1JURk9MSU9fSUQgPSAnQUxJWVVOOjpTZXJ2aWNlQ2F0YWxvZzo6TGF1bmNoT3B0aW9uOjpQb3J0Zm9saW9JZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTRVJWSUNFX0NBVEFfTE9HX0xBVU5DSF9QUk9EVUNUX1ZFUlNJT05fSUQgPSAnQUxJWVVOOjpTZXJ2aWNlQ2F0YWxvZzo6UHJvZHVjdFZlcnNpb246OlByb2R1Y3RWZXJzaW9uSWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUl9BQ0NPVU5UX0lEUyA9ICdBTElZVU46OlVzZXI6OkFjY291bnQ6OkFjY291bnRJZHMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVlBDX1ZTV0lUQ0hfSUQgPSAnQUxJWVVOOjpWUEM6OlZTd2l0Y2g6OlZTd2l0Y2hJZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWUENfWk9ORV9JRCA9ICdBTElZVU46OlZQQzo6Wm9uZTo6Wm9uZUlkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMRVJUID0gJ0FsZXJ0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUkFZX0lURU1TID0gJ0FycmF5SXRlbXMnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJSQVlfVEFCTEUgPSAnQXJyYXlUYWJsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCT09MRUFOID0gJ0Jvb2xlYW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0FTQ0FERVIgPSAnQ2FzY2FkZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREFURV9QSUNLRVIgPSAnRGF0ZVBpY2tlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFRElUQUJMRSA9ICdFZGl0YWJsZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFRElUQUJMRV9QT1BPVkVSID0gJ0VkaXRhYmxlUG9wb3Zlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGT1JNX0dSSUQgPSAnRm9ybUdyaWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9STV9HUk9VUF9DT0xMQVBTRV9QQU4gPSAnRm9ybUdyb3VwQ29sbGFwc2VQYW4nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9STV9JVEVNID0gJ0Zvcm1JdGVtJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fSVRFTV9HUk9VUCA9ICdGb3JtSXRlbUdyb3VwJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUk1fTEFZT1VUID0gJ0Zvcm1MYXlvdXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5QVVQgPSAnSW5wdXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5URUdFUiA9ICdJbnRlZ2VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExJU1QgPSAnTGlzdCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOVU1CRVIgPSAnTnVtYmVyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5VTUJFUl9QSUNLRVIgPSAnTnVtYmVyUGlja2VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUlNFX1RFWFQgPSAnUGFyc2VUZXh0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBWV9QRVJJT0QgPSAnUGF5UGVyaW9kJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBWV9QRVJJT0RfVU5JVCA9ICdQYXlQZXJpb2RVbml0JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJBRElPID0gJ1JhZGlvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFQURfT05MWSA9ICdSZWFkT25seSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRUFEX09OTFlfSVRFTSA9ICdSZWFkT25seUl0ZW0nO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVHSU9OX0lEID0gJ1JlZ2lvbklkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdTZWxlY3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RSSU5HID0gJ1N0cmluZyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTV0lUQ0ggPSAnU3dpdGNoJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFTVBMQVRFX05BTUUgPSAnVGVtcGxhdGVOYW1lJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFTVBMQVRFX1BBUkFNRVRFUiA9ICdUZW1wbGF0ZVBhcmFtZXRlcic7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUSU1FID0gJ1RpbWUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVElNRV9UUklHR0VSID0gJ1RpbWVUcmlnZ2VyJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFpPTkVfSUQgPSAnWm9uZUlkJztcbiAgfVxufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIHBhcmFtZXRlciB0eXBlIGxvb2tzIGxpa2UgYSBsaXN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNMaXN0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGUuaW5kZXhPZignTGlzdDwnKSA+PSAwIHx8IHR5cGUuaW5kZXhPZignQ29tbWFEZWxpbWl0ZWRMaXN0JykgPj0gMDtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBnaXZlbiBwYXJhbWV0ZXIgdHlwZSBsb29rcyBsaWtlIGEgbnVtYmVyIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXJUeXBlKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gdHlwZSA9PT0gJ051bWJlcic7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIHR5cGUgbG9va3MgbGlrZSBhIHN0cmluZyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc0xpc3RUeXBlKHR5cGUpICYmICFpc051bWJlclR5cGUodHlwZSk7XG59XG5cbmltcG9ydCB7IHJlcXVpcmVQcm9wZXJ0eSB9IGZyb20gJy4vcnVudGltZSc7XG5pbXBvcnQgeyBpc0FsbG93ZWRWYWx1ZSB9IGZyb20gJy4vdXRpbCc7XG4iXX0=