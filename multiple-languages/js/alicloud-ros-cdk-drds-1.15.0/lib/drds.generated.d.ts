import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export interface RosAccountProps {
    /**
     * @Property dbPrivileges: Database permission information.
     */
    readonly dbPrivileges: Array<RosAccount.DbPrivilegesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property password: The password of the account.
     */
    readonly password: string | ros.IResolvable;
    /**
     * @Property description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::Account";
    /**
     * @Attribute AccountType: Account type.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute DbPrivileges: Database permission information.
     */
    readonly attrDbPrivileges: ros.IResolvable;
    /**
     * @Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DrdsAccountName: The name of the account.
     */
    readonly attrDrdsAccountName: ros.IResolvable;
    /**
     * @Attribute Host: You can access the IP address of the database. <note>**%** indicates that any IP address can be accessed.
     */
    readonly attrHost: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbPrivileges: Database permission information.
     */
    dbPrivileges: Array<RosAccount.DbPrivilegesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property drdsAccountName: The name of the account.
     */
    drdsAccountName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property password: The password of the account.
     */
    password: string | ros.IResolvable;
    /**
     * @Property description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAccount {
    /**
     * @stability external
     */
    interface DbPrivilegesProperty {
        /**
         * @Property dbName: The name of the database.
         */
        readonly dbName: string | ros.IResolvable;
        /**
         * @Property privilege: Account permissions.
     * - **R**: read permission.
     * - **W**: write permission.
     * - **DDL**: the permission to perform DDL operations.
     * - **DML**: the permission to perform DML operations.
         */
        readonly privilege: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export interface RosDrdsDBProps {
    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * @Property dbInstanceIsCreating: Specifies whether the required ApsaraDB RDS for MySQL instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;
    /**
     * @Property dbInstType: The type of the storage instances that are used by the PolarDB-X 1.0 database.
     * Set the value to RDS.
     */
    readonly dbInstType?: string | ros.IResolvable;
    /**
     * @Property dbName: Database Name
     */
    readonly dbName?: string | ros.IResolvable;
    /**
     * @Property encode: The encoding method that is used by the database.
     */
    readonly encode?: string | ros.IResolvable;
    /**
     * @Property instDbName: List of databases.
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property password: The logon password of the database instance.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property rdsInstance: List of RDS instances.
     */
    readonly rdsInstance?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::DrdsDB`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDB` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export declare class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsDB";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    drdsInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceIsCreating: Specifies whether the required ApsaraDB RDS for MySQL instance is being created.
     */
    dbInstanceIsCreating: boolean | ros.IResolvable | undefined;
    /**
     * @Property dbInstType: The type of the storage instances that are used by the PolarDB-X 1.0 database.
     * Set the value to RDS.
     */
    dbInstType: string | ros.IResolvable | undefined;
    /**
     * @Property dbName: Database Name
     */
    dbName: string | ros.IResolvable | undefined;
    /**
     * @Property encode: The encoding method that is used by the database.
     */
    encode: string | ros.IResolvable | undefined;
    /**
     * @Property instDbName: List of databases.
     */
    instDbName: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property password: The logon password of the database instance.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property rdsInstance: List of RDS instances.
     */
    rdsInstance: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDrdsDB {
    /**
     * @stability external
     */
    interface InstDbNameProperty {
        /**
         * @Property shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
         */
        readonly shardDbName: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
         */
        readonly dbInstanceId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export interface RosDrdsInstanceProps {
    /**
     * @Property description: Specifies the description of the instance. The description must meet the
     * following requirements:
     * *   The description cannot contain the prefix http:\/\/ or https:\/\/.
     * *   The description must start with a letter or a Chinese character, and can
     * contain uppercase and lowercase letters, Chinese characters, digits, underscores
     * (_), and hyphens (-).
     * *   The description must be 2 to 256 characters in length.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property instanceSeries: Specifies the instance type of the instance. Valid values:
     * *   drds.sn2.4c16g: The instance is of the Starter Edition.
     * *   drds.sn2.8c32g: The instance is of the Standard Edition
     * *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
     */
    readonly instanceSeries: string | ros.IResolvable;
    /**
     * @Property payType: Specifies the billing method of the instance. Valid values:
     * *   drdsPre: The instance uses the subscription billing method.
     * *   drdsPost: The instance uses the pay-as-you-go billing method.
     * *   drdsRo: By default, the pay-as-you-go billing method is used when you create
     * read-only instances.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property specification: Specifies the specification code of the instance. The value consists of the
     * instance type and the specified instance specification. For example, you can set
     * the value to drds.sn2.4c16g.8c32g.
     */
    readonly specification: string | ros.IResolvable;
    /**
     * @Property type: Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE
     * specifies that the instance is a dedicated instance.
     * >  You can also set the value to 1 to specify that the instance is a dedicated
     * instance.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property isAutoRenew: Specifies whether to enable automatic renewal. Valid values:
     * *   true: If the PricingCycle parameter is set to month, the subscription is
     * automatically renewed for one month. If the PricingCycle parameter is set to
     * year, the subscription is automatically renewed for one year.
     * *   false: The auto-renewal feature is disabled for the instance.
     * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property mySqlVersion: Specifies the MySQL version that is supported by the instance. Valid values:
     * *   5: The instance is fully compatible with MySQL 5.x. This value is the default
     * value.
     * *   8: The instance is fully compatible with MySQL 8.0.
     * >  This parameter only takes effect when you create a primary instance. By
     * default, the MySQL version of the read-only instance is the same as that of the
     * primary instance.
     */
    readonly mySqlVersion?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
     * Valid values:
     * *   year: The unit of the subscription duration is year.
     * *   month: The unit of the subscription duration is month.
     * >  This parameter is required if you set the PayType parameter to drdsPre.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDrdsInstance.TagsProperty[];
    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::DrdsInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export declare class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsInstance";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DrdsInstanceId: instance id
     */
    readonly attrDrdsInstanceId: ros.IResolvable;
    /**
     * @Attribute InternetEndpoint: Public endpoint
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * @Attribute IntranetEndpoint: VPC endpoint
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * @Attribute OrderId: order number
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Specifies the description of the instance. The description must meet the
     * following requirements:
     * *   The description cannot contain the prefix http:\/\/ or https:\/\/.
     * *   The description must start with a letter or a Chinese character, and can
     * contain uppercase and lowercase letters, Chinese characters, digits, underscores
     * (_), and hyphens (-).
     * *   The description must be 2 to 256 characters in length.
     */
    description: string | ros.IResolvable;
    /**
     * @Property instanceSeries: Specifies the instance type of the instance. Valid values:
     * *   drds.sn2.4c16g: The instance is of the Starter Edition.
     * *   drds.sn2.8c32g: The instance is of the Standard Edition
     * *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
     */
    instanceSeries: string | ros.IResolvable;
    /**
     * @Property payType: Specifies the billing method of the instance. Valid values:
     * *   drdsPre: The instance uses the subscription billing method.
     * *   drdsPost: The instance uses the pay-as-you-go billing method.
     * *   drdsRo: By default, the pay-as-you-go billing method is used when you create
     * read-only instances.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property specification: Specifies the specification code of the instance. The value consists of the
     * instance type and the specified instance specification. For example, you can set
     * the value to drds.sn2.4c16g.8c32g.
     */
    specification: string | ros.IResolvable;
    /**
     * @Property type: Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE
     * specifies that the instance is a dedicated instance.
     * >  You can also set the value to 1 to specify that the instance is a dedicated
     * instance.
     */
    type: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property isAutoRenew: Specifies whether to enable automatic renewal. Valid values:
     * *   true: If the PricingCycle parameter is set to month, the subscription is
     * automatically renewed for one month. If the PricingCycle parameter is set to
     * year, the subscription is automatically renewed for one year.
     * *   false: The auto-renewal feature is disabled for the instance.
     * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
     */
    isAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property mySqlVersion: Specifies the MySQL version that is supported by the instance. Valid values:
     * *   5: The instance is fully compatible with MySQL 5.x. This value is the default
     * value.
     * *   8: The instance is fully compatible with MySQL 8.0.
     * >  This parameter only takes effect when you create a primary instance. By
     * default, the MySQL version of the read-only instance is the same as that of the
     * primary instance.
     */
    mySqlVersion: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
     * Valid values:
     * *   year: The unit of the subscription duration is year.
     * *   month: The unit of the subscription duration is month.
     * >  This parameter is required if you set the PayType parameter to drdsPre.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDrdsInstance.TagsProperty[] | undefined;
    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    vswitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDrdsInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
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
