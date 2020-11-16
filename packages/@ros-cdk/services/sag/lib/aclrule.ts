import * as ros from '@ros-cdk/core';
import { RosACLRule } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosACLRule as ACLRuleProperty };

/**
 * Properties for defining a `ALIYUN::SAG::ACLRule`
 */
export interface ACLRuleProps {

    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string;

    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    readonly destPortRange: string;

    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string;

    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string;

    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string;

    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string;

    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number;
}

/**
 * A ROS resource type:  `ALIYUN::SAG::ACLRule`
 */
export class ACLRule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AcrId: Access control rule ID.
     */
    public readonly attrAcrId: any;

    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosACLRule = new RosACLRule(this, id,  {
            policy: props.policy,
            description: props.description,
            destCidr: props.destCidr,
            sourcePortRange: props.sourcePortRange,
            sourceCidr: props.sourceCidr,
            priority: props.priority ? props.priority : 1,
            aclId: props.aclId,
            ipProtocol: props.ipProtocol,
            destPortRange: props.destPortRange,
            direction: props.direction,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosACLRule;
        this.attrAcrId = rosACLRule.attrAcrId;
    }
}
