import * as ros from '@alicloud/ros-cdk-core';
import { RosIntranetConnectorEndpoint } from './computenest.generated';
export { RosIntranetConnectorEndpoint as IntranetConnectorEndpointProperty };
/**
 * Properties for defining a `IntranetConnectorEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export interface IntranetConnectorEndpointProps {
    /**
     * Property endpointRegionId: The region ID of the endpoint.
     */
    readonly endpointRegionId: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enablePrivateZone: Whether to enable the private zone.
     * This parameter is only valid when the access point type is Managed.
     */
    readonly enablePrivateZone?: boolean | ros.IResolvable;
    /**
     * Property name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
     * Hosted access points do not require incoming.
     */
    readonly resourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property type: The type of the endpoint.
     * - Private (default) : private access point
     * - Managed: managed access point.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `IntranetConnectorEndpoint`.
 */
export interface IIntranetConnectorEndpoint extends ros.IResource {
    readonly props: IntranetConnectorEndpointProps;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ComputeNest::IntranetConnectorEndpoint`, which is used to create an endpoint.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIntranetConnectorEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export declare class IntranetConnectorEndpoint extends ros.Resource implements IIntranetConnectorEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IntranetConnectorEndpointProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IntranetConnectorEndpointProps, enableResourcePropertyConstraint?: boolean);
}
