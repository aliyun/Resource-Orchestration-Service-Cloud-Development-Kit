// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::GA::Accelerator`
 */
export interface RosAcceleratorProps {

    /**
     * @Property duration: The Duration of the GA instance
     */
    readonly duration: string | ros.IResolvable;

    /**
     * @Property pricingCycle: The PricingCycle of the GA instance.
     */
    readonly pricingCycle: string | ros.IResolvable;

    /**
     * @Property spec: The instance type of the GA instance
     */
    readonly spec: string | ros.IResolvable;

    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string | ros.IResolvable;

    /**
     * @Property autoPay: The AutoPay of the GA instance.
     */
    readonly autoPay?: string | ros.IResolvable;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAcceleratorProps`
 *
 * @param properties - the TypeScript properties of a `RosAcceleratorProps`
 *
 * @returns the result of the validation.
 */
function RosAcceleratorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('acceleratorName', ros.validateString)(properties.acceleratorName));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    errors.collect(ros.propertyValidator('pricingCycle', ros.requiredValidator)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('duration', ros.requiredValidator)(properties.duration));
    errors.collect(ros.propertyValidator('duration', ros.validateString)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateString)(properties.autoPay));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "RosAcceleratorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator` resource
 *
 * @param properties - the TypeScript properties of a `RosAcceleratorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Accelerator` resource.
 */
// @ts-ignore TS6133
function rosAcceleratorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAcceleratorPropsValidator(properties).assertSuccess();
    }
    return {
      Duration: ros.stringToRosTemplate(properties.duration),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      Spec: ros.stringToRosTemplate(properties.spec),
      AcceleratorName: ros.stringToRosTemplate(properties.acceleratorName),
      AutoPay: ros.stringToRosTemplate(properties.autoPay),
      AutoUseCoupon: ros.stringToRosTemplate(properties.autoUseCoupon),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::Accelerator`
 */
export class RosAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Accelerator";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    public readonly attrAcceleratorName: ros.IResolvable;

    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    public readonly attrDuration: ros.IResolvable;

    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public readonly attrPricingCycle: ros.IResolvable;

    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    public readonly attrSpec: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property duration: The Duration of the GA instance
     */
    public duration: string | ros.IResolvable;

    /**
     * @Property pricingCycle: The PricingCycle of the GA instance.
     */
    public pricingCycle: string | ros.IResolvable;

    /**
     * @Property spec: The instance type of the GA instance
     */
    public spec: string | ros.IResolvable;

    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    public acceleratorName: string | ros.IResolvable | undefined;

    /**
     * @Property autoPay: The AutoPay of the GA instance.
     */
    public autoPay: string | ros.IResolvable | undefined;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public autoUseCoupon: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAcceleratorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccelerator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = this.getAtt('AcceleratorId');
        this.attrAcceleratorName = this.getAtt('AcceleratorName');
        this.attrAutoPay = this.getAtt('AutoPay');
        this.attrAutoUseCoupon = this.getAtt('AutoUseCoupon');
        this.attrDuration = this.getAtt('Duration');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPricingCycle = this.getAtt('PricingCycle');
        this.attrSpec = this.getAtt('Spec');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.spec = props.spec;
        this.acceleratorName = props.acceleratorName;
        this.autoPay = props.autoPay;
        this.autoUseCoupon = props.autoUseCoupon;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            spec: this.spec,
            acceleratorName: this.acceleratorName,
            autoPay: this.autoPay,
            autoUseCoupon: this.autoUseCoupon,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAcceleratorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackage`
 */
export interface RosBandwidthPackageProps {

    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property type: The type of the bandwidth plan
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property autoPay: The AutoPay of the bandwidth
     */
    readonly autoPay?: string | ros.IResolvable;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string | ros.IResolvable;

    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string | ros.IResolvable;

    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string | ros.IResolvable;

    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string | ros.IResolvable;

    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string | ros.IResolvable;

    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property duration:
     */
    readonly duration?: string | ros.IResolvable;

    /**
     * @Property pricingCycle:
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthType', ros.validateString)(properties.bandwidthType));
    errors.collect(ros.propertyValidator('cbnGeographicRegionIdB', ros.validateString)(properties.cbnGeographicRegionIdB));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('cbnGeographicRegionIdA', ros.validateString)(properties.cbnGeographicRegionIdA));
    errors.collect(ros.propertyValidator('autoUseCoupon', ros.validateString)(properties.autoUseCoupon));
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ratio', ros.validateString)(properties.ratio));
    errors.collect(ros.propertyValidator('duration', ros.validateString)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateString)(properties.autoPay));
    errors.collect(ros.propertyValidator('billingType', ros.validateString)(properties.billingType));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      Type: ros.stringToRosTemplate(properties.type),
      AutoPay: ros.stringToRosTemplate(properties.autoPay),
      AutoUseCoupon: ros.stringToRosTemplate(properties.autoUseCoupon),
      BandwidthType: ros.stringToRosTemplate(properties.bandwidthType),
      BillingType: ros.stringToRosTemplate(properties.billingType),
      CbnGeographicRegionIdA: ros.stringToRosTemplate(properties.cbnGeographicRegionIdA),
      CbnGeographicRegionIdB: ros.stringToRosTemplate(properties.cbnGeographicRegionIdB),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Duration: ros.stringToRosTemplate(properties.duration),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      Ratio: ros.stringToRosTemplate(properties.ratio),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackage`
 */
export class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AutoPay: The AutoPay of the bandwidth
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    public readonly attrBandwidthPackageName: ros.IResolvable;

    /**
     * @Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public readonly attrBandwidthType: ros.IResolvable;

    /**
     * @Attribute BillingType: The BillingType of the bandwidth
     */
    public readonly attrBillingType: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable;

    /**
     * @Attribute ChargeType: The ChargeType of the bandwidth
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute PaymentType: The Payment Type of the bandwidth
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Ratio: The Ratio of the bandwidth
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * @Attribute Type: The type of the bandwidth plan
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property type: The type of the bandwidth plan
     */
    public type: string | ros.IResolvable;

    /**
     * @Property autoPay: The AutoPay of the bandwidth
     */
    public autoPay: string | ros.IResolvable | undefined;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    public autoUseCoupon: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    public bandwidthType: string | ros.IResolvable | undefined;

    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    public billingType: string | ros.IResolvable | undefined;

    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    public cbnGeographicRegionIdA: string | ros.IResolvable | undefined;

    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    public cbnGeographicRegionIdB: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property duration:
     */
    public duration: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle:
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    public ratio: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoPay = this.getAtt('AutoPay');
        this.attrAutoUseCoupon = this.getAtt('AutoUseCoupon');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.attrBandwidthPackageName = this.getAtt('BandwidthPackageName');
        this.attrBandwidthType = this.getAtt('BandwidthType');
        this.attrBillingType = this.getAtt('BillingType');
        this.attrCbnGeographicRegionIdA = this.getAtt('CbnGeographicRegionIdA');
        this.attrCbnGeographicRegionIdB = this.getAtt('CbnGeographicRegionIdB');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRatio = this.getAtt('Ratio');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.type = props.type;
        this.autoPay = props.autoPay;
        this.autoUseCoupon = props.autoUseCoupon;
        this.bandwidthType = props.bandwidthType;
        this.billingType = props.billingType;
        this.cbnGeographicRegionIdA = props.cbnGeographicRegionIdA;
        this.cbnGeographicRegionIdB = props.cbnGeographicRegionIdB;
        this.chargeType = props.chargeType;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.ratio = props.ratio;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            type: this.type,
            autoPay: this.autoPay,
            autoUseCoupon: this.autoUseCoupon,
            bandwidthType: this.bandwidthType,
            billingType: this.billingType,
            cbnGeographicRegionIdA: this.cbnGeographicRegionIdA,
            cbnGeographicRegionIdB: this.cbnGeographicRegionIdB,
            chargeType: this.chargeType,
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            ratio: this.ratio,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export interface RosBandwidthPackageAcceleratorAdditionProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackageAcceleratorAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageAcceleratorAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageAcceleratorAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::BandwidthPackageAcceleratorAddition` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackageAcceleratorAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export class RosBandwidthPackageAcceleratorAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackageAcceleratorAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    public bandwidthPackageId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackageAcceleratorAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcceleratorId = this.getAtt('AcceleratorId');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.bandwidthPackageId = props.bandwidthPackageId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            bandwidthPackageId: this.bandwidthPackageId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackageAcceleratorAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`
 */
export interface RosEndpointGroupProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number | ros.IResolvable;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string | ros.IResolvable;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number | ros.IResolvable;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    readonly thresholdCount?: number | ros.IResolvable;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEndpointGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckIntervalSeconds', ros.validateNumber)(properties.healthCheckIntervalSeconds));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.requiredValidator)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('endpointGroupRegion', ros.validateString)(properties.endpointGroupRegion));
    errors.collect(ros.propertyValidator('trafficPercentage', ros.validateNumber)(properties.trafficPercentage));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["tcp","http","https"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    errors.collect(ros.propertyValidator('thresholdCount', ros.validateNumber)(properties.thresholdCount));
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.requiredValidator)(properties.endpointConfigurations));
    if(properties.endpointConfigurations && (Array.isArray(properties.endpointConfigurations) || (typeof properties.endpointConfigurations) === 'string')) {
        errors.collect(ros.propertyValidator('endpointConfigurations', ros.validateLength)({
            data: properties.endpointConfigurations.length,
            min: 1,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('endpointConfigurations', ros.listValidator(RosEndpointGroup_EndpointConfigurationsPropertyValidator))(properties.endpointConfigurations));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosEndpointGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointGroupPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      EndpointConfigurations: ros.listMapper(rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate)(properties.endpointConfigurations),
      EndpointGroupRegion: ros.stringToRosTemplate(properties.endpointGroupRegion),
      ListenerId: ros.stringToRosTemplate(properties.listenerId),
      Description: ros.stringToRosTemplate(properties.description),
      HealthCheckIntervalSeconds: ros.numberToRosTemplate(properties.healthCheckIntervalSeconds),
      HealthCheckPath: ros.stringToRosTemplate(properties.healthCheckPath),
      HealthCheckPort: ros.numberToRosTemplate(properties.healthCheckPort),
      HealthCheckProtocol: ros.stringToRosTemplate(properties.healthCheckProtocol),
      Name: ros.stringToRosTemplate(properties.name),
      ThresholdCount: ros.numberToRosTemplate(properties.thresholdCount),
      TrafficPercentage: ros.numberToRosTemplate(properties.trafficPercentage),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::EndpointGroup`
 */
export class RosEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public readonly attrEndpointGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property endpointConfigurations:
     */
    public endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    public endpointGroupRegion: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    public healthCheckIntervalSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    public healthCheckPath: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    public healthCheckPort: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    public healthCheckProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the endpoint group.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    public thresholdCount: number | ros.IResolvable | undefined;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    public trafficPercentage: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpointGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointGroupId = this.getAtt('EndpointGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.endpointConfigurations = props.endpointConfigurations;
        this.endpointGroupRegion = props.endpointGroupRegion;
        this.listenerId = props.listenerId;
        this.description = props.description;
        this.healthCheckIntervalSeconds = props.healthCheckIntervalSeconds;
        this.healthCheckPath = props.healthCheckPath;
        this.healthCheckPort = props.healthCheckPort;
        this.healthCheckProtocol = props.healthCheckProtocol;
        this.name = props.name;
        this.thresholdCount = props.thresholdCount;
        this.trafficPercentage = props.trafficPercentage;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            endpointConfigurations: this.endpointConfigurations,
            endpointGroupRegion: this.endpointGroupRegion,
            listenerId: this.listenerId,
            description: this.description,
            healthCheckIntervalSeconds: this.healthCheckIntervalSeconds,
            healthCheckPath: this.healthCheckPath,
            healthCheckPort: this.healthCheckPort,
            healthCheckProtocol: this.healthCheckProtocol,
            name: this.name,
            thresholdCount: this.thresholdCount,
            trafficPercentage: this.trafficPercentage,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEndpointGroup {
    /**
     * @stability external
     */
    export interface EndpointConfigurationsProperty {
        /**
         * @Property type: The type of endpoint in the endpoint group. Valid values:
     * EIP: eip address
     * PublicIp: public IP address
     * Ip: custom IP address
     * Domain: custom domain name
     *
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The IP address or domain name of endpoint in the endpoint group.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property weight: The weight of endpoint N in the endpoint group.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "EndpointConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::EndpointGroup.EndpointConfigurations` resource.
 */
// @ts-ignore TS6133
function rosEndpointGroupEndpointConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpointGroup_EndpointConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::GA::IpSets`
 */
export interface RosIpSetsProps {

    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIpSetsProps`
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the result of the validation.
 */
function RosIpSetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accelerateRegion', ros.requiredValidator)(properties.accelerateRegion));
    if(properties.accelerateRegion && (Array.isArray(properties.accelerateRegion) || (typeof properties.accelerateRegion) === 'string')) {
        errors.collect(ros.propertyValidator('accelerateRegion', ros.validateLength)({
            data: properties.accelerateRegion.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('accelerateRegion', ros.listValidator(RosIpSets_AccelerateRegionPropertyValidator))(properties.accelerateRegion));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    return errors.wrap('supplied properties not correct for "RosIpSetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource
 *
 * @param properties - the TypeScript properties of a `RosIpSetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets` resource.
 */
// @ts-ignore TS6133
function rosIpSetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpSetsPropsValidator(properties).assertSuccess();
    }
    return {
      AccelerateRegion: ros.listMapper(rosIpSetsAccelerateRegionPropertyToRosTemplate)(properties.accelerateRegion),
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::IpSets`
 */
export class RosIpSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::IpSets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    public readonly attrAccelerateRegionIds: ros.IResolvable;

    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    public readonly attrIpSetIds: ros.IResolvable;

    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    public readonly attrIpVersions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accelerateRegion:
     */
    public accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::GA::IpSets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpSetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpSets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccelerateRegionIds = this.getAtt('AccelerateRegionIds');
        this.attrIpSetIds = this.getAtt('IpSetIds');
        this.attrIpVersions = this.getAtt('IpVersions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accelerateRegion = props.accelerateRegion;
        this.acceleratorId = props.acceleratorId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accelerateRegion: this.accelerateRegion,
            acceleratorId: this.acceleratorId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpSetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpSets {
    /**
     * @stability external
     */
    export interface AccelerateRegionProperty {
        /**
         * @Property ipVersion: IP version. Valid values: IPv4, IPv6
         */
        readonly ipVersion?: string | ros.IResolvable;
        /**
         * @Property bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
     * Note
     * The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
     * The total bandwidth for all regions must not exceed the amount included in your basic
     * bandwidth plan.
         */
        readonly bandwidth: number | ros.IResolvable;
        /**
         * @Property accelerateRegionId: The ID of the region where traffic is to be accelerated.
         */
        readonly accelerateRegionId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccelerateRegionProperty`
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the result of the validation.
 */
function RosIpSets_AccelerateRegionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipVersion && (typeof properties.ipVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ipVersion', ros.validateAllowedValues)({
          data: properties.ipVersion,
          allowedValues: ["IPv4","IPv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.requiredValidator)(properties.accelerateRegionId));
    errors.collect(ros.propertyValidator('accelerateRegionId', ros.validateString)(properties.accelerateRegionId));
    return errors.wrap('supplied properties not correct for "AccelerateRegionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource
 *
 * @param properties - the TypeScript properties of a `AccelerateRegionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::IpSets.AccelerateRegion` resource.
 */
// @ts-ignore TS6133
function rosIpSetsAccelerateRegionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpSets_AccelerateRegionPropertyValidator(properties).assertSuccess();
    return {
      IpVersion: ros.stringToRosTemplate(properties.ipVersion),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      AccelerateRegionId: ros.stringToRosTemplate(properties.accelerateRegionId),
    };
}

/**
 * Properties for defining a `ALIYUN::GA::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string | ros.IResolvable;

    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('portRanges', ros.requiredValidator)(properties.portRanges));
    if(properties.portRanges && (Array.isArray(properties.portRanges) || (typeof properties.portRanges) === 'string')) {
        errors.collect(ros.propertyValidator('portRanges', ros.validateLength)({
            data: properties.portRanges.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('portRanges', ros.listValidator(RosListener_PortRangesPropertyValidator))(properties.portRanges));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('acceleratorId', ros.requiredValidator)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('acceleratorId', ros.validateString)(properties.acceleratorId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.clientAffinity && (typeof properties.clientAffinity) !== 'object') {
        errors.collect(ros.propertyValidator('clientAffinity', ros.validateAllowedValues)({
          data: properties.clientAffinity,
          allowedValues: ["NONE","SOURCE_IP"],
        }));
    }
    errors.collect(ros.propertyValidator('clientAffinity', ros.validateString)(properties.clientAffinity));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      AcceleratorId: ros.stringToRosTemplate(properties.acceleratorId),
      PortRanges: ros.listMapper(rosListenerPortRangesPropertyToRosTemplate)(properties.portRanges),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      ClientAffinity: ros.stringToRosTemplate(properties.clientAffinity),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::GA::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    public acceleratorId: string | ros.IResolvable;

    /**
     * @Property portRanges:
     */
    public portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    public clientAffinity: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the listener.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceleratorId = props.acceleratorId;
        this.portRanges = props.portRanges;
        this.protocol = props.protocol;
        this.clientAffinity = props.clientAffinity;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceleratorId: this.acceleratorId,
            portRanges: this.portRanges,
            protocol: this.protocol,
            clientAffinity: this.clientAffinity,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PortRangesProperty {
        /**
         * @Property fromPort: The first listening port of the port range specified for receiving and forwarding
     * requests to endpoints.
         */
        readonly fromPort: number | ros.IResolvable;
        /**
         * @Property toPort: The last listening port of the port range specified for receiving and forwarding requests
     * to endpoints.
         */
        readonly toPort: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortRangesProperty`
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PortRangesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fromPort', ros.requiredValidator)(properties.fromPort));
    errors.collect(ros.propertyValidator('fromPort', ros.validateNumber)(properties.fromPort));
    errors.collect(ros.propertyValidator('toPort', ros.requiredValidator)(properties.toPort));
    errors.collect(ros.propertyValidator('toPort', ros.validateNumber)(properties.toPort));
    return errors.wrap('supplied properties not correct for "PortRangesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource
 *
 * @param properties - the TypeScript properties of a `PortRangesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GA::Listener.PortRanges` resource.
 */
// @ts-ignore TS6133
function rosListenerPortRangesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PortRangesPropertyValidator(properties).assertSuccess();
    return {
      FromPort: ros.numberToRosTemplate(properties.fromPort),
      ToPort: ros.numberToRosTemplate(properties.toPort),
    };
}
