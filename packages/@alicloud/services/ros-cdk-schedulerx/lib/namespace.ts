import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './schedulerx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export interface NamespaceProps {

    /**
     * Property name: The name of the namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
     */
    readonly uid?: string | ros.IResolvable;
}

/**
 * Represents a `Namespace`.
 */
export interface INamespace extends ros.IResource {
    readonly props: NamespaceProps;

    /**
     * Attribute NamespaceUid: The ID of the namespace.
     */
    readonly attrNamespaceUid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SchedulerX::Namespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export class Namespace extends ros.Resource implements INamespace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NamespaceUid: The ID of the namespace.
     */
    public readonly attrNamespaceUid: ros.IResolvable | string;

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
            uid: props.uid,
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrNamespaceUid = rosNamespace.attrNamespaceUid;
    }
}
