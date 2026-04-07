import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export interface NamespaceProps {

    /**
     * Property name: Namespace name
     */
    readonly name: string | ros.IResolvable;
}

/**
 * Represents a `Namespace`.
 */
export interface INamespace extends ros.IResource {
    readonly props: NamespaceProps;

    /**
     * Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACM::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export class Namespace extends ros.Resource implements INamespace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Endpoint: Endpoint
     */
    public readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: ID namespace
     */
    public readonly attrNamespaceId: ros.IResolvable | string;

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
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrEndpoint = rosNamespace.attrEndpoint;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
