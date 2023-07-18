import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackages } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommonBandwidthPackages as CommonBandwidthPackagesProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::CommonBandwidthPackages`
 */
export interface CommonBandwidthPackagesProps {

    /**
     * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;

    /**
     * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::CommonBandwidthPackages`
 */
export class CommonBandwidthPackages extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    public readonly attrCommonBandwidthPackageIds: ros.IResolvable;

    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    public readonly attrCommonBandwidthPackages: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::CommonBandwidthPackages`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCommonBandwidthPackages = new RosCommonBandwidthPackages(this, id,  {
            resourceGroupId: props.resourceGroupId,
            commonBandwidthPackageName: props.commonBandwidthPackageName,
            commonBandwidthPackageId: props.commonBandwidthPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackages;
        this.attrCommonBandwidthPackageIds = rosCommonBandwidthPackages.attrCommonBandwidthPackageIds;
        this.attrCommonBandwidthPackages = rosCommonBandwidthPackages.attrCommonBandwidthPackages;
    }
}
