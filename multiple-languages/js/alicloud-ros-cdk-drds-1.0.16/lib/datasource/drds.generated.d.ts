import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::DRDS::Accounts`
 */
export interface RosAccountsProps {
    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DRDS::Accounts`
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Accounts";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Accounts: Indicates the information about the instance accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * @Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    readonly attrDrdsAccountNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::DRDS::Accounts`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::DRDS::DrdsDBs`
 */
export interface RosDrdsDBsProps {
    /**
     * @Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DRDS::DrdsDBs`
 */
export declare class RosDrdsDBs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDBs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Databases: The list of drds databases.
     */
    readonly attrDatabases: ros.IResolvable;
    /**
     * @Attribute DrdsDatabaseNames: The list of drds database names.
     */
    readonly attrDrdsDatabaseNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Drds Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DRDS::DrdsDBs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::DRDS::DrdsInstances`
 */
export interface RosDrdsInstancesProps {
    /**
     * @Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::DRDS::DrdsInstances`
 */
export declare class RosDrdsInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceIds: The list of drds instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of drds instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Example description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    type: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::DRDS::DrdsInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
