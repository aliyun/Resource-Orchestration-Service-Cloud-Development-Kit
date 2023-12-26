import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespaces as NamespacesProperty };

/**
 * Properties for defining a `Namespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export interface NamespacesProps {

    /**
     * Property status: The status of namespace.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Namespaces`, which is used to query namespaces.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export class Namespaces extends ros.Resource {

    /**
     * Attribute NamespaceNames: The list of namespace names.
     */
    public readonly attrNamespaceNames: ros.IResolvable;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    /**
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
