import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespaces as NamespacesProperty };

/**
 * Properties for defining a `Namespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
 */
export interface NamespacesProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SAE::Namespaces`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
 */
export class Namespaces extends ros.Resource {

    /**
     * Attribute NamespaceIds: The list of namespace names.
     */
    public readonly attrNamespaceIds: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosNamespaces;
        this.attrNamespaceIds = rosNamespaces.attrNamespaceIds;
        this.attrNamespaces = rosNamespaces.attrNamespaces;
    }
}
