import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './flink.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::Flink::Namespace`
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
 * A ROS resource type:  `ALIYUN::Flink::Namespace`
 */
export declare class Namespace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Namespace: Project space name.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Create a new `ALIYUN::Flink::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
