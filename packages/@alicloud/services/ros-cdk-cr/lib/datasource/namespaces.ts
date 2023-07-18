import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespaces as NamespacesProperty };

/**
 * Properties for defining a `DATASOURCE::CR::Namespaces`
 */
export interface NamespacesProps {

    /**
     * Property status: The status of namespace.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::CR::Namespaces`
 */
export class Namespaces extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NamespaceNames: The list of namespace names.
     */
    public readonly attrNamespaceNames: ros.IResolvable;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CR::Namespaces`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespacesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespaces = new RosNamespaces(this, id,  {
            status: props.status,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespaces;
        this.attrNamespaceNames = rosNamespaces.attrNamespaceNames;
        this.attrNamespaces = rosNamespaces.attrNamespaces;
    }
}
