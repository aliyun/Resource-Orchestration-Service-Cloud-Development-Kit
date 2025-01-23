import * as ros from '@alicloud/ros-cdk-core';
import { RosAclAssociation } from './alb.generated';
export { RosAclAssociation as AclAssociationProperty };
/**
 * Properties for defining a `AclAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
 */
export interface AclAssociationProps {
    /**
     * Property aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
     */
    readonly aclIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aclType: The type of ACL.
     */
    readonly aclType: string | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * Represents a `AclAssociation`.
 */
export interface IAclAssociation extends ros.IResource {
    readonly props: AclAssociationProps;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AclAssociation`, which is used to associate access control lists (ACLs) with a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAclAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
 */
export declare class AclAssociation extends ros.Resource implements IAclAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AclAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclAssociationProps, enableResourcePropertyConstraint?: boolean);
}
