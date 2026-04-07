import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicy } from './ddos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPolicy as PolicyProperty };

/**
 * Properties for defining a `Policy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export interface PolicyProps {

    /**
     * Property policyName: The name of the policy.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * Property type: The type of the policy. Values:
     * - default: Indicates the default protection strategy.
     * - l3: Indicates the IP protection strategy.
     * - l4: Indicates the port protection strategy.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property actionType: Operation type
     * ActionType = 10 Modify policy name
     * ActionType = 11 Modify whitelist and whitelist timeout
     * ActionType = 12 modify add white high anti-back source network segment switch
     * ActionType = 13 Modify the switch to discard ICMP
     * ActionType = 20 Add black and white list
     * ActionType = 21 Delete whitelist and whitelist
     * ActionType = 22 Clear White List
     * ActionType = 23 Clear the blacklist
     * ActionType = 30 Modify Smart Switch
     * ActionType = 31 Modify regional ban
     * ActionType = 32 Modify Source Speed Limit Black
     * ActionType = 34 Modifying Reflective Port Filtering
     * ActionType = 40,41,42 Create, delete, and modify Port rules
     * ActionType = 50,51,52 Create, delete, and modify fingerprint rules
     * ActionType = 60 switch L4 protection
     * ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    readonly actionType?: string | ros.IResolvable;

    /**
     * Property blackIpList: Blacklist list.
     */
    readonly blackIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property content: Configuration Content.
     */
    readonly content?: RosPolicy.ContentProperty | ros.IResolvable;

    /**
     * Property whiteIpList: Whitelist IP list.
     */
    readonly whiteIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Policy`.
 */
export interface IPolicy extends ros.IResource {
    readonly props: PolicyProps;

    /**
     * Attribute Content: Configuration Content.
     */
    readonly attrContent: ros.IResolvable | string;

    /**
     * Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;

    /**
     * Attribute PolicyName: The name of the policy.
     */
    readonly attrPolicyName: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the policy.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoS::Policy`, which is used to create a mitigation policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
export class Policy extends ros.Resource implements IPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Content: Configuration Content.
     */
    public readonly attrContent: ros.IResolvable | string;

    /**
     * Attribute PolicyId: The ID of the policy.
     */
    public readonly attrPolicyId: ros.IResolvable | string;

    /**
     * Attribute PolicyName: The name of the policy.
     */
    public readonly attrPolicyName: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the policy.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPolicy = new RosPolicy(this, id,  {
            whiteIpList: props.whiteIpList,
            type: props.type,
            actionType: props.actionType,
            content: props.content,
            policyName: props.policyName,
            blackIpList: props.blackIpList,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPolicy;
        this.attrContent = rosPolicy.attrContent;
        this.attrPolicyId = rosPolicy.attrPolicyId;
        this.attrPolicyName = rosPolicy.attrPolicyName;
        this.attrType = rosPolicy.attrType;
    }
}
