import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackageAssociation } from './cen.generated';
export { RosCenBandwidthPackageAssociation as CenBandwidthPackageAssociationProperty };
/**
 * Properties for defining a `CenBandwidthPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
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
 * Represents a `CenBandwidthPackageAssociation`.
 */
export interface ICenBandwidthPackageAssociation extends ros.IResource {
    readonly props: CenBandwidthPackageAssociationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenBandwidthPackageAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthPackageAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
export declare class CenBandwidthPackageAssociation extends ros.Resource implements ICenBandwidthPackageAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CenBandwidthPackageAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackageAssociationProps, enableResourcePropertyConstraint?: boolean);
}
