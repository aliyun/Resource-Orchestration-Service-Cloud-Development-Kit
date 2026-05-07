import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkRule } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkRule as NetworkRuleProperty };

/**
 * Properties for defining a `NetworkRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
export interface NetworkRuleProps {

    /**
     * Property networkRuleName: The name of the access control rule.
     */
    readonly networkRuleName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `NetworkRule`.
 */
export interface INetworkRule extends ros.IResource {
    readonly props: NetworkRuleProps;

    /**
     * Attribute Description: The access control rule description.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute SourcePrivateIp: The private IP address or private CIDR block.
     */
    readonly attrSourcePrivateIp: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::NetworkRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
 */
export class NetworkRule extends ros.Resource implements INetworkRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NetworkRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: The access control rule description.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute SourcePrivateIp: The private IP address or private CIDR block.
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
            networkRuleName: props.networkRuleName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkRule;
        this.attrDescription = rosNetworkRule.attrDescription;
        this.attrSourcePrivateIp = rosNetworkRule.attrSourcePrivateIp;
    }
}
