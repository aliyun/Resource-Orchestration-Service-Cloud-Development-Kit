import * as ros from '@ros-cdk/core';
import { RosCommonBandwidthPackage } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommonBandwidthPackage as CommonBandwidthPackageProperty };

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`
 */
export interface CommonBandwidthPackageProps {

    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly bandwidth: number;

    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    readonly internetChargeType?: string;

    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    readonly isp?: string;

    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:// or https://.
     */
    readonly name?: string;

    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    readonly ratio?: number;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property zone: Zone Id.
     */
    readonly zone?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::CommonBandwidthPackage`
 */
export class CommonBandwidthPackage extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    public readonly attrBandwidthPackageId: any;

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCommonBandwidthPackage = new RosCommonBandwidthPackage(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            zone: props.zone,
            isp: props.isp ? props.isp : 'BGP',
            bandwidth: props.bandwidth,
            ratio: props.ratio ? props.ratio : 100,
            internetChargeType: props.internetChargeType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackage;
        this.attrBandwidthPackageId = rosCommonBandwidthPackage.attrBandwidthPackageId;
    }
}
