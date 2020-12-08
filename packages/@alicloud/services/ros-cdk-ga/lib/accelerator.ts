import * as ros from '@alicloud/ros-cdk-core';
import { RosAccelerator } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccelerator as AcceleratorProperty };

/**
 * Properties for defining a `ALIYUN::GA::Accelerator`
 */
export interface AcceleratorProps {

    /**
     * @Property duration: The Duration of the GA instance
     */
    readonly duration: string;

    /**
     * @Property pricingCycle: The PricingCycle of the GA instance.
     */
    readonly pricingCycle: string;

    /**
     * @Property spec: The instance type of the GA instance
     */
    readonly spec: string;

    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string;

    /**
     * @Property autoPay: The AutoPay of the GA instance.
     */
    readonly autoPay?: string;

    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string;
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
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public readonly attrAcceleratorId: any;

    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    public readonly attrAcceleratorName: any;

    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    public readonly attrAutoPay: any;

    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public readonly attrAutoUseCoupon: any;

    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    public readonly attrDuration: any;

    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    public readonly attrPaymentType: any;

    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public readonly attrPricingCycle: any;

    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    public readonly attrSpec: any;

    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
