import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRule as RuleProperty };

/**
 * Properties for defining a `ALIYUN::SLB::Rule`
 */
export interface RuleProps {

    /**
     * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::Rule`
 */
export class Rule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    public readonly attrRules: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRule = new RosRule(this, id,  {
            listenerPort: props.listenerPort,
            ruleList: props.ruleList,
            loadBalancerId: props.loadBalancerId,
            listenerProtocol: props.listenerProtocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrRules = rosRule.attrRules;
    }
}
