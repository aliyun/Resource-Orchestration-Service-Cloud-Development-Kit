import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::DTS::MigrationInstances`
 */
export interface RosMigrationInstancesProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DTS::MigrationInstances`
 */
export declare class RosMigrationInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::DTS::MigrationInstances`.
     *
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
