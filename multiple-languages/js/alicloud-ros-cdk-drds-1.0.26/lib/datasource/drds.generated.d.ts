import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Accounts";
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
 * Properties for defining a `RosDrdsDBs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export interface RosDrdsDBsProps {
    /**
     * @Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsDBs`, which is used to query the details of databases on an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDBs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export declare class RosDrdsDBs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDBs";
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
 * Properties for defining a `RosDrdsInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsInstances`, which is used to query instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export declare class RosDrdsInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstances";
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
