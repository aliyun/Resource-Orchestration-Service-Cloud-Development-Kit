import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceShareAssociation } from './resourcemanager.generated';
export { RosResourceShareAssociation as ResourceShareAssociationProperty };
/**
 * Properties for defining a `ResourceShareAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
export interface ResourceShareAssociationProps {
    /**
     * Property resourceShareId: The ID of the resource share.
     */
    readonly resourceShareId: string | ros.IResolvable;
    /**
     * Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    readonly permissionNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resources:
     */
    readonly resources?: Array<RosResourceShareAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ResourceShareAssociation`.
 */
export interface IResourceShareAssociation extends ros.IResource {
    readonly props: ResourceShareAssociationProps;
    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceShareAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceShareAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
export declare class ResourceShareAssociation extends ros.Resource implements IResourceShareAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ResourceShareAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceShareAssociationProps, enableResourcePropertyConstraint?: boolean);
}
