import * as ros from '@alicloud/ros-cdk-core';
import { RosAccelerator } from './ga.generated';
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
export declare class Accelerator extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    readonly attrAcceleratorId: any;
    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    readonly attrAcceleratorName: any;
    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    readonly attrAutoPay: any;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly attrAutoUseCoupon: any;
    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    readonly attrDuration: any;
    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    readonly attrPaymentType: any;
    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    readonly attrPricingCycle: any;
    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    readonly attrSpec: any;
    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AcceleratorProps, enableResourcePropertyConstraint?: boolean);
}
