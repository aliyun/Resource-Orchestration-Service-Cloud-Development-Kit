import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`
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
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthLimit`
 */
export declare class RosCenBandwidthLimit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthLimit";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`
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
     * true
     * false (Default)
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
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
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
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackage`
 */
export declare class RosCenBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * true
     * false (Default)
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
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
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
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
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
/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`
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
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export declare class RosCenBandwidthPackageAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackageAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::CEN::CenBandwidthPackageAssociation`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenInstance`
 */
export interface RosCenInstanceProps {
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenInstance.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenInstance`
 */
export declare class RosCenInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CenId: The ID of the request.
     */
    readonly attrCenId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCenInstance.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`
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
 * A ROS template type:  `ALIYUN::CEN::CenInstanceAttachment`
 */
export declare class RosCenInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstanceAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::CEN::CenInstanceAttachment`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenRouteMap`
 */
export interface RosCenRouteMapProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    readonly cenRegionId: string | ros.IResolvable;
    /**
     * @Property mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    readonly mapResult: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the route map.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    readonly transmitDirection: string | ros.IResolvable;
    /**
     * @Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    readonly asPathMatchMode?: string | ros.IResolvable;
    /**
     * @Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    readonly cidrMatchMode?: string | ros.IResolvable;
    /**
     * @Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    readonly communityMatchMode?: string | ros.IResolvable;
    /**
     * @Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    readonly communityOperateMode?: string | ros.IResolvable;
    /**
     * @Property description: The description of the route map.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    readonly destinationChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    readonly destinationCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    readonly destinationInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    readonly destinationInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * @Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    readonly destinationRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchAsns: A match statement that indicates the As path list.
     */
    readonly matchAsns?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchCommunitySet: A match statement that indicates the community set.
     */
    readonly matchCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    readonly nextPriority?: number | ros.IResolvable;
    /**
     * @Property operateCommunitySet: An action statement that operates the community attribute.
     */
    readonly operateCommunitySet?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preference: An action statement that modifies the preference of the route.
     */
    readonly preference?: number | ros.IResolvable;
    /**
     * @Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    readonly prependAsPath?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    readonly routeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    readonly sourceChildInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    readonly sourceInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    readonly sourceInstanceIdsReverseMatch?: boolean | ros.IResolvable;
    /**
     * @Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    readonly sourceRegionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    readonly sourceRouteTableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenRouteMap`
 */
export declare class RosCenRouteMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenRouteMap";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AsPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    readonly attrAsPathMatchMode: ros.IResolvable;
    /**
     * @Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute CenRegionId: The ID of the region to which the CEN instance belongs.
     */
    readonly attrCenRegionId: ros.IResolvable;
    /**
     * @Attribute CidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    readonly attrCidrMatchMode: ros.IResolvable;
    /**
     * @Attribute CommunityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    readonly attrCommunityMatchMode: ros.IResolvable;
    /**
     * @Attribute CommunityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    readonly attrCommunityOperateMode: ros.IResolvable;
    /**
     * @Attribute Description: The description of the route map.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    readonly attrDestinationChildInstanceTypes: ros.IResolvable;
    /**
     * @Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.
     */
    readonly attrDestinationCidrBlocks: ros.IResolvable;
    /**
     * @Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    readonly attrDestinationInstanceIds: ros.IResolvable;
    /**
     * @Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    readonly attrDestinationInstanceIdsReverseMatch: ros.IResolvable;
    /**
     * @Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    readonly attrDestinationRouteTableIds: ros.IResolvable;
    /**
     * @Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    readonly attrMapResult: ros.IResolvable;
    /**
     * @Attribute MatchAsns: A match statement that indicates the As path list.
     */
    readonly attrMatchAsns: ros.IResolvable;
    /**
     * @Attribute MatchCommunitySet: A match statement that indicates the community set.
     */
    readonly attrMatchCommunitySet: ros.IResolvable;
    /**
     * @Attribute NextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    readonly attrNextPriority: ros.IResolvable;
    /**
     * @Attribute OperateCommunitySet: An action statement that operates the community attribute.
     */
    readonly attrOperateCommunitySet: ros.IResolvable;
    /**
     * @Attribute Preference: An action statement that modifies the preference of the route.
     */
    readonly attrPreference: ros.IResolvable;
    /**
     * @Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    readonly attrPrependAsPath: ros.IResolvable;
    /**
     * @Attribute Priority: The priority of the route map.
     */
    readonly attrPriority: ros.IResolvable;
    /**
     * @Attribute RouteMapId: The ID of the route map.
     */
    readonly attrRouteMapId: ros.IResolvable;
    /**
     * @Attribute RouteTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    readonly attrRouteTypes: ros.IResolvable;
    /**
     * @Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    readonly attrSourceChildInstanceTypes: ros.IResolvable;
    /**
     * @Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    readonly attrSourceInstanceIds: ros.IResolvable;
    /**
     * @Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    readonly attrSourceInstanceIdsReverseMatch: ros.IResolvable;
    /**
     * @Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    readonly attrSourceRegionIds: ros.IResolvable;
    /**
     * @Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    readonly attrSourceRouteTableIds: ros.IResolvable;
    /**
     * @Attribute TransmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    readonly attrTransmitDirection: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property cenRegionId: The ID of the region to which the CEN instance belongs.
     */
    cenRegionId: string | ros.IResolvable;
    /**
     * @Property mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
     */
    mapResult: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the route map.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
     */
    transmitDirection: string | ros.IResolvable;
    /**
     * @Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
     */
    asPathMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
     */
    cidrMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
     */
    communityMatchMode: string | ros.IResolvable | undefined;
    /**
     * @Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
     */
    communityOperateMode: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the route map.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
     */
    destinationChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationCidrBlocks: A match statement that indicates the prefix list.
     */
    destinationCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
     */
    destinationInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
     */
    destinationInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;
    /**
     * @Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
     */
    destinationRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchAsns: A match statement that indicates the As path list.
     */
    matchAsns: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchCommunitySet: A match statement that indicates the community set.
     */
    matchCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
     */
    nextPriority: number | ros.IResolvable | undefined;
    /**
     * @Property operateCommunitySet: An action statement that operates the community attribute.
     */
    operateCommunitySet: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preference: An action statement that modifies the preference of the route.
     */
    preference: number | ros.IResolvable | undefined;
    /**
     * @Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
     */
    prependAsPath: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
     */
    routeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
     */
    sourceChildInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
     */
    sourceInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
     */
    sourceInstanceIdsReverseMatch: boolean | ros.IResolvable | undefined;
    /**
     * @Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
     */
    sourceRegionIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
     */
    sourceRouteTableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     *
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
 * Properties for defining a `ALIYUN::CEN::CenVbrHealthCheck`
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
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
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
 * A ROS template type:  `ALIYUN::CEN::CenVbrHealthCheck`
 */
export declare class RosCenVbrHealthCheck extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenVbrHealthCheck";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
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
     * Create a new `ALIYUN::CEN::CenVbrHealthCheck`.
     *
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
 * Properties for defining a `ALIYUN::CEN::RouteEntry`
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
 * A ROS template type:  `ALIYUN::CEN::RouteEntry`
 */
export declare class RosRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::RouteEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::CEN::RouteEntry`.
     *
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
