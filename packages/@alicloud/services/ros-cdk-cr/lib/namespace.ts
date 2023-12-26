import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Namespace extends ros.Resource {

    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Namespace: The namespace.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * Attribute NamespaceId: The namespace ID.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespace = new RosNamespace(this, id,  {
            instanceId: props.instanceId,
            autoCreate: props.autoCreate === undefined || props.autoCreate === null ? true : props.autoCreate,
            defaultVisibility: props.defaultVisibility === undefined || props.defaultVisibility === null ? 'PRIVATE' : props.defaultVisibility,
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrInstanceId = rosNamespace.attrInstanceId;
        this.attrNamespace = rosNamespace.attrNamespace;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
