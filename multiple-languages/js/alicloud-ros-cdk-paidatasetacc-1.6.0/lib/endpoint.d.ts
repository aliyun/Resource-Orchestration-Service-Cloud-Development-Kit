import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpoint } from './paidatasetacc.generated';
export { RosEndpoint as EndpointProperty };
/**
 * Properties for defining a `Endpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export interface EndpointProps {
    /**
     * Property instanceId: The ID of the acceleration instance
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property name: The name of the Mount Target.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property type: The network type of the Mount Target.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vswitchId: The ID of the vSwitch.
     */
    readonly vswitchId?: string | ros.IResolvable;
}
/**
 * Represents a `Endpoint`.
 */
export interface IEndpoint extends ros.IResource {
    readonly props: EndpointProps;
    /**
     * Attribute EndpointId: The ID of the Mount Target.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIDatasetAcc::Endpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export declare class Endpoint extends ros.Resource implements IEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EndpointProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndpointId: The ID of the Mount Target.
     */
    readonly attrEndpointId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointProps, enableResourcePropertyConstraint?: boolean);
}
