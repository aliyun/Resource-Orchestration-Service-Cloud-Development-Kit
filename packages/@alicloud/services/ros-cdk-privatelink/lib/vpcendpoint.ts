import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcEndpoint } from './privatelink.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpoint`
 */
export class VpcEndpoint extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Bandwidth: The bandwidth of the endpoint.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute EndpointDomain: The domain name of the endpoint.
     */
    public readonly attrEndpointDomain: ros.IResolvable;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    public readonly attrEndpointName: ros.IResolvable;

    /**
     * Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Attribute VpcId: The vpc ID of endpoint.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneDomains: The zone domains.
     */
    public readonly attrZoneDomains: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcEndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpcEndpoint = new RosVpcEndpoint(this, id,  {
            protectedEnabled: props.protectedEnabled,
            vpcId: props.vpcId,
            endpointName: props.endpointName,
            serviceName: props.serviceName,
            zone: props.zone,
            securityGroupId: props.securityGroupId,
            endpointType: props.endpointType,
            zonePrivateIpAddressCount: props.zonePrivateIpAddressCount,
            endpointDescription: props.endpointDescription,
            tags: props.tags,
            serviceId: props.serviceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcEndpoint;
        this.attrBandwidth = rosVpcEndpoint.attrBandwidth;
        this.attrEndpointDomain = rosVpcEndpoint.attrEndpointDomain;
        this.attrEndpointId = rosVpcEndpoint.attrEndpointId;
        this.attrEndpointName = rosVpcEndpoint.attrEndpointName;
        this.attrServiceId = rosVpcEndpoint.attrServiceId;
        this.attrServiceName = rosVpcEndpoint.attrServiceName;
        this.attrVpcId = rosVpcEndpoint.attrVpcId;
        this.attrZoneDomains = rosVpcEndpoint.attrZoneDomains;
    }
}
