import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackages } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthPackages as CenBandwidthPackagesProperty };

/**
 * Properties for defining a `CenBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
export interface CenBandwidthPackagesProps {

    /**
     * Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenBandwidthPackages.FilterProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property includeReservationData: Specifies whether to include renewal data.
     */
    readonly includeReservationData?: boolean | ros.IResolvable;

    /**
     * Property isOrKey: The logical operator between the filter conditions.
     */
    readonly isOrKey?: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::CenBandwidthPackages`, which is used to query the details of Cloud Enterprise Network (CEN) bandwidth plans within the current Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthPackages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
export class CenBandwidthPackages extends ros.Resource {

    /**
     * Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
     */
    public readonly attrCenBandwidthPackageIds: ros.IResolvable;

    /**
     * Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
     */
    public readonly attrCenBandwidthPackages: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenBandwidthPackages = new RosCenBandwidthPackages(this, id,  {
            isOrKey: props.isOrKey,
            filter: props.filter,
            includeReservationData: props.includeReservationData,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthPackages;
        this.attrCenBandwidthPackageIds = rosCenBandwidthPackages.attrCenBandwidthPackageIds;
        this.attrCenBandwidthPackages = rosCenBandwidthPackages.attrCenBandwidthPackages;
    }
}
