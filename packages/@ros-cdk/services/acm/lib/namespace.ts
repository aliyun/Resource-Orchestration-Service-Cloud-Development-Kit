import * as ros from '@ros-cdk/core';
import { RosNamespace } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `ALIYUN::ACM::Namespace`
 */
export interface NamespaceProps {

    /**
     * @Property name: Namespace name
     */
    readonly name: string;
}

/**
 * A ROS resource type:  `ALIYUN::ACM::Namespace`
 */
export class Namespace extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute NamespaceId: ID namespace
     */
    public readonly attrNamespaceId: any;

    /**
     * Create a new `ALIYUN::ACM::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespace = new RosNamespace(this, id,  {
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
