import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackages } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBandwidthPackages as BandwidthPackagesProperty };

/**
 * Properties for defining a `BandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
 */
export interface BandwidthPackagesProps {

    /**
     * Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property type: The type of the bandwidth package. Value:
     * Basic: Basic bandwidth package.
     * CrossDomain: cross-region acceleration package.
     * China Station only supports Basic.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::BandwidthPackages`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
 */
export class BandwidthPackages extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BandwidthPackagesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BandwidthPackageIds: The list of bandwidth package IDs.
     */
    public readonly attrBandwidthPackageIds: ros.IResolvable;

    /**
     * Attribute BandwidthPackages: The list of bandwidth packages.
     */
    public readonly attrBandwidthPackages: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBandwidthPackages = new RosBandwidthPackages(this, id,  {
            type: props.type,
            resourceGroupId: props.resourceGroupId,
            bandwidthPackageId: props.bandwidthPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackages;
        this.attrBandwidthPackageIds = rosBandwidthPackages.attrBandwidthPackageIds;
        this.attrBandwidthPackages = rosBandwidthPackages.attrBandwidthPackages;
    }
}
