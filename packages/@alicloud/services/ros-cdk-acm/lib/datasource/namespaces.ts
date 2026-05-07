import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespaces as NamespacesProperty };

/**
 * Properties for defining a `Namespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
 */
export interface NamespacesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Namespaces`.
 */
export interface INamespaces extends ros.IResource {
    readonly props: NamespacesProps;

    /**
     * Attribute NamespaceIds: The list of namespace IDs.
     */
    readonly attrNamespaceIds: ros.IResolvable | string;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ACM::Namespaces`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
 */
export class Namespaces extends ros.Resource implements INamespaces {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NamespacesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NamespaceIds: The list of namespace IDs.
     */
    public readonly attrNamespaceIds: ros.IResolvable | string;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespacesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNamespaces = new RosNamespaces(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespaces;
        this.attrNamespaceIds = rosNamespaces.attrNamespaceIds;
        this.attrNamespaces = rosNamespaces.attrNamespaces;
    }
}
