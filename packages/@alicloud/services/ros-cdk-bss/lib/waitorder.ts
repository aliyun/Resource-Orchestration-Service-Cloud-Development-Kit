import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitOrder } from './bss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitOrder as WaitOrderProperty };

/**
 * Properties for defining a `ALIYUN::BSS::WaitOrder`
 */
export interface WaitOrderProps {

    /**
     * Property orderIds: A list of order ids.
     */
    readonly orderIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    readonly cancelOnDelete?: boolean | ros.IResolvable;

    /**
     * Property waitForOrderProduced: Wait util all orders related ROS resources are produced. 
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    readonly waitForOrderProduced?: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::BSS::WaitOrder`
 */
export class WaitOrder extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitOrderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWaitOrder = new RosWaitOrder(this, id,  {
            cancelOnDelete: props.cancelOnDelete === undefined || props.cancelOnDelete === null ? true : props.cancelOnDelete,
            orderIds: props.orderIds,
            waitForOrderProduced: props.waitForOrderProduced === undefined || props.waitForOrderProduced === null ? false : props.waitForOrderProduced,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitOrder;
    }
}
