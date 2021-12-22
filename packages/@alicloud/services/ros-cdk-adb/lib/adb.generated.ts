// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ADB::DBCluster`
 */
export interface RosDBClusterProps {

    /**
     * @Property dbClusterCategory: The edition of the cluster.
     * Valid values when the cluster is in reserved mode:
     * Basic
     * Cluster
     * When the cluster is in elastic mode, set the value to MixedStorage.
     */
    readonly dbClusterCategory: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property mode: The mode of the cluster. Valid values:
     * Reserver: the reserved mode
     * Flexible: the elastic mode
     */
    readonly mode: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
     */
    readonly computeResource?: string | ros.IResolvable;

    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    readonly dbClusterClass?: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * @Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
     * T8, T16, T32, and T52: 1
     * C8 and C32: 1 to 128
     */
    readonly dbNodeGroupCount?: number | ros.IResolvable;

    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    readonly dbNodeStorage?: number | ros.IResolvable;

    /**
     * @Property elasticIoResource: Elastic IO Unit
     * Note the flexible mode cluster will use this parameter.
     */
    readonly elasticIoResource?: number | ros.IResolvable;

    /**
     * @Property executorCount: ExecutorCount
     */
    readonly executorCount?: number | ros.IResolvable;

    /**
     * @Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * Valid values when the Period parameter is set to Year: 1, 2, and 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    if(properties.dbNodeStorage && (typeof properties.dbNodeStorage) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateRange)({
            data: properties.dbNodeStorage,
            min: 100,
            max: 8000,
          }));
    }
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateNumber)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('dbClusterCategory', ros.requiredValidator)(properties.dbClusterCategory));
    if(properties.dbClusterCategory && (typeof properties.dbClusterCategory) !== 'object') {
        errors.collect(ros.propertyValidator('dbClusterCategory', ros.validateAllowedValues)({
          data: properties.dbClusterCategory,
          allowedValues: ["Basic","Cluster","MixedStorage"],
        }));
    }
    errors.collect(ros.propertyValidator('dbClusterCategory', ros.validateString)(properties.dbClusterCategory));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('mode', ros.requiredValidator)(properties.mode));
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    errors.collect(ros.propertyValidator('computeResource', ros.validateString)(properties.computeResource));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('elasticIoResource', ros.validateNumber)(properties.elasticIoResource));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.requiredValidator)(properties.dbClusterVersion));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.validateString)(properties.dbClusterVersion));
    if(properties.dbNodeGroupCount && (typeof properties.dbNodeGroupCount) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeGroupCount', ros.validateRange)({
            data: properties.dbNodeGroupCount,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('dbNodeGroupCount', ros.validateNumber)(properties.dbNodeGroupCount));
    errors.collect(ros.propertyValidator('executorCount', ros.validateNumber)(properties.executorCount));
    errors.collect(ros.propertyValidator('dbClusterClass', ros.validateString)(properties.dbClusterClass));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADB::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADB::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      DBClusterCategory: ros.stringToRosTemplate(properties.dbClusterCategory),
      DBClusterVersion: ros.stringToRosTemplate(properties.dbClusterVersion),
      Mode: ros.stringToRosTemplate(properties.mode),
      PayType: ros.stringToRosTemplate(properties.payType),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ComputeResource: ros.stringToRosTemplate(properties.computeResource),
      DBClusterClass: ros.stringToRosTemplate(properties.dbClusterClass),
      DBClusterDescription: ros.stringToRosTemplate(properties.dbClusterDescription),
      DBNodeGroupCount: ros.numberToRosTemplate(properties.dbNodeGroupCount),
      DBNodeStorage: ros.numberToRosTemplate(properties.dbNodeStorage),
      ElasticIOResource: ros.numberToRosTemplate(properties.elasticIoResource),
      ExecutorCount: ros.numberToRosTemplate(properties.executorCount),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ADB::DBCluster`
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::DBCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: Vpc connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBClusterId: The ID of the cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterCategory: The edition of the cluster.
     * Valid values when the cluster is in reserved mode:
     * Basic
     * Cluster
     * When the cluster is in elastic mode, set the value to MixedStorage.
     */
    public dbClusterCategory: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    public dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property mode: The mode of the cluster. Valid values:
     * Reserver: the reserved mode
     * Flexible: the elastic mode
     */
    public mode: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
     */
    public computeResource: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    public dbClusterClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    public dbClusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
     * T8, T16, T32, and T52: 1
     * C8 and C32: 1 to 128
     */
    public dbNodeGroupCount: number | ros.IResolvable | undefined;

    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    public dbNodeStorage: number | ros.IResolvable | undefined;

    /**
     * @Property elasticIoResource: Elastic IO Unit
     * Note the flexible mode cluster will use this parameter.
     */
    public elasticIoResource: number | ros.IResolvable | undefined;

    /**
     * @Property executorCount: ExecutorCount
     */
    public executorCount: number | ros.IResolvable | undefined;

    /**
     * @Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * Valid values when the Period parameter is set to Year: 1, 2, and 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ADB::DBCluster`.
     *
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
        this.dbClusterCategory = props.dbClusterCategory;
        this.dbClusterVersion = props.dbClusterVersion;
        this.mode = props.mode;
        this.payType = props.payType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.computeResource = props.computeResource;
        this.dbClusterClass = props.dbClusterClass;
        this.dbClusterDescription = props.dbClusterDescription;
        this.dbNodeGroupCount = props.dbNodeGroupCount;
        this.dbNodeStorage = props.dbNodeStorage;
        this.elasticIoResource = props.elasticIoResource;
        this.executorCount = props.executorCount;
        this.period = props.period;
        this.periodType = props.periodType;
        this.resourceGroupId = props.resourceGroupId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterCategory: this.dbClusterCategory,
            dbClusterVersion: this.dbClusterVersion,
            mode: this.mode,
            payType: this.payType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            computeResource: this.computeResource,
            dbClusterClass: this.dbClusterClass,
            dbClusterDescription: this.dbClusterDescription,
            dbNodeGroupCount: this.dbNodeGroupCount,
            dbNodeStorage: this.dbNodeStorage,
            elasticIoResource: this.elasticIoResource,
            executorCount: this.executorCount,
            period: this.period,
            periodType: this.periodType,
            resourceGroupId: this.resourceGroupId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
