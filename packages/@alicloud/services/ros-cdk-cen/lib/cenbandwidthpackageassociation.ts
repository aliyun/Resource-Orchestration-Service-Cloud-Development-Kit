import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackageAssociation } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthPackageAssociation as CenBandwidthPackageAssociationProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export interface CenBandwidthPackageAssociationProps {

    /**
     * Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly cenBandwidthPackageId: string | ros.IResolvable;

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export class CenBandwidthPackageAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackageAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackageAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenBandwidthPackageAssociation = new RosCenBandwidthPackageAssociation(this, id,  {
            cenId: props.cenId,
            cenBandwidthPackageId: props.cenBandwidthPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthPackageAssociation;
    }
}
