import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::GWS::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC id
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property name: Cluster name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property policy: Cluster policy
     */
    readonly policy?: RosCluster.PolicyProperty | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::GWS::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWS::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster id
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute Name: Cluster name
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC id
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property name: Cluster name
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property policy: Cluster policy
     */
    policy: RosCluster.PolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitch id
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::GWS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface PolicyProperty {
        /**
         * @Property localDrive: Local drive
         */
        readonly localDrive: string | ros.IResolvable;
        /**
         * @Property usbRedirect: USB redirect
         */
        readonly usbRedirect: string | ros.IResolvable;
        /**
         * @Property clipboard: Clipboard
         */
        readonly clipboard: string | ros.IResolvable;
        /**
         * @Property watermark: Watermark
         */
        readonly watermark: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::GWS::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property clusterId: Cluster id
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property imageId: Mirror id
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    readonly systemDiskCategory: string | ros.IResolvable;
    /**
     * @Property systemDiskSize: System disk size
     */
    readonly systemDiskSize: number | ros.IResolvable;
    /**
     * @Property workMode: Work mode:
     * Desktop
     * Application
     */
    readonly workMode: string | ros.IResolvable;
    /**
     * @Property allocatePublicAddress: Whether to allocate a public network address
     */
    readonly allocatePublicAddress?: boolean | ros.IResolvable;
    /**
     * @Property appList: App list. This value is only valid when WorkMode is Application.
     */
    readonly appList?: Array<RosInstance.AppListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoRenew: Whether auto renew
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: Instance charge type:
     * PostPaid (default): Pay-As-You-Go
     * PrePaid: Subscription
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: Network charge type:
     * PayByTraffic (default): Flow-per-use billing
     * PayByBandwidth: fixed-bandwidth billing
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property name: Instance name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property period: Period of subscription.
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of period. Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::GWS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster id
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute InstanceChargeType: Instance charge type
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
     */
    readonly attrMaxBandwidthIn: ros.IResolvable;
    /**
     * @Attribute MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
     */
    readonly attrMaxBandwidthOut: ros.IResolvable;
    /**
     * @Attribute Name: Instance name
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster id
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property imageId: Mirror id
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    systemDiskCategory: string | ros.IResolvable;
    /**
     * @Property systemDiskSize: System disk size
     */
    systemDiskSize: number | ros.IResolvable;
    /**
     * @Property workMode: Work mode:
     * Desktop
     * Application
     */
    workMode: string | ros.IResolvable;
    /**
     * @Property allocatePublicAddress: Whether to allocate a public network address
     */
    allocatePublicAddress: boolean | ros.IResolvable | undefined;
    /**
     * @Property appList: App list. This value is only valid when WorkMode is Application.
     */
    appList: Array<RosInstance.AppListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether auto renew
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance charge type:
     * PostPaid (default): Pay-As-You-Go
     * PrePaid: Subscription
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Network charge type:
     * PayByTraffic (default): Flow-per-use billing
     * PayByBandwidth: fixed-bandwidth billing
     * This value is only valid when AllocatePublicAddress is true.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property name: Instance name
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property period: Period of subscription.
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of period. Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitch id
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::GWS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface AppListProperty {
        /**
         * @Property appArgs: The running parameters of the application.
         */
        readonly appArgs?: string | ros.IResolvable;
        /**
         * @Property appPath: The running path of the application.
         */
        readonly appPath?: string | ros.IResolvable;
        /**
         * @Property appName: The name of the application.
         */
        readonly appName?: string | ros.IResolvable;
    }
}
//# sourceMappingURL=gws.generated.d.ts.map