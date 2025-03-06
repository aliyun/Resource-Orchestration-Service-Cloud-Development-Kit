import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessLogsAddition } from './slb.generated';
export { RosAccessLogsAddition as AccessLogsAdditionProperty };
/**
 * Properties for defining a `AccessLogsAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
 */
export interface AccessLogsAdditionProps {
    /**
     * Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property logProject: The log project name.
     */
    readonly logProject: string | ros.IResolvable;
    /**
     * Property logStore: The log store name.
     */
    readonly logStore: string | ros.IResolvable;
}
/**
 * Represents a `AccessLogsAddition`.
 */
export interface IAccessLogsAddition extends ros.IResource {
    readonly props: AccessLogsAdditionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::AccessLogsAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessLogsAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
 */
export declare class AccessLogsAddition extends ros.Resource implements IAccessLogsAddition {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessLogsAdditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessLogsAdditionProps, enableResourcePropertyConstraint?: boolean);
}
