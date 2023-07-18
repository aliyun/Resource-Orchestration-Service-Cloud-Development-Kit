import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstances } from './drds.generated';
export { RosDrdsInstances as DrdsInstancesProperty };
/**
 * Properties for defining a `DATASOURCE::DRDS::DrdsInstances`
 */
export interface DrdsInstancesProps {
    /**
     * Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::DRDS::DrdsInstances`
 */
export declare class DrdsInstances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of drds instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of drds instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DRDS::DrdsInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DrdsInstancesProps, enableResourcePropertyConstraint?: boolean);
}
