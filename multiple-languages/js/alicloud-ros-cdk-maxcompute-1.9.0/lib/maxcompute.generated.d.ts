import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export interface RosPackageProps {
    /**
     * @Property packageName: The name of the project package.
     */
    readonly packageName: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property acl: The access-control list (ACL).
     */
    readonly acl?: RosPackage.AclProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Package`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Package` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export declare class RosPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Package";
    /**
     * @Attribute PackageName: The name of the project package.
     */
    readonly attrPackageName: ros.IResolvable;
    /**
     * @Attribute ProjectName: The name of the MaxCompute project.
     */
    readonly attrProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property packageName: The name of the project package.
     */
    packageName: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property acl: The access-control list (ACL).
     */
    acl: RosPackage.AclProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPackageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPackage {
    /**
     * @stability external
     */
    interface AclProperty {
        /**
         * @Property function: undefined
         */
        readonly function?: Array<RosPackage.FunctionProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property table: undefined
         */
        readonly table?: Array<RosPackage.TableProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: undefined
         */
        readonly resource?: Array<RosPackage.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosPackage {
    /**
     * @stability external
     */
    interface FunctionProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosPackage {
    /**
     * @stability external
     */
    interface ResourceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosPackage {
    /**
     * @stability external
     */
    interface TableProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export interface RosProjectProps {
    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property comment: The comments of project.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    readonly defaultQuota?: string | ros.IResolvable;
    /**
     * @Property ipWhiteList: IP whitelist.
     */
    readonly ipWhiteList?: RosProject.IpWhiteListProperty | ros.IResolvable;
    /**
     * @Property properties: Project base attributes.
     */
    readonly properties?: RosProject.PropertiesProperty | ros.IResolvable;
    /**
     * @Property supportSchemaLevels: Whether to support schema level. Default: False
     */
    readonly supportSchemaLevels?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Project`, which is used to create a MaxCompute project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Project";
    /**
     * @Attribute Name: The name of the project.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    name: string | ros.IResolvable;
    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property comment: The comments of project.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    defaultQuota: string | ros.IResolvable | undefined;
    /**
     * @Property ipWhiteList: IP whitelist.
     */
    ipWhiteList: RosProject.IpWhiteListProperty | ros.IResolvable | undefined;
    /**
     * @Property properties: Project base attributes.
     */
    properties: RosProject.PropertiesProperty | ros.IResolvable | undefined;
    /**
     * @Property supportSchemaLevels: Whether to support schema level. Default: False
     */
    supportSchemaLevels: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface EncryptionProperty {
        /**
         * @Property enable: Whether to open encryption.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property algorithm: Encryption Algorithm.
         */
        readonly algorithm?: string | ros.IResolvable;
        /**
         * @Property key: Encryption algorithm key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface IpWhiteListProperty {
        /**
         * @Property vpcIpList: VPC network whitelist. Separate multiple items with commas.
         */
        readonly vpcIpList?: string | ros.IResolvable;
        /**
         * @Property ipList: Classic network IP white list. Separate multiple items with commas.
         */
        readonly ipList?: string | ros.IResolvable;
    }
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface PropertiesProperty {
        /**
         * @Property sqlMeteringMax: SQL charge limit.
         */
        readonly sqlMeteringMax?: number | ros.IResolvable;
        /**
         * @Property typeSystem: Type system.
         */
        readonly typeSystem?: string | ros.IResolvable;
        /**
         * @Property retentionDays: Job default retention time.
         */
        readonly retentionDays?: number | ros.IResolvable;
        /**
         * @Property encryption: Whether encryption is turned on.
         */
        readonly encryption?: RosProject.EncryptionProperty | ros.IResolvable;
        /**
         * @Property allowFullScan: Whether to allow full table scan.
         */
        readonly allowFullScan?: boolean | ros.IResolvable;
        /**
         * @Property enableDecimal2: Whether to turn on Decimal2.0.
         */
        readonly enableDecimal2?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosQuota`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export interface RosQuotaProps {
    /**
     * @Property payType: The billing method of the odps quota instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property cu: The compute unit of the odps quota instance. When the specification is the StandardCompute, this parameter is required.
     */
    readonly cu?: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9
     * If periodUnit is year, the valid range is 1, 2, 3, 4, 5
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
     * @Property quotaNickname: The nickname of the odps quota instance.
     */
    readonly quotaNickname?: string | ros.IResolvable;
    /**
     * @Property specification: The specification of the odps quota instance.
     */
    readonly specification?: string | ros.IResolvable;
    /**
     * @Property tunnel: The tunnel unit of the odps quota instance. When the specification is the Tunnel, this parameter is required
     */
    readonly tunnel?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Quota`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Quota` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export declare class RosQuota extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Quota";
    /**
     * @Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
     */
    readonly attrDefaultSubQuotaNickname: ros.IResolvable;
    /**
     * @Attribute Nickname: The nickname of the odps quota instance.
     */
    readonly attrNickname: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property payType: The billing method of the odps quota instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    payType: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property cu: The compute unit of the odps quota instance. When the specification is the StandardCompute, this parameter is required.
     */
    cu: number | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9
     * If periodUnit is year, the valid range is 1, 2, 3, 4, 5
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property quotaNickname: The nickname of the odps quota instance.
     */
    quotaNickname: string | ros.IResolvable | undefined;
    /**
     * @Property specification: The specification of the odps quota instance.
     */
    specification: string | ros.IResolvable | undefined;
    /**
     * @Property tunnel: The tunnel unit of the odps quota instance. When the specification is the Tunnel, this parameter is required
     */
    tunnel: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQuotaProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export interface RosRoleProps {
    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property roleName: The name of the project role
     */
    readonly roleName: string | ros.IResolvable;
    /**
     * @Property type: Role types, MaxCompute provides administrator roles and resource roles. Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    readonly acl?: RosRole.AclProperty | ros.IResolvable;
    /**
     * @Property policy: The document of the policy. This parameter is not required if an access-control list (ACL) is used.
     */
    readonly policy?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Role`, which is used to create a role at the MaxCompute project level.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export declare class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Role";
    /**
     * @Attribute ProjectName: The name of the MaxCompute project.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * @Attribute RoleName: The name of the project role.
     */
    readonly attrRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property roleName: The name of the project role
     */
    roleName: string | ros.IResolvable;
    /**
     * @Property type: Role types, MaxCompute provides administrator roles and resource roles. Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    type: string | ros.IResolvable;
    /**
     * @Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    acl: RosRole.AclProperty | ros.IResolvable | undefined;
    /**
     * @Property policy: The document of the policy. This parameter is not required if an access-control list (ACL) is used.
     */
    policy: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface AclProperty {
        /**
         * @Property function: undefined
         */
        readonly function?: Array<RosRole.FunctionProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property project: undefined
         */
        readonly project?: Array<RosRole.ProjectProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property table: undefined
         */
        readonly table?: Array<RosRole.TableProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instance: undefined
         */
        readonly instance?: Array<RosRole.InstanceProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: undefined
         */
        readonly resource?: Array<RosRole.ResourceProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property package: undefined
         */
        readonly package?: Array<RosRole.PackageProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface FunctionProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface InstanceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PackageProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface ProjectProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface ResourceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface TableProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export interface RosTableProps {
    /**
     * @Property name: Table name
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    readonly project: string | ros.IResolvable;
    /**
     * @Property comment: Table comment
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and
     * the parameter set to false, an error is returned.
     * If you specify the if not exists parameter, a success message
     * is returned when you create a table by using the name of an
     * existing table. The success message is returned even if the
     * schema of the existing table is different from that of the table you want to create.
     * If you create a table by using the name of an existing table,
     * the table is not created and the metadata of the existing table is not changed.
     */
    readonly ifNotExists?: boolean | ros.IResolvable;
    /**
     * @Property lifecycle: Table's lifecycle.
     */
    readonly lifecycle?: number | ros.IResolvable;
    /**
     * @Property schema: Table schema
     */
    readonly schema?: RosTable.SchemaProperty | ros.IResolvable;
    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    readonly stringSchema?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Table`, which is used to create a table.
 * @Note This class does not contain additional functions, so it is recommended to use the `Table` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export declare class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Table";
    /**
     * @Attribute Name: Table name
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Project: Project name
     */
    readonly attrProject: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Table name
     */
    name: string | ros.IResolvable;
    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    project: string | ros.IResolvable;
    /**
     * @Property comment: Table comment
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and
     * the parameter set to false, an error is returned.
     * If you specify the if not exists parameter, a success message
     * is returned when you create a table by using the name of an
     * existing table. The success message is returned even if the
     * schema of the existing table is different from that of the table you want to create.
     * If you create a table by using the name of an existing table,
     * the table is not created and the metadata of the existing table is not changed.
     */
    ifNotExists: boolean | ros.IResolvable | undefined;
    /**
     * @Property lifecycle: Table's lifecycle.
     */
    lifecycle: number | ros.IResolvable | undefined;
    /**
     * @Property schema: Table schema
     */
    schema: RosTable.SchemaProperty | ros.IResolvable | undefined;
    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    stringSchema: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface ColumnsProperty {
        /**
         * @Property comment: Column comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Column type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Column name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface PartitionsProperty {
        /**
         * @Property comment: Partition comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Partition type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Partition name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface SchemaProperty {
        /**
         * @Property partitions:
         */
        readonly partitions?: Array<RosTable.PartitionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property columns:
         */
        readonly columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
