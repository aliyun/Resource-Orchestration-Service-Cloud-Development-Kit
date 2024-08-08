import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBClusters`, which is used to query the details of PolarDB clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
 */
export declare class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBClusters";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosDBNodeClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBNodeClasses`, which is used to query the available resources of a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBNodeClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
export declare class RosDBNodeClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBNodeClasses";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosGlobalDatabaseNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
 */
export interface RosGlobalDatabaseNetworkProps {
    /**
     * @Property gdnId: The ID of the GDN.
     */
    readonly gdnId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetwork`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
 */
export declare class RosGlobalDatabaseNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetwork";
    /**
     * @Attribute Connections: The information about the connection to the cluster.
     */
    readonly attrConnections: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time at which the GDN was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DbClusters: The clusters that are included in the GDN.
     */
    readonly attrDbClusters: ros.IResolvable;
    /**
     * @Attribute DbType: The type of the database engine. Only MySQL is supported.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * @Attribute DbVersion: The version of the database engine. Only version 8.0 is supported.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * @Attribute GdnDescription: The description of the GDN. The description must meet the following requirements:
It cannot start with http:// or https://.
It must start with a letter.
It can contain letters, digits, underscores (_), and hyphens (-).
It must be 2 to 126 characters in length.
     */
    readonly attrGdnDescription: ros.IResolvable;
    /**
     * @Attribute GdnId: The ID of the GDN.
     */
    readonly attrGdnId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gdnId: The ID of the GDN.
     */
    gdnId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalDatabaseNetworkProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGlobalDatabaseNetworks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetworks`, which is used to query all global database networks (GDNs) within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetworks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
 */
export declare class RosGlobalDatabaseNetworks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetworks";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
export interface RosParameterGroupProps {
    /**
     * @Property parameterGroupId: The ID of the parameter template.
     */
    readonly parameterGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
export declare class RosParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroup";
    /**
     * @Attribute CreateTime: The time when the parameter template was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * @Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * @Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied. Valid values:
* 0: A restart is not required.
* 1: A restart is required.
     */
    readonly attrForceRestart: ros.IResolvable;
    /**
     * @Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    readonly attrParameterCounts: ros.IResolvable;
    /**
     * @Attribute ParameterGroupDesc: The description of the parameter template.
     */
    readonly attrParameterGroupDesc: ros.IResolvable;
    /**
     * @Attribute ParameterGroupId: The ID of the parameter template.
     */
    readonly attrParameterGroupId: ros.IResolvable;
    /**
     * @Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable;
    /**
     * @Attribute ParameterGroupType: The type of the parameter template. Valid values:
0: the default parameter template.
1: a custom parameter template.
2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
     */
    readonly attrParameterGroupType: ros.IResolvable;
    /**
     * @Attribute Parameters: Details about the parameter templates.
     */
    readonly attrParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property parameterGroupId: The ID of the parameter template.
     */
    parameterGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosParameterGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`, which is used to query parameter templates in a specific region.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
export declare class RosParameterGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroups";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
