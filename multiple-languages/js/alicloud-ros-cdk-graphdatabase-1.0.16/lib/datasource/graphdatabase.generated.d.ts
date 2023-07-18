import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::GraphDatabase::Accounts`
 */
export interface RosAccountsProps {
    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     */
    readonly accountName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::GraphDatabase::Accounts`
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Accounts";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountNames: The list of account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * @Attribute Accounts: The list of accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Instance Id.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::GraphDatabase::Accounts`.
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
 * Properties for defining a `DATASOURCE::GraphDatabase::DbInstances`
 */
export interface RosDbInstancesProps {
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::GraphDatabase::DbInstances`
 */
export declare class RosDbInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DbInstanceIds: The list of db instance IDs.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute DbInstances: The list of db instances.
     */
    readonly attrDbInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::GraphDatabase::DbInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
