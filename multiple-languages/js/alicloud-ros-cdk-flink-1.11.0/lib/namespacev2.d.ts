import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaceV2 } from './flink.generated';
export { RosNamespaceV2 as NamespaceV2Property };
/**
 * Properties for defining a `NamespaceV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
 */
export interface NamespaceV2Props {
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
    readonly resourceSpec?: RosNamespaceV2.ResourceSpecProperty | ros.IResolvable;
}
/**
 * Represents a `NamespaceV2`.
 */
export interface INamespaceV2 extends ros.IResource {
    readonly props: NamespaceV2Props;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Namespace: Project space name.
     */
    readonly attrNamespace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Flink::NamespaceV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaceV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
 */
export declare class NamespaceV2 extends ros.Resource implements INamespaceV2 {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NamespaceV2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Namespace: Project space name.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceV2Props, enableResourcePropertyConstraint?: boolean);
}
