import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessRule } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessRule as AccessRuleProperty };

/**
 * Properties for defining a `ALIYUN::NAS::AccessRule`
 */
export interface AccessRuleProps {

    /**
     * Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;

    /**
     * Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp: string | ros.IResolvable;

    /**
     * Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string | ros.IResolvable;

    /**
     * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NAS::AccessRule`
 */
export class AccessRule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessRuleId: Rule serial number
     */
    public readonly attrAccessRuleId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessRule = new RosAccessRule(this, id,  {
            userAccessType: props.userAccessType === undefined || props.userAccessType === null ? 'no_squash' : props.userAccessType,
            priority: props.priority === undefined || props.priority === null ? 1 : props.priority,
            accessGroupName: props.accessGroupName,
            sourceCidrIp: props.sourceCidrIp,
            rwAccessType: props.rwAccessType === undefined || props.rwAccessType === null ? 'RDWR' : props.rwAccessType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessRule;
        this.attrAccessRuleId = rosAccessRule.attrAccessRuleId;
    }
}
