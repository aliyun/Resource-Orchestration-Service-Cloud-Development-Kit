import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DRDS::DrdsDB`
 */
export interface RosDrdsDBProps {
    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string;
    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string;
    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;
    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string;
    /**
     * @Property dbName: Database Name
     */
    readonly dbName?: string;
    /**
     * @Property encode: Encoding used by the database
     */
    readonly encode?: string;
    /**
     * @Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property password: The logon password of the database instance.
     */
    readonly password?: string;
    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    readonly rdsInstance?: string[];
    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string;
}
/**
 * A ROS template type:  `ALIYUN::DRDS::DrdsDB`
 */
export declare class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsDB";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    drdsInstanceId: string;
    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    accountName: string | undefined;
    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    dbInstanceIsCreating: boolean | ros.IResolvable | undefined;
    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    dbInstType: string | undefined;
    /**
     * @Property dbName: Database Name
     */
    dbName: string | undefined;
    /**
     * @Property encode: Encoding used by the database
     */
    encode: string | undefined;
    /**
     * @Property instDbName:
     */
    instDbName: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property password: The logon password of the database instance.
     */
    password: string | undefined;
    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    rdsInstance: string[] | undefined;
    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    type: string | undefined;
    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     *
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
        readonly shardDbName: string[];
        /**
         * @Property dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
         */
        readonly dbInstanceId: string;
    }
}
/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`
 */
export interface RosDrdsInstanceProps {
    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string;
    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string;
    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string;
    /**
     * @Property quantity: Purchase quantity
     */
    readonly quantity: number;
    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string;
    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    readonly type: string;
    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    readonly zoneId: string;
    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number;
    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    readonly mySqlVersion?: string;
    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    readonly pricingCycle?: string;
    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string;
    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string;
}
/**
 * A ROS template type:  `ALIYUN::DRDS::DrdsInstance`
 */
export declare class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DrdsInstanceId: instance id
     */
    readonly attrDrdsInstanceId: any;
    /**
     * @Attribute InternetEndpoint: Public endpoint
     */
    readonly attrInternetEndpoint: any;
    /**
     * @Attribute IntranetEndpoint: VPC endpoint
     */
    readonly attrIntranetEndpoint: any;
    /**
     * @Attribute OrderId: order number
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    description: string;
    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    instanceSeries: string;
    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    payType: string;
    /**
     * @Property quantity: Purchase quantity
     */
    quantity: number;
    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    specification: string;
    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    type: string;
    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    zoneId: string;
    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    duration: number | undefined;
    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    isAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    mySqlVersion: string | undefined;
    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    pricingCycle: string | undefined;
    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    vpcId: string | undefined;
    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    vswitchId: string | undefined;
    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     *
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
