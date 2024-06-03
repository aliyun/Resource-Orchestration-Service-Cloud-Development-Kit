import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cr.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
export declare class Namespace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
