import * as ros from '@alicloud/ros-cdk-core';
import { RosAccelerator } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccelerator as AcceleratorProperty };

/**
 * Properties for defining a `Accelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export interface AcceleratorProps {

    /**
     * Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to pay automatically.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;

    /**
     * Property bandwidthBillingType: Bandwidth billing method.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;

    /**
     * Property duration: Length of purchase.
     */
    readonly duration?: string | ros.IResolvable;

    /**
     * Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    readonly enableCrossBorder?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property ipSetConfig: Accelerate zone configuration.
     */
    readonly ipSetConfig?: RosAccelerator.IpSetConfigProperty | ros.IResolvable;

    /**
     * Property pricingCycle: Billing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ResourceGroup Id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property spec: Specifications of Global Acceleration Instances.
     */
    readonly spec?: string | ros.IResolvable;
}

/**
 * Represents a `Accelerator`.
 */
export interface IAccelerator extends ros.IResource {
    readonly props: AcceleratorProps;

    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute AcceleratorName: The Name of the GA instance
     */
    readonly attrAcceleratorName: ros.IResolvable | string;

    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly attrAutoUseCoupon: ros.IResolvable | string;

    /**
     * Attribute Duration: The Duration of the GA instance
     */
    readonly attrDuration: ros.IResolvable | string;

    /**
     * Attribute OrderId: The OrderId of the GA instance
     */
    readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The Payment Typethe GA instance
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    readonly attrPricingCycle: ros.IResolvable | string;

    /**
     * Attribute Spec: The instance type of the GA instance
     */
    readonly attrSpec: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::Accelerator`, which is used to create a Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccelerator`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export class Accelerator extends ros.Resource implements IAccelerator {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AcceleratorProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute AcceleratorName: The Name of the GA instance
     */
    public readonly attrAcceleratorName: ros.IResolvable | string;

    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    public readonly attrAutoPay: ros.IResolvable | string;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public readonly attrAutoUseCoupon: ros.IResolvable | string;

    /**
     * Attribute Duration: The Duration of the GA instance
     */
    public readonly attrDuration: ros.IResolvable | string;

    /**
     * Attribute OrderId: The OrderId of the GA instance
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The Payment Typethe GA instance
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public readonly attrPricingCycle: ros.IResolvable | string;

    /**
     * Attribute Spec: The instance type of the GA instance
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AcceleratorProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccelerator = new RosAccelerator(this, id,  {
            bandwidthBillingType: props.bandwidthBillingType,
            acceleratorName: props.acceleratorName,
            resourceGroupId: props.resourceGroupId,
            autoUseCoupon: props.autoUseCoupon,
            instanceChargeType: props.instanceChargeType,
            pricingCycle: props.pricingCycle,
            enableCrossBorder: props.enableCrossBorder === undefined || props.enableCrossBorder === null ? false : props.enableCrossBorder,
            duration: props.duration,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            ipSetConfig: props.ipSetConfig,
            spec: props.spec,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccelerator;
        this.attrAcceleratorId = rosAccelerator.attrAcceleratorId;
        this.attrAcceleratorName = rosAccelerator.attrAcceleratorName;
        this.attrAutoPay = rosAccelerator.attrAutoPay;
        this.attrAutoUseCoupon = rosAccelerator.attrAutoUseCoupon;
        this.attrDuration = rosAccelerator.attrDuration;
        this.attrOrderId = rosAccelerator.attrOrderId;
        this.attrPaymentType = rosAccelerator.attrPaymentType;
        this.attrPricingCycle = rosAccelerator.attrPricingCycle;
        this.attrSpec = rosAccelerator.attrSpec;
    }
}
