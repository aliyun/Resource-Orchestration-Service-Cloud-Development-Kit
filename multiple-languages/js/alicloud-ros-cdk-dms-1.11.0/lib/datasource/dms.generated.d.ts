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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DMS::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
export declare class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DMS::Database";
    /**
     * @Attribute CatalogName: Database catalog name.
     */
    readonly attrCatalogName: ros.IResolvable;
    /**
     * @Attribute DatabaseId: Database ID.
     */
    readonly attrDatabaseId: ros.IResolvable;
    /**
     * @Attribute DbType: Database type.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * @Attribute DbaId: Database administrator ID.
     */
    readonly attrDbaId: ros.IResolvable;
    /**
     * @Attribute DbaName: Database administrator name.
     */
    readonly attrDbaName: ros.IResolvable;
    /**
     * @Attribute Encoding: Database encoding.
     */
    readonly attrEncoding: ros.IResolvable;
    /**
     * @Attribute EnvType: Database environment type.
     */
    readonly attrEnvType: ros.IResolvable;
    /**
     * @Attribute Host: Database connection address.
     */
    readonly attrHost: ros.IResolvable;
    /**
     * @Attribute InstanceAlias: Database instance alias.
     */
    readonly attrInstanceAlias: ros.IResolvable;
    /**
     * @Attribute InstanceId: Database instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OwnerIdList: Database owner ID list.
     */
    readonly attrOwnerIdList: ros.IResolvable;
    /**
     * @Attribute OwnerNameList: Database owner name list.
     */
    readonly attrOwnerNameList: ros.IResolvable;
    /**
     * @Attribute Port: Database connection port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute SchemaName: Database schema name.
     */
    readonly attrSchemaName: ros.IResolvable;
    /**
     * @Attribute SearchName: Database search name.
     */
    readonly attrSearchName: ros.IResolvable;
    /**
     * @Attribute Sid: Database SID.
     */
    readonly attrSid: ros.IResolvable;
    /**
     * @Attribute State: Database state.
     */
    readonly attrState: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property host: Database connection address.
     */
    host: string | ros.IResolvable;
    /**
     * @Property port: Database connection port.
     */
    port: number | ros.IResolvable;
    /**
     * @Property schemaName: Database schema name.
     */
    schemaName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property sid: Database SID.
     */
    sid: string | ros.IResolvable | undefined;
    /**
     * @Property tid: The tenant ID.
     */
    tid: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
