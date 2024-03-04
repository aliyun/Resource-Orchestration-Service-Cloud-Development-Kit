import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualHost } from './amqp.generated';
export { RosVirtualHost as VirtualHostProperty };
/**
 * Properties for defining a `VirtualHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export interface VirtualHostProps {
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::VirtualHost`, which is used to create a vhost.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVirtualHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export declare class VirtualHost extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VirtualHostProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VirtualHost: The name of the virtual host.
     */
    readonly attrVirtualHost: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualHostProps, enableResourcePropertyConstraint?: boolean);
}
