import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackage } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBandwidthPackage as BandwidthPackageProperty };

/**
 * Properties for defining a `ALIYUN::ECS::BandwidthPackage`
 */
export interface BandwidthPackageProps {

    /**
     * Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property ipCount: Total internet IPs of this Bandwidth package, [1-5]
     */
    readonly ipCount: number | ros.IResolvable;

    /**
     * Property natGatewayId: Create bandwidth package for specified NAT gateway
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly bandwidthPackageName?: string | ros.IResolvable;

    /**
     * Property description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property zoneId: The availability zone where the bandwidth package will be created.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::BandwidthPackage`
 */
export class BandwidthPackage extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute BandwidthPackageId: The bandwidth package id of created Bandwidth package.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * Attribute BandwidthPackageIps: The allocated public IPs.
     */
    public readonly attrBandwidthPackageIps: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::BandwidthPackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBandwidthPackage = new RosBandwidthPackage(this, id,  {
            bandwidthPackageName: props.bandwidthPackageName,
            ipCount: props.ipCount,
            description: props.description,
            zoneId: props.zoneId,
            bandwidth: props.bandwidth === undefined || props.bandwidth === null ? 5 : props.bandwidth,
            natGatewayId: props.natGatewayId,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByTraffic' : props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackage;
        this.attrBandwidthPackageId = rosBandwidthPackage.attrBandwidthPackageId;
        this.attrBandwidthPackageIps = rosBandwidthPackage.attrBandwidthPackageIps;
    }
}
