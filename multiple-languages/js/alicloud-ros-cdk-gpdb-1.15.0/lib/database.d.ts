import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './gpdb.generated';
export { RosDatabase as DatabaseProperty };
/**
 * Properties for defining a `Database`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
 */
export interface DatabaseProps {
    /**
     * Property databaseName: Database Name.
     */
    readonly databaseName: string | ros.IResolvable;
    /**
     * Property dbInstanceId: Instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property owner: Data Sheet owner.
     */
    readonly owner: string | ros.IResolvable;
    /**
     * Property characterSetName: Character set, default value is UTF8.
     */
    readonly characterSetName?: string | ros.IResolvable;
    /**
     * Property collate: Database locale parameters, specifying string comparison\/collation.
     */
    readonly collate?: string | ros.IResolvable;
    /**
     * Property ctype: Database locale parameters, specifying character classification\/case conversion rules.
     */
    readonly ctype?: string | ros.IResolvable;
    /**
     * Property description: Database Description.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Database`.
 */
export interface IDatabase extends ros.IResource {
    readonly props: DatabaseProps;
    /**
     * Attribute AccessPrivilege: Permission Control Information.
     */
    readonly attrAccessPrivilege: ros.IResolvable | string;
    /**
     * Attribute CharacterSetName: Character set, default value is UTF8.
     */
    readonly attrCharacterSetName: ros.IResolvable | string;
    /**
     * Attribute Collate: Database locale parameters, specifying string comparison/collation.
     */
    readonly attrCollate: ros.IResolvable | string;
    /**
     * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
     */
    readonly attrConnLimit: ros.IResolvable | string;
    /**
     * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
     */
    readonly attrCtype: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: Instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DatabaseName: Database Name.
     */
    readonly attrDatabaseName: ros.IResolvable | string;
    /**
     * Attribute Description: Database Description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Owner: Data Sheet owner.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute Size: Database size.
     */
    readonly attrSize: ros.IResolvable | string;
    /**
     * Attribute TableSpace: Database table space.
     */
    readonly attrTableSpace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::Database`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
 */
export declare class Database extends ros.Resource implements IDatabase {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessPrivilege: Permission Control Information.
     */
    readonly attrAccessPrivilege: ros.IResolvable | string;
    /**
     * Attribute CharacterSetName: Character set, default value is UTF8.
     */
    readonly attrCharacterSetName: ros.IResolvable | string;
    /**
     * Attribute Collate: Database locale parameters, specifying string comparison/collation.
     */
    readonly attrCollate: ros.IResolvable | string;
    /**
     * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
     */
    readonly attrConnLimit: ros.IResolvable | string;
    /**
     * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
     */
    readonly attrCtype: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: Instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DatabaseName: Database Name.
     */
    readonly attrDatabaseName: ros.IResolvable | string;
    /**
     * Attribute Description: Database Description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Owner: Data Sheet owner.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute Size: Database size.
     */
    readonly attrSize: ros.IResolvable | string;
    /**
     * Attribute TableSpace: Database table space.
     */
    readonly attrTableSpace: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint?: boolean);
}
