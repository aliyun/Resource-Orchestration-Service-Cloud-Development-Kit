import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './kafka.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instances
 */
export interface InstancesProps {
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Instances`ALIYUN::KMS::Alias is used to create an alias for a Customer Master Key (CMK).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instances
 */
export declare class Instances extends ros.Resource {
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
