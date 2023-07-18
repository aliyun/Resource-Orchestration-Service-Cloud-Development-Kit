import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::OTS::Instances`
 */
export interface RosInstancesProps {
    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::OTS::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OTS::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceNames: The list of instance names.
     */
    readonly attrInstanceNames: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of instance.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of instance.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::OTS::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `DATASOURCE::OTS::Tables`
 */
export interface RosTablesProps {
    /**
     * @Property instanceName: The name of the instance to which the table belongs.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property tableName: The name of table.
     */
    readonly tableName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::OTS::Tables`
 */
export declare class RosTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OTS::Tables";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TableNames: The list of table names.
     */
    readonly attrTableNames: ros.IResolvable;
    /**
     * @Attribute Tables: The list of tables.
     */
    readonly attrTables: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance to which the table belongs.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property tableName: The name of table.
     */
    tableName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::OTS::Tables`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTablesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
