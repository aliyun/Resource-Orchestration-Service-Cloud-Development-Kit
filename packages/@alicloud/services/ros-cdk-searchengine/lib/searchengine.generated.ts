// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
 */
export interface RosInstanceProps {

    /**
     * @Property chargeType: The billing method. Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * @Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property qrsNum: The number of query nodes.
     */
    readonly qrsNum: number | ros.IResolvable;

    /**
     * @Property qrsSpec: The specification of query nodes.
     */
    readonly qrsSpec: string | ros.IResolvable;

    /**
     * @Property searcherDocSize: The storage size of single data node.
     */
    readonly searcherDocSize: number | ros.IResolvable;

    /**
     * @Property searcherNum: The number of data nodes.
     */
    readonly searcherNum: number | ros.IResolvable;

    /**
     * @Property searcherSpec: The specification of data nodes.
     */
    readonly searcherSpec: string | ros.IResolvable;

    /**
     * @Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('qrsNum', ros.requiredValidator)(properties.qrsNum));
    if(properties.qrsNum && (typeof properties.qrsNum) !== 'object') {
        errors.collect(ros.propertyValidator('qrsNum', ros.validateRange)({
            data: properties.qrsNum,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('qrsNum', ros.validateNumber)(properties.qrsNum));
    errors.collect(ros.propertyValidator('qrsSpec', ros.requiredValidator)(properties.qrsSpec));
    errors.collect(ros.propertyValidator('qrsSpec', ros.validateString)(properties.qrsSpec));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    if(properties.userName && (Array.isArray(properties.userName) || (typeof properties.userName) === 'string')) {
        errors.collect(ros.propertyValidator('userName', ros.validateLength)({
            data: properties.userName.length,
            min: 1,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('searcherSpec', ros.requiredValidator)(properties.searcherSpec));
    errors.collect(ros.propertyValidator('searcherSpec', ros.validateString)(properties.searcherSpec));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('searcherNum', ros.requiredValidator)(properties.searcherNum));
    if(properties.searcherNum && (typeof properties.searcherNum) !== 'object') {
        errors.collect(ros.propertyValidator('searcherNum', ros.validateRange)({
            data: properties.searcherNum,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('searcherNum', ros.validateNumber)(properties.searcherNum));
    errors.collect(ros.propertyValidator('searcherDocSize', ros.requiredValidator)(properties.searcherDocSize));
    errors.collect(ros.propertyValidator('searcherDocSize', ros.validateNumber)(properties.searcherDocSize));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SearchEngine::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SearchEngine::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Password: ros.stringToRosTemplate(properties.password),
      QrsNum: ros.numberToRosTemplate(properties.qrsNum),
      QrsSpec: ros.stringToRosTemplate(properties.qrsSpec),
      SearcherDocSize: ros.numberToRosTemplate(properties.searcherDocSize),
      SearcherNum: ros.numberToRosTemplate(properties.searcherNum),
      SearcherSpec: ros.stringToRosTemplate(properties.searcherSpec),
      UserName: ros.stringToRosTemplate(properties.userName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SearchEngine::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SearchEngine::Instance";

    /**
     * @Attribute Endpoint: The endpoint of instance.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chargeType: The billing method. Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property qrsNum: The number of query nodes.
     */
    public qrsNum: number | ros.IResolvable;

    /**
     * @Property qrsSpec: The specification of query nodes.
     */
    public qrsSpec: string | ros.IResolvable;

    /**
     * @Property searcherDocSize: The storage size of single data node.
     */
    public searcherDocSize: number | ros.IResolvable;

    /**
     * @Property searcherNum: The number of data nodes.
     */
    public searcherNum: number | ros.IResolvable;

    /**
     * @Property searcherSpec: The specification of data nodes.
     */
    public searcherSpec: string | ros.IResolvable;

    /**
     * @Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    public userName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of vSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chargeType = props.chargeType;
        this.password = props.password;
        this.qrsNum = props.qrsNum;
        this.qrsSpec = props.qrsSpec;
        this.searcherDocSize = props.searcherDocSize;
        this.searcherNum = props.searcherNum;
        this.searcherSpec = props.searcherSpec;
        this.userName = props.userName;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chargeType: this.chargeType,
            password: this.password,
            qrsNum: this.qrsNum,
            qrsSpec: this.qrsSpec,
            searcherDocSize: this.searcherDocSize,
            searcherNum: this.searcherNum,
            searcherSpec: this.searcherSpec,
            userName: this.userName,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
