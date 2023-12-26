import * as ros from '@alicloud/ros-cdk-core';
import { RosNacosService } from './mse.generated';
export { RosNacosService as NacosServiceProperty };
/**
 * Properties for defining a `NacosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::NacosService`, which is used to create a Nacos service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNacosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export declare class NacosService extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NacosServiceProps, enableResourcePropertyConstraint?: boolean);
}
