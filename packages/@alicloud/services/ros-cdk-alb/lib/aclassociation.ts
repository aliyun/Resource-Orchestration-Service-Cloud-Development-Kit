import * as ros from '@alicloud/ros-cdk-core';
import { RosAclAssociation } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AclAssociation`, which is used to associate access control lists (ACLs) with a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAclAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
 */
export class AclAssociation extends ros.Resource {

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAclAssociation = new RosAclAssociation(this, id,  {
            aclType: props.aclType,
            aclIds: props.aclIds,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAclAssociation;
        this.attrListenerId = rosAclAssociation.attrListenerId;
    }
}
