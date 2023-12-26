import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosMigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface RosMigrationInstancesProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export declare class RosMigrationInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationInstances";
    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
