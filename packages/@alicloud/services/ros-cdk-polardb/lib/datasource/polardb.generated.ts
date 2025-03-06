// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDBClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDBClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.dbVersion && (typeof properties.dbVersion) !== 'object') {
        errors.collect(ros.propertyValidator('dbVersion', ros.validateAllowedValues)({
          data: properties.dbVersion,
          allowedValues: ["8.0","5.7","5.6","11","14"],
        }));
    }
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.expired && (typeof properties.expired) !== 'object') {
        errors.collect(ros.propertyValidator('expired', ros.validateAllowedValues)({
          data: properties.expired,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('expired', ros.validateString)(properties.expired));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDBClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBClusters` resource.
 */
// @ts-ignore TS6133
function rosDBClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'DbClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DbType': ros.stringToRosTemplate(properties.dbType),
      'DbVersion': ros.stringToRosTemplate(properties.dbVersion),
      'Description': ros.stringToRosTemplate(properties.description),
      'Expired': ros.stringToRosTemplate(properties.expired),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
 */
export class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBClusters";

    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    public readonly attrDbClusters: ros.IResolvable;

    /**
     * @Attribute DbClusterIds: The ID of the cluster.
     */
    public readonly attrDbClusterIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    public dbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property dbType: The database engine that the cluster runs.
     */
    public dbType: string | ros.IResolvable | undefined;

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
    public dbVersion: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the cluster.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Indicates whether the cluster has expired.
     * Valid values: 
     * true 
     * false
     */
    public expired: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusters = this.getAtt('DBClusters');
        this.attrDbClusterIds = this.getAtt('DbClusterIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.description = props.description;
        this.expired = props.expired;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            description: this.description,
            expired: this.expired,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDBNodeClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBNodeClassesProps`
 *
 * @returns the result of the validation.
 */
function RosDBNodeClassesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDBNodeClassesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBNodeClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosDBNodeClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::DBNodeClasses` resource.
 */
// @ts-ignore TS6133
function rosDBNodeClassesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBNodeClassesPropsValidator(properties).assertSuccess();
    }
    return {
      'PayType': ros.stringToRosTemplate(properties.payType),
      'DBNodeClass': ros.stringToRosTemplate(properties.dbNodeClass),
      'DBType': ros.stringToRosTemplate(properties.dbType),
      'DBVersion': ros.stringToRosTemplate(properties.dbVersion),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBNodeClasses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBNodeClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
export class RosDBNodeClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::DBNodeClasses";

    /**
     * @Attribute DBNodeClassIds: The list of db node class ids.
     */
    public readonly attrDbNodeClassIds: ros.IResolvable;

    /**
     * @Attribute DBNodeClasses: The list of db node classes.
     */
    public readonly attrDbNodeClasses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property payType: The billing method. Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
     */
    public dbNodeClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbType: The database engine. Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    public dbType: string | ros.IResolvable | undefined;

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
    public dbVersion: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBNodeClassesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBNodeClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNodeClassIds = this.getAtt('DBNodeClassIds');
        this.attrDbNodeClasses = this.getAtt('DBNodeClasses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.payType = props.payType;
        this.dbNodeClass = props.dbNodeClass;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.refreshOptions = props.refreshOptions;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            payType: this.payType,
            dbNodeClass: this.dbNodeClass,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            refreshOptions: this.refreshOptions,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBNodeClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosGlobalDatabaseNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosGlobalDatabaseNetworkPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gdnId', ros.requiredValidator)(properties.gdnId));
    errors.collect(ros.propertyValidator('gdnId', ros.validateString)(properties.gdnId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGlobalDatabaseNetworkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetwork` resource
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetwork` resource.
 */
// @ts-ignore TS6133
function rosGlobalDatabaseNetworkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGlobalDatabaseNetworkPropsValidator(properties).assertSuccess();
    }
    return {
      'GdnId': ros.stringToRosTemplate(properties.gdnId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetwork`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
 */
export class RosGlobalDatabaseNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetwork";

    /**
     * @Attribute Connections: The information about the connection to the cluster.
     */
    public readonly attrConnections: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time at which the GDN was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DbClusters: The clusters that are included in the GDN.
     */
    public readonly attrDbClusters: ros.IResolvable;

    /**
     * @Attribute DbType: The type of the database engine. Only MySQL is supported.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * @Attribute DbVersion: The version of the database engine. Only version 8.0 is supported.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * @Attribute GdnDescription: The description of the GDN. The description must meet the following requirements:
It cannot start with http:// or https://.
It must start with a letter.
It can contain letters, digits, underscores (_), and hyphens (-).
It must be 2 to 126 characters in length.
     */
    public readonly attrGdnDescription: ros.IResolvable;

    /**
     * @Attribute GdnId: The ID of the GDN.
     */
    public readonly attrGdnId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gdnId: The ID of the GDN.
     */
    public gdnId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalDatabaseNetworkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGlobalDatabaseNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnections = this.getAtt('Connections');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbClusters = this.getAtt('DbClusters');
        this.attrDbType = this.getAtt('DbType');
        this.attrDbVersion = this.getAtt('DbVersion');
        this.attrGdnDescription = this.getAtt('GdnDescription');
        this.attrGdnId = this.getAtt('GdnId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gdnId = props.gdnId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gdnId: this.gdnId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGlobalDatabaseNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosGlobalDatabaseNetworksProps`
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworksProps`
 *
 * @returns the result of the validation.
 */
function RosGlobalDatabaseNetworksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('gdnId', ros.validateString)(properties.gdnId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGlobalDatabaseNetworksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetworks` resource
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::GlobalDatabaseNetworks` resource.
 */
// @ts-ignore TS6133
function rosGlobalDatabaseNetworksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGlobalDatabaseNetworksPropsValidator(properties).assertSuccess();
    }
    return {
      'DbClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'GdnId': ros.stringToRosTemplate(properties.gdnId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetworks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetworks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
 */
export class RosGlobalDatabaseNetworks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::GlobalDatabaseNetworks";

    /**
     * @Attribute GdnIds: The list of gdn IDs.
     */
    public readonly attrGdnIds: ros.IResolvable;

    /**
     * @Attribute GlobalDatabaseNetworks: The list of global database networks.
     */
    public readonly attrGlobalDatabaseNetworks: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    public dbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property gdnId: The ID of the GDN.
     */
    public gdnId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalDatabaseNetworksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGlobalDatabaseNetworks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGdnIds = this.getAtt('GdnIds');
        this.attrGlobalDatabaseNetworks = this.getAtt('GlobalDatabaseNetworks');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.gdnId = props.gdnId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            gdnId: this.gdnId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGlobalDatabaseNetworksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosParameterGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupProps`
 *
 * @returns the result of the validation.
 */
function RosParameterGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameterGroupId', ros.requiredValidator)(properties.parameterGroupId));
    errors.collect(ros.propertyValidator('parameterGroupId', ros.validateString)(properties.parameterGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosParameterGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroup` resource.
 */
// @ts-ignore TS6133
function rosParameterGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosParameterGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ParameterGroupId': ros.stringToRosTemplate(properties.parameterGroupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
export class RosParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroup";

    /**
     * @Attribute CreateTime: The time when the parameter template was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DbType: The type of the database engine.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * @Attribute DbVersion: The version of the database engine.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * @Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied. Valid values:
* 0: A restart is not required.
* 1: A restart is required.
     */
    public readonly attrForceRestart: ros.IResolvable;

    /**
     * @Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    public readonly attrParameterCounts: ros.IResolvable;

    /**
     * @Attribute ParameterGroupDesc: The description of the parameter template.
     */
    public readonly attrParameterGroupDesc: ros.IResolvable;

    /**
     * @Attribute ParameterGroupId: The ID of the parameter template.
     */
    public readonly attrParameterGroupId: ros.IResolvable;

    /**
     * @Attribute ParameterGroupName: The name of the parameter template.
     */
    public readonly attrParameterGroupName: ros.IResolvable;

    /**
     * @Attribute ParameterGroupType: The type of the parameter template. Valid values:
0: the default parameter template.
1: a custom parameter template.
2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
     */
    public readonly attrParameterGroupType: ros.IResolvable;

    /**
     * @Attribute Parameters: Details about the parameter templates.
     */
    public readonly attrParameters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property parameterGroupId: The ID of the parameter template.
     */
    public parameterGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosParameterGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbType = this.getAtt('DbType');
        this.attrDbVersion = this.getAtt('DbVersion');
        this.attrForceRestart = this.getAtt('ForceRestart');
        this.attrParameterCounts = this.getAtt('ParameterCounts');
        this.attrParameterGroupDesc = this.getAtt('ParameterGroupDesc');
        this.attrParameterGroupId = this.getAtt('ParameterGroupId');
        this.attrParameterGroupName = this.getAtt('ParameterGroupName');
        this.attrParameterGroupType = this.getAtt('ParameterGroupType');
        this.attrParameters = this.getAtt('Parameters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.parameterGroupId = props.parameterGroupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            parameterGroupId: this.parameterGroupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosParameterGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosParameterGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosParameterGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosParameterGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::POLARDB::ParameterGroups` resource.
 */
// @ts-ignore TS6133
function rosParameterGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosParameterGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'DbType': ros.stringToRosTemplate(properties.dbType),
      'DbVersion': ros.stringToRosTemplate(properties.dbVersion),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
export class RosParameterGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::POLARDB::ParameterGroups";

    /**
     * @Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    public readonly attrParameterGroupIds: ros.IResolvable;

    /**
     * @Attribute ParameterGroups: The list of parameter groups.
     */
    public readonly attrParameterGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbType: The type of the database engine.
     */
    public dbType: string | ros.IResolvable | undefined;

    /**
     * @Property dbVersion: The version of the database engine.
     */
    public dbVersion: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosParameterGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrParameterGroupIds = this.getAtt('ParameterGroupIds');
        this.attrParameterGroups = this.getAtt('ParameterGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosParameterGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
