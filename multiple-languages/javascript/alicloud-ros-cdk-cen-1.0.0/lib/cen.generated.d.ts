import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`
 */
export interface RosCenBandwidthLimitProps {
    /**
     * @Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;
    /**
     * @Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string;
    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string;
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
    bandwidthLimit: number;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string;
    /**
     * @Property localRegionId: The ID of the local region.
     */
    localRegionId: string;
    /**
     * @Property oppositeRegionId: The ID of the other interconnected region.
     */
    oppositeRegionId: string;
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
    readonly bandwidth: number;
    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string;
    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string;
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
    readonly autoRenewDuration?: number;
    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string;
    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
     */
    readonly name?: string;
    /**
     * @Property period: The purchase period. The default value is 1.
     */
    readonly period?: number;
    /**
     * @Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string;
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
    readonly attrCenBandwidthPackageId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    bandwidth: number;
    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    geographicRegionAId: string;
    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    geographicRegionBId: string;
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
    autoRenewDuration: number | undefined;
    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    bandwidthPackageChargeType: string | undefined;
    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
     */
    name: string | undefined;
    /**
     * @Property period: The purchase period. The default value is 1.
     */
    period: number | undefined;
    /**
     * @Property pricingCycle: The pricing cycle.
     */
    pricingCycle: string | undefined;
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
    readonly cenBandwidthPackageId: string;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;
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
    cenBandwidthPackageId: string;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    cenId: string;
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
    readonly description?: string;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string;
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
    readonly attrCenId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    name: string | undefined;
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
/**
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`
 */
export interface RosCenInstanceAttachmentProps {
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;
    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    readonly childInstanceId: string;
    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    readonly childInstanceRegionId: string;
    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    readonly childInstanceType: string;
    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    readonly childInstanceOwnerId?: number;
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
    cenId: string;
    /**
     * @Property childInstanceId: The ID of the network to attach.
     */
    childInstanceId: string;
    /**
     * @Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
     */
    childInstanceRegionId: string;
    /**
     * @Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
     */
    childInstanceType: string;
    /**
     * @Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    childInstanceOwnerId: number | undefined;
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
 * Properties for defining a `ALIYUN::CEN::RouteEntry`
 */
export interface RosRouteEntryProps {
    /**
     * @Property cenId: The ID of the CEN instance where the route entry is published.
     */
    readonly cenId: string;
    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    readonly childInstanceId: string;
    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    readonly childInstanceRegionId: string;
    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    readonly childInstanceRouteTableId: string;
    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    readonly childInstanceType: string;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    readonly destinationCidrBlock: string;
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
    cenId: string;
    /**
     * @Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    childInstanceId: string;
    /**
     * @Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    childInstanceRegionId: string;
    /**
     * @Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    childInstanceRouteTableId: string;
    /**
     * @Property childInstanceType: The type of the network, value: VPC VBR
     */
    childInstanceType: string;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    destinationCidrBlock: string;
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
