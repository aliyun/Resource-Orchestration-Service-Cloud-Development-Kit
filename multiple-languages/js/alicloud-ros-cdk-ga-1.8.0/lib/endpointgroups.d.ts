import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpointGroups } from './ga.generated';
export { RosEndpointGroups as EndpointGroupsProperty };
/**
 * Properties for defining a `EndpointGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export interface EndpointGroupsProps {
    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    readonly endpointGroupConfigurations: Array<RosEndpointGroups.EndpointGroupConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * Represents a `EndpointGroups`.
 */
export interface IEndpointGroups extends ros.IResource {
    readonly props: EndpointGroupsProps;
    /**
     * Attribute EndpointGroupIds: The IDs of the endpoint groups.
     */
    readonly attrEndpointGroupIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::EndpointGroups`, which is used to create multiple endpoint groups at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEndpointGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export declare class EndpointGroups extends ros.Resource implements IEndpointGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EndpointGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndpointGroupIds: The IDs of the endpoint groups.
     */
    readonly attrEndpointGroupIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointGroupsProps, enableResourcePropertyConstraint?: boolean);
}
