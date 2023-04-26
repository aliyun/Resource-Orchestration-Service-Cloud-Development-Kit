import * as ros from '@alicloud/ros-cdk-core';
import { RosAclAssociation } from './alb.generated';
export { RosAclAssociation as AclAssociationProperty };
/**
 * Properties for defining a `ALIYUN::ALB::AclAssociation`
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
 * A ROS resource type:  `ALIYUN::ALB::AclAssociation`
 */
export declare class AclAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::AclAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclAssociationProps, enableResourcePropertyConstraint?: boolean);
}
