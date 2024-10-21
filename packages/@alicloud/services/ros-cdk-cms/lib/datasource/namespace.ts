import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export interface NamespaceProps {

    /**
     * Property namespace: Indicator warehouse name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::Namespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export class Namespace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Create the timestamp of the indicator warehouse.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: Description of indicator warehouse.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute ModifyTime: The timestamp of the last modification indicator warehouse.
     */
    public readonly attrModifyTime: ros.IResolvable;

    /**
     * Attribute Namespace: Indicator warehouse name.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * Attribute Specification: Data storage duration.
     */
    public readonly attrSpecification: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNamespace = new RosNamespace(this, id,  {
            namespace: props.namespace,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrCreateTime = rosNamespace.attrCreateTime;
        this.attrDescription = rosNamespace.attrDescription;
        this.attrModifyTime = rosNamespace.attrModifyTime;
        this.attrNamespace = rosNamespace.attrNamespace;
        this.attrSpecification = rosNamespace.attrSpecification;
    }
}
