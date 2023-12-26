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
      DbClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      DbType: ros.stringToRosTemplate(properties.dbType),
      DbVersion: ros.stringToRosTemplate(properties.dbVersion),
      Description: ros.stringToRosTemplate(properties.description),
      Expired: ros.stringToRosTemplate(properties.expired),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBClusters`, which is used to query the details of PolarDB clusters.
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
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            description: this.description,
            expired: this.expired,
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
      PayType: ros.stringToRosTemplate(properties.payType),
      DBNodeClass: ros.stringToRosTemplate(properties.dbNodeClass),
      DBType: ros.stringToRosTemplate(properties.dbType),
      DBVersion: ros.stringToRosTemplate(properties.dbVersion),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::DBNodeClasses`DATASOURCE::POLARDB::GlobalDatabaseNetworks is used to query all global database networks (GDNs) within the current Alibaba Cloud account.
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
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            payType: this.payType,
            dbNodeClass: this.dbNodeClass,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBNodeClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      DbClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      GdnId: ros.stringToRosTemplate(properties.gdnId),
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            gdnId: this.gdnId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGlobalDatabaseNetworksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      DbType: ros.stringToRosTemplate(properties.dbType),
      DbVersion: ros.stringToRosTemplate(properties.dbVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`, which is used to query parameter templates in a specific region.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbType: this.dbType,
            dbVersion: this.dbVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosParameterGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
