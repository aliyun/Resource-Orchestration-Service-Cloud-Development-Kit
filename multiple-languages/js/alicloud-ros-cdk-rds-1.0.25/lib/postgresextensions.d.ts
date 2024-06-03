import * as ros from '@alicloud/ros-cdk-core';
import { RosPostgresExtensions } from './rds.generated';
export { RosPostgresExtensions as PostgresExtensionsProperty };
/**
 * Properties for defining a `PostgresExtensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
 */
export interface PostgresExtensionsProps {
    /**
     * Property accountName: The account of the user who owns the extension. Only privileged accounts are supported.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbName: The database name. You can call the DescribeDatabases operation to query the database name.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * Property extensions: The extensions that you want to install.
     */
    readonly extensions?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property riskConfirmed: The risk description that you need to confirm. If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
     * true
     * false
     * Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
     */
    readonly riskConfirmed?: boolean | ros.IResolvable;
    /**
     * Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database. If you do not specify the Extensions parameter, you must specify this parameter.
     */
    readonly sourceDatabase?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::PostgresExtensions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPostgresExtensions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
 */
export declare class PostgresExtensions extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PostgresExtensionsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstalledExtensionNames: Extension names installed via ROS
     */
    readonly attrInstalledExtensionNames: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PostgresExtensionsProps, enableResourcePropertyConstraint?: boolean);
}
