import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroup } from './nlb.generated';
export { RosServerGroup as ServerGroupProperty };
/**
 * Properties for defining a `ServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export interface ServerGroupProps {
    /**
     * Property healthCheckConfig: Health Check Config
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * Property serverGroupName: Name of ServerGroup
     */
    readonly serverGroupName: string | ros.IResolvable;
    /**
     * Property vpcId: ID of VPC
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property addressIpVersion: IP version of address
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    readonly connectionDrainEnabled?: boolean | ros.IResolvable;
    /**
     * Property connectionDrainTimeout: Time of graceful connection interruption
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;
    /**
     * Property persistenceEnabled: Whether to enable session persistence
     */
    readonly persistenceEnabled?: boolean | ros.IResolvable;
    /**
     * Property persistenceTimeout: Time of session persistence
     */
    readonly persistenceTimeout?: number | ros.IResolvable;
    /**
     * Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    readonly preserveClientIpEnabled?: boolean | ros.IResolvable;
    /**
     * Property protocol: Protocol of ServerGroup
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property scheduler: undefined
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * Property serverGroupType: Type of ServerGroup
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * Property servers: undefined
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::ServerGroup`, which is used to create a server group for a Network Load Balancer (NLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export declare class ServerGroup extends ros.Resource {
    /**
     * Attribute ServerGroupId: ID of ServerGroup
     */
    readonly attrServerGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
