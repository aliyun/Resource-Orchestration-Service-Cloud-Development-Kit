// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
export interface RosDatabaseProps {

    /**
     * @Property host: Database connection address.
     */
    readonly host: string | ros.IResolvable;

    /**
     * @Property port: Database connection port.
     */
    readonly port: number | ros.IResolvable;

    /**
     * @Property schemaName: Database schema name.
     */
    readonly schemaName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property sid: Database SID.
     */
    readonly sid?: string | ros.IResolvable;

    /**
     * @Property tid: The tenant ID.
     */
    readonly tid?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.requiredValidator)(properties.host));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('tid', ros.validateNumber)(properties.tid));
    errors.collect(ros.propertyValidator('schemaName', ros.requiredValidator)(properties.schemaName));
    errors.collect(ros.propertyValidator('schemaName', ros.validateString)(properties.schemaName));
    errors.collect(ros.propertyValidator('sid', ros.validateString)(properties.sid));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DMS::Database` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DMS::Database` resource.
 */
// @ts-ignore TS6133
function rosDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      'Host': ros.stringToRosTemplate(properties.host),
      'Port': ros.numberToRosTemplate(properties.port),
      'SchemaName': ros.stringToRosTemplate(properties.schemaName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Sid': ros.stringToRosTemplate(properties.sid),
      'Tid': ros.numberToRosTemplate(properties.tid),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DMS::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
export class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DMS::Database";

    /**
     * @Attribute CatalogName: Database catalog name.
     */
    public readonly attrCatalogName: ros.IResolvable;

    /**
     * @Attribute DatabaseId: Database ID.
     */
    public readonly attrDatabaseId: ros.IResolvable;

    /**
     * @Attribute DbType: Database type.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * @Attribute DbaId: Database administrator ID.
     */
    public readonly attrDbaId: ros.IResolvable;

    /**
     * @Attribute DbaName: Database administrator name.
     */
    public readonly attrDbaName: ros.IResolvable;

    /**
     * @Attribute Encoding: Database encoding.
     */
    public readonly attrEncoding: ros.IResolvable;

    /**
     * @Attribute EnvType: Database environment type.
     */
    public readonly attrEnvType: ros.IResolvable;

    /**
     * @Attribute Host: Database connection address.
     */
    public readonly attrHost: ros.IResolvable;

    /**
     * @Attribute InstanceAlias: Database instance alias.
     */
    public readonly attrInstanceAlias: ros.IResolvable;

    /**
     * @Attribute InstanceId: Database instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute OwnerIdList: Database owner ID list.
     */
    public readonly attrOwnerIdList: ros.IResolvable;

    /**
     * @Attribute OwnerNameList: Database owner name list.
     */
    public readonly attrOwnerNameList: ros.IResolvable;

    /**
     * @Attribute Port: Database connection port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute SchemaName: Database schema name.
     */
    public readonly attrSchemaName: ros.IResolvable;

    /**
     * @Attribute SearchName: Database search name.
     */
    public readonly attrSearchName: ros.IResolvable;

    /**
     * @Attribute Sid: Database SID.
     */
    public readonly attrSid: ros.IResolvable;

    /**
     * @Attribute State: Database state.
     */
    public readonly attrState: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property host: Database connection address.
     */
    public host: string | ros.IResolvable;

    /**
     * @Property port: Database connection port.
     */
    public port: number | ros.IResolvable;

    /**
     * @Property schemaName: Database schema name.
     */
    public schemaName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property sid: Database SID.
     */
    public sid: string | ros.IResolvable | undefined;

    /**
     * @Property tid: The tenant ID.
     */
    public tid: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCatalogName = this.getAtt('CatalogName');
        this.attrDatabaseId = this.getAtt('DatabaseId');
        this.attrDbType = this.getAtt('DbType');
        this.attrDbaId = this.getAtt('DbaId');
        this.attrDbaName = this.getAtt('DbaName');
        this.attrEncoding = this.getAtt('Encoding');
        this.attrEnvType = this.getAtt('EnvType');
        this.attrHost = this.getAtt('Host');
        this.attrInstanceAlias = this.getAtt('InstanceAlias');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrOwnerIdList = this.getAtt('OwnerIdList');
        this.attrOwnerNameList = this.getAtt('OwnerNameList');
        this.attrPort = this.getAtt('Port');
        this.attrSchemaName = this.getAtt('SchemaName');
        this.attrSearchName = this.getAtt('SearchName');
        this.attrSid = this.getAtt('Sid');
        this.attrState = this.getAtt('State');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.host = props.host;
        this.port = props.port;
        this.schemaName = props.schemaName;
        this.refreshOptions = props.refreshOptions;
        this.sid = props.sid;
        this.tid = props.tid;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            host: this.host,
            port: this.port,
            schemaName: this.schemaName,
            refreshOptions: this.refreshOptions,
            sid: this.sid,
            tid: this.tid,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
