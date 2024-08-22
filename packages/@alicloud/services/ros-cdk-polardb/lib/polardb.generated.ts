// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAITask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export interface RosAITaskProps {

    /**
     * @Property dbClusterId: The ID of the DB cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property username: The database account that enables the PolarDB for AI function is required.
     */
    readonly username: string | ros.IResolvable;

    /**
     * @Property nodeType: The type of the node. Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    readonly nodeType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAITaskProps`
 *
 * @param properties - the TypeScript properties of a `RosAITaskProps`
 *
 * @returns the result of the validation.
 */
function RosAITaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('username', ros.requiredValidator)(properties.username));
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('nodeType', ros.validateString)(properties.nodeType));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosAITaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AITask` resource
 *
 * @param properties - the TypeScript properties of a `RosAITaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AITask` resource.
 */
// @ts-ignore TS6133
function rosAITaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAITaskPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'Password': ros.stringToRosTemplate(properties.password),
      'Username': ros.stringToRosTemplate(properties.username),
      'NodeType': ros.stringToRosTemplate(properties.nodeType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::AITask`, which is used to enable the PolarDB for AI feature.
 * @Note This class does not contain additional functions, so it is recommended to use the `AITask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export class RosAITask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::AITask";

    /**
     * @Attribute DBClusterId: The ID of the DB cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the DB cluster.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property username: The database account that enables the PolarDB for AI function is required.
     */
    public username: string | ros.IResolvable;

    /**
     * @Property nodeType: The type of the node. Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    public nodeType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAITaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAITask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterId = this.getAtt('DBClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.password = props.password;
        this.username = props.username;
        this.nodeType = props.nodeType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            password: this.password,
            username: this.username,
            nodeType: this.nodeType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAITaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:\/\/ or https:\/\/.
     * - It must be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege?: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    readonly accountType?: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    readonly dbName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.accountDescription && (Array.isArray(properties.accountDescription) || (typeof properties.accountDescription) === 'string')) {
        errors.collect(ros.propertyValidator('accountDescription', ros.validateLength)({
            data: properties.accountDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["Normal","Super"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (Array.isArray(properties.accountPassword) || (typeof properties.accountPassword) === 'string')) {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateLength)({
            data: properties.accountPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
      'AccountPrivilege': ros.stringToRosTemplate(properties.accountPrivilege),
      'AccountType': ros.stringToRosTemplate(properties.accountType),
      'DBName': ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::Account`, which is used to create a database account for a specified PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::Account";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:\/\/ or https:\/\/.
     * - It must be 2 to 256 characters in length.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    public accountPrivilege: string | ros.IResolvable | undefined;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    public accountType: string | ros.IResolvable | undefined;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    public dbName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbClusterId = props.dbClusterId;
        this.accountDescription = props.accountDescription;
        this.accountPrivilege = props.accountPrivilege;
        this.accountType = props.accountType;
        this.dbName = props.dbName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbClusterId: this.dbClusterId,
            accountDescription: this.accountDescription,
            accountPrivilege: this.accountPrivilege,
            accountType: this.accountType,
            dbName: this.dbName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccountPrivilege`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export interface RosAccountPrivilegeProps {

    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    readonly dbName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountPrivilegeProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPrivilegePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountPrivilege', ros.requiredValidator)(properties.accountPrivilege));
    if(properties.accountPrivilege && (Array.isArray(properties.accountPrivilege) || (typeof properties.accountPrivilege) === 'string')) {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateLength)({
            data: properties.accountPrivilege.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (Array.isArray(properties.dbName) || (typeof properties.dbName) === 'string')) {
        errors.collect(ros.propertyValidator('dbName', ros.validateLength)({
            data: properties.dbName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountPrivilegeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AccountPrivilege` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::AccountPrivilege` resource.
 */
// @ts-ignore TS6133
function rosAccountPrivilegePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPrivilegePropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPrivilege': ros.stringToRosTemplate(properties.accountPrivilege),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DBName': ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::AccountPrivilege`, which is used to grant access permissions on one or more databases in a specified ApsaraDB for POLARDB cluster to a standard account.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccountPrivilege` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::AccountPrivilege";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    public accountPrivilege: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    public dbName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountPrivilegeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccountPrivilege.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPrivilege = props.accountPrivilege;
        this.dbClusterId = props.dbClusterId;
        this.dbName = props.dbName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPrivilege: this.accountPrivilege,
            dbClusterId: this.dbClusterId,
            dbName: this.dbName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPrivilegePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export interface RosDBClusterProps {

    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType: string | ros.IResolvable;

    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11, 14
     * Oracle: 11, 14
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property allowShutDown: Whether to turn on No activity pause. The default is false.
     */
    readonly allowShutDown?: boolean | ros.IResolvable;

    /**
     * @Property architecture: The architecture of CPU. Valid values:
     * X86
     * ARM
     */
    readonly architecture?: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string | ros.IResolvable;

    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    readonly cloneDataPoint?: string | ros.IResolvable;

    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string | ros.IResolvable;

    /**
     * @Property coldStorageOption: The option of cold storage.
     */
    readonly coldStorageOption?: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable;

    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
     */
    readonly creationCategory?: string | ros.IResolvable;

    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    readonly creationOption?: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * @Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    readonly dbClusterParameters?: RosDBCluster.DBClusterParametersProperty | ros.IResolvable;

    /**
     * @Property dbMinorVersion: The minor version of the cluster. Valid values:
     * 8.0.2
     * 8.0.1
     * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
     */
    readonly dbMinorVersion?: string | ros.IResolvable;

    /**
     * @Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
     * 1: only one primary node.
     * 2: one read-only node and one primary node.
     */
    readonly dbNodeNum?: number | ros.IResolvable;

    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    readonly defaultTimeZone?: string | ros.IResolvable;

    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string | ros.IResolvable;

    /**
     * @Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
     * ON: enables the hot standby storage cluster feature.
     * OFF: disables the hot standby storage cluster feature
     * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
     * The default value for Standard Edition clusters is STANDBY.
     */
    readonly hotStandbyCluster?: string | ros.IResolvable;

    /**
     * @Property loosePolarLogBin: Enable the Binlog function, the value range is as follows:
     * ON: The cluster enables the Binlog function
     * OFF: The cluster disables the Binlog function
     * This parameter takes effect only when the parameter DBType is MySQL.
     */
    readonly loosePolarLogBin?: string | ros.IResolvable;

    /**
     * @Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
     * ON: The cluster starts the X-Engine enginen
     * OFF: The cluster shuts down the X-Engine engine
     * This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
     */
    readonly looseXEngine?: string | ros.IResolvable;

    /**
     * @Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
     * This parameter takes effect only when the parameter LooseXEngine is ON.
     */
    readonly looseXEngineUseMemoryPct?: number | ros.IResolvable;

    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly lowerCaseTableNames?: number | ros.IResolvable;

    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;

    /**
     * @Property parameterGroupId: The ID of the parameter template.
     * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
     */
    readonly parameterGroupId?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
     * polar.maxscale.g2.medium.c: 2 cores
     * polar.maxscale.g2.large.c: 4 cores
     * polar.maxscale.g2.xlarge.c: 8 cores
     * polar.maxscale.g2.2xlarge.c: 16 cores
     * polar.maxscale.g2.3xlarge.c: 24 cores
     * polar.maxscale.g2.4xlarge.c: 32 cores
     * polar.maxscale.g2.8xlarge.c: 64 cores
     */
    readonly proxyClass?: string | ros.IResolvable;

    /**
     * @Property proxyType: The type of PolarProxy. Default value: OFF. Valid values:
     * OFF: disables PolarProxy.
     * EXCLUSIVE: Dedicated Enterprise Edition
     * GENERAL: Standard Enterprise Edition
     */
    readonly proxyType?: string | ros.IResolvable;

    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    readonly renewalStatus?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restartMasterNode: Whether to restart the master node.
     */
    readonly restartMasterNode?: boolean | ros.IResolvable;

    /**
     * @Property scaleMax: Maximum limit of single-node scaling.
     */
    readonly scaleMax?: number | ros.IResolvable;

    /**
     * @Property scaleMin: Minimum limit of single-node scaling.
     */
    readonly scaleMin?: number | ros.IResolvable;

    /**
     * @Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMax?: number | ros.IResolvable;

    /**
     * @Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMin?: number | ros.IResolvable;

    /**
     * @Property securityGroupIds: The ID of the security group. 
     * You can add up to three security groups to a cluster.
     *
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * @Property serverlessType: Serverless type.
     */
    readonly serverlessType?: string | ros.IResolvable;

    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    readonly sourceResourceId?: string | ros.IResolvable;

    /**
     * @Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
     * This parameter takes effect only when the multi-zone data consistency feature is enabled.
     */
    readonly standbyAz?: string | ros.IResolvable;

    /**
     * @Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    readonly storageAutoScale?: string | ros.IResolvable;

    /**
     * @Property storagePayType: The storage pay type.
     */
    readonly storagePayType?: string | ros.IResolvable;

    /**
     * @Property storageSpace: The storage space that uses the subscription billing method. Unit: GB.
     * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
     */
    readonly storageSpace?: number | ros.IResolvable;

    /**
     * @Property storageType: The storage type. Valid values for Enterprise Edition:
     * PSL5
     * PSL4
     * Valid values for Standard Edition:
     * ESSDPL1
     * ESSDPL2
     * ESSDPL3
     * This parameter is invalid for serverless clusters.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * @Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
     * The maximum value is 32000.
     */
    readonly storageUpperBound?: number | ros.IResolvable;

    /**
     * @Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
     * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
     * OFF: disables the multi-zone data consistency feature.
     */
    readonly strictConsistency?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultTimeZone', ros.validateString)(properties.defaultTimeZone));
    errors.collect(ros.propertyValidator('gdnId', ros.validateString)(properties.gdnId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('storagePayType', ros.validateString)(properties.storagePayType));
    if(properties.backupRetentionPolicyOnClusterDeletion && (typeof properties.backupRetentionPolicyOnClusterDeletion) !== 'object') {
        errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateAllowedValues)({
          data: properties.backupRetentionPolicyOnClusterDeletion,
          allowedValues: ["ALL","LATEST","NONE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupRetentionPolicyOnClusterDeletion', ros.validateString)(properties.backupRetentionPolicyOnClusterDeletion));
    errors.collect(ros.propertyValidator('looseXEngine', ros.validateString)(properties.looseXEngine));
    errors.collect(ros.propertyValidator('dbType', ros.requiredValidator)(properties.dbType));
    if(properties.dbType && (typeof properties.dbType) !== 'object') {
        errors.collect(ros.propertyValidator('dbType', ros.validateAllowedValues)({
          data: properties.dbType,
          allowedValues: ["MySQL","Oracle","PostgreSQL"],
        }));
    }
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    errors.collect(ros.propertyValidator('storageAutoScale', ros.validateString)(properties.storageAutoScale));
    errors.collect(ros.propertyValidator('proxyClass', ros.validateString)(properties.proxyClass));
    errors.collect(ros.propertyValidator('dbVersion', ros.requiredValidator)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbMinorVersion', ros.validateString)(properties.dbMinorVersion));
    errors.collect(ros.propertyValidator('dbClusterParameters', RosDBCluster_DBClusterParametersPropertyValidator)(properties.dbClusterParameters));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDBCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('architecture', ros.validateString)(properties.architecture));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
          data: properties.renewalStatus,
          allowedValues: ["AutoRenewal","Normal","NotRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    if(properties.dbClusterDescription && (Array.isArray(properties.dbClusterDescription) || (typeof properties.dbClusterDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateLength)({
            data: properties.dbClusterDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE","Serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    errors.collect(ros.propertyValidator('allowShutDown', ros.validateBoolean)(properties.allowShutDown));
    errors.collect(ros.propertyValidator('loosePolarLogBin', ros.validateString)(properties.loosePolarLogBin));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('proxyType', ros.validateString)(properties.proxyType));
    errors.collect(ros.propertyValidator('dbNodeNum', ros.validateNumber)(properties.dbNodeNum));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('storageUpperBound', ros.validateNumber)(properties.storageUpperBound));
    errors.collect(ros.propertyValidator('cloneDataPoint', ros.validateString)(properties.cloneDataPoint));
    errors.collect(ros.propertyValidator('hotStandbyCluster', ros.validateString)(properties.hotStandbyCluster));
    errors.collect(ros.propertyValidator('sourceResourceId', ros.validateString)(properties.sourceResourceId));
    if(properties.scaleRoNumMin && (typeof properties.scaleRoNumMin) !== 'object') {
        errors.collect(ros.propertyValidator('scaleRoNumMin', ros.validateRange)({
            data: properties.scaleRoNumMin,
            min: 0,
            max: 15,
          }));
    }
    errors.collect(ros.propertyValidator('scaleRoNumMin', ros.validateNumber)(properties.scaleRoNumMin));
    if(properties.clusterNetworkType && (typeof properties.clusterNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterNetworkType', ros.validateAllowedValues)({
          data: properties.clusterNetworkType,
          allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterNetworkType', ros.validateString)(properties.clusterNetworkType));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('standbyAz', ros.validateString)(properties.standbyAz));
    if(properties.lowerCaseTableNames && (typeof properties.lowerCaseTableNames) !== 'object') {
        errors.collect(ros.propertyValidator('lowerCaseTableNames', ros.validateAllowedValues)({
          data: properties.lowerCaseTableNames,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('lowerCaseTableNames', ros.validateNumber)(properties.lowerCaseTableNames));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('coldStorageOption', RosDBCluster_ColdStorageOptionPropertyValidator)(properties.coldStorageOption));
    if(properties.scaleRoNumMax && (typeof properties.scaleRoNumMax) !== 'object') {
        errors.collect(ros.propertyValidator('scaleRoNumMax', ros.validateRange)({
            data: properties.scaleRoNumMax,
            min: 0,
            max: 15,
          }));
    }
    errors.collect(ros.propertyValidator('scaleRoNumMax', ros.validateNumber)(properties.scaleRoNumMax));
    errors.collect(ros.propertyValidator('looseXEngineUseMemoryPct', ros.validateNumber)(properties.looseXEngineUseMemoryPct));
    if(properties.scaleMax && (typeof properties.scaleMax) !== 'object') {
        errors.collect(ros.propertyValidator('scaleMax', ros.validateRange)({
            data: properties.scaleMax,
            min: 1,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('scaleMax', ros.validateNumber)(properties.scaleMax));
    errors.collect(ros.propertyValidator('creationCategory', ros.validateString)(properties.creationCategory));
    errors.collect(ros.propertyValidator('strictConsistency', ros.validateString)(properties.strictConsistency));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.requiredValidator)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    if(properties.creationOption && (typeof properties.creationOption) !== 'object') {
        errors.collect(ros.propertyValidator('creationOption', ros.validateAllowedValues)({
          data: properties.creationOption,
          allowedValues: ["CloneFromPolarDB","CloneFromRDS","MigrationFromRDS","Normal","CreateGdnStandby"],
        }));
    }
    errors.collect(ros.propertyValidator('creationOption', ros.validateString)(properties.creationOption));
    errors.collect(ros.propertyValidator('parameterGroupId', ros.validateString)(properties.parameterGroupId));
    errors.collect(ros.propertyValidator('storageSpace', ros.validateNumber)(properties.storageSpace));
    if(properties.serverlessType && (typeof properties.serverlessType) !== 'object') {
        errors.collect(ros.propertyValidator('serverlessType', ros.validateAllowedValues)({
          data: properties.serverlessType,
          allowedValues: ["AgileServerless"],
        }));
    }
    errors.collect(ros.propertyValidator('serverlessType', ros.validateString)(properties.serverlessType));
    errors.collect(ros.propertyValidator('restartMasterNode', ros.validateBoolean)(properties.restartMasterNode));
    if(properties.scaleMin && (typeof properties.scaleMin) !== 'object') {
        errors.collect(ros.propertyValidator('scaleMin', ros.validateRange)({
            data: properties.scaleMin,
            min: 1,
            max: 31,
          }));
    }
    errors.collect(ros.propertyValidator('scaleMin', ros.validateNumber)(properties.scaleMin));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DBNodeClass': ros.stringToRosTemplate(properties.dbNodeClass),
      'DBType': ros.stringToRosTemplate(properties.dbType),
      'DBVersion': ros.stringToRosTemplate(properties.dbVersion),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'AllowShutDown': ros.booleanToRosTemplate(properties.allowShutDown),
      'Architecture': ros.stringToRosTemplate(properties.architecture),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'BackupRetentionPolicyOnClusterDeletion': ros.stringToRosTemplate(properties.backupRetentionPolicyOnClusterDeletion),
      'CloneDataPoint': ros.stringToRosTemplate(properties.cloneDataPoint),
      'ClusterNetworkType': ros.stringToRosTemplate(properties.clusterNetworkType),
      'ColdStorageOption': rosDBClusterColdStorageOptionPropertyToRosTemplate(properties.coldStorageOption),
      'CreationCategory': ros.stringToRosTemplate(properties.creationCategory),
      'CreationOption': ros.stringToRosTemplate(properties.creationOption),
      'DBClusterDescription': ros.stringToRosTemplate(properties.dbClusterDescription),
      'DBClusterParameters': rosDBClusterDBClusterParametersPropertyToRosTemplate(properties.dbClusterParameters),
      'DBMinorVersion': ros.stringToRosTemplate(properties.dbMinorVersion),
      'DBNodeNum': ros.numberToRosTemplate(properties.dbNodeNum),
      'DefaultTimeZone': ros.stringToRosTemplate(properties.defaultTimeZone),
      'GDNId': ros.stringToRosTemplate(properties.gdnId),
      'HotStandbyCluster': ros.stringToRosTemplate(properties.hotStandbyCluster),
      'LoosePolarLogBin': ros.stringToRosTemplate(properties.loosePolarLogBin),
      'LooseXEngine': ros.stringToRosTemplate(properties.looseXEngine),
      'LooseXEngineUseMemoryPct': ros.numberToRosTemplate(properties.looseXEngineUseMemoryPct),
      'LowerCaseTableNames': ros.numberToRosTemplate(properties.lowerCaseTableNames),
      'MaintainTime': ros.stringToRosTemplate(properties.maintainTime),
      'ParameterGroupId': ros.stringToRosTemplate(properties.parameterGroupId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ProxyClass': ros.stringToRosTemplate(properties.proxyClass),
      'ProxyType': ros.stringToRosTemplate(properties.proxyType),
      'RenewalStatus': ros.stringToRosTemplate(properties.renewalStatus),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestartMasterNode': ros.booleanToRosTemplate(properties.restartMasterNode),
      'ScaleMax': ros.numberToRosTemplate(properties.scaleMax),
      'ScaleMin': ros.numberToRosTemplate(properties.scaleMin),
      'ScaleRoNumMax': ros.numberToRosTemplate(properties.scaleRoNumMax),
      'ScaleRoNumMin': ros.numberToRosTemplate(properties.scaleRoNumMin),
      'SecurityGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'ServerlessType': ros.stringToRosTemplate(properties.serverlessType),
      'SourceResourceId': ros.stringToRosTemplate(properties.sourceResourceId),
      'StandbyAZ': ros.stringToRosTemplate(properties.standbyAz),
      'StorageAutoScale': ros.stringToRosTemplate(properties.storageAutoScale),
      'StoragePayType': ros.stringToRosTemplate(properties.storagePayType),
      'StorageSpace': ros.numberToRosTemplate(properties.storageSpace),
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'StorageUpperBound': ros.numberToRosTemplate(properties.storageUpperBound),
      'StrictConsistency': ros.stringToRosTemplate(properties.strictConsistency),
      'Tags': ros.listMapper(rosDBClusterTagsPropertyToRosTemplate)(properties.tags),
      'TDEStatus': ros.booleanToRosTemplate(properties.tdeStatus),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBCluster`, which is used to create a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBCluster";

    /**
     * @Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public readonly attrClusterConnectionString: ros.IResolvable;

    /**
     * @Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public readonly attrClusterEndpointId: ros.IResolvable;

    /**
     * @Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    public readonly attrColdStorageInstanceId: ros.IResolvable;

    /**
     * @Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public readonly attrCustomConnectionStrings: ros.IResolvable;

    /**
     * @Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public readonly attrCustomEndpointIds: ros.IResolvable;

    /**
     * @Attribute DBClusterDescription: The description of the db cluster.
     */
    public readonly attrDbClusterDescription: ros.IResolvable;

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable;

    /**
     * @Attribute OrderId: The Order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public readonly attrPrimaryConnectionString: ros.IResolvable;

    /**
     * @Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    public readonly attrPrimaryConnectionStrings: ros.IResolvable;

    /**
     * @Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public readonly attrPrimaryEndpointId: ros.IResolvable;

    /**
     * @Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    public readonly attrPrimaryEndpointIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    public dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    public dbType: string | ros.IResolvable;

    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11, 14
     * Oracle: 11, 14
     */
    public dbVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property allowShutDown: Whether to turn on No activity pause. The default is false.
     */
    public allowShutDown: boolean | ros.IResolvable | undefined;

    /**
     * @Property architecture: The architecture of CPU. Valid values:
     * X86
     * ARM
     */
    public architecture: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    public backupRetentionPolicyOnClusterDeletion: string | ros.IResolvable | undefined;

    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    public cloneDataPoint: string | ros.IResolvable | undefined;

    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    public clusterNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property coldStorageOption: The option of cold storage.
     */
    public coldStorageOption: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable | undefined;

    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
     */
    public creationCategory: string | ros.IResolvable | undefined;

    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    public creationOption: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    public dbClusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    public dbClusterParameters: RosDBCluster.DBClusterParametersProperty | ros.IResolvable | undefined;

    /**
     * @Property dbMinorVersion: The minor version of the cluster. Valid values:
     * 8.0.2
     * 8.0.1
     * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
     */
    public dbMinorVersion: string | ros.IResolvable | undefined;

    /**
     * @Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
     * 1: only one primary node.
     * 2: one read-only node and one primary node.
     */
    public dbNodeNum: number | ros.IResolvable | undefined;

    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    public defaultTimeZone: string | ros.IResolvable | undefined;

    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    public gdnId: string | ros.IResolvable | undefined;

    /**
     * @Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
     * ON: enables the hot standby storage cluster feature.
     * OFF: disables the hot standby storage cluster feature
     * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
     * The default value for Standard Edition clusters is STANDBY.
     */
    public hotStandbyCluster: string | ros.IResolvable | undefined;

    /**
     * @Property loosePolarLogBin: Enable the Binlog function, the value range is as follows:
     * ON: The cluster enables the Binlog function
     * OFF: The cluster disables the Binlog function
     * This parameter takes effect only when the parameter DBType is MySQL.
     */
    public loosePolarLogBin: string | ros.IResolvable | undefined;

    /**
     * @Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
     * ON: The cluster starts the X-Engine enginen
     * OFF: The cluster shuts down the X-Engine engine
     * This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
     */
    public looseXEngine: string | ros.IResolvable | undefined;

    /**
     * @Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
     * This parameter takes effect only when the parameter LooseXEngine is ON.
     */
    public looseXEngineUseMemoryPct: number | ros.IResolvable | undefined;

    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    public lowerCaseTableNames: number | ros.IResolvable | undefined;

    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    public maintainTime: string | ros.IResolvable | undefined;

    /**
     * @Property parameterGroupId: The ID of the parameter template.
     * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
     */
    public parameterGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
     * polar.maxscale.g2.medium.c: 2 cores
     * polar.maxscale.g2.large.c: 4 cores
     * polar.maxscale.g2.xlarge.c: 8 cores
     * polar.maxscale.g2.2xlarge.c: 16 cores
     * polar.maxscale.g2.3xlarge.c: 24 cores
     * polar.maxscale.g2.4xlarge.c: 32 cores
     * polar.maxscale.g2.8xlarge.c: 64 cores
     */
    public proxyClass: string | ros.IResolvable | undefined;

    /**
     * @Property proxyType: The type of PolarProxy. Default value: OFF. Valid values:
     * OFF: disables PolarProxy.
     * EXCLUSIVE: Dedicated Enterprise Edition
     * GENERAL: Standard Enterprise Edition
     */
    public proxyType: string | ros.IResolvable | undefined;

    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    public renewalStatus: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restartMasterNode: Whether to restart the master node.
     */
    public restartMasterNode: boolean | ros.IResolvable | undefined;

    /**
     * @Property scaleMax: Maximum limit of single-node scaling.
     */
    public scaleMax: number | ros.IResolvable | undefined;

    /**
     * @Property scaleMin: Minimum limit of single-node scaling.
     */
    public scaleMin: number | ros.IResolvable | undefined;

    /**
     * @Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
     */
    public scaleRoNumMax: number | ros.IResolvable | undefined;

    /**
     * @Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
     */
    public scaleRoNumMin: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The ID of the security group. 
     * You can add up to three security groups to a cluster.
     *
     */
    public securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property serverlessType: Serverless type.
     */
    public serverlessType: string | ros.IResolvable | undefined;

    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    public sourceResourceId: string | ros.IResolvable | undefined;

    /**
     * @Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
     * This parameter takes effect only when the multi-zone data consistency feature is enabled.
     */
    public standbyAz: string | ros.IResolvable | undefined;

    /**
     * @Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    public storageAutoScale: string | ros.IResolvable | undefined;

    /**
     * @Property storagePayType: The storage pay type.
     */
    public storagePayType: string | ros.IResolvable | undefined;

    /**
     * @Property storageSpace: The storage space that uses the subscription billing method. Unit: GB.
     * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
     */
    public storageSpace: number | ros.IResolvable | undefined;

    /**
     * @Property storageType: The storage type. Valid values for Enterprise Edition:
     * PSL5
     * PSL4
     * Valid values for Standard Edition:
     * ESSDPL1
     * ESSDPL2
     * ESSDPL3
     * This parameter is invalid for serverless clusters.
     */
    public storageType: string | ros.IResolvable | undefined;

    /**
     * @Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
     * The maximum value is 32000.
     */
    public storageUpperBound: number | ros.IResolvable | undefined;

    /**
     * @Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
     * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
     * OFF: disables the multi-zone data consistency feature.
     */
    public strictConsistency: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDBCluster.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterConnectionString = this.getAtt('ClusterConnectionString');
        this.attrClusterEndpointId = this.getAtt('ClusterEndpointId');
        this.attrColdStorageInstanceId = this.getAtt('ColdStorageInstanceId');
        this.attrCustomConnectionStrings = this.getAtt('CustomConnectionStrings');
        this.attrCustomEndpointIds = this.getAtt('CustomEndpointIds');
        this.attrDbClusterDescription = this.getAtt('DBClusterDescription');
        this.attrDbClusterId = this.getAtt('DBClusterId');
        this.attrDbNodeIds = this.getAtt('DBNodeIds');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrimaryConnectionString = this.getAtt('PrimaryConnectionString');
        this.attrPrimaryConnectionStrings = this.getAtt('PrimaryConnectionStrings');
        this.attrPrimaryEndpointId = this.getAtt('PrimaryEndpointId');
        this.attrPrimaryEndpointIds = this.getAtt('PrimaryEndpointIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbNodeClass = props.dbNodeClass;
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.payType = props.payType;
        this.allowShutDown = props.allowShutDown;
        this.architecture = props.architecture;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.backupRetentionPolicyOnClusterDeletion = props.backupRetentionPolicyOnClusterDeletion;
        this.cloneDataPoint = props.cloneDataPoint;
        this.clusterNetworkType = props.clusterNetworkType;
        this.coldStorageOption = props.coldStorageOption;
        this.creationCategory = props.creationCategory;
        this.creationOption = props.creationOption;
        this.dbClusterDescription = props.dbClusterDescription;
        this.dbClusterParameters = props.dbClusterParameters;
        this.dbMinorVersion = props.dbMinorVersion;
        this.dbNodeNum = props.dbNodeNum;
        this.defaultTimeZone = props.defaultTimeZone;
        this.gdnId = props.gdnId;
        this.hotStandbyCluster = props.hotStandbyCluster;
        this.loosePolarLogBin = props.loosePolarLogBin;
        this.looseXEngine = props.looseXEngine;
        this.looseXEngineUseMemoryPct = props.looseXEngineUseMemoryPct;
        this.lowerCaseTableNames = props.lowerCaseTableNames;
        this.maintainTime = props.maintainTime;
        this.parameterGroupId = props.parameterGroupId;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.proxyClass = props.proxyClass;
        this.proxyType = props.proxyType;
        this.renewalStatus = props.renewalStatus;
        this.resourceGroupId = props.resourceGroupId;
        this.restartMasterNode = props.restartMasterNode;
        this.scaleMax = props.scaleMax;
        this.scaleMin = props.scaleMin;
        this.scaleRoNumMax = props.scaleRoNumMax;
        this.scaleRoNumMin = props.scaleRoNumMin;
        this.securityGroupIds = props.securityGroupIds;
        this.securityIpList = props.securityIpList;
        this.serverlessType = props.serverlessType;
        this.sourceResourceId = props.sourceResourceId;
        this.standbyAz = props.standbyAz;
        this.storageAutoScale = props.storageAutoScale;
        this.storagePayType = props.storagePayType;
        this.storageSpace = props.storageSpace;
        this.storageType = props.storageType;
        this.storageUpperBound = props.storageUpperBound;
        this.strictConsistency = props.strictConsistency;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbNodeClass: this.dbNodeClass,
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            payType: this.payType,
            allowShutDown: this.allowShutDown,
            architecture: this.architecture,
            autoRenewPeriod: this.autoRenewPeriod,
            backupRetentionPolicyOnClusterDeletion: this.backupRetentionPolicyOnClusterDeletion,
            cloneDataPoint: this.cloneDataPoint,
            clusterNetworkType: this.clusterNetworkType,
            coldStorageOption: this.coldStorageOption,
            creationCategory: this.creationCategory,
            creationOption: this.creationOption,
            dbClusterDescription: this.dbClusterDescription,
            dbClusterParameters: this.dbClusterParameters,
            dbMinorVersion: this.dbMinorVersion,
            dbNodeNum: this.dbNodeNum,
            defaultTimeZone: this.defaultTimeZone,
            gdnId: this.gdnId,
            hotStandbyCluster: this.hotStandbyCluster,
            loosePolarLogBin: this.loosePolarLogBin,
            looseXEngine: this.looseXEngine,
            looseXEngineUseMemoryPct: this.looseXEngineUseMemoryPct,
            lowerCaseTableNames: this.lowerCaseTableNames,
            maintainTime: this.maintainTime,
            parameterGroupId: this.parameterGroupId,
            period: this.period,
            periodUnit: this.periodUnit,
            proxyClass: this.proxyClass,
            proxyType: this.proxyType,
            renewalStatus: this.renewalStatus,
            resourceGroupId: this.resourceGroupId,
            restartMasterNode: this.restartMasterNode,
            scaleMax: this.scaleMax,
            scaleMin: this.scaleMin,
            scaleRoNumMax: this.scaleRoNumMax,
            scaleRoNumMin: this.scaleRoNumMin,
            securityGroupIds: this.securityGroupIds,
            securityIpList: this.securityIpList,
            serverlessType: this.serverlessType,
            sourceResourceId: this.sourceResourceId,
            standbyAz: this.standbyAz,
            storageAutoScale: this.storageAutoScale,
            storagePayType: this.storagePayType,
            storageSpace: this.storageSpace,
            storageType: this.storageType,
            storageUpperBound: this.storageUpperBound,
            strictConsistency: this.strictConsistency,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBCluster {
    /**
     * @stability external
     */
    export interface ColdStorageOptionProperty {
        /**
         * @Property description: The description of the cold storage instance. If the description is set, it means a cold storage instance is created.
     * The length is no more than 256 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to create the cold storage instance.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ColdStorageOptionProperty`
 *
 * @param properties - the TypeScript properties of a `ColdStorageOptionProperty`
 *
 * @returns the result of the validation.
 */
function RosDBCluster_ColdStorageOptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "ColdStorageOptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.ColdStorageOption` resource
 *
 * @param properties - the TypeScript properties of a `ColdStorageOptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.ColdStorageOption` resource.
 */
// @ts-ignore TS6133
function rosDBClusterColdStorageOptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBCluster_ColdStorageOptionPropertyValidator(properties).assertSuccess();
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'Enable': ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosDBCluster {
    /**
     * @stability external
     */
    export interface DBClusterParametersProperty {
        /**
         * @Property parameters: The JSON string that consists of parameters and values. 
     * The parameter values are strings, for example, 
     * {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
     * You can call the DescribeDBClusterParameters operation to 
     * view the parameters of the PolarDB cluster.
         */
        readonly parameters?: string | ros.IResolvable;
        /**
         * @Property effectiveTime: The time when the modified values of parameters take effect. Valid values: 
     * - Auto: The system automatically determines how the modified values of parameters take effect.
     * If all the modified values of parameters can take effect without a cluster restart, 
     * they immediately take effect. If a cluster restart is required to make the modified values  
     * of some parameters take effect, all of them take effect after a cluster restart 
     * is performed within the maintenance window. 
     * - Immediately: If all the modified values of parameters can take effect without a 
     * cluster restart, the modifications immediately take effect. If a cluster restart is 
     * required to make the modified values of some parameters take effect, 
     * the cluster is immediately restarted for the modifications to take effect. 
     * - MaintainTime: The modified values of parameters take effect within the maintenance window. 
     * All the modified values of parameters take effect within the maintenance window.
     * Default value: Auto.
         */
        readonly effectiveTime?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DBClusterParametersProperty`
 *
 * @param properties - the TypeScript properties of a `DBClusterParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosDBCluster_DBClusterParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.validateString)(properties.parameters));
    if(properties.effectiveTime && (typeof properties.effectiveTime) !== 'object') {
        errors.collect(ros.propertyValidator('effectiveTime', ros.validateAllowedValues)({
          data: properties.effectiveTime,
          allowedValues: ["Auto","Immediately","MaintainTime"],
        }));
    }
    errors.collect(ros.propertyValidator('effectiveTime', ros.validateString)(properties.effectiveTime));
    return errors.wrap('supplied properties not correct for "DBClusterParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.DBClusterParameters` resource
 *
 * @param properties - the TypeScript properties of a `DBClusterParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.DBClusterParameters` resource.
 */
// @ts-ignore TS6133
function rosDBClusterDBClusterParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBCluster_DBClusterParametersPropertyValidator(properties).assertSuccess();
    return {
      'Parameters': ros.stringToRosTemplate(properties.parameters),
      'EffectiveTime': ros.stringToRosTemplate(properties.effectiveTime),
    };
}

export namespace RosDBCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDBCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosDBClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDBClusterAccessWhiteList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
export interface RosDBClusterAccessWhiteListProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
     * suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    readonly securityIps: string | ros.IResolvable;

    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    readonly dbClusterIpArrayName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterAccessWhiteListProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterAccessWhiteListProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterAccessWhiteListPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityIps', ros.requiredValidator)(properties.securityIps));
    errors.collect(ros.propertyValidator('securityIps', ros.validateString)(properties.securityIps));
    if(properties.dbClusterIpArrayName && (Array.isArray(properties.dbClusterIpArrayName) || (typeof properties.dbClusterIpArrayName) === 'string')) {
        errors.collect(ros.propertyValidator('dbClusterIpArrayName', ros.validateLength)({
            data: properties.dbClusterIpArrayName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbClusterIpArrayName', ros.validateString)(properties.dbClusterIpArrayName));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    return errors.wrap('supplied properties not correct for "RosDBClusterAccessWhiteListProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterAccessWhiteList` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterAccessWhiteListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterAccessWhiteList` resource.
 */
// @ts-ignore TS6133
function rosDBClusterAccessWhiteListPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterAccessWhiteListPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'SecurityIps': ros.stringToRosTemplate(properties.securityIps),
      'DBClusterIPArrayName': ros.stringToRosTemplate(properties.dbClusterIpArrayName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterAccessWhiteList`, which is used to modify the list of IP addresses that are allowed to access an ApsaraDB for POLARDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterAccessWhiteList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
export class RosDBClusterAccessWhiteList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterAccessWhiteList";

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
     * suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    public securityIps: string | ros.IResolvable;

    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    public dbClusterIpArrayName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterAccessWhiteListProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterAccessWhiteList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterId = this.getAtt('DBClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.securityIps = props.securityIps;
        this.dbClusterIpArrayName = props.dbClusterIpArrayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            securityIps: this.securityIps,
            dbClusterIpArrayName: this.dbClusterIpArrayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterAccessWhiteListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBClusterEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export interface RosDBClusterEndpointProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    readonly autoAddNewNodes?: string | ros.IResolvable;

    /**
     * @Property endpointConfig:
     */
    readonly endpointConfig?: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable;

    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    readonly nodes?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property readWriteMode: The read\/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readonly readWriteMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoAddNewNodes && (typeof properties.autoAddNewNodes) !== 'object') {
        errors.collect(ros.propertyValidator('autoAddNewNodes', ros.validateAllowedValues)({
          data: properties.autoAddNewNodes,
          allowedValues: ["Disable","Enable"],
        }));
    }
    errors.collect(ros.propertyValidator('autoAddNewNodes', ros.validateString)(properties.autoAddNewNodes));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    if(properties.readWriteMode && (typeof properties.readWriteMode) !== 'object') {
        errors.collect(ros.propertyValidator('readWriteMode', ros.validateAllowedValues)({
          data: properties.readWriteMode,
          allowedValues: ["ReadOnly","ReadWrite"],
        }));
    }
    errors.collect(ros.propertyValidator('readWriteMode', ros.validateString)(properties.readWriteMode));
    if(properties.nodes && (Array.isArray(properties.nodes) || (typeof properties.nodes) === 'string')) {
        errors.collect(ros.propertyValidator('nodes', ros.validateLength)({
            data: properties.nodes.length,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('nodes', ros.listValidator(ros.validateAny))(properties.nodes));
    errors.collect(ros.propertyValidator('endpointConfig', RosDBClusterEndpoint_EndpointConfigPropertyValidator)(properties.endpointConfig));
    return errors.wrap('supplied properties not correct for "RosDBClusterEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'AutoAddNewNodes': ros.stringToRosTemplate(properties.autoAddNewNodes),
      'EndpointConfig': rosDBClusterEndpointEndpointConfigPropertyToRosTemplate(properties.endpointConfig),
      'EndpointType': ros.stringToRosTemplate(properties.endpointType),
      'Nodes': ros.listMapper(ros.objectToRosTemplate)(properties.nodes),
      'ReadWriteMode': ros.stringToRosTemplate(properties.readWriteMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterEndpoint`, which is used to create a custom endpoint for a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export class RosDBClusterEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpoint";

    /**
     * @Attribute Addresses: The address items of the db cluster endpoint.
     */
    public readonly attrAddresses: ros.IResolvable;

    /**
     * @Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
     */
    public readonly attrDbEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    public autoAddNewNodes: string | ros.IResolvable | undefined;

    /**
     * @Property endpointConfig:
     */
    public endpointConfig: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    public endpointType: string | ros.IResolvable | undefined;

    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    public nodes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property readWriteMode: The read\/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    public readWriteMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddresses = this.getAtt('Addresses');
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbEndpointId = this.getAtt('DBEndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.autoAddNewNodes = props.autoAddNewNodes;
        this.endpointConfig = props.endpointConfig;
        this.endpointType = props.endpointType;
        this.nodes = props.nodes;
        this.readWriteMode = props.readWriteMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            autoAddNewNodes: this.autoAddNewNodes,
            endpointConfig: this.endpointConfig,
            endpointType: this.endpointType,
            nodes: this.nodes,
            readWriteMode: this.readWriteMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBClusterEndpoint {
    /**
     * @stability external
     */
    export interface EndpointConfigProperty {
        /**
         * @Property distributedTransaction: Set up transaction splitting. Valid values:
     * on: Turn on transaction splitting (default value)
     * off: Turn off transaction splitting
         */
        readonly distributedTransaction?: string | ros.IResolvable;
        /**
         * @Property consistTimeoutAction: Global consistency read timeout policy. Valid values: 
     * 0: This request occurs to the master node (default).
     * 1: Sql error report.
         */
        readonly consistTimeoutAction?: string | ros.IResolvable;
        /**
         * @Property consistTimeout: Global consistency read timeout.
         */
        readonly consistTimeout?: string | ros.IResolvable;
        /**
         * @Property connectionPersist: Set up a connection pool. Valid values: 
     * off: Turn off the connection pool (default value) 
     * Session: Enable session-level connection pooling 
     * Transaction: Enable transaction-level connection pooling.
         */
        readonly connectionPersist?: string | ros.IResolvable;
        /**
         * @Property loadBalancePolicy: Set load balancing policy. Valid values:
     * 0: Load balancing based on the number of connections (default)
     * 1: Load balancing based on the number of active requests
         */
        readonly loadBalancePolicy?: string | ros.IResolvable;
        /**
         * @Property consistLevel: The consistency level of the cluster connection point. Valid values:
     * 0: eventual consistency
     * 1: session consistency2: Global consistency (strong)
     * For example, {"ConsistLevel": "0"}.
     * Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
         */
        readonly consistLevel?: string | ros.IResolvable;
        /**
         * @Property enableOverloadThrottle: Set whether to enable overload protection. Valid values: 
     * on: Turn on overload protection.
     * off: Turn off overload protection (default).
         */
        readonly enableOverloadThrottle?: string | ros.IResolvable;
        /**
         * @Property masterAcceptReads: Set whether the main library accepts reading. Valid values: 
     * on: Indicates that the main library accepts reading.
     * off: Indicates that the main library does not accept reading (default value)
         */
        readonly masterAcceptReads?: string | ros.IResolvable;
        /**
         * @Property maxParallelDegree: Set up parallel queries. Valid values: 
     * on: Enable parallel query.
     * off: Turn off parallel query (default).
         */
        readonly maxParallelDegree?: string | ros.IResolvable;
        /**
         * @Property enableHtapImci: Set up row\/column storage to automatically divert traffic. Valid values: 
     * on: Turn on the automatic traffic diversion function of row storage\/column storage
     * off: Turn off the automatic drainage function of row storage\/column storage (default)
         */
        readonly enableHtapImci?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointConfigProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpoint_EndpointConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('distributedTransaction', ros.validateString)(properties.distributedTransaction));
    errors.collect(ros.propertyValidator('consistTimeoutAction', ros.validateString)(properties.consistTimeoutAction));
    errors.collect(ros.propertyValidator('consistTimeout', ros.validateString)(properties.consistTimeout));
    errors.collect(ros.propertyValidator('connectionPersist', ros.validateString)(properties.connectionPersist));
    errors.collect(ros.propertyValidator('loadBalancePolicy', ros.validateString)(properties.loadBalancePolicy));
    if(properties.consistLevel && (typeof properties.consistLevel) !== 'object') {
        errors.collect(ros.propertyValidator('consistLevel', ros.validateAllowedValues)({
          data: properties.consistLevel,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('consistLevel', ros.validateString)(properties.consistLevel));
    errors.collect(ros.propertyValidator('enableOverloadThrottle', ros.validateString)(properties.enableOverloadThrottle));
    errors.collect(ros.propertyValidator('masterAcceptReads', ros.validateString)(properties.masterAcceptReads));
    errors.collect(ros.propertyValidator('maxParallelDegree', ros.validateString)(properties.maxParallelDegree));
    errors.collect(ros.propertyValidator('enableHtapImci', ros.validateString)(properties.enableHtapImci));
    return errors.wrap('supplied properties not correct for "EndpointConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint.EndpointConfig` resource
 *
 * @param properties - the TypeScript properties of a `EndpointConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpoint.EndpointConfig` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointEndpointConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBClusterEndpoint_EndpointConfigPropertyValidator(properties).assertSuccess();
    return {
      'DistributedTransaction': ros.stringToRosTemplate(properties.distributedTransaction),
      'ConsistTimeoutAction': ros.stringToRosTemplate(properties.consistTimeoutAction),
      'ConsistTimeout': ros.stringToRosTemplate(properties.consistTimeout),
      'ConnectionPersist': ros.stringToRosTemplate(properties.connectionPersist),
      'LoadBalancePolicy': ros.stringToRosTemplate(properties.loadBalancePolicy),
      'ConsistLevel': ros.stringToRosTemplate(properties.consistLevel),
      'EnableOverloadThrottle': ros.stringToRosTemplate(properties.enableOverloadThrottle),
      'MasterAcceptReads': ros.stringToRosTemplate(properties.masterAcceptReads),
      'MaxParallelDegree': ros.stringToRosTemplate(properties.maxParallelDegree),
      'EnableHtapImci': ros.stringToRosTemplate(properties.enableHtapImci),
    };
}

/**
 * Properties for defining a `RosDBClusterEndpointAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export interface RosDBClusterEndpointAddressProps {

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    readonly dbEndpointId: string | ros.IResolvable;

    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;

    /**
     * @Property netType: The network type of the connection string. 
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    readonly netType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterEndpointAddressProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointAddressProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterEndpointAddressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbEndpointId', ros.requiredValidator)(properties.dbEndpointId));
    errors.collect(ros.propertyValidator('dbEndpointId', ros.validateString)(properties.dbEndpointId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-z][-a-z0-9]{4,28}[a-z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedValues)({
          data: properties.netType,
          allowedValues: ["Public","Private"],
        }));
    }
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    return errors.wrap('supplied properties not correct for "RosDBClusterEndpointAddressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpointAddress` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterEndpointAddressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBClusterEndpointAddress` resource.
 */
// @ts-ignore TS6133
function rosDBClusterEndpointAddressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterEndpointAddressPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DBEndpointId': ros.stringToRosTemplate(properties.dbEndpointId),
      'ConnectionStringPrefix': ros.stringToRosTemplate(properties.connectionStringPrefix),
      'NetType': ros.stringToRosTemplate(properties.netType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterEndpointAddress`, which is used to create a public endpoint for an Apsara PolarDB cluster. The public endpoint can be a primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterEndpointAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export class RosDBClusterEndpointAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpointAddress";

    /**
     * @Attribute Address: The details of the endpoint address.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * @Attribute ConnectionString: The connection string of the endpoint address.
     */
    public readonly attrConnectionString: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    public dbEndpointId: string | ros.IResolvable;

    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    public connectionStringPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property netType: The network type of the connection string. 
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    public netType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointAddressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusterEndpointAddress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = this.getAtt('Address');
        this.attrConnectionString = this.getAtt('ConnectionString');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbEndpointId = props.dbEndpointId;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.netType = props.netType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbEndpointId: this.dbEndpointId,
            connectionStringPrefix: this.connectionStringPrefix,
            netType: this.netType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterEndpointAddressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBNodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export interface RosDBNodesProps {

    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode
     */
    readonly dbNodeType?: string | ros.IResolvable;

    /**
     * @Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    readonly imciSwitch?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBNodesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBNodesProps`
 *
 * @returns the result of the validation.
 */
function RosDBNodesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('amount', ros.requiredValidator)(properties.amount));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.imciSwitch && (typeof properties.imciSwitch) !== 'object') {
        errors.collect(ros.propertyValidator('imciSwitch', ros.validateAllowedValues)({
          data: properties.imciSwitch,
          allowedValues: ["ON","OFF"],
        }));
    }
    errors.collect(ros.propertyValidator('imciSwitch', ros.validateString)(properties.imciSwitch));
    if(properties.dbNodeType && (typeof properties.dbNodeType) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeType', ros.validateAllowedValues)({
          data: properties.dbNodeType,
          allowedValues: ["RO","STANDBY","DLNode"],
        }));
    }
    errors.collect(ros.propertyValidator('dbNodeType', ros.validateString)(properties.dbNodeType));
    return errors.wrap('supplied properties not correct for "RosDBNodesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBNodes` resource
 *
 * @param properties - the TypeScript properties of a `RosDBNodesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::DBNodes` resource.
 */
// @ts-ignore TS6133
function rosDBNodesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBNodesPropsValidator(properties).assertSuccess();
    }
    return {
      'Amount': ros.numberToRosTemplate(properties.amount),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DBNodeType': ros.stringToRosTemplate(properties.dbNodeType),
      'ImciSwitch': ros.stringToRosTemplate(properties.imciSwitch),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBNodes`, which is used to add nodes to a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBNodes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export class RosDBNodes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBNodes";

    /**
     * @Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable;

    /**
     * @Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public readonly attrOrderIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    public amount: number | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode
     */
    public dbNodeType: string | ros.IResolvable | undefined;

    /**
     * @Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    public imciSwitch: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBNodesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBNodes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNodeIds = this.getAtt('DBNodeIds');
        this.attrOrderIds = this.getAtt('OrderIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.amount = props.amount;
        this.dbClusterId = props.dbClusterId;
        this.dbNodeType = props.dbNodeType;
        this.imciSwitch = props.imciSwitch;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            amount: this.amount,
            dbClusterId: this.dbClusterId,
            dbNodeType: this.dbNodeType,
            imciSwitch: this.imciSwitch,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBNodesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
 */
export interface RosDatabaseProps {

    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    readonly characterSetName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    readonly dbName: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the database account to be used.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    readonly accountPrivilege?: string | ros.IResolvable;

    /**
     * @Property collate: A locale setting that specifies the collation for newly created databases.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required; 
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    readonly collate?: string | ros.IResolvable;

    /**
     * @Property ctype: A locale setting that specifies the character classification of the database.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     *  when the cluster is PolarDB MySQL, this parameter is optional.
     */
    readonly ctype?: string | ros.IResolvable;

    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatabaseProps`
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the result of the validation.
 */
function RosDatabasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    if(properties.accountPrivilege && (typeof properties.accountPrivilege) !== 'object') {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateAllowedValues)({
          data: properties.accountPrivilege,
          allowedValues: ["ReadWrite","ReadOnly","DMLOnly","DDLOnly"],
        }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    if(properties.dbDescription && (Array.isArray(properties.dbDescription) || (typeof properties.dbDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbDescription', ros.validateLength)({
            data: properties.dbDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('collate', ros.validateString)(properties.collate));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (typeof properties.dbName) !== 'object') {
        errors.collect(ros.propertyValidator('dbName', ros.validateAllowedPattern)({
          data: properties.dbName,
          reg: /^[a-z0-9][-_a-z0-9]{0,63}(?<![-_]$)$/
        }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('ctype', ros.validateString)(properties.ctype));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Database` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::Database` resource.
 */
// @ts-ignore TS6133
function rosDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      'CharacterSetName': ros.stringToRosTemplate(properties.characterSetName),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DBName': ros.stringToRosTemplate(properties.dbName),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPrivilege': ros.stringToRosTemplate(properties.accountPrivilege),
      'Collate': ros.stringToRosTemplate(properties.collate),
      'Ctype': ros.stringToRosTemplate(properties.ctype),
      'DBDescription': ros.stringToRosTemplate(properties.dbDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
 */
export class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::Database";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    public characterSetName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    public dbName: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the database account to be used.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    public accountPrivilege: string | ros.IResolvable | undefined;

    /**
     * @Property collate: A locale setting that specifies the collation for newly created databases.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required; 
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    public collate: string | ros.IResolvable | undefined;

    /**
     * @Property ctype: A locale setting that specifies the character classification of the database.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     *  when the cluster is PolarDB MySQL, this parameter is optional.
     */
    public ctype: string | ros.IResolvable | undefined;

    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    public dbDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.characterSetName = props.characterSetName;
        this.dbClusterId = props.dbClusterId;
        this.dbName = props.dbName;
        this.accountName = props.accountName;
        this.accountPrivilege = props.accountPrivilege;
        this.collate = props.collate;
        this.ctype = props.ctype;
        this.dbDescription = props.dbDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            characterSetName: this.characterSetName,
            dbClusterId: this.dbClusterId,
            dbName: this.dbName,
            accountName: this.accountName,
            accountPrivilege: this.accountPrivilege,
            collate: this.collate,
            ctype: this.ctype,
            dbDescription: this.dbDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGlobalDatabaseNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
export interface RosGlobalDatabaseNetworkProps {

    /**
     * @Property dbClusterId: The ID of the primary cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property gdnDescription: The description of the GDN.
     */
    readonly gdnDescription?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('gdnDescription', ros.validateString)(properties.gdnDescription));
    return errors.wrap('supplied properties not correct for "RosGlobalDatabaseNetworkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::GlobalDatabaseNetwork` resource
 *
 * @param properties - the TypeScript properties of a `RosGlobalDatabaseNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::GlobalDatabaseNetwork` resource.
 */
// @ts-ignore TS6133
function rosGlobalDatabaseNetworkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGlobalDatabaseNetworkPropsValidator(properties).assertSuccess();
    }
    return {
      'DbClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'GdnDescription': ros.stringToRosTemplate(properties.gdnDescription),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::GlobalDatabaseNetwork`, which is used to create a global database network (GDN).
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
export class RosGlobalDatabaseNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::GlobalDatabaseNetwork";

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
     * @Attribute DbType: The type of the database engine.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * @Attribute DbVersion: The version of the database engine.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * @Attribute GdnDescription: The description of the GDN.
     */
    public readonly attrGdnDescription: ros.IResolvable;

    /**
     * @Attribute GdnId: The ID of the GDN.
     */
    public readonly attrGdnId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the primary cluster.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property gdnDescription: The description of the GDN.
     */
    public gdnDescription: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

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
        this.dbClusterId = props.dbClusterId;
        this.gdnDescription = props.gdnDescription;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            gdnDescription: this.gdnDescription,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGlobalDatabaseNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export interface RosParameterGroupProps {

    /**
     * @Property dbType: The type of the database engine.
     */
    readonly dbType: string | ros.IResolvable;

    /**
     * @Property dbVersion: The version of the database engine.
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * @Property parameterGroupName: The name of the parameter template.
     */
    readonly parameterGroupName: string | ros.IResolvable;

    /**
     * @Property parameters: The list of the parameters.
     */
    readonly parameters: Array<RosParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property parameterGroupDesc: The description of the parameter template.
     */
    readonly parameterGroupDesc?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('parameters', ros.requiredValidator)(properties.parameters));
    errors.collect(ros.propertyValidator('parameters', ros.listValidator(RosParameterGroup_ParametersPropertyValidator))(properties.parameters));
    errors.collect(ros.propertyValidator('dbVersion', ros.requiredValidator)(properties.dbVersion));
    errors.collect(ros.propertyValidator('dbVersion', ros.validateString)(properties.dbVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('parameterGroupName', ros.requiredValidator)(properties.parameterGroupName));
    errors.collect(ros.propertyValidator('parameterGroupName', ros.validateString)(properties.parameterGroupName));
    errors.collect(ros.propertyValidator('parameterGroupDesc', ros.validateString)(properties.parameterGroupDesc));
    errors.collect(ros.propertyValidator('dbType', ros.requiredValidator)(properties.dbType));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    return errors.wrap('supplied properties not correct for "RosParameterGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::ParameterGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::ParameterGroup` resource.
 */
// @ts-ignore TS6133
function rosParameterGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosParameterGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'DbType': ros.stringToRosTemplate(properties.dbType),
      'DbVersion': ros.stringToRosTemplate(properties.dbVersion),
      'ParameterGroupName': ros.stringToRosTemplate(properties.parameterGroupName),
      'Parameters': ros.listMapper(rosParameterGroupParametersPropertyToRosTemplate)(properties.parameters),
      'ParameterGroupDesc': ros.stringToRosTemplate(properties.parameterGroupDesc),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::ParameterGroup`, which is used to create a parameter template of PolarDB.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export class RosParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::ParameterGroup";

    /**
     * @Attribute CreateTime: The time when the parameter template was created.
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
     * @Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
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
     * @Attribute ParameterGroupId: The ID of the parameter group.
     */
    public readonly attrParameterGroupId: ros.IResolvable;

    /**
     * @Attribute ParameterGroupName: The name of the parameter template.
     */
    public readonly attrParameterGroupName: ros.IResolvable;

    /**
     * @Attribute ParameterGroupType: The type of the parameter template.
     */
    public readonly attrParameterGroupType: ros.IResolvable;

    /**
     * @Attribute Parameters: The list of the parameters.
     */
    public readonly attrParameters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbType: The type of the database engine.
     */
    public dbType: string | ros.IResolvable;

    /**
     * @Property dbVersion: The version of the database engine.
     */
    public dbVersion: string | ros.IResolvable;

    /**
     * @Property parameterGroupName: The name of the parameter template.
     */
    public parameterGroupName: string | ros.IResolvable;

    /**
     * @Property parameters: The list of the parameters.
     */
    public parameters: Array<RosParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property parameterGroupDesc: The description of the parameter template.
     */
    public parameterGroupDesc: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

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
        this.dbType = props.dbType;
        this.dbVersion = props.dbVersion;
        this.parameterGroupName = props.parameterGroupName;
        this.parameters = props.parameters;
        this.parameterGroupDesc = props.parameterGroupDesc;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbType: this.dbType,
            dbVersion: this.dbVersion,
            parameterGroupName: this.parameterGroupName,
            parameters: this.parameters,
            parameterGroupDesc: this.parameterGroupDesc,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosParameterGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosParameterGroup {
    /**
     * @stability external
     */
    export interface ParametersProperty {
        /**
         * @Property paramValue: Parameter value.
         */
        readonly paramValue: string | ros.IResolvable;
        /**
         * @Property paramName: Parameter name.
         */
        readonly paramName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosParameterGroup_ParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('paramValue', ros.requiredValidator)(properties.paramValue));
    errors.collect(ros.propertyValidator('paramValue', ros.validateString)(properties.paramValue));
    errors.collect(ros.propertyValidator('paramName', ros.requiredValidator)(properties.paramName));
    errors.collect(ros.propertyValidator('paramName', ros.validateString)(properties.paramName));
    return errors.wrap('supplied properties not correct for "ParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::ParameterGroup.Parameters` resource
 *
 * @param properties - the TypeScript properties of a `ParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::POLARDB::ParameterGroup.Parameters` resource.
 */
// @ts-ignore TS6133
function rosParameterGroupParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosParameterGroup_ParametersPropertyValidator(properties).assertSuccess();
    return {
      'ParamValue': ros.stringToRosTemplate(properties.paramValue),
      'ParamName': ros.stringToRosTemplate(properties.paramName),
    };
}
