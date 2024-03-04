import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRule as RuleProperty };

/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
export interface RuleProps {

    /**
     * Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;

    /**
     * Property forwardIp: The destination external server.
     */
    readonly forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ruleName: The name of the forwarding rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    readonly zoneName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::Rule`, which is used to add a forwarding rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
export class Rule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    public readonly attrEndpointName: ros.IResolvable;

    /**
     * Attribute ForwardIp: The information about each destination external server.
     */
    public readonly attrForwardIp: ros.IResolvable;

    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * Attribute Type: The type of the forwarding rule.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    public readonly attrVpcs: ros.IResolvable;

    /**
     * Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    public readonly attrZoneName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRule = new RosRule(this, id,  {
            forwardIp: props.forwardIp,
            zoneName: props.zoneName,
            type: props.type,
            endpointId: props.endpointId,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrCreateTime = rosRule.attrCreateTime;
        this.attrEndpointId = rosRule.attrEndpointId;
        this.attrEndpointName = rosRule.attrEndpointName;
        this.attrForwardIp = rosRule.attrForwardIp;
        this.attrRuleName = rosRule.attrRuleName;
        this.attrType = rosRule.attrType;
        this.attrVpcs = rosRule.attrVpcs;
        this.attrZoneName = rosRule.attrZoneName;
    }
}
