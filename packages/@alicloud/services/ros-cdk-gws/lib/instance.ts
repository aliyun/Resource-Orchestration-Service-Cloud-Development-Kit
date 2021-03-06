import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './gws.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::GWS::Instance`
 */
export interface InstanceProps {

    /**
     * Property clusterId: Cluster id
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property imageId: Mirror id
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    readonly systemDiskCategory: string | ros.IResolvable;

    /**
     * Property systemDiskSize: System disk size
     */
    readonly systemDiskSize: number | ros.IResolvable;

    /**
     * Property workMode: Work mode:
     * Desktop
     * Application
     */
    readonly workMode: string | ros.IResolvable;

    /**
     * Property allocatePublicAddress: Whether to allocate a public network address
     */
    readonly allocatePublicAddress?: boolean | ros.IResolvable;

    /**
     * Property appList: App list. This value is only valid when WorkMode is Application.
     */
    readonly appList?: Array<RosInstance.AppListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoRenew: Whether auto renew
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: Instance charge type:
     * PostPaid (default): Pay-As-You-Go
     * PrePaid: Subscription
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Network charge type:
     * PayByTraffic (default): Flow-per-use billing
     * PayByBandwidth: fixed-bandwidth billing
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * Property name: Instance name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property period: Period of subscription.
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Unit of period. Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GWS::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute InstanceChargeType: Instance charge type
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
     */
    public readonly attrMaxBandwidthIn: ros.IResolvable;

    /**
     * Attribute MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
     */
    public readonly attrMaxBandwidthOut: ros.IResolvable;

    /**
     * Attribute Name: Instance name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GWS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            clusterId: props.clusterId,
            systemDiskSize: props.systemDiskSize,
            instanceChargeType: props.instanceChargeType,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period,
            allocatePublicAddress: props.allocatePublicAddress,
            systemDiskCategory: props.systemDiskCategory,
            name: props.name,
            internetChargeType: props.internetChargeType,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn,
            imageId: props.imageId,
            instanceType: props.instanceType,
            appList: props.appList,
            workMode: props.workMode,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClusterId = rosInstance.attrClusterId;
        this.attrInstanceChargeType = rosInstance.attrInstanceChargeType;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrMaxBandwidthIn = rosInstance.attrMaxBandwidthIn;
        this.attrMaxBandwidthOut = rosInstance.attrMaxBandwidthOut;
        this.attrName = rosInstance.attrName;
    }
}
