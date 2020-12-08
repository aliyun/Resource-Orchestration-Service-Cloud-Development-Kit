import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackageAssociation } from './cen.generated';
export { RosCenBandwidthPackageAssociation as CenBandwidthPackageAssociationProperty };
/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export interface CenBandwidthPackageAssociationProps {
    /**
     * @Property cenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly cenBandwidthPackageId: string;
    /**
     * @Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
export declare class CenBandwidthPackageAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackageAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackageAssociationProps, enableResourcePropertyConstraint?: boolean);
}
