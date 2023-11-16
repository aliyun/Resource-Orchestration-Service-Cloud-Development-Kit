import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::POLARDB::DBClusters`
 */
export interface RosDBClustersProps {
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * @Property dbType: The database engine that the cluster runs.
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database engine that the cluster runs.
     * The range of the MySQL version number is as follows:
     * *** 5.6 * * *
     * *** 5.7 * * *
     * *** 8.0 * * *
     * The value range of PostgreSQL version number is as follows:
     * *** 11 * * *
     * *** 14 * * *
     * The Oracle version number is 11.
     */
    readonly dbVersion?: string | ros.IResolvable;
    /**
     * @Property description: The description of the cluster.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property expired: Indicates whether the cluster has expired.
     * Valid values:
     * true
     * false
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::POLARDB::DBClusters`
 */
export declare class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBClusters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable;
    /**
     * @Attribute DbClusterIds: The ID of the cluster.
     */
    readonly attrDbClusterIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    dbClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property dbType: The database engine that the cluster runs.
     */
    dbType: string | ros.IResolvable | undefined;
    /**
     * @Property dbVersion: The version of the database engine that the cluster runs.
     * The range of the MySQL version number is as follows:
     * *** 5.6 * * *
     * *** 5.7 * * *
     * *** 8.0 * * *
     * The value range of PostgreSQL version number is as follows:
     * *** 11 * * *
     * *** 14 * * *
     * The Oracle version number is 11.
     */
    dbVersion: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the cluster.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property expired: Indicates whether the cluster has expired.
     * Valid values:
     * true
     * false
     */
    expired: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::POLARDB::DBClusters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::POLARDB::DBNodeClasses`
 */
export interface RosDBNodeClassesProps {
    /**
     * @Property payType: The billing method. Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
     */
    readonly dbNodeClass?: string | ros.IResolvable;
    /**
     * @Property dbType: The database engine. Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version number of the database engine
     * Valid values for the MySQL database engine:
     * 5.6
     * 5.7
     * 8
     * Valid value for the PostgreSQL database engine: 11
     * Valid value for the Oracle database engine: 11
     * Note If you specify the DBType parameter, you must specify this parameter
     */
    readonly dbVersion?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::POLARDB::DBNodeClasses`
 */
export declare class RosDBNodeClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBNodeClasses";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBNodeClassIds: The list of db node class ids.
     */
    readonly attrDbNodeClassIds: ros.IResolvable;
    /**
     * @Attribute DBNodeClasses: The list of db node classes.
     */
    readonly attrDbNodeClasses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property payType: The billing method. Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    payType: string | ros.IResolvable;
    /**
     * @Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
     */
    dbNodeClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbType: The database engine. Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    dbType: string | ros.IResolvable | undefined;
    /**
     * @Property dbVersion: The version number of the database engine
     * Valid values for the MySQL database engine:
     * 5.6
     * 5.7
     * 8
     * Valid value for the PostgreSQL database engine: 11
     * Valid value for the Oracle database engine: 11
     * Note If you specify the DBType parameter, you must specify this parameter
     */
    dbVersion: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::POLARDB::DBNodeClasses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBNodeClassesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::POLARDB::GlobalDatabaseNetworks`
 */
export interface RosGlobalDatabaseNetworksProps {
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * @Property gdnId: The ID of the GDN.
     */
    readonly gdnId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::POLARDB::GlobalDatabaseNetworks`
 */
export declare class RosGlobalDatabaseNetworks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetworks";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GdnIds: The list of gdn IDs.
     */
    readonly attrGdnIds: ros.IResolvable;
    /**
     * @Attribute GlobalDatabaseNetworks: The list of global database networks.
     */
    readonly attrGlobalDatabaseNetworks: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    dbClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property gdnId: The ID of the GDN.
     */
    gdnId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::POLARDB::GlobalDatabaseNetworks`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalDatabaseNetworksProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::POLARDB::ParameterGroups`
 */
export interface RosParameterGroupsProps {
    /**
     * @Property dbType: The type of the database engine.
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database engine.
     */
    readonly dbVersion?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::POLARDB::ParameterGroups`
 */
export declare class RosParameterGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    readonly attrParameterGroupIds: ros.IResolvable;
    /**
     * @Attribute ParameterGroups: The list of parameter groups.
     */
    readonly attrParameterGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbType: The type of the database engine.
     */
    dbType: string | ros.IResolvable | undefined;
    /**
     * @Property dbVersion: The version of the database engine.
     */
    dbVersion: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::POLARDB::ParameterGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
