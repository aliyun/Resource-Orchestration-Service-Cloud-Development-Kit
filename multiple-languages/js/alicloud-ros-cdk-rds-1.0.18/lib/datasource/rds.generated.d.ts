import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::RDS::Accounts`
 */
export interface RosAccountsProps {
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the RDS account.
     */
    readonly accountName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::RDS::Accounts`
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Accounts";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountNames: The list of The RDS account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * @Attribute Accounts: The list of The RDS accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the RDS account.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::RDS::Accounts`.
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
 * Properties for defining a `DATASOURCE::RDS::DBInstances`
 */
export interface RosDBInstancesProps {
    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    readonly connectionMode?: string | ros.IResolvable;
    /**
     * @Property connectionString: The endpoint of the instance.
     */
    readonly connectionString?: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;
    /**
     * @Property dbInstanceType: The role of the instances.
     */
    readonly dbInstanceType?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * @Property engine: The database engine that is run by the instances.
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    readonly instanceLevel?: number | ros.IResolvable;
    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instances.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    readonly proxyId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    readonly searchKey?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::RDS::DBInstances`
 */
export declare class RosDBInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute DBInstances: The list of The RDS Database instances.
     */
    readonly attrDbInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    connectionMode: string | ros.IResolvable | undefined;
    /**
     * @Property connectionString: The endpoint of the instance.
     */
    connectionString: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    dbInstanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    dbInstanceStatus: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceType: The role of the instances.
     */
    dbInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    dedicatedHostId: string | ros.IResolvable | undefined;
    /**
     * @Property engine: The database engine that is run by the instances.
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    expired: string | ros.IResolvable | undefined;
    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    instanceLevel: number | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instances.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    proxyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    searchKey: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::RDS::DBInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstancesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::RDS::Databases`
 */
export interface RosDatabasesProps {
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    readonly dbName?: string | ros.IResolvable;
    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    readonly dbStatus?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::RDS::Databases`
 */
export declare class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Databases";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBNames: The list of The RDS database names.
     */
    readonly attrDbNames: ros.IResolvable;
    /**
     * @Attribute Databases: The list of The RDS databases.
     */
    readonly attrDatabases: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    dbName: string | ros.IResolvable | undefined;
    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    dbStatus: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::RDS::Databases`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::RDS::Zones`
 */
export interface RosZonesProps {
    /**
     * @Property engine: The database engine that is run by the instance.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    readonly commodityCode?: string | ros.IResolvable;
    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    readonly dispenseMode?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone in which the instance is located.
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::RDS::Zones`
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Zones";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engine: The database engine that is run by the instance.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    commodityCode: string | ros.IResolvable | undefined;
    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    dispenseMode: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone in which the instance is located.
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::RDS::Zones`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
