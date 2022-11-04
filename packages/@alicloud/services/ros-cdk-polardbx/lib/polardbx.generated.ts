// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::PolarDBX::DBInstance`
 */
export interface RosDBInstanceProps {

    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    readonly dbNodeCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property primaryZone: The primary zone.
     */
    readonly primaryZone: string | ros.IResolvable;

    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    readonly topologyType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryZone: The secondary zone.
     */
    readonly secondaryZone?: string | ros.IResolvable;

    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    readonly tertiaryZone?: string | ros.IResolvable;

    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topologyType', ros.requiredValidator)(properties.topologyType));
    if(properties.topologyType && (typeof properties.topologyType) !== 'object') {
        errors.collect(ros.propertyValidator('topologyType', ros.validateAllowedValues)({
          data: properties.topologyType,
          allowedValues: ["1azone","3azones"],
        }));
    }
    errors.collect(ros.propertyValidator('topologyType', ros.validateString)(properties.topologyType));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.requiredValidator)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('secondaryZone', ros.validateString)(properties.secondaryZone));
    errors.collect(ros.propertyValidator('tertiaryZone', ros.validateString)(properties.tertiaryZone));
    errors.collect(ros.propertyValidator('dbNodeCount', ros.requiredValidator)(properties.dbNodeCount));
    if(properties.dbNodeCount && (typeof properties.dbNodeCount) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeCount', ros.validateRange)({
            data: properties.dbNodeCount,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbNodeCount', ros.validateNumber)(properties.dbNodeCount));
    errors.collect(ros.propertyValidator('primaryZone', ros.requiredValidator)(properties.primaryZone));
    errors.collect(ros.propertyValidator('primaryZone', ros.validateString)(properties.primaryZone));
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBNodeClass: ros.stringToRosTemplate(properties.dbNodeClass),
      DBNodeCount: ros.numberToRosTemplate(properties.dbNodeCount),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      PrimaryZone: ros.stringToRosTemplate(properties.primaryZone),
      TopologyType: ros.stringToRosTemplate(properties.topologyType),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.stringToRosTemplate(properties.period),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecondaryZone: ros.stringToRosTemplate(properties.secondaryZone),
      TertiaryZone: ros.stringToRosTemplate(properties.tertiaryZone),
      UsedTime: ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * A ROS template type:  `ALIYUN::PolarDBX::DBInstance`
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::DBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceName: The name of the instance that you create.
     */
    public readonly attrDbInstanceName: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    public dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    public dbNodeCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property primaryZone: The primary zone.
     */
    public primaryZone: string | ros.IResolvable;

    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    public topologyType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZone: The secondary zone.
     */
    public secondaryZone: string | ros.IResolvable | undefined;

    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    public tertiaryZone: string | ros.IResolvable | undefined;

    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PolarDBX::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceName = this.getAtt('DBInstanceName');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbNodeClass = props.dbNodeClass;
        this.dbNodeCount = props.dbNodeCount;
        this.engineVersion = props.engineVersion;
        this.primaryZone = props.primaryZone;
        this.topologyType = props.topologyType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.autoRenew = props.autoRenew;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.payType = props.payType;
        this.period = props.period;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryZone = props.secondaryZone;
        this.tertiaryZone = props.tertiaryZone;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbNodeClass: this.dbNodeClass,
            dbNodeCount: this.dbNodeCount,
            engineVersion: this.engineVersion,
            primaryZone: this.primaryZone,
            topologyType: this.topologyType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            autoRenew: this.autoRenew,
            dbInstanceDescription: this.dbInstanceDescription,
            payType: this.payType,
            period: this.period,
            resourceGroupId: this.resourceGroupId,
            secondaryZone: this.secondaryZone,
            tertiaryZone: this.tertiaryZone,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
