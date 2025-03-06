import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosVpcEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
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
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly endpointDescription?: string | ros.IResolvable;
    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    readonly endpointName?: string | ros.IResolvable;
    /**
     * @Property endpointType: Endpoint type.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
     * true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
     * false (default): no
     */
    readonly protectedEnabled?: boolean | ros.IResolvable;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceId?: string | ros.IResolvable;
    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpcEndpoint.TagsProperty[];
    /**
     * @Property zone:
     */
    readonly zone?: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
     */
    readonly zonePrivateIpAddressCount?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PrivateLink::VpcEndpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
 */
export declare class RosVpcEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpoint";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
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
    /**
     * @Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute VpcId: The vpc ID of endpoint.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneDomains: The zone domains.
     */
    readonly attrZoneDomains: ros.IResolvable;
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
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    endpointDescription: string | ros.IResolvable | undefined;
    /**
     * @Property endpointName: The name of the endpoint.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    endpointName: string | ros.IResolvable | undefined;
    /**
     * @Property endpointType: Endpoint type.
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
     * true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
     * false (default): no
     */
    protectedEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    serviceId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
     */
    serviceName: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVpcEndpoint.TagsProperty[] | undefined;
    /**
     * @Property zone:
     */
    zone: Array<RosVpcEndpoint.ZoneProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
     */
    zonePrivateIpAddressCount: number | ros.IResolvable | undefined;
    /**
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
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosVpcEndpoint {
    /**
     * @stability external
     */
    interface ZoneProperty {
        /**
         * @Property zoneId: The zone of the associated endpoint service.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the zone in which the endpoint is deployed.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The switch of the endpoint network interface in the given zone.
         */
        readonly vSwitchId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpcEndpointService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
export interface RosVpcEndpointServiceProps {
    /**
     * @Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    readonly autoAcceptEnabled?: boolean | ros.IResolvable;
    /**
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit\/s.
     */
    readonly connectBandwidth?: number | ros.IResolvable;
    /**
     * @Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
     * - True
     * - False (default)
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property payer: The payer of the endpoint service. Valid values:
     * Endpoint: the service consumer.
     * EndpointService: the service provider.
     */
    readonly payer?: string | ros.IResolvable;
    /**
     * @Property resource:
     */
    readonly resource?: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    readonly serviceDescription?: string | ros.IResolvable;
    /**
     * @Property serviceResourceType: Service resource type.
     */
    readonly serviceResourceType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpcEndpointService.TagsProperty[];
    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    readonly user?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * true: yes.
     * false (default): no
     */
    readonly zoneAffinityEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PrivateLink::VpcEndpointService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcEndpointService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
export declare class RosVpcEndpointService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpointService";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    readonly attrMaxBandwidth: ros.IResolvable;
    /**
     * @Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    readonly attrMinBandwidth: ros.IResolvable;
    /**
     * @Attribute ServiceDescription: The description of the endpoint service.
     */
    readonly attrServiceDescription: ros.IResolvable;
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
     * @Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit\/s.
     */
    connectBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
     * - True
     * - False (default)
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property payer: The payer of the endpoint service. Valid values:
     * Endpoint: the service consumer.
     * EndpointService: the service provider.
     */
    payer: string | ros.IResolvable | undefined;
    /**
     * @Property resource:
     */
    resource: Array<RosVpcEndpointService.ResourceProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceDescription: The description for the endpoint service.
     */
    serviceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property serviceResourceType: Service resource type.
     */
    serviceResourceType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVpcEndpointService.TagsProperty[] | undefined;
    /**
     * @Property user: Account IDs to the whitelist of an endpoint service.
     */
    user: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * true: yes.
     * false (default): no
     */
    zoneAffinityEnabled: boolean | ros.IResolvable | undefined;
    /**
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
         * @Property resourceType: The type of service resource. Supports slb, nlb, vpcNat.
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
export declare namespace RosVpcEndpointService {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpcEndpointServiceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
 */
export interface RosVpcEndpointServiceAttachmentProps {
    /**
     * @Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;
    /**
     * @Property resourceType: The resource type. Allowed values:
     * - slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.
     * - alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.
     * - nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint.
     */
    readonly serviceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`, which is used to add a service resource to an endpoint service.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcEndpointServiceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
 */
export declare class RosVpcEndpointServiceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PrivateLink::VpcEndpointServiceAttachment";
    /**
     * @Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * @Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    readonly attrServiceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceId: The resource id.
     */
    resourceId: string | ros.IResolvable;
    /**
     * @Property resourceType: The resource type. Allowed values:
     * - slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.
     * - alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.
     * - nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.
     */
    resourceType: string | ros.IResolvable;
    /**
     * @Property serviceId: The endpoint service that is associated with the endpoint.
     */
    serviceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcEndpointServiceAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
