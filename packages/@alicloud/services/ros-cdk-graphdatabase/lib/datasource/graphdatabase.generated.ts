// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the GDB Account.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
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
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
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
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Account";

    /**
     * @Attribute AccountDescription: GDB Account description.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * @Attribute AccountName: The name of the GDB Account.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute AccountType: GDB Account Type.
     */
    public readonly attrAccountType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the GDB Account.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
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
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountDescription = this.getAtt('AccountDescription');
        this.attrAccountName = this.getAtt('AccountName');
        this.attrAccountType = this.getAtt('AccountType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.dbInstanceId = props.dbInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            dbInstanceId: this.dbInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
 */
export interface RosAccountsProps {

    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
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
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::Accounts`, which is used to query the information about accounts.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Accounts";

    /**
     * @Attribute AccountNames: The list of account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * @Attribute Accounts: The list of accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Instance Id.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
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
        this.dbInstanceId = props.dbInstanceId;
        this.accountName = props.accountName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            accountName: this.accountName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDbInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export interface RosDbInstanceProps {

    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
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
 * Determine whether the given properties match those of a `RosDbInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDbInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDbInstancePropsValidator(properties: any): ros.ValidationResult {
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
    return errors.wrap('supplied properties not correct for "RosDbInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDbInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstance` resource.
 */
// @ts-ignore TS6133
function rosDbInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::DbInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export class RosDbInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstance";

    /**
     * @Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CurrentMinorVersion: The current kernel image version.
     */
    public readonly attrCurrentMinorVersion: ros.IResolvable;

    /**
     * @Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    public readonly attrDbInstanceIpArray: ros.IResolvable;

    /**
     * @Attribute DbInstanceCategory: The category of the db instance.
     */
    public readonly attrDbInstanceCategory: ros.IResolvable;

    /**
     * @Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable;

    /**
     * @Attribute DbInstanceDescription: According to the practical example or notes.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * @Attribute DbInstanceId: The ID of the GDB Instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable;

    /**
     * @Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    public readonly attrDbInstanceNetworkType: ros.IResolvable;

    /**
     * @Attribute DbInstanceStorageType: Cloud Disk.
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable;

    /**
     * @Attribute DbInstanceType: The type of the db instance.
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * @Attribute DbNodeClass: The class of the db node.
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * @Attribute DbNodeCount: The count of the db node.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * @Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * @Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * @Attribute EcsSecurityGroupRelations: Security group information array.
     */
    public readonly attrEcsSecurityGroupRelations: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute Expired: The expire status of the db instance.
     */
    public readonly attrExpired: ros.IResolvable;

    /**
     * @Attribute LatestMinorVersion: The latest kernel image version.
     */
    public readonly attrLatestMinorVersion: ros.IResolvable;

    /**
     * @Attribute LockMode: Instance lock state.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LockReason: An instance is locked the reason.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * @Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicPort: The public port ID of the DB instance.
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * @Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource Group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the GDB Instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vswitch id of the DB instance.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID of the instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
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
    constructor(scope: ros.Construct, id: string, props: RosDbInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCurrentMinorVersion = this.getAtt('CurrentMinorVersion');
        this.attrDbInstanceIpArray = this.getAtt('DBInstanceIPArray');
        this.attrDbInstanceCategory = this.getAtt('DbInstanceCategory');
        this.attrDbInstanceCpu = this.getAtt('DbInstanceCpu');
        this.attrDbInstanceDescription = this.getAtt('DbInstanceDescription');
        this.attrDbInstanceId = this.getAtt('DbInstanceId');
        this.attrDbInstanceMemory = this.getAtt('DbInstanceMemory');
        this.attrDbInstanceNetworkType = this.getAtt('DbInstanceNetworkType');
        this.attrDbInstanceStorageType = this.getAtt('DbInstanceStorageType');
        this.attrDbInstanceType = this.getAtt('DbInstanceType');
        this.attrDbNodeClass = this.getAtt('DbNodeClass');
        this.attrDbNodeCount = this.getAtt('DbNodeCount');
        this.attrDbNodeStorage = this.getAtt('DbNodeStorage');
        this.attrDbVersion = this.getAtt('DbVersion');
        this.attrEcsSecurityGroupRelations = this.getAtt('EcsSecurityGroupRelations');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrExpired = this.getAtt('Expired');
        this.attrLatestMinorVersion = this.getAtt('LatestMinorVersion');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLockReason = this.getAtt('LockReason');
        this.attrMaintainTime = this.getAtt('MaintainTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPort = this.getAtt('Port');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicPort = this.getAtt('PublicPort');
        this.attrReadOnlyDbInstanceIds = this.getAtt('ReadOnlyDbInstanceIds');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchId = this.getAtt('VSwitchId');
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
        return rosDbInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDbInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
export interface RosDbInstancesProps {

    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDbInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDbInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDbInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDbInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstances` resource.
 */
// @ts-ignore TS6133
function rosDbInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'DbInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::DbInstances`, which is used to query the information about Graph Database (GDB) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
export class RosDbInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstances";

    /**
     * @Attribute DbInstanceIds: The list of db instance IDs.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute DbInstances: The list of db instances.
     */
    public readonly attrDbInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceIds = this.getAtt('DbInstanceIds');
        this.attrDbInstances = this.getAtt('DbInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceId = props.dbInstanceId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceId: this.dbInstanceId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
