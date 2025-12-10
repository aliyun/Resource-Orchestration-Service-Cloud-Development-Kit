import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export interface RosConsumerGroupProps {
    /**
     * @Property consumerGroupName: Consumer group name.
     */
    readonly consumerGroupName: string | ros.IResolvable;
    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    readonly consumerGroupPassword: string | ros.IResolvable;
    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    readonly consumerGroupUserName: string | ros.IResolvable;
    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    readonly subscriptionInstanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::ConsumerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export declare class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::ConsumerGroup";
    /**
     * @Attribute ConsumerGroupID: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * @Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable;
    /**
     * @Attribute SubscriptionInstanceId: Subscription instance ID
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property consumerGroupName: Consumer group name.
     */
    consumerGroupName: string | ros.IResolvable;
    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    consumerGroupPassword: string | ros.IResolvable;
    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    consumerGroupUserName: string | ros.IResolvable;
    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    subscriptionInstanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceClass: The instance class.
     * - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
     * - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
     * **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
     */
    readonly instanceClass: string | ros.IResolvable;
    /**
     * @Property payType: The billing method. Valid values:
     * - **PrePaid**: subscription
     * - **PostPaid**: pay-as-you-go
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property type: The type of the DTS instance. Valid values:
     * - **MIGRATION*: data migration instance
     * - **SYNC**: data synchronization instance
     * - **SUBSCRIBE**: change tracking instance
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
     * - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
     * - **true**: automatically renews the DTS instance when it expires.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
     * - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
     * - **true**: automatically starts the task after the DTS instance is purchased.
     */
    readonly autoStart?: boolean | ros.IResolvable;
    /**
     * @Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
     */
    readonly computeUnit?: number | ros.IResolvable;
    /**
     * @Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
     * **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
     */
    readonly databaseCount?: number | ros.IResolvable;
    /**
     * @Property destinationEndpointEngineName: The database engine of the destination instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    readonly destinationEndpointEngineName?: string | ros.IResolvable;
    /**
     * @Property destinationRegion: The ID of the region in which the destination instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly destinationRegion?: string | ros.IResolvable;
    /**
     * @Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
     * **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
     */
    readonly du?: number | ros.IResolvable;
    /**
     * @Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
     * - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
     * - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
     */
    readonly feeType?: string | ros.IResolvable;
    /**
     * @Property jobId: The ID of the task.
     * **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
     */
    readonly jobId?: string | ros.IResolvable;
    /**
     * @Property maxDu: The upper limit of DU.
     * > Only Serverless instances are supported.
     */
    readonly maxDu?: number | ros.IResolvable;
    /**
     * @Property minDu: The lower limit of DU.
     * > Only Serverless instances are supported.
     */
    readonly minDu?: number | ros.IResolvable;
    /**
     * @Property period: The unit of the subscription duration. Valid values: **Year** and **Month**.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property sourceEndpointEngineName: The database engine of the source instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    readonly sourceEndpointEngineName?: string | ros.IResolvable;
    /**
     * @Property sourceRegion: The ID of the region in which the source instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly sourceRegion?: string | ros.IResolvable;
    /**
     * @Property syncArchitecture: The synchronization topology. Valid values:
     * - **oneway**: one-way synchronization. This is the default value.
     * - **bidirectional**: two-way synchronization.
     */
    readonly syncArchitecture?: string | ros.IResolvable;
    /**
     * @Property usedTime: The subscription duration.
     * - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::Instance";
    /**
     * @Attribute InstanceId: The ID of the DTS instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute JobId: The ID of the task.
     */
    readonly attrJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceClass: The instance class.
     * - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
     * - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
     * **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
     */
    instanceClass: string | ros.IResolvable;
    /**
     * @Property payType: The billing method. Valid values:
     * - **PrePaid**: subscription
     * - **PostPaid**: pay-as-you-go
     */
    payType: string | ros.IResolvable;
    /**
     * @Property type: The type of the DTS instance. Valid values:
     * - **MIGRATION*: data migration instance
     * - **SYNC**: data synchronization instance
     * - **SUBSCRIBE**: change tracking instance
     */
    type: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
     * - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
     * - **true**: automatically renews the DTS instance when it expires.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
     * - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
     * - **true**: automatically starts the task after the DTS instance is purchased.
     */
    autoStart: boolean | ros.IResolvable | undefined;
    /**
     * @Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
     */
    computeUnit: number | ros.IResolvable | undefined;
    /**
     * @Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
     * **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
     */
    databaseCount: number | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointEngineName: The database engine of the destination instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    destinationEndpointEngineName: string | ros.IResolvable | undefined;
    /**
     * @Property destinationRegion: The ID of the region in which the destination instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    destinationRegion: string | ros.IResolvable | undefined;
    /**
     * @Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
     * **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
     */
    du: number | ros.IResolvable | undefined;
    /**
     * @Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
     * - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
     * - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
     */
    feeType: string | ros.IResolvable | undefined;
    /**
     * @Property jobId: The ID of the task.
     * **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
     */
    jobId: string | ros.IResolvable | undefined;
    /**
     * @Property maxDu: The upper limit of DU.
     * > Only Serverless instances are supported.
     */
    maxDu: number | ros.IResolvable | undefined;
    /**
     * @Property minDu: The lower limit of DU.
     * > Only Serverless instances are supported.
     */
    minDu: number | ros.IResolvable | undefined;
    /**
     * @Property period: The unit of the subscription duration. Valid values: **Year** and **Month**.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceEndpointEngineName: The database engine of the source instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    sourceEndpointEngineName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceRegion: The ID of the region in which the source instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    sourceRegion: string | ros.IResolvable | undefined;
    /**
     * @Property syncArchitecture: The synchronization topology. Valid values:
     * - **oneway**: one-way synchronization. This is the default value.
     * - **bidirectional**: two-way synchronization.
     */
    syncArchitecture: string | ros.IResolvable | undefined;
    /**
     * @Property usedTime: The subscription duration.
     * - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMigrationJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export interface RosMigrationJob2Props {
    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    readonly dataInitialization: boolean | ros.IResolvable;
    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    readonly dataSynchronization: boolean | ros.IResolvable;
    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    readonly dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    readonly destinationEndpoint: RosMigrationJob2.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosMigrationJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    readonly structureInitialization: boolean | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;
    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    readonly dataCheckConfigure?: RosMigrationJob2.DataCheckConfigureProperty | ros.IResolvable;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly delayPhone?: string | ros.IResolvable;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    readonly destPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    readonly destSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    readonly disasterRecoveryJob?: boolean | ros.IResolvable;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly errorPhone?: string | ros.IResolvable;
    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    readonly fileOssUrl?: string | ros.IResolvable;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    readonly maxDu?: number | ros.IResolvable;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    readonly minDu?: number | ros.IResolvable;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    readonly srcPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    readonly srcSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Migrating**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::MigrationJob2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export declare class RosMigrationJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::MigrationJob2";
    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable;
    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    dataInitialization: boolean | ros.IResolvable;
    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    dataSynchronization: boolean | ros.IResolvable;
    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    destinationEndpoint: RosMigrationJob2.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    sourceEndpoint: RosMigrationJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    structureInitialization: boolean | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    checkpoint: string | ros.IResolvable | undefined;
    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    dataCheckConfigure: RosMigrationJob2.DataCheckConfigureProperty | ros.IResolvable | undefined;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    dedicatedClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    delayNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    delayPhone: string | ros.IResolvable | undefined;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    delayRuleTime: number | ros.IResolvable | undefined;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    destPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    destSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    disasterRecoveryJob: boolean | ros.IResolvable | undefined;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    dtsBisLabel: string | ros.IResolvable | undefined;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    dtsJobId: string | ros.IResolvable | undefined;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    errorNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    errorPhone: string | ros.IResolvable | undefined;
    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    fileOssUrl: string | ros.IResolvable | undefined;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    maxDu: number | ros.IResolvable | undefined;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    minDu: number | ros.IResolvable | undefined;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    reserve: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    srcPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    srcSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Migrating**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJob2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    interface DataCheckConfigureProperty {
        /**
         * @Property fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadRps?: number | ros.IResolvable;
        /**
         * @Property dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
         */
        readonly dataCheckNoticePhone?: string | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckDelayNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
         */
        readonly dataCheckDbList?: string | ros.IResolvable;
        /**
         * @Property checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
     * - **0**: does not configure a timeout period for the full data verification task.
     * - **1**: configures a timeout period for the full data verification task.
     * **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
         */
        readonly checkMaximumHourEnable?: number | ros.IResolvable;
        /**
         * @Property fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
     * **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
         */
        readonly fullCheckRatio?: number | ros.IResolvable;
        /**
         * @Property checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
         */
        readonly checkMaximumHour?: number | ros.IResolvable;
        /**
         * @Property fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
     * **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
         */
        readonly fullCheckFixData?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckModel: The mode of the full data verification task. Valid values:
     * - **1**: verifies the data by sampling ratio.
     * - **2**: verifies the data by row.
         */
        readonly fullCheckModel?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
         */
        readonly incrementalDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadBps?: number | ros.IResolvable;
        /**
         * @Property fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly fullCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
         */
        readonly fullCheckErrorNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
     * - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
     * - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
     * - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
         */
        readonly fullCheckReferEndpoint?: string | ros.IResolvable;
        /**
         * @Property fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
         */
        readonly fullDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
     * **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
         */
        readonly fullCheckNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
     * Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
         */
        readonly incrementalCheckErrorNotice?: boolean | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    interface DestinationEndpointProperty {
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the destination database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
     * - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
     * - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the destination instance.
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination instance.
     * **Note**: This parameter is required only when the destination instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the destination instance.
     * **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the destination instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the destination instance. Valid values:
     * Alibaba Cloud database instances
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **REDIS**: ApsaraDB for Redis instance
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **DATAHUB**: DataHub project
     * - **ELK**: Elasticsearch cluster
     * - **Tablestore**: Tablestore instance
     * - **ODPS**: MaxCompute project
     * Self-managed databases
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an ECS instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over CEN
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
     * If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
     * If the destination instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the destination instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **ODPS**: MaxCompute project
     * - **Tablestore**: Tablestore instance
     * - **ELK**: Elasticsearch cluster
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: The password of the destination database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance.
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the source instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **DMSPOLARDB**: DMS logical database
     * - **HBASE**: self-managed HBase database
     * - **TERADATA**: Teradata database
     * - **TiDB**: TiDB database
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * Alibaba Cloud database instances:
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **REDIS**: ApsaraDB for Redis instance
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
     * Self-managed databases:
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSubscriptionJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export interface RosSubscriptionJob2Props {
    /**
     * @Property dbList: The objects for which you want to track data changes.
     */
    readonly dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosSubscriptionJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property subscriptionInstance: Subscription instance configuration.
     */
    readonly subscriptionInstance: RosSubscriptionJob2.SubscriptionInstanceProperty | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly delayPhone?: string | ros.IResolvable;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    readonly destPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    readonly destSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly errorPhone?: string | ros.IResolvable;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    readonly maxDu?: number | ros.IResolvable;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    readonly minDu?: number | ros.IResolvable;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    readonly srcPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    readonly srcSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Subscribing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property subscriptionDataType: Subscription data type.
     */
    readonly subscriptionDataType?: RosSubscriptionJob2.SubscriptionDataTypeProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SubscriptionJob2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SubscriptionJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export declare class RosSubscriptionJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SubscriptionJob2";
    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable;
    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbList: The objects for which you want to track data changes.
     */
    dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    sourceEndpoint: RosSubscriptionJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property subscriptionInstance: Subscription instance configuration.
     */
    subscriptionInstance: RosSubscriptionJob2.SubscriptionInstanceProperty | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    checkpoint: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    dedicatedClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    delayNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    delayPhone: string | ros.IResolvable | undefined;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    delayRuleTime: number | ros.IResolvable | undefined;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    destPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    destSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    dtsBisLabel: string | ros.IResolvable | undefined;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    dtsJobId: string | ros.IResolvable | undefined;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    errorNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    errorPhone: string | ros.IResolvable | undefined;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    maxDu: number | ros.IResolvable | undefined;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    minDu: number | ros.IResolvable | undefined;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    reserve: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    srcPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    srcSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Subscribing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property subscriptionDataType: Subscription data type.
     */
    subscriptionDataType: RosSubscriptionJob2.SubscriptionDataTypeProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionJob2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance.
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The engine of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
     * **Note**: If the source database is a self-managed database, you must specify this parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * - **RDS**: ApsaraDB RDS for MySQL instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DRDS**: PolarDB-X 1.0 instance
     * - **LocalInstance**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **Express**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **dg**: self-managed database connected over Database Gateway
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    interface SubscriptionDataTypeProperty {
        /**
         * @Property dml: Specifies whether to track DML statements. Default value: true. Valid values:
     * - **true**: tracks DML statements.
     * - **false**: does not track DML statements.
         */
        readonly dml?: boolean | ros.IResolvable;
        /**
         * @Property ddl: Specifies whether to track DDL statements. Default value: true. Valid values:
     * - **true**: tracks DDL statements.
     * - **false**: does not track DDL statements.
         */
        readonly ddl?: boolean | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    interface SubscriptionInstanceProperty {
        /**
         * @Property vpcId: The ID of the VPC in which the change tracking instance is deployed.
     * **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property networkType: The network type of the change tracking task. Set the value to **vpc**. A value of vpc indicates the Virtual Private Cloud (VPC) network type.**Note**:
     * - To use the new version of the change tracking feature, you must specify **NetworkType**. You must also specify **VPCId** and **VSwitchID**. If you do not specify **NetworkType**, the previous version of the change tracking feature is used.
     * - The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
         */
        readonly networkType: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the specified VPC.
     * **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
         */
        readonly vSwitchId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSynchronizationJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
 */
export interface RosSynchronizationJob2Props {
    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    readonly dataInitialization: boolean | ros.IResolvable;
    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    readonly dataSynchronization: boolean | ros.IResolvable;
    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    readonly dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    readonly destinationEndpoint: RosSynchronizationJob2.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosSynchronizationJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    readonly structureInitialization: boolean | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;
    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    readonly dataCheckConfigure?: RosSynchronizationJob2.DataCheckConfigureProperty | ros.IResolvable;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly delayPhone?: string | ros.IResolvable;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    readonly destPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    readonly destSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    readonly disasterRecoveryJob?: boolean | ros.IResolvable;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    readonly errorPhone?: string | ros.IResolvable;
    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    readonly fileOssUrl?: string | ros.IResolvable;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    readonly maxDu?: number | ros.IResolvable;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    readonly minDu?: number | ros.IResolvable;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    readonly srcPrimaryVswId?: string | ros.IResolvable;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    readonly srcSecondaryVswId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Synchronizing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:
     * - **Forward**: Data is synchronized from the source database to the destination database.
     * - **Reverse**: Data is synchronized from the destination database to the source database.
     * **Note**: The default value is **Forward**.
     * The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
     */
    readonly synchronizationDirection?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SynchronizationJob2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
 */
export declare class RosSynchronizationJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SynchronizationJob2";
    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable;
    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    dataInitialization: boolean | ros.IResolvable;
    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    dataSynchronization: boolean | ros.IResolvable;
    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    destinationEndpoint: RosSynchronizationJob2.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    dtsJobName: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    sourceEndpoint: RosSynchronizationJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    structureInitialization: boolean | ros.IResolvable;
    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    checkpoint: string | ros.IResolvable | undefined;
    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    dataCheckConfigure: RosSynchronizationJob2.DataCheckConfigureProperty | ros.IResolvable | undefined;
    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    dedicatedClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    delayNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    delayPhone: string | ros.IResolvable | undefined;
    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    delayRuleTime: number | ros.IResolvable | undefined;
    /**
     * @Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
     */
    destPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
     */
    destSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    disasterRecoveryJob: boolean | ros.IResolvable | undefined;
    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    dtsBisLabel: string | ros.IResolvable | undefined;
    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    dtsJobId: string | ros.IResolvable | undefined;
    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    errorNotice: boolean | ros.IResolvable | undefined;
    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
     * **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
     */
    errorPhone: string | ros.IResolvable | undefined;
    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    fileOssUrl: string | ros.IResolvable | undefined;
    /**
     * @Property maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
     */
    maxDu: number | ros.IResolvable | undefined;
    /**
     * @Property minDu: The lower limit of DU. This parameter is supported only for serverless instances.
     */
    minDu: number | ros.IResolvable | undefined;
    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    reserve: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
     */
    srcPrimaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
     */
    srcSecondaryVswId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the resource. Valid values:
     * - **Synchronizing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:
     * - **Forward**: Data is synchronized from the source database to the destination database.
     * - **Reverse**: Data is synchronized from the destination database to the source database.
     * **Note**: The default value is **Forward**.
     * The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
     */
    synchronizationDirection: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJob2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    interface DataCheckConfigureProperty {
        /**
         * @Property fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadRps?: number | ros.IResolvable;
        /**
         * @Property dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
         */
        readonly dataCheckNoticePhone?: string | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckDelayNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
         */
        readonly dataCheckDbList?: string | ros.IResolvable;
        /**
         * @Property checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
     * - **0**: does not configure a timeout period for the full data verification task.
     * - **1**: configures a timeout period for the full data verification task.
     * **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
         */
        readonly checkMaximumHourEnable?: number | ros.IResolvable;
        /**
         * @Property fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
     * **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
         */
        readonly fullCheckRatio?: number | ros.IResolvable;
        /**
         * @Property checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
         */
        readonly checkMaximumHour?: number | ros.IResolvable;
        /**
         * @Property fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
     * **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
         */
        readonly fullCheckFixData?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckModel: The mode of the full data verification task. Valid values:
     * - **1**: verifies the data by sampling ratio.
     * - **2**: verifies the data by row.
         */
        readonly fullCheckModel?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
         */
        readonly incrementalDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadBps?: number | ros.IResolvable;
        /**
         * @Property fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly fullCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
         */
        readonly fullCheckErrorNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
     * - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
     * - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
     * - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
         */
        readonly fullCheckReferEndpoint?: string | ros.IResolvable;
        /**
         * @Property fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
         */
        readonly fullDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
     * **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
         */
        readonly fullCheckNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
     * Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
         */
        readonly incrementalCheckErrorNotice?: boolean | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    interface DestinationEndpointProperty {
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the destination database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
     * - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
     * - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the destination instance.
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination instance.
     * **Note**: This parameter is required only when the destination instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the destination instance.
     * **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the destination instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the destination instance. Valid values:
     * Alibaba Cloud database instances
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **REDIS**: ApsaraDB for Redis instance
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **DATAHUB**: DataHub project
     * - **ELK**: Elasticsearch cluster
     * - **Tablestore**: Tablestore instance
     * - **ODPS**: MaxCompute project
     * Self-managed databases
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an ECS instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over CEN
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
     * If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
     * If the destination instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the destination instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **ODPS**: MaxCompute project
     * - **Tablestore**: Tablestore instance
     * - **ELK**: Elasticsearch cluster
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: The password of the destination database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance.
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the source instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **DMSPOLARDB**: DMS logical database
     * - **HBASE**: self-managed HBase database
     * - **TERADATA**: Teradata database
     * - **TiDB**: TiDB database
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * Alibaba Cloud database instances:
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **REDIS**: ApsaraDB for Redis instance
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
     * Self-managed databases:
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
