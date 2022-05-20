import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpoint } from './privatelink.generated';
export { RosVpcEndpoint as VpcEndpointProperty };
/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`
 */
export interface VpcEndpointProps {
    /**
     * Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
     */
    readonly securityGroupId: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vpcId: The VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property endpointDescription: The description of the endpoint.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly endpointDescription?: string | ros.IResolvable;
    /**
     * Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    readonly endpointName?: string | ros.IResolvable;
    /**
     * Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceId?: string | ros.IResolvable;
    /**
     * Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * Property zone:
     */
    readonly zone?: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpoint`
 */
export declare class VpcEndpoint extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Bandwidth: The bandwidth of the endpoint.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute EndpointDomain: The domain name of the endpoint.
     */
    readonly attrEndpointDomain: ros.IResolvable;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable;
    /**
     * Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute VpcId: The vpc ID of endpoint.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneDomains: The zone domains.
     */
    readonly attrZoneDomains: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcEndpointProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=vpcendpoint.d.ts.map