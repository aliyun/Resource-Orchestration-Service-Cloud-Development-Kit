import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessRule } from './dfs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessRule as AccessRuleProperty };

/**
 * Properties for defining a `ALIYUN::DFS::AccessRule`
 */
export interface AccessRuleProps {

    /**
     * Property accessGroupId: The resource ID of Access Group.
     */
    readonly accessGroupId: string | ros.IResolvable;

    /**
     * Property networkSegment: The NetworkSegment of the Access Rule.
     */
    readonly networkSegment: string | ros.IResolvable;

    /**
     * Property rwAccessType: The read/write permission of the authorized object on the file system.
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    readonly rwAccessType: string | ros.IResolvable;

    /**
     * Property description: The Description of the Access Rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property priority: The Priority of the Access Rule. Valid values: 1 to 100. 
     * NOTE: When multiple rules are matched by the same authorized object, 
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    readonly priority?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DFS::AccessRule`
 */
export class AccessRule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessRuleId: The ID of the access_rule.
     */
    public readonly attrAccessRuleId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DFS::AccessRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessRule = new RosAccessRule(this, id,  {
            description: props.description,
            priority: props.priority,
            networkSegment: props.networkSegment,
            accessGroupId: props.accessGroupId,
            rwAccessType: props.rwAccessType === undefined || props.rwAccessType === null ? 'RDWR' : props.rwAccessType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessRule;
        this.attrAccessRuleId = rosAccessRule.attrAccessRuleId;
    }
}
