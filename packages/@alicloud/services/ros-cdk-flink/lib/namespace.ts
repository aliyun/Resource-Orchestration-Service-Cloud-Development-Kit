import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './flink.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export interface NamespaceProps {

    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property namespace: Project space name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property resourceSpec: Resource specifications.
     */
    readonly resourceSpec?: RosNamespace.ResourceSpecProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Flink::Namespace`, which is used to create a project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export class Namespace extends ros.Resource {

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Namespace: Project space name.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNamespace = new RosNamespace(this, id,  {
            instanceId: props.instanceId,
            resourceSpec: props.resourceSpec,
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrInstanceId = rosNamespace.attrInstanceId;
        this.attrNamespace = rosNamespace.attrNamespace;
    }
}
