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
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;
    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string | ros.IResolvable;
    /**
     * @Property dbName: Database Name
     */
    readonly dbName?: string | ros.IResolvable;
    /**
     * @Property encode: Encoding used by the database
     */
    readonly encode?: string | ros.IResolvable;
    /**
     * @Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property password: The logon password of the database instance.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
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
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    dbInstanceIsCreating: boolean | ros.IResolvable | undefined;
    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    dbInstType: string | ros.IResolvable | undefined;
    /**
     * @Property dbName: Database Name
     */
    dbName: string | ros.IResolvable | undefined;
    /**
     * @Property encode: Encoding used by the database
     */
    encode: string | ros.IResolvable | undefined;
    /**
     * @Property instDbName:
     */
    instDbName: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property password: The logon password of the database instance.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
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
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string | ros.IResolvable;
    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string | ros.IResolvable;
    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
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
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    readonly mySqlVersion?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
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
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    description: string | ros.IResolvable;
    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    instanceSeries: string | ros.IResolvable;
    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    payType: string | ros.IResolvable;
    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    specification: string | ros.IResolvable;
    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
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
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    isAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    mySqlVersion: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
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
