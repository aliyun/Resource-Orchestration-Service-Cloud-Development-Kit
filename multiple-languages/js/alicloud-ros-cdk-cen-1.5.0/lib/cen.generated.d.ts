import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCenBandwidthLimit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export interface RosCenBandwidthLimitProps {
    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number | ros.IResolvable;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string | ros.IResolvable;
    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string | ros.IResolvable;
    /**
     * @Property bandwidthType: Bandwidth allocation mode. Value: BandwidthPackage: Allocates bandwidth from the bandwidth package.
     */
    readonly bandwidthType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthLimit`, which is used to configure the bandwidth for cross-region interconnection in a bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthLimit` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export declare class RosCenBandwidthLimit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthLimit";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    bandwidthLimit: number | ros.IResolvable;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property localRegionId: The ID of the local region.
     */
    localRegionId: string | ros.IResolvable;
    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    oppositeRegionId: string | ros.IResolvable;
    /**
     * @Property bandwidthType: Bandwidth allocation mode. Value: BandwidthPackage: Allocates bandwidth from the bandwidth package.
     */
    bandwidthType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthLimitProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCenBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export interface RosCenBandwidthPackageProps {
    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string | ros.IResolvable;
    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to automatically pay the bill. Valid value:
     * true (default)
     * false
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;
    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string | ros.IResolvable;
    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property period: The purchase period. The default value is 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenBandwidthPackage.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthPackage`, which is used to purchase a bandwidth plan before you use Cloud Enterprise Network (CEN) to connect network instances that reside in different regions.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export declare class RosCenBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackage";
    /**
     * @Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly attrCenBandwidthPackageId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    geographicRegionAId: string | ros.IResolvable;
    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    geographicRegionBId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to automatically pay the bill. Valid value:
     * true (default)
     * false
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    autoRenewDuration: number | ros.IResolvable | undefined;
    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    bandwidthPackageChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase period. The default value is 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The pricing cycle.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCenBandwidthPackage.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCenBandwidthPackage {
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
 * Properties for defining a `RosCenBandwidthPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
export interface RosCenBandwidthPackageAssociationProps {
    /**
     * @Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly cenBandwidthPackageId: string | ros.IResolvable;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenBandwidthPackageAssociation`, which is used to associate a bandwidth plan with a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenBandwidthPackageAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
export declare class RosCenBandwidthPackageAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackageAssociation";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    cenBandwidthPackageId: string | ros.IResolvable;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenBandwidthPackageAssociationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCenInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export interface RosCenInstanceProps {
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property protectionLevel: The level of CIDR block overlapping.
     * Set the value to REDUCED. REDUCED indicates that the
     * CIDR blocks can overlap with each other but must not be the same.
     */
    readonly protectionLevel?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenInstance`, which is used to create a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export declare class RosCenInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstance";
    /**
     * @Attribute CenId: The ID of the request.
     */
    readonly attrCenId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property protectionLevel: The level of CIDR block overlapping.
     * Set the value to REDUCED. REDUCED indicates that the
     * CIDR blocks can overlap with each other but must not be the same.
     */
    protectionLevel: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCenInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCenInstance {
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
 * Properties for defining a `RosCenInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export interface RosCenInstanceAttachmentProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string | ros.IResolvable;
    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string | ros.IResolvable;
    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenInstanceAttachment`, which is used to attach a network instance to a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
export declare class RosCenInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstanceAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    childInstanceId: string | ros.IResolvable;
    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    childInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    childInstanceType: string | ros.IResolvable;
    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    childInstanceOwnerId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenInstanceAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCenRouteMap`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export interface RosCenRouteMapProps {
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
     */
    readonly cenRegionId: string | ros.IResolvable;
    /**
     * @Property mapResult: The route map behavior after all conditions are matched. Valid values:
     *  Permit: allows the routes that are matched.
     *  Deny: rejects the routes that are matched.
     */
    readonly mapResult: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
     *  Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:
     *  RegionIn: Routes are advertised to CEN gateways.
     *  For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
     *  RegionOut: Routes are advertised from CEN gateways.
     *  For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    readonly transmitDirection: string | ros.IResolvable;
    /**
     * @Property asPathMatchMode: Match statements are used to match the AS paths. Valid values:
     *  Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     *  Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;
    /**
     * @Property cidrMatchMode: Match statements are used to match the prefixes. Valid values:
     *  Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.1.0\/24 route.
     *  Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.0.0\/16 route.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;
    /**
     * @Property communityMatchMode: Match statements are used to match the Communities. Valid values:
     *  Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
     *  Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    readonly communityMatchMode?: string | ros.IResolvable;
    /**
     * @Property communityOperateMode: Action statements are used to operate the Communities. Valid values:
     *  Additive: adds.
     *  Replace: replaces.
     */
    readonly communityOperateMode?: string | ros.IResolvable;
    /**
     * @Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     *  Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
     *  You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
     *  Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
     *  false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
     *  true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * @Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
     *  Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
     *  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
     *  If the priority is not set, no next route map is associated with the current route map.
     *  If the priority is set to 1, the next route map is associated with the current route map.
     *  If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
     *  Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    readonly nextPriority?: number | ros.IResolvable;
    /**
     * @Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    readonly preference?: number | ros.IResolvable;
    /**
     * @Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
     *  For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
     *  For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
     *  For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property routeTypes: Match statements are used to match the route types. Valid values:
     *  System: system routes that are generated by the system.
     *  Custom: custom routes that are created by users.
     *  BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
     *  You can enter multiple types.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
     *  You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
     *  false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
     *  true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * @Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
     */
    readonly sourceRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenRouteMap`, which is used to create a routing policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteMap` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
 */
export declare class RosCenRouteMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteMap";
    /**
     * @Attribute RouteMapId: The ID of the route map.
     */
    readonly attrRouteMapId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
     */
    cenRegionId: string | ros.IResolvable;
    /**
     * @Property mapResult: The route map behavior after all conditions are matched. Valid values:
     *  Permit: allows the routes that are matched.
     *  Deny: rejects the routes that are matched.
     */
    mapResult: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
     *  Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:
     *  RegionIn: Routes are advertised to CEN gateways.
     *  For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
     *  RegionOut: Routes are advertised from CEN gateways.
     *  For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
     */
    transmitDirection: string | ros.IResolvable;
    /**
     * @Property asPathMatchMode: Match statements are used to match the AS paths. Valid values:
     *  Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
     *  Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
     */
    asPathMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property cidrMatchMode: Match statements are used to match the prefixes. Valid values:
     *  Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.1.0\/24 route.
     *  Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
     *  For example, the 1.1.0.0\/16 policy can match the 1.1.0.0\/16 route.
     */
    cidrMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property communityMatchMode: Match statements are used to match the Communities. Valid values:
     *  Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
     *  Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
     */
    communityMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property communityOperateMode: Action statements are used to operate the Communities. Valid values:
     *  Additive: adds.
     *  Replace: replaces.
     */
    communityOperateMode: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the route map.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     *  Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    destinationChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
     */
    destinationCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationInstanceIds: Match statements are used to match the destination instance IDs.
     *  You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
     *  Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
     */
    destinationInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
     *  false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
     *  true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
     */
    destinationInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;
    /**
     * @Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
     *  Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
     */
    destinationRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
     *  Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
     */
    matchAsns: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    matchCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
     *  If the priority is not set, no next route map is associated with the current route map.
     *  If the priority is set to 1, the next route map is associated with the current route map.
     *  If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
     *  Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
     */
    nextPriority: number | ros.IResolvable | undefined;
    /**
     * @Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
     *  Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
     */
    operateCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
     */
    preference: number | ros.IResolvable | undefined;
    /**
     * @Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
     *  For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
     *  For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
     *  For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
     */
    prependAsPath: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property routeTypes: Match statements are used to match the route types. Valid values:
     *  System: system routes that are generated by the system.
     *  Custom: custom routes that are created by users.
     *  BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
     *  You can enter multiple types.
     */
    routeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
     *  VPC: VPCs.
     *  VBR: VBRs.
     *  CCN: CCN instances in mainland China.
     */
    sourceChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
     *  You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
     */
    sourceInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
     *  false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
     *  true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
     */
    sourceInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;
    /**
     * @Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
     */
    sourceRegionIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
     */
    sourceRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteMapProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCenRouteService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export interface RosCenRouteServiceProps {
    /**
     * @Property accessRegionId: The region where the cloud service is deployed.
     */
    readonly accessRegionId: string | ros.IResolvable;
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property host: The domain or IP address of the cloud service.
     */
    readonly host: string | ros.IResolvable;
    /**
     * @Property hostRegionId: The region where the cloud service is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    readonly hostRegionId: string | ros.IResolvable;
    /**
     * @Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    readonly hostVpcId: string | ros.IResolvable;
    /**
     * @Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    readonly conflictIgnore?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the cloud service.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenRouteService`, which is used to access an Alibaba Cloud service.
 * @Note This class does not contain additional functions, so it is recommended to use the `CenRouteService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
export declare class RosCenRouteService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteService";
    /**
     * @Attribute Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessRegionId: The region where the cloud service is deployed.
     */
    accessRegionId: string | ros.IResolvable;
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property host: The domain or IP address of the cloud service.
     */
    host: string | ros.IResolvable;
    /**
     * @Property hostRegionId: The region where the cloud service is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    hostRegionId: string | ros.IResolvable;
    /**
     * @Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    hostVpcId: string | ros.IResolvable;
    /**
     * @Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    conflictIgnore: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the cloud service.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenRouteServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCenVbrHealthCheck`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export interface RosCenVbrHealthCheckProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly healthCheckTargetIp: string | ros.IResolvable;
    /**
     * @Property vbrInstanceId: The ID of the VBR instance.
     */
    readonly vbrInstanceId: string | ros.IResolvable;
    /**
     * @Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly vbrInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;
    /**
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;
    /**
     * @Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly healthyThreshold?: number | ros.IResolvable;
    /**
     * @Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly vbrInstanceOwnerId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenVbrHealthCheck`, which is used to enable the health check feature or modify the health check configurations for a virtual border router (VBR).
 * @Note This class does not contain additional functions, so it is recommended to use the `CenVbrHealthCheck` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
export declare class RosCenVbrHealthCheck extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenVbrHealthCheck";
    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    readonly attrHealthCheckInterval: ros.IResolvable;
    /**
     * @Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    readonly attrHealthCheckSourceIp: ros.IResolvable;
    /**
     * @Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    readonly attrHealthCheckTargetIp: ros.IResolvable;
    /**
     * @Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    readonly attrHealthyThreshold: ros.IResolvable;
    /**
     * @Attribute VbrInstanceId: The ID of the VBR instance.
     */
    readonly attrVbrInstanceId: ros.IResolvable;
    /**
     * @Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    readonly attrVbrInstanceOwnerId: ros.IResolvable;
    /**
     * @Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    readonly attrVbrInstanceRegionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    healthCheckTargetIp: string | ros.IResolvable;
    /**
     * @Property vbrInstanceId: The ID of the VBR instance.
     */
    vbrInstanceId: string | ros.IResolvable;
    /**
     * @Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
     */
    vbrInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    healthCheckInterval: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    healthCheckSourceIp: string | ros.IResolvable | undefined;
    /**
     * @Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    healthyThreshold: number | ros.IResolvable | undefined;
    /**
     * @Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    vbrInstanceOwnerId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCenVbrHealthCheckProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosChildInstanceRouteEntryToAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export interface RosChildInstanceRouteEntryToAttachmentProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property routeTableId: The ID of the route table configured on the network instance.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment`, which is used to add a route to a network instance that is connected to an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChildInstanceRouteEntryToAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export declare class RosChildInstanceRouteEntryToAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::ChildInstanceRouteEntryToAttachment";
    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    readonly attrDestinationCidrBlock: ros.IResolvable;
    /**
     * @Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route.
     */
    destinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property routeTableId: The ID of the route table configured on the network instance.
     */
    routeTableId: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChildInstanceRouteEntryToAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export interface RosRouteEntryProps {
    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string | ros.IResolvable;
    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string | ros.IResolvable;
    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::RouteEntry`, which is used to advertise a route of an attached virtual private cloud (VPC) or virtual border router (VBR) to a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
export declare class RosRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::RouteEntry";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    childInstanceId: string | ros.IResolvable;
    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    childInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    childInstanceRouteTableId: string | ros.IResolvable;
    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    childInstanceType: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    destinationCidrBlock: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteEntryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export interface RosTransitRouterProps {
    /**
     * @Property cenId: CenId
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property transitRouterDescription: TransitRouterDescription
     */
    readonly transitRouterDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterName: TransitRouterName
     */
    readonly transitRouterName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouter`, which is used to create an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
 */
export declare class RosTransitRouter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouter";
    /**
     * @Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * @Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    readonly attrSystemTransitRouterRouteTableId: ros.IResolvable;
    /**
     * @Attribute TransitRouterDescription: TransitRouterDescription
     */
    readonly attrTransitRouterDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * @Attribute TransitRouterName: TransitRouterName
     */
    readonly attrTransitRouterName: ros.IResolvable;
    /**
     * @Attribute Type: Type
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: CenId
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property transitRouterDescription: TransitRouterDescription
     */
    transitRouterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterName: TransitRouterName
     */
    transitRouterName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterPeerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export interface RosTransitRouterPeerAttachmentProps {
    /**
     * @Property peerTransitRouterId: PeerTransitRouterId
     */
    readonly peerTransitRouterId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;
    /**
     * @Property bandwidth: Bandwidth
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property cenBandwidthPackageId: BandwidthPackageId
     */
    readonly cenBandwidthPackageId?: string | ros.IResolvable;
    /**
     * @Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * @Property peerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    readonly peerTransitRouterRegionId?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterPeerAttachment`, which is used to create a cross-region connection for an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterPeerAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export declare class RosTransitRouterPeerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterPeerAttachment";
    /**
     * @Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly attrAutoPublishRouteEnabled: ros.IResolvable;
    /**
     * @Attribute Bandwidth: Bandwidth
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute CenBandwidthPackageId: BandwidthPackageId
     */
    readonly attrCenBandwidthPackageId: ros.IResolvable;
    /**
     * @Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * @Attribute GeographicSpanId: GeographicSpanId
     */
    readonly attrGeographicSpanId: ros.IResolvable;
    /**
     * @Attribute PeerTransitRouterId: PeerTransitRouterId
     */
    readonly attrPeerTransitRouterId: ros.IResolvable;
    /**
     * @Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId
     */
    readonly attrPeerTransitRouterOwnerId: ros.IResolvable;
    /**
     * @Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    readonly attrPeerTransitRouterRegionId: ros.IResolvable;
    /**
     * @Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable;
    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property peerTransitRouterId: PeerTransitRouterId
     */
    peerTransitRouterId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: Bandwidth
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property cenBandwidthPackageId: BandwidthPackageId
     */
    cenBandwidthPackageId: string | ros.IResolvable | undefined;
    /**
     * @Property cenId: CenId
     */
    cenId: string | ros.IResolvable | undefined;
    /**
     * @Property peerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    peerTransitRouterRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    transitRouterAttachmentDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    transitRouterAttachmentName: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    transitRouterId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterPeerAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export interface RosTransitRouterRouteEntryProps {
    /**
     * @Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly transitRouterRouteEntryNextHopType: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly transitRouterRouteEntryDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly transitRouterRouteEntryName?: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly transitRouterRouteEntryNextHopId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteEntry`, which is used to add routes to a route table of an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
export declare class RosTransitRouterRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteEntry";
    /**
     * @Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly attrTransitRouterRouteEntryDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly attrTransitRouterRouteEntryDestinationCidrBlock: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryId: The first ID of the resource
     */
    readonly attrTransitRouterRouteEntryId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly attrTransitRouterRouteEntryName: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly attrTransitRouterRouteEntryNextHopId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly attrTransitRouterRouteEntryNextHopType: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType
     */
    readonly attrTransitRouterRouteEntryType: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    transitRouterRouteEntryNextHopType: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    transitRouterRouteTableId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    transitRouterRouteEntryDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    transitRouterRouteEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    transitRouterRouteEntryNextHopId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteEntryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export interface RosTransitRouterRouteTableProps {
    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    readonly transitRouterRouteTableDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableName: TransitRouterRouteTableName
     */
    readonly transitRouterRouteTableName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTable`, which is used to create a custom route table for an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
 */
export declare class RosTransitRouterRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTable";
    /**
     * @Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    readonly attrTransitRouterRouteTableDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableName: TransitRouterRouteTableName
     */
    readonly attrTransitRouterRouteTableName: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableType: TransitRouterRouteTableType
     */
    readonly attrTransitRouterRouteTableType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    transitRouterId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription
     */
    transitRouterRouteTableDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterRouteTableName: TransitRouterRouteTableName
     */
    transitRouterRouteTableName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterRouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export interface RosTransitRouterRouteTableAssociationProps {
    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTableAssociation`, which is used to create an associated forwarding correlation.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTableAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export declare class RosTransitRouterRouteTableAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTableAssociation";
    /**
     * @Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * @Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    transitRouterRouteTableId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterRouteTablePropagation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export interface RosTransitRouterRouteTablePropagationProps {
    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterRouteTablePropagation`, which is used to create a route learning correlation.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterRouteTablePropagation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export declare class RosTransitRouterRouteTablePropagation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterRouteTablePropagation";
    /**
     * @Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * @Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * @Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * @Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    transitRouterRouteTableId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterRouteTablePropagationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterVbrAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export interface RosTransitRouterVbrAttachmentProps {
    /**
     * @Property vbrId: VbrId
     */
    readonly vbrId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;
    /**
     * @Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;
    /**
     * @Property vbrOwnerId: VbrOwnerId
     */
    readonly vbrOwnerId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`, which is used to create a virtual border router (VBR) connection on an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVbrAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
export declare class RosTransitRouterVbrAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVbrAttachment";
    /**
     * @Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly attrAutoPublishRouteEnabled: ros.IResolvable;
    /**
     * @Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * @Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable;
    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * @Attribute VbrId: VbrId
     */
    readonly attrVbrId: ros.IResolvable;
    /**
     * @Attribute VbrOwnerId: VbrOwnerId
     */
    readonly attrVbrOwnerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vbrId: VbrId
     */
    vbrId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property cenId: CenId
     */
    cenId: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    transitRouterAttachmentDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    transitRouterAttachmentName: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    transitRouterId: string | ros.IResolvable | undefined;
    /**
     * @Property vbrOwnerId: VbrOwnerId
     */
    vbrOwnerId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVbrAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTransitRouterVpcAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export interface RosTransitRouterVpcAttachmentProps {
    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: ZoneMappingss
     */
    readonly zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoCreateVpcRoute: undefined
     */
    readonly autoCreateVpcRoute?: boolean | ros.IResolvable;
    /**
     * @Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * @Property chargeType:
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property routeTableAssociationEnabled: undefined
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;
    /**
     * @Property routeTablePropagationEnabled: undefined
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;
    /**
     * @Property vpcOwnerId: VpcOwnerId
     */
    readonly vpcOwnerId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpcAttachment`, which is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVpcAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
 */
export declare class RosTransitRouterVpcAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVpcAttachment";
    /**
     * @Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * @Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * @Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable;
    /**
     * @Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * @Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcOwnerId: VpcOwnerId
     */
    readonly attrVpcOwnerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: VpcId
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: ZoneMappingss
     */
    zoneMappings: Array<RosTransitRouterVpcAttachment.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoCreateVpcRoute: undefined
     */
    autoCreateVpcRoute: boolean | ros.IResolvable | undefined;
    /**
     * @Property cenId: CenId
     */
    cenId: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType:
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property routeTableAssociationEnabled: undefined
     */
    routeTableAssociationEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property routeTablePropagationEnabled: undefined
     */
    routeTablePropagationEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    transitRouterAttachmentDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    transitRouterAttachmentName: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterId: TransitRouterId
     */
    transitRouterId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcOwnerId: VpcOwnerId
     */
    vpcOwnerId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVpcAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTransitRouterVpcAttachment {
    /**
     * @stability external
     */
    interface ZoneMappingsProperty {
        /**
         * @Property zoneId: ZoneId
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitchId
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTransitRouterVpnAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export interface RosTransitRouterVpnAttachmentProps {
    /**
     * @Property vpnId: IPsec connection ID
     */
    readonly vpnId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability zone ID in the current region.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. Default is true.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;
    /**
     * @Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to TransitRouterVpnAttachment. Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosTransitRouterVpnAttachment.TagsProperty[];
    /**
     * @Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * @Property transitRouterAttachmentName: The name of the VPN connection.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * @Property transitRouterId: Forwarding router instance ID
     */
    readonly transitRouterId?: string | ros.IResolvable;
    /**
     * @Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    readonly vpnOwnerId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpnAttachment`, which is used to create a VPN connection.
 * @Note This class does not contain additional functions, so it is recommended to use the `TransitRouterVpnAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export declare class RosTransitRouterVpnAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::TransitRouterVpnAttachment";
    /**
     * @Attribute TransitRouterAttachmentId: The ID of the VPN connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpnId: IPsec connection ID
     */
    vpnId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability zone ID in the current region.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. Default is true.
     */
    autoPublishRouteEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    routeTableAssociationEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    routeTablePropagationEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to TransitRouterVpnAttachment. Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosTransitRouterVpnAttachment.TagsProperty[] | undefined;
    /**
     * @Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    transitRouterAttachmentDescription: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterAttachmentName: The name of the VPN connection.
     */
    transitRouterAttachmentName: string | ros.IResolvable | undefined;
    /**
     * @Property transitRouterId: Forwarding router instance ID
     */
    transitRouterId: string | ros.IResolvable | undefined;
    /**
     * @Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    vpnOwnerId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTransitRouterVpnAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTransitRouterVpnAttachment {
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
