import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `ALIYUN::SAE::Namespace`
 */
export interface NamespaceProps {

    /**
     * Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string;

    /**
     * Property namespaceName: Namespace name
     */
    readonly namespaceName: string;

    /**
     * Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SAE::Namespace`
 */
export class Namespace extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NamespaceId: Namespace ID
     */
    public readonly attrNamespaceId: any;

    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespace = new RosNamespace(this, id,  {
            namespaceName: props.namespaceName,
            namespaceId: props.namespaceId,
            namespaceDescription: props.namespaceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
