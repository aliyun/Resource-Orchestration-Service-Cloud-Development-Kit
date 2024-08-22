import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicAcceleratorIpEndpointRelation } from './ga.generated';
export { RosBasicAcceleratorIpEndpointRelation as BasicAcceleratorIpEndpointRelationProperty };
/**
 * Properties for defining a `BasicAcceleratorIpEndpointRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export interface BasicAcceleratorIpEndpointRelationProps {
    /**
     * Property accelerateIpId: The ID of the accelerated IP address.
     */
    readonly accelerateIpId: string | ros.IResolvable;
    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAcceleratorIpEndpointRelation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAcceleratorIpEndpointRelation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export declare class BasicAcceleratorIpEndpointRelation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BasicAcceleratorIpEndpointRelationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable;
    /**
     * Attribute AcceleratorId: The ID of the basic GA instance.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicAcceleratorIpEndpointRelationProps, enableResourcePropertyConstraint?: boolean);
}
