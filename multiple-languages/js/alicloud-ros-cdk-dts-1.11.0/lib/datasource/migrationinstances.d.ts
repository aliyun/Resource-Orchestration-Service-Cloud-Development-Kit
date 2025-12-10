import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationInstances } from './dts.generated';
export { RosMigrationInstances as MigrationInstancesProperty };
/**
 * Properties for defining a `MigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface MigrationInstancesProps {
    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `MigrationInstances`.
 */
export interface IMigrationInstances extends ros.IResource {
    readonly props: MigrationInstancesProps;
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable | string;
    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationInstances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export declare class MigrationInstances extends ros.Resource implements IMigrationInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MigrationInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable | string;
    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MigrationInstancesProps, enableResourcePropertyConstraint?: boolean);
}
