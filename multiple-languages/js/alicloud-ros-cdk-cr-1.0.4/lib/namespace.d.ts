import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cr.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::CR::Namespace`
 */
export interface NamespaceProps {
    /**
     * Property namespace: The name of the namespace.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property autoCreate: Specifies whether to automatically create an image repository.
     */
    readonly autoCreate?: boolean | ros.IResolvable;
    /**
     * Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    readonly defaultVisibility?: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CR::Namespace`
 */
export declare class Namespace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Namespace: The namespace.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Attribute NamespaceId: The namespace ID.
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
