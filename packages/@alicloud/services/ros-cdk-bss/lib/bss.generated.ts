// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
export interface RosResourcePackageProps {

    /**
     * @Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    readonly duration: number | ros.IResolvable;

    /**
     * @Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    readonly packageType: string | ros.IResolvable;

    /**
     * @Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
     */
    readonly productCode: string | ros.IResolvable;

    /**
     * @Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    readonly specification: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Duration of resource packs renewals. Valid values:
     * - When AutoRenewPeriodUnit is Year: 1, 2, 3. 
     * - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
     * Default is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
     */
    readonly autoRenewPeriodUnit?: string | ros.IResolvable;

    /**
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    readonly effectiveDate?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourcePackageProps`
 *
 * @param properties - the TypeScript properties of a `RosResourcePackageProps`
 *
 * @returns the result of the validation.
 */
function RosResourcePackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('productCode', ros.requiredValidator)(properties.productCode));
    errors.collect(ros.propertyValidator('productCode', ros.validateString)(properties.productCode));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('packageType', ros.requiredValidator)(properties.packageType));
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('specification', ros.requiredValidator)(properties.specification));
    errors.collect(ros.propertyValidator('specification', ros.validateString)(properties.specification));
    errors.collect(ros.propertyValidator('duration', ros.requiredValidator)(properties.duration));
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('effectiveDate', ros.validateString)(properties.effectiveDate));
    if(properties.autoRenewPeriodUnit && (typeof properties.autoRenewPeriodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriodUnit', ros.validateAllowedValues)({
          data: properties.autoRenewPeriodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriodUnit', ros.validateString)(properties.autoRenewPeriodUnit));
    return errors.wrap('supplied properties not correct for "RosResourcePackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BSS::ResourcePackage` resource
 *
 * @param properties - the TypeScript properties of a `RosResourcePackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BSS::ResourcePackage` resource.
 */
// @ts-ignore TS6133
function rosResourcePackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourcePackagePropsValidator(properties).assertSuccess();
    }
    return {
      'Duration': ros.numberToRosTemplate(properties.duration),
      'PackageType': ros.stringToRosTemplate(properties.packageType),
      'ProductCode': ros.stringToRosTemplate(properties.productCode),
      'Specification': ros.stringToRosTemplate(properties.specification),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'AutoRenewPeriodUnit': ros.stringToRosTemplate(properties.autoRenewPeriodUnit),
      'EffectiveDate': ros.stringToRosTemplate(properties.effectiveDate),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BSS::ResourcePackage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourcePackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
export class RosResourcePackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::ResourcePackage";

    /**
     * @Attribute InstanceId: The ID of the specified instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the specified order.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    public duration: number | ros.IResolvable;

    /**
     * @Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    public packageType: string | ros.IResolvable;

    /**
     * @Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
     */
    public productCode: string | ros.IResolvable;

    /**
     * @Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    public specification: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Duration of resource packs renewals. Valid values:
     * - When AutoRenewPeriodUnit is Year: 1, 2, 3. 
     * - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
     * Default is 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
     */
    public autoRenewPeriodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    public effectiveDate: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourcePackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourcePackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.duration = props.duration;
        this.packageType = props.packageType;
        this.productCode = props.productCode;
        this.specification = props.specification;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.autoRenewPeriodUnit = props.autoRenewPeriodUnit;
        this.effectiveDate = props.effectiveDate;
        this.pricingCycle = props.pricingCycle;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            duration: this.duration,
            packageType: this.packageType,
            productCode: this.productCode,
            specification: this.specification,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            autoRenewPeriodUnit: this.autoRenewPeriodUnit,
            effectiveDate: this.effectiveDate,
            pricingCycle: this.pricingCycle,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourcePackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWaitOrder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
 */
export interface RosWaitOrderProps {

    /**
     * @Property orderIds: A list of order ids.
     */
    readonly orderIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    readonly cancelOnDelete?: boolean | ros.IResolvable;

    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced. 
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    readonly waitForOrderProduced?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWaitOrderProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitOrderProps`
 *
 * @returns the result of the validation.
 */
function RosWaitOrderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cancelOnDelete', ros.validateBoolean)(properties.cancelOnDelete));
    errors.collect(ros.propertyValidator('orderIds', ros.requiredValidator)(properties.orderIds));
    if(properties.orderIds && (Array.isArray(properties.orderIds) || (typeof properties.orderIds) === 'string')) {
        errors.collect(ros.propertyValidator('orderIds', ros.validateLength)({
            data: properties.orderIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('orderIds', ros.listValidator(ros.validateAny))(properties.orderIds));
    errors.collect(ros.propertyValidator('waitForOrderProduced', ros.validateBoolean)(properties.waitForOrderProduced));
    return errors.wrap('supplied properties not correct for "RosWaitOrderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BSS::WaitOrder` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitOrderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BSS::WaitOrder` resource.
 */
// @ts-ignore TS6133
function rosWaitOrderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitOrderPropsValidator(properties).assertSuccess();
    }
    return {
      'OrderIds': ros.listMapper(ros.objectToRosTemplate)(properties.orderIds),
      'CancelOnDelete': ros.booleanToRosTemplate(properties.cancelOnDelete),
      'WaitForOrderProduced': ros.booleanToRosTemplate(properties.waitForOrderProduced),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BSS::WaitOrder`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WaitOrder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
 */
export class RosWaitOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::WaitOrder";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property orderIds: A list of order ids.
     */
    public orderIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    public cancelOnDelete: boolean | ros.IResolvable | undefined;

    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced. 
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    public waitForOrderProduced: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitOrderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitOrder.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.orderIds = props.orderIds;
        this.cancelOnDelete = props.cancelOnDelete;
        this.waitForOrderProduced = props.waitForOrderProduced;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            orderIds: this.orderIds,
            cancelOnDelete: this.cancelOnDelete,
            waitForOrderProduced: this.waitForOrderProduced,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitOrderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
