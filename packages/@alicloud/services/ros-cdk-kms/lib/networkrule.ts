import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkRule } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkRule as NetworkRuleProperty };

/**
 * Properties for defining a `NetworkRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export interface NetworkRuleProps {

    /**
     * Property networkRuleName: The name of the access control rule.
     */
    readonly networkRuleName: string | ros.IResolvable;

    /**
     * Property type: Network type. The value can be Private only, that is, only private IP addresses are supported.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property description: The description of the network rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
     */
    readonly sourcePrivateIp?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `NetworkRule`.
 */
export interface INetworkRule extends ros.IResource {
    readonly props: NetworkRuleProps;

    /**
     * Attribute Description: Description.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute SourcePrivateIp: VPC network whitelist.
     */
    readonly attrSourcePrivateIp: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::NetworkRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
 */
export class NetworkRule extends ros.Resource implements INetworkRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NetworkRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute SourcePrivateIp: VPC network whitelist.
     */
    public readonly attrSourcePrivateIp: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkRule = new RosNetworkRule(this, id,  {
            type: props.type === undefined || props.type === null ? 'Private' : props.type,
            description: props.description,
            sourcePrivateIp: props.sourcePrivateIp,
            networkRuleName: props.networkRuleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkRule;
        this.attrDescription = rosNetworkRule.attrDescription;
        this.attrSourcePrivateIp = rosNetworkRule.attrSourcePrivateIp;
    }
}
