import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::BSS::WaitOrder`
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
 * A ROS template type:  `ALIYUN::BSS::WaitOrder`
 */
export declare class RosWaitOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::WaitOrder";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property orderIds: A list of order ids.
     */
    orderIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    cancelOnDelete: boolean | ros.IResolvable | undefined;
    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    waitForOrderProduced: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitOrderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
