import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitOrder } from './bss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitOrder as WaitOrderProperty };

/**
 * Properties for defining a `WaitOrder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
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
 * Represents a `WaitOrder`.
 */
export interface IWaitOrder extends ros.IResource {
    readonly props: WaitOrderProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BSS::WaitOrder`, which is used to wait for orders to be completed.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitOrder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
 */
export class WaitOrder extends ros.Resource implements IWaitOrder {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WaitOrderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitOrderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWaitOrder = new RosWaitOrder(this, id,  {
            cancelOnDelete: props.cancelOnDelete === undefined || props.cancelOnDelete === null ? true : props.cancelOnDelete,
            orderIds: props.orderIds,
            waitForOrderProduced: props.waitForOrderProduced === undefined || props.waitForOrderProduced === null ? false : props.waitForOrderProduced,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitOrder;
    }
}
