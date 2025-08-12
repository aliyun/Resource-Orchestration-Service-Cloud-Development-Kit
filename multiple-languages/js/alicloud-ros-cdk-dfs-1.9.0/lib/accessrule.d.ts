import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessRule } from './dfs.generated';
export { RosAccessRule as AccessRuleProperty };
/**
 * Properties for defining a `AccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
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
     * Property rwAccessType: The read\/write permission of the authorized object on the file system.
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
 * Represents a `AccessRule`.
 */
export interface IAccessRule extends ros.IResource {
    readonly props: AccessRuleProps;
    /**
     * Attribute AccessRuleId: The ID of the access_rule.
     */
    readonly attrAccessRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DFS::AccessRule`, which is used to create a rule for a permission group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
 */
export declare class AccessRule extends ros.Resource implements IAccessRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccessRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessRuleId: The ID of the access_rule.
     */
    readonly attrAccessRuleId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessRuleProps, enableResourcePropertyConstraint?: boolean);
}
