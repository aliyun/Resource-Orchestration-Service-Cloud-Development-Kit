import * as ros from '@alicloud/ros-cdk-core';
import { RosAccelerator } from './ga.generated';
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
export declare class Accelerator extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * Attribute AcceleratorName: The Name of the GA instance
     */
    readonly attrAcceleratorName: ros.IResolvable;
    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly attrAutoUseCoupon: ros.IResolvable;
    /**
     * Attribute Duration: The Duration of the GA instance
     */
    readonly attrDuration: ros.IResolvable;
    /**
     * Attribute OrderId: The OrderId of the GA instance
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute PaymentType: The Payment Typethe GA instance
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    readonly attrPricingCycle: ros.IResolvable;
    /**
     * Attribute Spec: The instance type of the GA instance
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AcceleratorProps, enableResourcePropertyConstraint?: boolean);
}
