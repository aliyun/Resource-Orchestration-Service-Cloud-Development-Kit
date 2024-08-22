// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export interface RosDBClusterProps {

    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly computeResource: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly storageResource: string | ros.IResolvable;

    /**
     * @Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * @Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    readonly enableDefaultResourcePool?: boolean | ros.IResolvable;

    /**
     * @Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    readonly restoreToTime?: string | ros.IResolvable;

    /**
     * @Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    readonly restoreType?: string | ros.IResolvable;

    /**
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    readonly sourceDbClusterId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('storageResource', ros.requiredValidator)(properties.storageResource));
    errors.collect(ros.propertyValidator('storageResource', ros.validateString)(properties.storageResource));
    errors.collect(ros.propertyValidator('enableDefaultResourcePool', ros.validateBoolean)(properties.enableDefaultResourcePool));
    errors.collect(ros.propertyValidator('restoreToTime', ros.validateString)(properties.restoreToTime));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    errors.collect(ros.propertyValidator('computeResource', ros.requiredValidator)(properties.computeResource));
    errors.collect(ros.propertyValidator('computeResource', ros.validateString)(properties.computeResource));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    errors.collect(ros.propertyValidator('sourceDbClusterId', ros.validateString)(properties.sourceDbClusterId));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.requiredValidator)(properties.dbClusterVersion));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.validateString)(properties.dbClusterVersion));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["backup","timepoint"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDBCluster_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'ComputeResource': ros.stringToRosTemplate(properties.computeResource),
      'DBClusterVersion': ros.stringToRosTemplate(properties.dbClusterVersion),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'StorageResource': ros.stringToRosTemplate(properties.storageResource),
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'BackupSetId': ros.stringToRosTemplate(properties.backupSetId),
      'DBClusterDescription': ros.stringToRosTemplate(properties.dbClusterDescription),
      'EnableDefaultResourcePool': ros.booleanToRosTemplate(properties.enableDefaultResourcePool),
      'Period': ros.stringToRosTemplate(properties.period),
      'PeriodType': ros.stringToRosTemplate(properties.periodType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestoreToTime': ros.stringToRosTemplate(properties.restoreToTime),
      'RestoreType': ros.stringToRosTemplate(properties.restoreType),
      'SourceDbClusterId': ros.stringToRosTemplate(properties.sourceDbClusterId),
      'Tags': ros.listMapper(rosDBClusterTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::DBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::DBCluster";

    /**
     * @Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    public computeResource: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    public dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    public storageResource: string | ros.IResolvable;

    /**
     * @Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the cluster.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    public dbClusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    public enableDefaultResourcePool: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    public restoreToTime: string | ros.IResolvable | undefined;

    /**
     * @Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    public restoreType: string | ros.IResolvable | undefined;

    /**
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    public sourceDbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDBCluster.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbClusterId = this.getAtt('DBClusterId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.computeResource = props.computeResource;
        this.dbClusterVersion = props.dbClusterVersion;
        this.payType = props.payType;
        this.storageResource = props.storageResource;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.backupSetId = props.backupSetId;
        this.dbClusterDescription = props.dbClusterDescription;
        this.enableDefaultResourcePool = props.enableDefaultResourcePool;
        this.period = props.period;
        this.periodType = props.periodType;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreToTime = props.restoreToTime;
        this.restoreType = props.restoreType;
        this.sourceDbClusterId = props.sourceDbClusterId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            computeResource: this.computeResource,
            dbClusterVersion: this.dbClusterVersion,
            payType: this.payType,
            storageResource: this.storageResource,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            backupSetId: this.backupSetId,
            dbClusterDescription: this.dbClusterDescription,
            enableDefaultResourcePool: this.enableDefaultResourcePool,
            period: this.period,
            periodType: this.periodType,
            resourceGroupId: this.resourceGroupId,
            restoreToTime: this.restoreToTime,
            restoreType: this.restoreType,
            sourceDbClusterId: this.sourceDbClusterId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDBCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosDBClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
