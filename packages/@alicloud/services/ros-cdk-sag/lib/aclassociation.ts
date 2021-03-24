import * as ros from '@alicloud/ros-cdk-core';
import { RosACLAssociation } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosACLAssociation as ACLAssociationProperty };

/**
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`
 */
export interface ACLAssociationProps {

    /**
     * Property aclId: Access control ID.
     */
    readonly aclId: string;

    /**
     * Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string;
}

/**
 * A ROS resource type:  `ALIYUN::SAG::ACLAssociation`
 */
export class ACLAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosACLAssociation = new RosACLAssociation(this, id,  {
            aclId: props.aclId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosACLAssociation;
    }
}
