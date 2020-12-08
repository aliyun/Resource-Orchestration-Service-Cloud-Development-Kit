import * as ros from '@alicloud/ros-cdk-core';
import { RosACL } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosACL as ACLProperty };

/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface ACLProps {

    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string;
}

/**
 * A ROS resource type:  `ALIYUN::SAG::ACL`
 */
export class Acl extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AclId: Access control set ID.
     */
    public readonly attrAclId: any;

    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosACL = new RosACL(this, id,  {
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosACL;
        this.attrAclId = rosACL.attrAclId;
    }
}
