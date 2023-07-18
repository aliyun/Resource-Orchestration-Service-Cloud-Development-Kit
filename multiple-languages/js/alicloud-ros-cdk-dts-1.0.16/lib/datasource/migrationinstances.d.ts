import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationInstances } from './dts.generated';
export { RosMigrationInstances as MigrationInstancesProperty };
/**
 * Properties for defining a `DATASOURCE::DTS::MigrationInstances`
 */
export interface MigrationInstancesProps {
    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::DTS::MigrationInstances`
 */
export declare class MigrationInstances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DTS::MigrationInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MigrationInstancesProps, enableResourcePropertyConstraint?: boolean);
}
