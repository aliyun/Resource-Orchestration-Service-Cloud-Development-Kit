import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackages } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthPackages as CenBandwidthPackagesProperty };

/**
 * Properties for defining a `DATASOURCE::CEN::CenBandwidthPackages`
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
 * A ROS resource type:  `DATASOURCE::CEN::CenBandwidthPackages`
 */
export class CenBandwidthPackages extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
     */
    public readonly attrCenBandwidthPackageIds: ros.IResolvable;

    /**
     * Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
     */
    public readonly attrCenBandwidthPackages: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CEN::CenBandwidthPackages`.
     *
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
