import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './dms.generated';
export { RosDatabase as DatabaseProperty };
/**
 * Properties for defining a `Database`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
export interface DatabaseProps {
    /**
     * Property host: Database connection address.
     */
    readonly host: string | ros.IResolvable;
    /**
     * Property port: Database connection port.
     */
    readonly port: number | ros.IResolvable;
    /**
     * Property schemaName: Database schema name.
     */
    readonly schemaName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property sid: Database SID.
     */
    readonly sid?: string | ros.IResolvable;
    /**
     * Property tid: The tenant ID.
     */
    readonly tid?: number | ros.IResolvable;
}
/**
 * Represents a `Database`.
 */
export interface IDatabase extends ros.IResource {
    readonly props: DatabaseProps;
    /**
     * Attribute CatalogName: Database catalog name.
     */
    readonly attrCatalogName: ros.IResolvable | string;
    /**
     * Attribute DatabaseId: Database ID.
     */
    readonly attrDatabaseId: ros.IResolvable | string;
    /**
     * Attribute DbType: Database type.
     */
    readonly attrDbType: ros.IResolvable | string;
    /**
     * Attribute DbaId: Database administrator ID.
     */
    readonly attrDbaId: ros.IResolvable | string;
    /**
     * Attribute DbaName: Database administrator name.
     */
    readonly attrDbaName: ros.IResolvable | string;
    /**
     * Attribute Encoding: Database encoding.
     */
    readonly attrEncoding: ros.IResolvable | string;
    /**
     * Attribute EnvType: Database environment type.
     */
    readonly attrEnvType: ros.IResolvable | string;
    /**
     * Attribute Host: Database connection address.
     */
    readonly attrHost: ros.IResolvable | string;
    /**
     * Attribute InstanceAlias: Database instance alias.
     */
    readonly attrInstanceAlias: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Database instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute OwnerIdList: Database owner ID list.
     */
    readonly attrOwnerIdList: ros.IResolvable | string;
    /**
     * Attribute OwnerNameList: Database owner name list.
     */
    readonly attrOwnerNameList: ros.IResolvable | string;
    /**
     * Attribute Port: Database connection port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute SchemaName: Database schema name.
     */
    readonly attrSchemaName: ros.IResolvable | string;
    /**
     * Attribute SearchName: Database search name.
     */
    readonly attrSearchName: ros.IResolvable | string;
    /**
     * Attribute Sid: Database SID.
     */
    readonly attrSid: ros.IResolvable | string;
    /**
     * Attribute State: Database state.
     */
    readonly attrState: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DMS::Database`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
export declare class Database extends ros.Resource implements IDatabase {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CatalogName: Database catalog name.
     */
    readonly attrCatalogName: ros.IResolvable | string;
    /**
     * Attribute DatabaseId: Database ID.
     */
    readonly attrDatabaseId: ros.IResolvable | string;
    /**
     * Attribute DbType: Database type.
     */
    readonly attrDbType: ros.IResolvable | string;
    /**
     * Attribute DbaId: Database administrator ID.
     */
    readonly attrDbaId: ros.IResolvable | string;
    /**
     * Attribute DbaName: Database administrator name.
     */
    readonly attrDbaName: ros.IResolvable | string;
    /**
     * Attribute Encoding: Database encoding.
     */
    readonly attrEncoding: ros.IResolvable | string;
    /**
     * Attribute EnvType: Database environment type.
     */
    readonly attrEnvType: ros.IResolvable | string;
    /**
     * Attribute Host: Database connection address.
     */
    readonly attrHost: ros.IResolvable | string;
    /**
     * Attribute InstanceAlias: Database instance alias.
     */
    readonly attrInstanceAlias: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Database instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute OwnerIdList: Database owner ID list.
     */
    readonly attrOwnerIdList: ros.IResolvable | string;
    /**
     * Attribute OwnerNameList: Database owner name list.
     */
    readonly attrOwnerNameList: ros.IResolvable | string;
    /**
     * Attribute Port: Database connection port.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute SchemaName: Database schema name.
     */
    readonly attrSchemaName: ros.IResolvable | string;
    /**
     * Attribute SearchName: Database search name.
     */
    readonly attrSearchName: ros.IResolvable | string;
    /**
     * Attribute Sid: Database SID.
     */
    readonly attrSid: ros.IResolvable | string;
    /**
     * Attribute State: Database state.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint?: boolean);
}
