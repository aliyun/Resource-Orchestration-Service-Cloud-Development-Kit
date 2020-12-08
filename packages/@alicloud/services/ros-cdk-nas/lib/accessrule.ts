import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessRule } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessRule as AccessRuleProperty };

/**
 * Properties for defining a `ALIYUN::NAS::AccessRule`
 */
export interface AccessRuleProps {

    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string;

    /**
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp: string;

    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number;

    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string;

    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string;
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
     * @Attribute AccessRuleId: Rule serial number
     */
    public readonly attrAccessRuleId: any;

    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessRule = new RosAccessRule(this, id,  {
            userAccessType: props.userAccessType ? props.userAccessType : 'no_squash',
            priority: props.priority ? props.priority : 1,
            accessGroupName: props.accessGroupName,
            sourceCidrIp: props.sourceCidrIp,
            rwAccessType: props.rwAccessType ? props.rwAccessType : 'RDWR',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessRule;
        this.attrAccessRuleId = rosAccessRule.attrAccessRuleId;
    }
}
