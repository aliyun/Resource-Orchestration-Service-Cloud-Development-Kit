import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpoint } from './privatelink.generated';
export { RosVpcEndpoint as VpcEndpointProperty };
/**
 * Properties for defining a `VpcEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
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
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly endpointDescription?: string | ros.IResolvable;
    /**
     * Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    readonly endpointName?: string | ros.IResolvable;
    /**
     * Property endpointType: Endpoint type.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * Property protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
     * true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
     * false (default): no
     */
    readonly protectedEnabled?: boolean | ros.IResolvable;
    /**
     * Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceId?: string | ros.IResolvable;
    /**
     * Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpcEndpoint.TagsProperty[];
    /**
     * Property zone:
     */
    readonly zone?: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
     */
    readonly zonePrivateIpAddressCount?: number | ros.IResolvable;
}
/**
 * Represents a `VpcEndpoint`.
 */
export interface IVpcEndpoint extends ros.IResource {
    readonly props: VpcEndpointProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The bandwidth of the endpoint.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute EndpointDomain: The domain name of the endpoint.
     */
    readonly attrEndpointDomain: ros.IResolvable | string;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute VpcId: The vpc ID of endpoint.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneDomains: The zone domains.
     */
    readonly attrZoneDomains: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PrivateLink::VpcEndpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
 */
export declare class VpcEndpoint extends ros.Resource implements IVpcEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcEndpointProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The bandwidth of the endpoint.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute EndpointDomain: The domain name of the endpoint.
     */
    readonly attrEndpointDomain: ros.IResolvable | string;
    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute VpcId: The vpc ID of endpoint.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneDomains: The zone domains.
     */
    readonly attrZoneDomains: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcEndpointProps, enableResourcePropertyConstraint?: boolean);
}
