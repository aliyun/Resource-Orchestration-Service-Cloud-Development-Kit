import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export interface RosDBInstanceProps {
    /**
     * @Property cacheSize: Reserve cache size.
     */
    readonly cacheSize: number | ros.IResolvable;
    /**
     * @Property chargeType: The paid type of instance.Value:
     * Postpaid: Postpaid (pay per quantity).
     * Prepaid: Prepaid (year and monthly).
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: The class of the DB instance.
     * Call DescribeAllDBInstanceClass API to check the latest class list
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database version.
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC id.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property connectionString: Database connection address.
     */
    readonly connectionString?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Example Notes Information.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property engine: Database type, default value is selectdb.
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * @Property period: Specify the prepaid cluster as annual or monthly type.Value description:
     * Year: Year-end type.
     * Month: Month type.
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpList: The default IP whitelist of the instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosDBInstance.TagsProperty[];
    /**
     * @Property usedTime: Specifies the purchase duration of the prepaid instance.Value description:
     * When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral).
     * When Period is Month, the UsedTime value range is: 1~9 (integral).
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SELECTDB::DBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SELECTDB::DBInstance";
    /**
     * @Attribute DBInstanceId: Instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
     */
    readonly attrVpcConnectionString: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cacheSize: Reserve cache size.
     */
    cacheSize: number | ros.IResolvable;
    /**
     * @Property chargeType: The paid type of instance.Value:
     * Postpaid: Postpaid (pay per quantity).
     * Prepaid: Prepaid (year and monthly).
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: The class of the DB instance.
     * Call DescribeAllDBInstanceClass API to check the latest class list
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database version.
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC id.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Switch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability Zone ID.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property connectionString: Database connection address.
     */
    connectionString: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Example Notes Information.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property engine: Database type, default value is selectdb.
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * @Property period: Specify the prepaid cluster as annual or monthly type.Value description:
     * Year: Year-end type.
     * Month: Month type.
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The default IP whitelist of the instance.
     */
    securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    tags: RosDBInstance.TagsProperty[] | undefined;
    /**
     * @Property usedTime: Specifies the purchase duration of the prepaid instance.Value description:
     * When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral).
     * When Period is Month, the UsedTime value range is: 1~9 (integral).
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
