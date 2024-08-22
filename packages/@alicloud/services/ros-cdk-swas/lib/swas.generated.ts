// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export interface RosInstanceProps {

    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('planId', ros.requiredValidator)(properties.planId));
    errors.collect(ros.propertyValidator('planId', ros.validateString)(properties.planId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PlanId': ros.stringToRosTemplate(properties.planId),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'DataDiskSize': ros.numberToRosTemplate(properties.dataDiskSize),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instance`, which is used to create a subscription simple application server.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instance";

    /**
     * @Attribute InnerIpAddress: The inner IP address of simple application server.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the simple application server.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PublicIpAddress: The public IP address of simple application server.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    public planId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    public dataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInnerIpAddress = this.getAtt('InnerIpAddress');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPublicIpAddress = this.getAtt('PublicIpAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.period = props.period;
        this.planId = props.planId;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dataDiskSize = props.dataDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            period: this.period,
            planId: this.planId,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dataDiskSize: this.dataDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export interface RosInstancesProps {

    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;

    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('planId', ros.requiredValidator)(properties.planId));
    errors.collect(ros.propertyValidator('planId', ros.validateString)(properties.planId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PlanId': ros.stringToRosTemplate(properties.planId),
      'Amount': ros.numberToRosTemplate(properties.amount),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'DataDiskSize': ros.numberToRosTemplate(properties.dataDiskSize),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instances`, which is used to create subscription simple application servers.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instances";

    /**
     * @Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
     */
    public readonly attrInnerIpAddresses: ros.IResolvable;

    /**
     * @Attribute InstanceIds: The IDs of the simple application servers.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute PublicIpAddresses: The public IP addresses of simple application servers.
     */
    public readonly attrPublicIpAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    public planId: string | ros.IResolvable;

    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    public amount: number | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    public dataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInnerIpAddresses = this.getAtt('InnerIpAddresses');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrPublicIpAddresses = this.getAtt('PublicIpAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.period = props.period;
        this.planId = props.planId;
        this.amount = props.amount;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dataDiskSize = props.dataDiskSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            period: this.period,
            planId: this.planId,
            amount: this.amount,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dataDiskSize: this.dataDiskSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
