import * as ros from '@alicloud/ros-cdk-core';
import { RosNacosService } from './mse.generated';
export { RosNacosService as NacosServiceProperty };
/**
 * Properties for defining a `ALIYUN::MSE::NacosService`
 */
export interface NacosServiceProps {
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    readonly ephemeral?: boolean | ros.IResolvable;
    /**
     * Property groupName: The name of the group.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * Property protectThreshold: The protection threshold.
     */
    readonly protectThreshold?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::MSE::NacosService`
 */
export declare class NacosService extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::MSE::NacosService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NacosServiceProps, enableResourcePropertyConstraint?: boolean);
}
