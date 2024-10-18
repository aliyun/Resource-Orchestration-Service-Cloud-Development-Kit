import { RosElement } from './ros-element';
import { Construct } from './construct-compat';
import { RosReference } from './private/ros-reference';
import { IResolvable, IResolveContext } from './resolvable';
import { Token } from './token';

export enum RosParameterType {
  STRING = 'String',
  NUMBER = 'Number',
  JSON = 'Json',
  BOOLEAN = 'Boolean',
  COMMA_DELIMITED_LIST = 'CommaDelimitedList',
  OOS_PARAMETER = 'ALIYUN::OOS::Parameter::Value',
  OOS_SECRET_PARAMETER = 'ALIYUN::OOS::SecretParameter::Value',
}

export interface RosParameterProps {
  readonly type?: RosParameterType;
  readonly defaultValue?: any;
  readonly allowedPattern?: string;
  readonly allowedValues?: any[];
  readonly constraintDescription?: string | {[key: string]: string};
  readonly description?: string | {[key: string]: string};
  readonly maxLength?: number;
  readonly maxValue?: number;
  readonly minLength?: number;
  readonly minValue?: number;
  readonly noEcho?: boolean;

  readonly label?: string;
  readonly associationProperty?: string;
  readonly associationPropertyMetadata?: {[key: string]: any};
  readonly confirm?: boolean;
  readonly textArea?: boolean;
  readonly required?: boolean;
  readonly placeholder?: string | {[key: string]: string};
}

/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
export class RosParameter extends RosElement {

  public static readonly TYPE_ALLOWED_VALUES: string[] = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean',
    'ALIYUN::OOS::Parameter::Value', 'ALIYUN::OOS::SecretParameter::Value'];

  private readonly type: RosParameterType;
  private readonly id: string;

  constructor(scope: Construct, id: string, private readonly props: RosParameterProps = {}) {
    super(scope, id);
    this.id = id;
    this.type = props.type || RosParameterType.STRING;
    this.validateProperties(props);
  }

  /**
   * Indicates if this parameter is configured with "NoEcho" enabled.
   */
  public get noEcho(): boolean {
    return !!this.props.noEcho;
  }

  /**
   * The parameter value as a Token
   */
  public get value(): IResolvable {
    return RosReference.for(this, 'Ref');
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsString(): string {
    if (!isStringType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string type`);
    }
    return Token.asString(this.value);
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsBoolean(): any {
    if (!isStringType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string type`);
    }
    return Token.asAny(this.value);
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsAny(): any {
    return Token.asAny(this.value);
  }

  /**
   * The parameter value, if it represents a string list.
   */
  public get valueAsList(): string[] {
    if (!isListType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string list type`);
    }
    return Token.asList(this.value);
  }

  /**
   * The parameter value, if it represents a number.
   */
  public get valueAsNumber(): number {
    if (!isNumberType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a number type`);
    }
    return Token.asNumber(this.value);
  }

  /**
   * @internal
   */
  public _toRosTemplate(): object {
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

  public resolve(_context: IResolveContext): any {
    return this.value;
  }

  public validateProperties(props: RosParameterProps = {}): void {
    // check whether the required properties is in parameter(props)
    requireProperty(props, 'type', this);
    // check whether the associationProperty is allowed value
    // isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
    // check the type of this parameter is allowed
    isAllowedValue(props, 'type', this, RosParameter.TYPE_ALLOWED_VALUES);
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
      throw new Error(
        `The property "confirm" of the parameter ${this.toString()} could be true only if type is "String" and "noEcho" is true.`,
      );
    }
  }
}

export namespace RosParameter {
  export class AssociationProperty {
    public static readonly ALERT = 'Alert';
    public static readonly ARRAY_ITEMS = 'ArrayItems';
    public static readonly ARRAY_TABLE = 'ArrayTable';
    public static readonly AUTO_COMPLETE_INPUT = 'AutoCompleteInput';
    public static readonly BOOLEAN = 'Boolean';
    public static readonly CASCADER = 'Cascader';
    public static readonly CHARGE_TYPE = 'ChargeType';
    public static readonly CODE = 'Code';
    public static readonly COMMA_DELIMITED_LIST = 'CommaDelimitedList';
    public static readonly CRON = 'Cron';
    public static readonly DATE_PICKER = 'DatePicker';
    public static readonly DATE_TIME = 'DateTime';
    public static readonly EDITABLE = 'Editable';
    public static readonly EDITABLE_POPOVER = 'EditablePopover';
    public static readonly FILE_CONTENT = 'FileContent';
    public static readonly FORM_GRID = 'FormGrid';
    public static readonly FORM_GROUP_COLLAPSE_PAN = 'FormGroupCollapsePan';
    public static readonly FORM_ITEM = 'FormItem';
    public static readonly FORM_ITEM_GROUP = 'FormItemGroup';
    public static readonly FORM_LAYOUT = 'FormLayout';
    public static readonly GMT_ZONE = 'GMTZone';
    public static readonly INPUT = 'Input';
    public static readonly INTEGER = 'Integer';
    public static readonly JSON = 'Json';
    public static readonly LIST = 'List';
    public static readonly LIST_PARAMETER = 'List[Parameter]';
    public static readonly LIST_PARAMETERS = 'List[Parameters]';
    public static readonly NUMBER = 'Number';
    public static readonly NUMBER_PICKER = 'NumberPicker';
    public static readonly OOS_SERVICE_ROLE = 'OOSServiceRole';
    public static readonly PASSWORD = 'Password';
    public static readonly PARSE_TEXT = 'ParseText';
    public static readonly PAY_PERIOD = 'PayPeriod';
    public static readonly PAY_PERIOD_UNIT = 'PayPeriodUnit';
    public static readonly RADIO = 'Radio';
    public static readonly RATE_CONTROL = 'RateControl';
    public static readonly READ_ONLY = 'ReadOnly';
    public static readonly READ_ONLY_ITEM = 'ReadOnlyItem';
    public static readonly REGION_ID = 'RegionId';
    public static readonly SELECT = 'Select';
    public static readonly STRING = 'String';
    public static readonly SWITCH = 'Switch';
    public static readonly TAGS = 'Tags';
    public static readonly TARGETS = 'Targets';
    public static readonly TEMPLATE_NAME = 'TemplateName';
    public static readonly TEMPLATE_PARAMETER = 'TemplateParameter';
    public static readonly TEXT_AREA = 'TextArea';
    public static readonly TIME = 'Time';
    public static readonly TIME_TRIGGER = 'TimeTrigger';
    public static readonly TIME_TRIGGER_WEEKLY = 'TimeTriggerWeekly';
    public static readonly TIME_ZONE = 'TimeZone';
    public static readonly ZONE_ID = 'ZoneId';

    public static readonly ACR_NAMESPACE_NAME = 'ALIYUN::ACR::Namespace::Name';
    public static readonly ACR_REPO_ATTRIBUTE = 'ALIYUN::ACR::Repo::RepoAttribute';
    public static readonly ACR_REPO_TAG = 'ALIYUN::ACR::Repo::Tag';

    public static readonly ALB_ACL_ID = 'ALIYUN::ALB::ACL::ACLId';
    public static readonly ALB_INSTANCE_ID = 'ALIYUN::ALB::Instance::InstanceId';
    public static readonly ALB_LOAD_BALANCER_ID = 'ALIYUN::ALB::LoadBalancer::LoadBalancerId';

    public static readonly BSS_PRICING_MODULE_CODE = 'ALIYUN::BSS::PricingModule::ModuleCode';

    public static readonly CAS_CERTIFICATE = 'ALIYUN::CAS::Certificate';
    public static readonly CAS_CERTIFICATE_ID = 'ALIYUN::CAS::Certificate::CertificateId';

    public static readonly CEN_INSTANCE_CEN_ID = 'ALIYUN::CEN::Instance::CenId';
    public static readonly CEN_TRANSIT_ROUTER_ID = 'ALIYUN::CEN::TransitRouter::TransitRouterId';

    public static readonly CMS_ALARM_METRIC_SELECTOR = 'ALIYUN::CMS::Alarm::MetricSelector';
    public static readonly CMS_ALARM_RULE = 'ALIYUN::CMS::Alarm::Rule';
    public static readonly CMS_ALARM_SILENCE_TIME = 'ALIYUN::CMS::Alarm::SilenceTime';
    public static readonly CMS_ALARM_TRIGGER_RESOURCES = 'ALIYUN::CMS::Alarm::TriggerResources';
    public static readonly CMS_EVENT_FILTER_RULE = 'ALIYUN::CMS::Event::EventFilterRule';
    public static readonly CMS_EVENT_LEVEL = 'ALIYUN::CMS::Event::EventLevel';
    public static readonly CMS_EVENT_NAME = 'ALIYUN::CMS::Event::EventName';
    public static readonly CMS_PRODUCT_TYPE = 'ALIYUN::CMS::Product::ProductType';

    public static readonly CR_INSTANCE_ID = 'ALIYUN::CR::Instance::InstanceId';
    public static readonly CR_NAMESPACE_NAME = 'ALIYUN::CR::NameSpace::Name';
    public static readonly CR_REPOSITORY_REPO_NAME = 'ALIYUN::CR::Repository::RepoName';
    public static readonly CR_REPOSITORY_TAG = 'ALIYUN::CR::Repository::Tag';

    public static readonly CS_CLUSTER_ID = 'ALIYUN::CS::Cluster::ClusterId';
    public static readonly CS_CLUSTER_NODE_POOL = 'ALIYUN::CS::Cluster::ClusterNodePool';
    public static readonly CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR = 'ALIYUN::CS::ManagedKubernetesCluster::ServiceCidr';

    public static readonly COMPUTE_NEST_ARTIFACT_ID = 'ALIYUN::ComputeNest::Artifact::ArtifactId';
    public static readonly COMPUTE_NEST_ARTIFACT_ID_VERSION = 'ALIYUN::ComputeNest::Artifact::ArtifactIdVersion';
    public static readonly COMPUTER_NEST_SERVICE_ID = 'ALIYUN::ComputeNest::Service::ServiceId';
    public static readonly COMPUTER_NEST_SERVICE_INSTANCE_ID = 'ALIYUN::ComputeNest::ServiceInstance::ServiceInstanceId';

    public static readonly COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = 'ALIYUN::ComputeNestSupplier::Service::ServiceVersion';

    public static readonly DNS_DOMAIN_VALIDATE_DOMAIN = 'ALIYUN::DNS::Domain::ValidateDomain';

    public static readonly DASH_VECTOR_API_KEY = 'ALIYUN::DashVector::ApiKey';

    public static readonly DOMAIN_NAME = 'ALIYUN::Domain::DomainName';

    public static readonly EAS_INSTANCE_TYPE = 'ALIYUN::EAS::Instance::InstanceType';
    public static readonly EAS_RESOURCE_ID = 'ALIYUN::EAS::Resource::ResourceId';

    public static readonly ECD_BUNDLE_DESKTOP_TYPE = 'ALIYUN::ECD::Bundle::DesktopType';

    public static readonly ECI_CONTAINER_GROUP_ID = 'ALIYUN::ECI::ContainerGroup::ContainerGroupId';

    public static readonly ECS_COMMAND_ID = 'ALIYUN::ECS::Command::CommandId';
    public static readonly ECS_DEPLOYMENT_SET_ID = 'ALIYUN::ECS::DeploymentSet::DeploymentSetId';
    public static readonly ECS_DATA_DISK_CATEGORY = 'ALIYUN::ECS::Disk::DataDiskCategory';
    public static readonly ECS_DISK_ID = 'ALIYUN::ECS::Disk::DiskId';
    public static readonly ECS_SYSTEM_DISK_CATEGORY = 'ALIYUN::ECS::Disk::SystemDiskCategory';
    public static readonly ECS_IMAGE_ID = 'ALIYUN::ECS::Image::ImageId';
    public static readonly ECS_INSTANCE = 'ALIYUN::ECS::Instance';
    public static readonly ECS_INSTANCE_IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    public static readonly ECS_INSTANCE_ATTRIBUTE_SELECTOR = 'ALIYUN::ECS::Instance::AttributeSelector';
    public static readonly ECS_INSTANCE_ID = 'ALIYUN::ECS::Instance::InstanceId';
    public static readonly ECS_INSTANCE_PROPERTY_EDITOR = 'ALIYUN::ECS::Instance::InstancePropertyEditor';
    public static readonly ECS_INSTANCE_TYPE = 'ALIYUN::ECS::Instance::InstanceType';
    public static readonly ECS_INSTANCE_MAX_BANDWIDTH_IN = 'ALIYUN::ECS::Instance::MaxBandwidthIn';
    public static readonly ECS_INSTANCE_OS_TYPE = 'ALIYUN::ECS::Instance::OSType';
    public static readonly ECS_INSTANCE_PASSWORD = 'ALIYUN::ECS::Instance::Password';
    public static readonly ECS_INSTANCE_RENEW_PERIOD = 'ALIYUN::ECS::Instance::RenewPeriod';
    public static readonly ECS_INSTANCE_STOP_MODE = 'ALIYUN::ECS::Instance::StopMode';
    public static readonly ECS_INSTANCE_ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    public static readonly ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = 'ALIYUN::ECS::InstanceType::AvailableInstanceType';
    public static readonly ECS_KEY_PAIR_NAME = 'ALIYUN::ECS::KeyPair::KeyPairName';
    public static readonly ECS_LAUNCH_TEMPLATE_ID = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateId';
    public static readonly ECS_LAUNCH_TEMPLATE_VERSION = 'ALIYUN::ECS::LaunchTemplate::LaunchTemplateVersion';
    public static readonly ECS_MANAGED_INSTANCE_ID = 'ALIYUN::ECS::ManagedInstance::InstanceId';
    public static readonly ECS_RAM_ROLE = 'ALIYUN::ECS::RAM::Role';
    public static readonly ECS_REGION_ID = 'ALIYUN::ECS::RegionId';
    public static readonly ECS_REGION_ID_DEPLOY = 'ALIYUN::ECS::RegionId::RegionDeploy';
    public static readonly ECS_TARGET_REGION_IDS = 'ALIYUN::ECS::RegionId::TargetRegionIds';
    public static readonly ECS_RESOURCE_GROUP_ID = 'ALIYUN::ECS::ResourceGroup::ResourceGroupId';
    public static readonly ECS_SECURITY_GROUP_PORT_RANGE = 'ALIYUN::ECS::SecurityGroup::PortRange';
    public static readonly ECS_SECURITY_GROUP_ID = 'ALIYUN::ECS::SecurityGroup::SecurityGroupId';
    public static readonly ECS_AUTO_SNAPSHOT_POLICY_ID = 'ALIYUN::ECS::Snapshot::AutoSnapshotPolicyId';
    public static readonly ECS_SNAPSHOT_ID = 'ALIYUN::ECS::Snapshot::SnapshotId';
    public static readonly ECS_TAG = 'ALIYUN::ECS::TAG';
    public static readonly ECS_VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    public static readonly ECS_VSWITCH = 'ALIYUN::ECS::VSwitch';
    public static readonly ECS_VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
    public static readonly ECS_ZONE_ID = 'ALIYUN::ECS::ZoneId';

    public static readonly EHPC_CLUSTER_ID = 'ALIYUN::EHPC::Cluster::ClusterId';
    public static readonly EHPC_FILE_SYSTEM_ID = 'ALIYUN::EHPC::FileSystem::FileSystemId';
    public static readonly EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = 'ALIYUN::EHPC::FileSystem::MountTargetDomain';

    public static readonly ESS_AUTO_SCALING_GROUP_ID = 'ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId';
    public static readonly ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME = 'ALIYUN::ESS::ECIScalingConfiguration::ContainerName';
    public static readonly ESS_ECI_SCALING_CONFIGURATION_ID = 'ALIYUN::ESS::ECIScalingConfiguration::ScalingConfigurationId';
    public static readonly ESS_SCALING_CONFIGURATION_ID = 'ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId';

    public static readonly ELASTICSEARCH_INSTANCE_TYPE = 'ALIYUN::Elasticsearch::Instance::InstanceType';

    public static readonly EMR_ECS_CLUSTER_ID = 'ALIYUN::Emr::ECSCluster::ClusterId';

    public static readonly FC_FUNCTION_NAME = 'ALIYUN::FC::Function::FunctionName';
    public static readonly FC_SERVICE_NAME = 'ALIYUN::FC::Service::ServiceName';

    public static readonly FC3_FUNCTION_NAME = 'ALIYUN::FC3::Function::FunctionName';

    public static readonly FLOW_CONNECTION_ID = 'ALIYUN::Flow::Connection::ConnectionId';
    public static readonly FLOW_ORGANIZATION_ID = 'ALIYUN::Flow::Organization::OrganizationId';

    public static readonly HOLOGRES_INSTANCE_ID = 'ALIYUN::Hologres::Instance::InstanceId';

    public static readonly INFLUX_DB_INSTANCE_TYPE = 'ALIYUN::InfluxDB::Instance::InstanceType';

    public static readonly KAFKA_INSTANCE_ID = 'ALIYUN::Kafka::Instance::InstanceId';

    public static readonly LINDORM_INSTANCE_ID = 'ALIYUN::Lindorm::Instance::InstanceId';

    public static readonly MONGODB_INSTANCE_TYPE = 'ALIYUN::MongoDB::Instance::InstanceType';

    public static readonly NAS_FILE_SYSTEM_ID = 'ALIYUN::NAS::FileSystem::FileSystemId';
    public static readonly NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = 'ALIYUN::NAS::FileSystem::MountTargetDomain';

    public static readonly NEST_SERVICE_ID = 'ALIYUN::NEST::Service::ServiceId';
    public static readonly NEST_SERVICE_VERSION = 'ALIYUN::NEST::Service::ServiceVersion';

    public static readonly NLB_LOAD_BALANCER_ID = 'ALIYUN::NLB::LoadBalancer::LoadBalancerId';
    public static readonly NLB_INSTANCE_ID = 'ALIYUN::NLB::Instance::InstanceId';
    public static readonly NLB_ZONE_ID = 'ALIYUN::NLB::Zone::ZoneId';

    public static readonly OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = 'ALIYUN::OOS::Component::BandwidthUpgradeDurationHour';
    public static readonly OOS_COMMAND_CONTENT = 'ALIYUN::OOS::Command::CommandContent';
    public static readonly OOS_COMPONENT_CLEAN_UP_INFO = 'ALIYUN::OOS::Component::CleanUpInfo';
    public static readonly OOS_COMPONENT_ON_OFF_TIME_LINE = 'ALIYUN::OOS::Component::OnOffTimeLine';
    public static readonly OOS_COMPONENT_ON_OFF_TIMES = 'ALIYUN::OOS::Component::OnOffTimes';
    public static readonly OOS_COMPONENT_OPERATION_TYPE = 'ALIYUN::OOS::Component::OperationType';
    public static readonly OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = 'ALIYUN::OOS::Component::PrivateTemplateName';
    public static readonly OOS_COMPONENT_SECTION_TYPE = 'ALIYUN::OOS::Component::SectionType';
    public static readonly OOS_COMPONENT_TARGET_IMAGE_NAME = 'ALIYUN::OOS::Component::TargetImageName';
    public static readonly OOS_COMPONENT_TRANSIT_INSTANCE = 'ALIYUN::OOS::Component::TransitInstance';
    public static readonly OOS_COMPONENT_TIMER_TRIGGER = 'ALIYUN::OOS::Component::TimerTrigger';
    public static readonly OOS_FILE_URL = 'ALIYUN::OOS::File::FileUrl';
    public static readonly OOS_PACKAGE_NAME = 'ALIYUN::OOS::Package::PackageName';
    public static readonly OOS_PACKAGE_VERSION = 'ALIYUN::OOS::Package::PackageVersion';
    public static readonly OOS_PARAMETER_VALUE = 'ALIYUN::OOS::Parameter::Value';
    public static readonly OOS_PATCH_BASE_LINE_NAME = 'ALIYUN::OOS::PatchBaseline::PatchBaselineName';
    public static readonly OOS_SECRET_PARAMETER_VALUE = 'ALIYUN::OOS::SecretParameter::Value';
    public static readonly OOS_TEMPLATE_NAME = 'ALIYUN::OOS::Template::TemplateName';
    public static readonly OOS_TEMPLATE_VERSION = 'ALIYUN::OOS::Template::TemplateVersion';

    public static readonly OSS_BUCKET_NAME = 'ALIYUN::OSS::Bucket::BucketName';
    public static readonly OSS_BUCKET_OBJECT = 'ALIYUN::OSS::Bucket::Object';
    public static readonly OSS_OBJECT_NAME = 'ALIYUN::OSS::Object::ObjectName';

    public static readonly POLARDB_DB_CLUSTER_ID = 'ALIYUN::POLARDB::DBCluster::DBClusterId';
    public static readonly POLARDB_DB_NODE_CLASS = 'ALIYUN::POLARDB::DBCluster::DBNodeClass'

    public static readonly RAM_ROLE = 'ALIYUN::RAM::Role';
    public static readonly RAM_USER = 'ALIYUN::RAM::User';

    public static readonly RDS_ENGINE_ID = 'ALIYUN::RDS::Engine::EngineId';
    public static readonly RDS_ENGINE_VERSION = 'ALIYUN::RDS::Engine::EngineVersion';
    public static readonly RDS_INSTANCE_ACCOUNT_PASSWORD = 'ALIYUN::RDS::Instance::AccountPassword';
    public static readonly RDS_INSTANCE_ID = 'ALIYUN::RDS::Instance::InstanceId';
    public static readonly RDS_INSTANCE_TYPE = 'ALIYUN::RDS::Instance::InstanceType';

    public static readonly REDIS_INSTANCE_ID = 'ALIYUN::Redis::Instance::InstanceId';
    public static readonly REDIS_INSTANCE_TYPE = 'ALIYUN::Redis::Instance::InstanceType';

    public static readonly RESOURCE_MANAGER_ACCOUNT = 'ALIYUN::ResourceManager::Account';
    public static readonly RESOURCE_MANAGER_FOLDER = 'ALIYUN::ResourceManager::Folder';

    public static readonly ROS_TYPE_META_LIST = 'ALIYUN::ROS::Type::MetaList';

    public static readonly SLB_ACL_ID = 'ALIYUN::SLB::ACL::ACLId';
    public static readonly SLB_CERTIFICATE = 'ALIYUN::SLB::Certificate';
    public static readonly SLB_INSTANCE_ID = 'ALIYUN::SLB::Instance::InstanceId';
    public static readonly SLB_INSTANCE_TYPE = 'ALIYUN::SLB::Instance::InstanceType';
    public static readonly SLB_LOAD_BALANCER_ID = 'ALIYUN::SLB::LoadBalancer::LoadBalancerId';
    public static readonly SLB_LOAD_BALANCER_ZONE_ID = 'ALIYUN::SLB::LoadBalancer::ZoneId';

    public static readonly SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = 'ALIYUN::ServiceCatalog::LaunchOption::PortfolioId';
    public static readonly SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = 'ALIYUN::ServiceCatalog::ProductVersion::ProductVersionId';

    public static readonly TAG_KEY = 'ALIYUN::Tag::TagKey';
    public static readonly TAG_VALUE = 'ALIYUN::Tag::TagValue';

    public static readonly USER_ACCOUNT_IDS = 'ALIYUN::User::Account::AccountIds';
    public static readonly USER_ACCOUNT_ID = 'ALIYUN::User::AccountId';
    public static readonly USER_ID = 'ALIYUN::User::UserId';

    public static readonly VPC_EIP_ALLOCATION_ID = 'ALIYUN::VPC::EIP::AllocationId';
    public static readonly VPC_NAT_GATEWAY_ID = 'ALIYUN::VPC::NatGateway::NatGatewayId';
    public static readonly VPC_CIDR_BLOCK = 'ALIYUN::VPC::VPC::CidrBlock';
    public static readonly VSWITCH_CIDR_BLOCK = 'ALIYUN::VPC::VSwitch::CidrBlock';
    public static readonly VPC_VSWITCH_ID = 'ALIYUN::VPC::VSwitch::VSwitchId';
    public static readonly VPC_ROUTER_ROUTE_TABLE_ID = 'ALIYUN::VPC::VirtualBorderRouter::RouteTableId';
    public static readonly VPC_ZONE_ID = 'ALIYUN::VPC::Zone::ZoneId';
  }
}

/**
 * Whether the given parameter type looks like a list type
 */
function isListType(type: string) {
  return type.indexOf('List<') >= 0 || type.indexOf('CommaDelimitedList') >= 0;
}

/**
 * Whether the given parameter type looks like a number type
 */
function isNumberType(type: string) {
  return type === 'Number';
}

/**
 * Whether the given parameter type looks like a string type
 */
function isStringType(type: string) {
  return !isListType(type) && !isNumberType(type);
}

import { requireProperty } from './runtime';
import { isAllowedValue } from './util';
