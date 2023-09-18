import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './rocketmq.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Instances`
 */
export interface InstancesProps {
}
/**
 * A ROS resource type:  `DATASOURCE::ROCKETMQ::Instances`
 */
export declare class Instances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ROCKETMQ::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
