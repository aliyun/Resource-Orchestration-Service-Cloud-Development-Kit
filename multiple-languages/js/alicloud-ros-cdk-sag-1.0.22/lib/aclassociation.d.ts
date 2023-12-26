import * as ros from '@alicloud/ros-cdk-core';
import { RosACLAssociation } from './sag.generated';
export { RosACLAssociation as ACLAssociationProperty };
/**
 * Properties for defining a `ACLAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
 */
export interface ACLAssociationProps {
    /**
     * Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::ACLAssociation`, which is used to associate an access control list (ACL) with a Smart Access Gateway (SAG) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosACLAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
 */
export declare class ACLAssociation extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLAssociationProps, enableResourcePropertyConstraint?: boolean);
}
