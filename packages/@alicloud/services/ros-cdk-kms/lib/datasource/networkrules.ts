import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkRules } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkRules as NetworkRulesProperty };

/**
 * Properties for defining a `NetworkRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrules
 */
export interface NetworkRulesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::NetworkRules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrules
 */
export class NetworkRules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NetworkRulesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkRuleNames: The list of network rule names.
     */
    public readonly attrNetworkRuleNames: ros.IResolvable;

    /**
     * Attribute NetworkRules: The list of network rules.
     */
    public readonly attrNetworkRules: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkRulesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkRules = new RosNetworkRules(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkRules;
        this.attrNetworkRuleNames = rosNetworkRules.attrNetworkRuleNames;
        this.attrNetworkRules = rosNetworkRules.attrNetworkRules;
    }
}
