import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::GA::Accelerator`
 */
export interface RosAcceleratorProps {
    /**
     * @Property duration: The Duration of the GA instance
     */
    readonly duration: string;
    /**
     * @Property pricingCycle: The PricingCycle of the GA instance.
     */
    readonly pricingCycle: string;
    /**
     * @Property spec: The instance type of the GA instance
     */
    readonly spec: string;
    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string;
    /**
     * @Property autoPay: The AutoPay of the GA instance.
     */
    readonly autoPay?: string;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string;
}
/**
 * A ROS template type:  `ALIYUN::GA::Accelerator`
 */
export declare class RosAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Accelerator";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    readonly attrAcceleratorId: any;
    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    readonly attrAcceleratorName: any;
    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    readonly attrAutoPay: any;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly attrAutoUseCoupon: any;
    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    readonly attrDuration: any;
    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    readonly attrPaymentType: any;
    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    readonly attrPricingCycle: any;
    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    readonly attrSpec: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property duration: The Duration of the GA instance
     */
    duration: string;
    /**
     * @Property pricingCycle: The PricingCycle of the GA instance.
     */
    pricingCycle: string;
    /**
     * @Property spec: The instance type of the GA instance
     */
    spec: string;
    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    acceleratorName: string | undefined;
    /**
     * @Property autoPay: The AutoPay of the GA instance.
     */
    autoPay: string | undefined;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    autoUseCoupon: string | undefined;
    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAcceleratorProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::GA::BandwidthPackage`
 */
export interface RosBandwidthPackageProps {
    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number;
    /**
     * @Property type: The type of the bandwidth plan
     */
    readonly type: string;
    /**
     * @Property autoPay: The AutoPay of the bandwidth
     */
    readonly autoPay?: string;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string;
    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string;
    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string;
    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string;
    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string;
    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string;
    /**
     * @Property duration:
     */
    readonly duration?: string;
    /**
     * @Property pricingCycle:
     */
    readonly pricingCycle?: string;
    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string;
}
/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackage`
 */
export declare class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AutoPay: The AutoPay of the bandwidth
     */
    readonly attrAutoPay: any;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly attrAutoUseCoupon: any;
    /**
     * @Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly attrBandwidth: any;
    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    readonly attrBandwidthPackageId: any;
    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    readonly attrBandwidthPackageName: any;
    /**
     * @Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly attrBandwidthType: any;
    /**
     * @Attribute BillingType: The BillingType of the bandwidth
     */
    readonly attrBillingType: any;
    /**
     * @Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly attrCbnGeographicRegionIdA: any;
    /**
     * @Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly attrCbnGeographicRegionIdB: any;
    /**
     * @Attribute ChargeType: The ChargeType of the bandwidth
     */
    readonly attrChargeType: any;
    /**
     * @Attribute PaymentType: The Payment Type of the bandwidth
     */
    readonly attrPaymentType: any;
    /**
     * @Attribute Ratio: The Ratio of the bandwidth
     */
    readonly attrRatio: any;
    /**
     * @Attribute Type: The type of the bandwidth plan
     */
    readonly attrType: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    bandwidth: number;
    /**
     * @Property type: The type of the bandwidth plan
     */
    type: string;
    /**
     * @Property autoPay: The AutoPay of the bandwidth
     */
    autoPay: string | undefined;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    autoUseCoupon: string | undefined;
    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    bandwidthType: string | undefined;
    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    billingType: string | undefined;
    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    cbnGeographicRegionIdA: string | undefined;
    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    cbnGeographicRegionIdB: string | undefined;
    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    chargeType: string | undefined;
    /**
     * @Property duration:
     */
    duration: string | undefined;
    /**
     * @Property pricingCycle:
     */
    pricingCycle: string | undefined;
    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    ratio: string | undefined;
    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export interface RosBandwidthPackageAcceleratorAdditionProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string;
    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string;
}
/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export declare class RosBandwidthPackageAcceleratorAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackageAcceleratorAddition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    readonly attrAcceleratorId: any;
    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    readonly attrBandwidthPackageId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    acceleratorId: string;
    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    bandwidthPackageId: string;
    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::GA::EndpointGroup`
 */
export interface RosEndpointGroupProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string;
    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string;
    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string;
    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string;
    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number;
    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string;
    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number;
    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string;
    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string;
    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    readonly thresholdCount?: number;
    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number;
}
/**
 * A ROS template type:  `ALIYUN::GA::EndpointGroup`
 */
export declare class RosEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    readonly attrEndpointGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    acceleratorId: string;
    /**
     * @Property endpointConfigurations:
     */
    endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    endpointGroupRegion: string;
    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    listenerId: string;
    /**
     * @Property description: The description of the endpoint group.
     */
    description: string | undefined;
    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    healthCheckIntervalSeconds: number | undefined;
    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    healthCheckPath: string | undefined;
    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    healthCheckPort: number | undefined;
    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    healthCheckProtocol: string | undefined;
    /**
     * @Property name: The name of the endpoint group.
     */
    name: string | undefined;
    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    thresholdCount: number | undefined;
    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    trafficPercentage: number | undefined;
    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEndpointGroup {
    /**
     * @stability external
     */
    interface EndpointConfigurationsProperty {
        /**
         * @Property type: The type of endpoint in the endpoint group. Valid values:
     * EIP: eip address
     * PublicIp: public IP address
     * Ip: custom IP address
     * Domain: custom domain name
     *
         */
        readonly type: string;
        /**
         * @Property endpoint: The IP address or domain name of endpoint in the endpoint group.
         */
        readonly endpoint: string;
        /**
         * @Property weight: The weight of endpoint N in the endpoint group.
         */
        readonly weight: number;
    }
}
/**
 * Properties for defining a `ALIYUN::GA::IpSets`
 */
export interface RosIpSetsProps {
    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string;
}
/**
 * A ROS template type:  `ALIYUN::GA::IpSets`
 */
export declare class RosIpSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::IpSets";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    readonly attrAccelerateRegionIds: any;
    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    readonly attrIpSetIds: any;
    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    readonly attrIpVersions: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accelerateRegion:
     */
    accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    acceleratorId: string;
    /**
     * Create a new `ALIYUN::GA::IpSets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpSetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIpSets {
    /**
     * @stability external
     */
    interface AccelerateRegionProperty {
        /**
         * @Property ipVersion: IP version. Valid values: IPv4, IPv6
         */
        readonly ipVersion?: string;
        /**
         * @Property bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
     * Note
     * The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
     * The total bandwidth for all regions must not exceed the amount included in your basic
     * bandwidth plan.
         */
        readonly bandwidth: number;
        /**
         * @Property accelerateRegionId: The ID of the region where traffic is to be accelerated.
         */
        readonly accelerateRegionId: string;
    }
}
/**
 * Properties for defining a `ALIYUN::GA::Listener`
 */
export interface RosListenerProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string;
    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    readonly protocol: string;
    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string;
    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string;
}
/**
 * A ROS template type:  `ALIYUN::GA::Listener`
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Listener";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    acceleratorId: string;
    /**
     * @Property portRanges:
     */
    portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    protocol: string;
    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    clientAffinity: string | undefined;
    /**
     * @Property description: The description of the listener.
     */
    description: string | undefined;
    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    name: string | undefined;
    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface PortRangesProperty {
        /**
         * @Property fromPort: The first listening port of the port range specified for receiving and forwarding
     * requests to endpoints.
         */
        readonly fromPort: number;
        /**
         * @Property toPort: The last listening port of the port range specified for receiving and forwarding requests
     * to endpoints.
         */
        readonly toPort: number;
    }
}
