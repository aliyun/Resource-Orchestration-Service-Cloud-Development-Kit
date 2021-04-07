import * as ros from '@alicloud/ros-cdk-core';
import { RosAccelerator } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccelerator as AcceleratorProperty };

/**
 * Properties for defining a `ALIYUN::GA::Accelerator`
 */
export interface AcceleratorProps {

    /**
     * Property duration: The Duration of the GA instance
     */
    readonly duration: string | ros.IResolvable;

    /**
     * Property pricingCycle: The PricingCycle of the GA instance.
     */
    readonly pricingCycle: string | ros.IResolvable;

    /**
     * Property spec: The instance type of the GA instance
     */
    readonly spec: string | ros.IResolvable;

    /**
     * Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string | ros.IResolvable;

    /**
     * Property autoPay: The AutoPay of the GA instance.
     */
    readonly autoPay?: string | ros.IResolvable;

    /**
     * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GA::Accelerator`
 */
export class Accelerator extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public readonly attrAcceleratorId: ros.IResolvable;

    /**
     * Attribute AcceleratorName: The Name of the GA instance
     */
    public readonly attrAcceleratorName: ros.IResolvable;

    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    public readonly attrAutoPay: ros.IResolvable;

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public readonly attrAutoUseCoupon: ros.IResolvable;

    /**
     * Attribute Duration: The Duration of the GA instance
     */
    public readonly attrDuration: ros.IResolvable;

    /**
     * Attribute OrderId: The OrderId of the GA instance
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PaymentType: The Payment Typethe GA instance
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public readonly attrPricingCycle: ros.IResolvable;

    /**
     * Attribute Spec: The instance type of the GA instance
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AcceleratorProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccelerator = new RosAccelerator(this, id,  {
            acceleratorName: props.acceleratorName,
            autoUseCoupon: props.autoUseCoupon,
            pricingCycle: props.pricingCycle,
            duration: props.duration,
            autoPay: props.autoPay,
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
