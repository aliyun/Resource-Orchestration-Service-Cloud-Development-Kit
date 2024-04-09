import * as ros from '@alicloud/ros-cdk-core';
import { RosRules } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRules as RulesProperty };

/**
 * Properties for defining a `Rules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export interface RulesProps {

    /**
     * Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    readonly listenerPort: string | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Rules`, which is used to query the forwarding rules that are configured for a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export class Rules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RulesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    public readonly attrRuleIds: ros.IResolvable;

    /**
     * Attribute Rules: The list of rules.
     */
    public readonly attrRules: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RulesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRules = new RosRules(this, id,  {
            listenerPort: props.listenerPort,
            loadBalancerId: props.loadBalancerId,
            listenerProtocol: props.listenerProtocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRules;
        this.attrRuleIds = rosRules.attrRuleIds;
        this.attrRules = rosRules.attrRules;
    }
}
