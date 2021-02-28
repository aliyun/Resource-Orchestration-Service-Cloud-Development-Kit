// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::TSDB::HiTSDBInstance`
 */
export interface RosHiTSDBInstanceProps {

    /**
     * @Property instanceClass: The type of the instance. For more information, see Instance types:
     * tsdb.1x.basic: Basic Edition I
     * tsdb.3x.basic: Basic Edition II
     * tsdb.4x.basic: Basic Edition III
     * tsdb.12x.standard: Standard Edition I
     * tsdb.24x.standard: Standard Edition II
     * tsdb.48x.large: Ultimate Edition I
     * tsdb.96x.large: Ultimate Edition II and so on.
     */
    readonly instanceClass: string;

    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    readonly instanceStorage: number;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    readonly vpcId: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    readonly vSwitchId: string;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId: string;

    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    readonly duration?: number;

    /**
     * @Property instanceAlias: The alias of the instance.
     */
    readonly instanceAlias?: string;

    /**
     * @Property payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
     */
    readonly payType?: string;

    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    readonly pricingCycle?: string;

    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
     */
    readonly securityIpList?: string[];
}

/**
 * Determine whether the given properties match those of a `RosHiTSDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosHiTSDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosHiTSDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceStorage', ros.requiredValidator)(properties.instanceStorage));
    if(properties.instanceStorage && (typeof properties.instanceStorage) !== 'object') {
        errors.collect(ros.propertyValidator('instanceStorage', ros.validateRange)({
            data: properties.instanceStorage,
            min: 40,
            max: 32000,
          }));
    }
    errors.collect(ros.propertyValidator('instanceStorage', ros.validateNumber)(properties.instanceStorage));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceAlias', ros.validateString)(properties.instanceAlias));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('securityIpList', ros.listValidator(ros.validateString))(properties.securityIpList));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('instanceClass', ros.requiredValidator)(properties.instanceClass));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["POSTPAY","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    return errors.wrap('supplied properties not correct for "RosHiTSDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::TSDB::HiTSDBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosHiTSDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::TSDB::HiTSDBInstance` resource.
 */
// @ts-ignore TS6133
function rosHiTSDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHiTSDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceClass: ros.stringToRosTemplate(properties.instanceClass),
      InstanceStorage: ros.numberToRosTemplate(properties.instanceStorage),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      Duration: ros.numberToRosTemplate(properties.duration),
      InstanceAlias: ros.stringToRosTemplate(properties.instanceAlias),
      PayType: ros.stringToRosTemplate(properties.payType),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      SecurityIpList: ros.listMapper(ros.stringToRosTemplate)(properties.securityIpList),
    };
}

/**
 * A ROS template type:  `ALIYUN::TSDB::HiTSDBInstance`
 */
export class RosHiTSDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::HiTSDBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: Connection string of the instance.
     */
    public readonly attrConnectionString: any;

    /**
     * @Attribute EngineType: Engine type of the instance.
     */
    public readonly attrEngineType: any;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute OrderId: Order id of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PublicConnectionString: Public connection string of the instance.
     */
    public readonly attrPublicConnectionString: any;

    /**
     * @Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    public readonly attrReverseVpcIp: any;

    /**
     * @Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    public readonly attrReverseVpcPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceClass: The type of the instance. For more information, see Instance types:
     * tsdb.1x.basic: Basic Edition I
     * tsdb.3x.basic: Basic Edition II
     * tsdb.4x.basic: Basic Edition III
     * tsdb.12x.standard: Standard Edition I
     * tsdb.24x.standard: Standard Edition II
     * tsdb.48x.large: Ultimate Edition I
     * tsdb.96x.large: Ultimate Edition II and so on.
     */
    public instanceClass: string;

    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    public instanceStorage: number;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    public vpcId: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    public vSwitchId: string;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    public zoneId: string;

    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    public duration: number | undefined;

    /**
     * @Property instanceAlias: The alias of the instance.
     */
    public instanceAlias: string | undefined;

    /**
     * @Property payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
     */
    public payType: string | undefined;

    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    public pricingCycle: string | undefined;

    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
     */
    public securityIpList: string[] | undefined;

    /**
     * Create a new `ALIYUN::TSDB::HiTSDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHiTSDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHiTSDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = ros.Token.asString(this.getAtt('ConnectionString'));
        this.attrEngineType = ros.Token.asString(this.getAtt('EngineType'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPublicConnectionString = ros.Token.asString(this.getAtt('PublicConnectionString'));
        this.attrReverseVpcIp = ros.Token.asString(this.getAtt('ReverseVpcIp'));
        this.attrReverseVpcPort = ros.Token.asString(this.getAtt('ReverseVpcPort'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceClass = props.instanceClass;
        this.instanceStorage = props.instanceStorage;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.duration = props.duration;
        this.instanceAlias = props.instanceAlias;
        this.payType = props.payType;
        this.pricingCycle = props.pricingCycle;
        this.securityIpList = props.securityIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceClass: this.instanceClass,
            instanceStorage: this.instanceStorage,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            duration: this.duration,
            instanceAlias: this.instanceAlias,
            payType: this.payType,
            pricingCycle: this.pricingCycle,
            securityIpList: this.securityIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHiTSDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
