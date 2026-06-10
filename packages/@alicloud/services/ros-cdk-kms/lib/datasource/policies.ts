import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicies } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPolicies as PoliciesProperty };

/**
 * Properties for defining a `Policies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export interface PoliciesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Policies`.
 */
export interface IPolicies extends ros.IResource {
    readonly props: PoliciesProps;

    /**
     * Attribute Policies: The list of policies.
     */
    readonly attrPolicies: ros.IResolvable | string;

    /**
     * Attribute PolicyNames: The list of policy names.
     */
    readonly attrPolicyNames: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Policies`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export class Policies extends ros.Resource implements IPolicies {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PoliciesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Policies: The list of policies.
     */
    public readonly attrPolicies: ros.IResolvable | string;

    /**
     * Attribute PolicyNames: The list of policy names.
     */
    public readonly attrPolicyNames: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PoliciesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPolicies = new RosPolicies(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPolicies;
        this.attrPolicies = rosPolicies.attrPolicies;
        this.attrPolicyNames = rosPolicies.attrPolicyNames;
    }
}
