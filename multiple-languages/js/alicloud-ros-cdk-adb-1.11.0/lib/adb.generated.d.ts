import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account.
     * The password must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * Special characters include ! @ # $ % ^ & * ()  _ + - and =
     * The password must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * @Property accountType: Normal: standard account
     * Super: privileged account
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADB::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::Account";
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account.
     * The password must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * Special characters include ! @ # $ % ^ & * ()  _ + - and =
     * The password must be 8 to 32 characters in length.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property accountType: Normal: standard account
     * Super: privileged account
     */
    accountType: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property dbClusterCategory: The edition of the cluster.
     * Valid values when the cluster is in reserved mode:
     * Basic
     * Cluster
     * When the cluster is in elastic mode, set the value to MixedStorage.
     */
    readonly dbClusterCategory: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property mode: The mode of the cluster. Valid values:
     * Reserver: the reserved mode
     * Flexible: the elastic mode
     */
    readonly mode: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
     */
    readonly computeResource?: string | ros.IResolvable;
    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    readonly dbClusterClass?: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;
    /**
     * @Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
     * T8, T16, T32, and T52: 1
     * C8 and C32: 1 to 128
     */
    readonly dbNodeGroupCount?: number | ros.IResolvable;
    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    readonly dbNodeStorage?: number | ros.IResolvable;
    /**
     * @Property elasticIoResource: Elastic IO Unit
     * Note the flexible mode cluster will use this parameter.
     */
    readonly elasticIoResource?: number | ros.IResolvable;
    /**
     * @Property executorCount: ExecutorCount
     */
    readonly executorCount?: number | ros.IResolvable;
    /**
     * @Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * Valid values when the Period parameter is set to Year: 1, 2, and 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADB::DBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::DBCluster";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ConnectionString: Vpc connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterCategory: The edition of the cluster.
     * Valid values when the cluster is in reserved mode:
     * Basic
     * Cluster
     * When the cluster is in elastic mode, set the value to MixedStorage.
     */
    dbClusterCategory: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property mode: The mode of the cluster. Valid values:
     * Reserver: the reserved mode
     * Flexible: the elastic mode
     */
    mode: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
     */
    computeResource: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    dbClusterClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
     * T8, T16, T32, and T52: 1
     * C8 and C32: 1 to 128
     */
    dbNodeGroupCount: number | ros.IResolvable | undefined;
    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    dbNodeStorage: number | ros.IResolvable | undefined;
    /**
     * @Property elasticIoResource: Elastic IO Unit
     * Note the flexible mode cluster will use this parameter.
     */
    elasticIoResource: number | ros.IResolvable | undefined;
    /**
     * @Property executorCount: ExecutorCount
     */
    executorCount: number | ros.IResolvable | undefined;
    /**
     * @Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * Valid values when the Period parameter is set to Year: 1, 2, and 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDBCluster.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBCluster {
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
