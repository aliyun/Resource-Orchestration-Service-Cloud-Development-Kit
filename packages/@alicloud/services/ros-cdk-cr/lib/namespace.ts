import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `ALIYUN::CR::Namespace`
 */
export interface NamespaceProps {

    /**
     * Property namespace: domain name
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property autoCreate: whether auto create repository
     */
    readonly autoCreate?: boolean | ros.IResolvable;

    /**
     * Property defaultVisibility: repository default visibility, public or private
     */
    readonly defaultVisibility?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CR::Namespace`
 */
export class Namespace extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NamespaceId: The namespace id
     */
    public readonly attrNamespaceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CR::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespace = new RosNamespace(this, id,  {
            autoCreate: props.autoCreate === undefined || props.autoCreate === null ? true : props.autoCreate,
            defaultVisibility: props.defaultVisibility === undefined || props.defaultVisibility === null ? 'PRIVATE' : props.defaultVisibility,
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
