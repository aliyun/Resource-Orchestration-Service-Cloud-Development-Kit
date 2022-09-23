import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroup } from './dfs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessGroup as AccessGroupProperty };

/**
 * Properties for defining a `ALIYUN::DFS::AccessGroup`
 */
export interface AccessGroupProps {

    /**
     * Property accessGroupName: The Name of Access Group. The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    readonly accessGroupName?: string | ros.IResolvable;

    /**
     * Property description: The description of the access_group.
     * The value contains 0 to 100 characters
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property networkType: The NetworkType of Access Group. Valid values: VPC.
     */
    readonly networkType?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DFS::AccessGroup`
 */
export class AccessGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessGroupId: The ID of the access_group.
     */
    public readonly attrAccessGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DFS::AccessGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessGroup = new RosAccessGroup(this, id,  {
            description: props.description,
            networkType: props.networkType,
            accessGroupName: props.accessGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroup;
        this.attrAccessGroupId = rosAccessGroup.attrAccessGroupId;
    }
}
