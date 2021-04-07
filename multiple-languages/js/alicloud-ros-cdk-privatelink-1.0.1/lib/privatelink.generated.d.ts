import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`
 */
export interface RosVpcEndpointProps {
    /**
     * @Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
     */
    readonly securityGroupId: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcId: The VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property endpointDescription: The description of the endpoint.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly endpointDescription?: string | ros.IResolvable;
    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    readonly endpointName?: string | ros.IResolvable;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceId?: string | ros.IResolvable;
    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * @Property zone:
     */
    readonly zone?: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PrivateLink::VpcEndpoint`
 */
export declare class RosVpcEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpoint";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Bandwidth: The bandwidth of the endpoint.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute EndpointDomain: The domain name of the endpoint.
     */
    readonly attrEndpointDomain: ros.IResolvable;
    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * @Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
     */
    securityGroupId: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcId: The VPC to which the endpoint belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property endpointDescription: The description of the endpoint.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    endpointDescription: string | ros.IResolvable | undefined;
    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    endpointName: string | ros.IResolvable | undefined;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    serviceId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    serviceName: string | ros.IResolvable | undefined;
    /**
     * @Property zone:
     */
    zone: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpcEndpoint {
    /**
     * @stability external
     */
    interface ZoneProperty {
        /**
         * @Property zoneId: The zone of the associated endpoint service.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The switch of the endpoint network interface in the given zone.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`
 */
export interface RosVpcEndpointServiceProps {
    /**
     * @Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    readonly autoAcceptEnabled?: boolean | ros.IResolvable;
    /**
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
     */
    readonly connectBandwidth?: number | ros.IResolvable;
    /**
     * @Property resource:
     */
    readonly resource?: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    readonly serviceDescription?: string | ros.IResolvable;
    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    readonly user?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PrivateLink::VpcEndpointService`
 */
export declare class RosVpcEndpointService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpointService";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ServiceDomain: The domain name of the endpoint service.
     */
    readonly attrServiceDomain: ros.IResolvable;
    /**
     * @Attribute ServiceId: The ID of the endpoint service.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceName: The name of the endpoint service.
     */
    readonly attrServiceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    autoAcceptEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
     */
    connectBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property resource:
     */
    resource: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    serviceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    user: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpcEndpointService {
    /**
     * @stability external
     */
    interface ResourceProperty {
        /**
         * @Property zoneId: The zone to which the service resource belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property resourceId: Service resources added to the endpoint service.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of service resource. Set the value to slb (SLB instances that support PrivateLink and are deployed in a VPC).
     * Note Only Server Load Balancer (SLB) instances that support PrivateLink can serve as service
     * resources for endpoint services.
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
