import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkPackageAssociation } from './ecd.generated';
export { RosNetworkPackageAssociation as NetworkPackageAssociationProperty };
/**
 * Properties for defining a `NetworkPackageAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export interface NetworkPackageAssociationProps {
    /**
     * Property networkPackageId: The ID of the Internet access package.
     */
    readonly networkPackageId: string | ros.IResolvable;
    /**
     * Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;
}
/**
 * Represents a `NetworkPackageAssociation`.
 */
export interface INetworkPackageAssociation extends ros.IResource {
    readonly props: NetworkPackageAssociationProps;
    /**
     * Attribute NetworkPackageId: The ID of the Internet access package.
     */
    readonly attrNetworkPackageId: ros.IResolvable | string;
    /**
     * Attribute OfficeSiteId: The ID of the workspace.
     */
    readonly attrOfficeSiteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::NetworkPackageAssociation`, which is used to associate a premium bandwidth plan with an office network.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkPackageAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
export declare class NetworkPackageAssociation extends ros.Resource implements INetworkPackageAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkPackageAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkPackageId: The ID of the Internet access package.
     */
    readonly attrNetworkPackageId: ros.IResolvable | string;
    /**
     * Attribute OfficeSiteId: The ID of the workspace.
     */
    readonly attrOfficeSiteId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkPackageAssociationProps, enableResourcePropertyConstraint?: boolean);
}
