// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the account that you want to query.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Account";

    /**
     * @Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute AccountPrivilege: The permission of the account. Default value: RoleReadWrite. Valid values:
* RoleReadOnly: The account has the read-only permissions.
* RoleReadWrite: The account has the read and write permissions.
     */
    public readonly attrAccountPrivilege: ros.IResolvable;

    /**
     * @Attribute AccountType: The type of the account. Valid values:
* Normal: standard account
* Super: super account
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute Description: The description of the account.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the Redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the account that you want to query.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = this.getAtt('AccountName');
        this.attrAccountPrivilege = this.getAtt('AccountPrivilege');
        this.attrAccountType = this.getAtt('AccountType');
        this.attrDescription = this.getAtt('Description');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export interface RosAccountsProps {

    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the Redis account.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the result of the validation.
 */
function RosAccountsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Accounts";

    /**
     * @Attribute AccountNames: The list of The Redis account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * @Attribute Accounts: The list of The Redis accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the Redis account.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountNames = this.getAtt('AccountNames');
        this.attrAccounts = this.getAtt('Accounts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.accountName = props.accountName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            accountName: this.accountName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export interface RosInstanceProps {

    /**
     * @Property dbInstanceId: Database instance id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Instance";

    /**
     * @Attribute ArchitectureType: Architecture type.
     */
    public readonly attrArchitectureType: ros.IResolvable;

    /**
     * @Attribute Bandwidth: Bandwidth.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute Capacity: Capacity.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * @Attribute CloudType: Cloud category.
     */
    public readonly attrCloudType: ros.IResolvable;

    /**
     * @Attribute Config: Config.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * @Attribute ConnectionDomain: Connection domain.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * @Attribute CreateTime: Create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: Database instance id.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceName: Instance name.
     */
    public readonly attrDbInstanceName: ros.IResolvable;

    /**
     * @Attribute EndTime: End time.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * @Attribute EngineVersion: Engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute HasRenewChangeOrder: Has renew change order.
     */
    public readonly attrHasRenewChangeOrder: ros.IResolvable;

    /**
     * @Attribute InstanceClass: Instance class.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute InstanceReleaseProtection: Instance release protection.
     */
    public readonly attrInstanceReleaseProtection: ros.IResolvable;

    /**
     * @Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute IsRds: is RDS.
     */
    public readonly attrIsRds: ros.IResolvable;

    /**
     * @Attribute MaintainEndTime: Maintain end time.
     */
    public readonly attrMaintainEndTime: ros.IResolvable;

    /**
     * @Attribute MaintainStartTime: Maintain start time.
     */
    public readonly attrMaintainStartTime: ros.IResolvable;

    /**
     * @Attribute NetworkType: Network type.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute PackageType: Package type.
     */
    public readonly attrPackageType: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Port: Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PrivateIp: Private IP.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * @Attribute Qps: QPS.
     */
    public readonly attrQps: ros.IResolvable;

    /**
     * @Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    public readonly attrReadOnlyCount: ros.IResolvable;

    /**
     * @Attribute ReplacateId: Replacate id.
     */
    public readonly attrReplacateId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecondaryZoneId: The ID of the standby zone.
     */
    public readonly attrSecondaryZoneId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group id.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    public readonly attrSecurityIpGroupAttribute: ros.IResolvable;

    /**
     * @Attribute SecurityIpGroupName: Security IP group name.
     */
    public readonly attrSecurityIpGroupName: ros.IResolvable;

    /**
     * @Attribute SecurityIps: Security IPs.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * @Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    public readonly attrShardCount: ros.IResolvable;

    /**
     * @Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchId: Vswitch id.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcAuthMode: Vpc auth mode.
     */
    public readonly attrVpcAuthMode: ros.IResolvable;

    /**
     * @Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcId: Vpc id.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone id.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Database instance id.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArchitectureType = this.getAtt('ArchitectureType');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCapacity = this.getAtt('Capacity');
        this.attrCloudType = this.getAtt('CloudType');
        this.attrConfig = this.getAtt('Config');
        this.attrConnectionDomain = this.getAtt('ConnectionDomain');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceName = this.getAtt('DBInstanceName');
        this.attrEndTime = this.getAtt('EndTime');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrHasRenewChangeOrder = this.getAtt('HasRenewChangeOrder');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrInstanceReleaseProtection = this.getAtt('InstanceReleaseProtection');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrIsRds = this.getAtt('IsRds');
        this.attrMaintainEndTime = this.getAtt('MaintainEndTime');
        this.attrMaintainStartTime = this.getAtt('MaintainStartTime');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrPackageType = this.getAtt('PackageType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPort = this.getAtt('Port');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrQps = this.getAtt('Qps');
        this.attrReadOnlyCount = this.getAtt('ReadOnlyCount');
        this.attrReplacateId = this.getAtt('ReplacateId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecondaryZoneId = this.getAtt('SecondaryZoneId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSecurityIpGroupAttribute = this.getAtt('SecurityIpGroupAttribute');
        this.attrSecurityIpGroupName = this.getAtt('SecurityIpGroupName');
        this.attrSecurityIps = this.getAtt('SecurityIps');
        this.attrShardCount = this.getAtt('ShardCount');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcAuthMode = this.getAtt('VpcAuthMode');
        this.attrVpcCloudInstanceId = this.getAtt('VpcCloudInstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstanceClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
 */
export interface RosInstanceClassesProps {

    /**
     * @Property acceptLanguage: The language of the return values. Valid values:
     *  zh-CN: Chinese. This is the default value.
     *  en-US: English.
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * @Property engine: The engine type. Valid values:
     * Redis
     * Memcache
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
     *  Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     *  Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read\/write splitting architecture.
     */
    readonly nodeId?: string | ros.IResolvable;

    /**
     * @Property orderType: The order type. Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    readonly orderType?: string | ros.IResolvable;

    /**
     * @Property productType: The edition or series of instances. Valid values:
     *  Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     *  Tair_scm: persistent memory-optimized instances
     *  Tair_essd: storage-optimized instances
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the instance.
     *  Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceClassesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('orderType', ros.validateString)(properties.orderType));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('nodeId', ros.validateString)(properties.nodeId));
    errors.collect(ros.propertyValidator('productType', ros.validateString)(properties.productType));
    errors.collect(ros.propertyValidator('acceptLanguage', ros.validateString)(properties.acceptLanguage));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceClassesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::InstanceClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::InstanceClasses` resource.
 */
// @ts-ignore TS6133
function rosInstanceClassesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceClassesPropsValidator(properties).assertSuccess();
    }
    return {
      'AcceptLanguage': ros.stringToRosTemplate(properties.acceptLanguage),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'NodeId': ros.stringToRosTemplate(properties.nodeId),
      'OrderType': ros.stringToRosTemplate(properties.orderType),
      'ProductType': ros.stringToRosTemplate(properties.productType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::InstanceClasses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
 */
export class RosInstanceClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::InstanceClasses";

    /**
     * @Attribute InstanceClassIds: The list of db instance class ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable;

    /**
     * @Attribute InstanceClasses: The list of instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceptLanguage: The language of the return values. Valid values:
     *  zh-CN: Chinese. This is the default value.
     *  en-US: English.
     */
    public acceptLanguage: string | ros.IResolvable | undefined;

    /**
     * @Property engine: The engine type. Valid values:
     * Redis
     * Memcache
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
     *  Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     *  Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read\/write splitting architecture.
     */
    public nodeId: string | ros.IResolvable | undefined;

    /**
     * @Property orderType: The order type. Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    public orderType: string | ros.IResolvable | undefined;

    /**
     * @Property productType: The edition or series of instances. Valid values:
     *  Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     *  Tair_scm: persistent memory-optimized instances
     *  Tair_essd: storage-optimized instances
     */
    public productType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the instance.
     *  Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceClassesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceClassIds = this.getAtt('InstanceClassIds');
        this.attrInstanceClasses = this.getAtt('InstanceClasses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceptLanguage = props.acceptLanguage;
        this.engine = props.engine;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceId = props.instanceId;
        this.nodeId = props.nodeId;
        this.orderType = props.orderType;
        this.productType = props.productType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceptLanguage: this.acceptLanguage,
            engine: this.engine,
            instanceChargeType: this.instanceChargeType,
            instanceId: this.instanceId,
            nodeId: this.nodeId,
            orderType: this.orderType,
            productType: this.productType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export interface RosInstancesProps {

    /**
     * @Property architectureType: The architecture of the instance. Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read\/write splitting instance.
     */
    readonly architectureType?: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property editionType: The edition of the instance. Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    readonly editionType?: string | ros.IResolvable;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property expired: Specifies whether the instance has expired. Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    readonly expired?: string | ros.IResolvable;

    /**
     * @Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    readonly globalInstance?: string | ros.IResolvable;

    /**
     * @Property instanceClass: The instance type.
     */
    readonly instanceClass?: string | ros.IResolvable;

    /**
     * @Property instanceIds: The IDs of instances.
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    readonly instanceIds?: string | ros.IResolvable;

    /**
     * @Property instanceStatus: The state of the instance. Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     *
     */
    readonly instanceStatus?: string | ros.IResolvable;

    /**
     * @Property instanceType: The category of the instance. Valid values:
     * Tair
     * Redis
     * Memcache
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property privateIp: The private IP address of the instance.
     */
    readonly privateIp?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
     */
    readonly searchKey?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.architectureType && (typeof properties.architectureType) !== 'object') {
        errors.collect(ros.propertyValidator('architectureType', ros.validateAllowedValues)({
          data: properties.architectureType,
          allowedValues: ["cluster","standard","rwsplit"],
        }));
    }
    errors.collect(ros.propertyValidator('architectureType', ros.validateString)(properties.architectureType));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    if(properties.editionType && (typeof properties.editionType) !== 'object') {
        errors.collect(ros.propertyValidator('editionType', ros.validateAllowedValues)({
          data: properties.editionType,
          allowedValues: ["Community","Enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('editionType', ros.validateString)(properties.editionType));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    if(properties.expired && (typeof properties.expired) !== 'object') {
        errors.collect(ros.propertyValidator('expired', ros.validateAllowedValues)({
          data: properties.expired,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('expired', ros.validateString)(properties.expired));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('privateIp', ros.validateString)(properties.privateIp));
    if(properties.instanceStatus && (typeof properties.instanceStatus) !== 'object') {
        errors.collect(ros.propertyValidator('instanceStatus', ros.validateAllowedValues)({
          data: properties.instanceStatus,
          allowedValues: ["Normal","Creating","Changing","Inactive","Flushing","Released","Transforming","Unavailable","Error","Migrating","BackupRecovering","MinorVersionUpgrading","NetworkModifying","SSLModifying","MajorVersionUpgrading"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceStatus', ros.validateString)(properties.instanceStatus));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PrePaid","PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["CLASSIC","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('searchKey', ros.validateString)(properties.searchKey));
    if(properties.globalInstance && (typeof properties.globalInstance) !== 'object') {
        errors.collect(ros.propertyValidator('globalInstance', ros.validateAllowedValues)({
          data: properties.globalInstance,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('globalInstance', ros.validateString)(properties.globalInstance));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["Tair","Redis","Memcache"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceIds', ros.validateString)(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::REDIS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'ArchitectureType': ros.stringToRosTemplate(properties.architectureType),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'EditionType': ros.stringToRosTemplate(properties.editionType),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'Expired': ros.stringToRosTemplate(properties.expired),
      'GlobalInstance': ros.stringToRosTemplate(properties.globalInstance),
      'InstanceClass': ros.stringToRosTemplate(properties.instanceClass),
      'InstanceIds': ros.stringToRosTemplate(properties.instanceIds),
      'InstanceStatus': ros.stringToRosTemplate(properties.instanceStatus),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'PrivateIp': ros.stringToRosTemplate(properties.privateIp),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SearchKey': ros.stringToRosTemplate(properties.searchKey),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Instances";

    /**
     * @Attribute InstanceIds: The list of The Redis instance Ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of The Redis instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property architectureType: The architecture of the instance. Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read\/write splitting instance.
     */
    public architectureType: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property editionType: The edition of the instance. Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    public editionType: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Specifies whether the instance has expired. Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    public expired: string | ros.IResolvable | undefined;

    /**
     * @Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    public globalInstance: string | ros.IResolvable | undefined;

    /**
     * @Property instanceClass: The instance type.
     */
    public instanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property instanceIds: The IDs of instances.
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    public instanceIds: string | ros.IResolvable | undefined;

    /**
     * @Property instanceStatus: The state of the instance. Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     *
     */
    public instanceStatus: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The category of the instance. Valid values:
     * Tair
     * Redis
     * Memcache
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property privateIp: The private IP address of the instance.
     */
    public privateIp: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
     */
    public searchKey: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.architectureType = props.architectureType;
        this.chargeType = props.chargeType;
        this.editionType = props.editionType;
        this.engineVersion = props.engineVersion;
        this.expired = props.expired;
        this.globalInstance = props.globalInstance;
        this.instanceClass = props.instanceClass;
        this.instanceIds = props.instanceIds;
        this.instanceStatus = props.instanceStatus;
        this.instanceType = props.instanceType;
        this.networkType = props.networkType;
        this.privateIp = props.privateIp;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.searchKey = props.searchKey;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            architectureType: this.architectureType,
            chargeType: this.chargeType,
            editionType: this.editionType,
            engineVersion: this.engineVersion,
            expired: this.expired,
            globalInstance: this.globalInstance,
            instanceClass: this.instanceClass,
            instanceIds: this.instanceIds,
            instanceStatus: this.instanceStatus,
            instanceType: this.instanceType,
            networkType: this.networkType,
            privateIp: this.privateIp,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            searchKey: this.searchKey,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
