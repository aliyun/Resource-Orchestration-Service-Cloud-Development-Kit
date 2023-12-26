import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export interface InstanceProps {

    /**
     * Property instanceClass: The instance class.
     * - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
     * - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
     * **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
     */
    readonly instanceClass: string | ros.IResolvable;

    /**
     * Property payType: The billing method. Valid values:
     * - **PrePaid**: subscription
     * - **PostPaid**: pay-as-you-go
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property type: The type of the DTS instance. Valid values:
     * - **MIGRATION*: data migration instance
     * - **SYNC**: data synchronization instance
     * - **SUBSCRIBE**: change tracking instance
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
     * - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
     * - **true**: automatically renews the DTS instance when it expires.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
     * - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
     * - **true**: automatically starts the task after the DTS instance is purchased.
     */
    readonly autoStart?: boolean | ros.IResolvable;

    /**
     * Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
     */
    readonly computeUnit?: number | ros.IResolvable;

    /**
     * Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
     * **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
     */
    readonly databaseCount?: number | ros.IResolvable;

    /**
     * Property destinationEndpointEngineName: The database engine of the destination instance. Valid values:
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
     * Property destinationRegion: The ID of the region in which the destination instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly destinationRegion?: string | ros.IResolvable;

    /**
     * Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
     * **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
     */
    readonly du?: number | ros.IResolvable;

    /**
     * Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE. 
     * - **ONLY_CONFIGURATION_FEE**: charges only configuration fees. 
     * - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
     */
    readonly feeType?: string | ros.IResolvable;

    /**
     * Property jobId: The ID of the task.
     * **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
     */
    readonly jobId?: string | ros.IResolvable;

    /**
     * Property period: The unit of the subscription duration. Valid values: **Year** and **Month**.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property sourceEndpointEngineName: The database engine of the source instance. Valid values:
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
     * Property sourceRegion: The ID of the region in which the source instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly sourceRegion?: string | ros.IResolvable;

    /**
     * Property syncArchitecture: The synchronization topology. Valid values:
     * - **oneway**: one-way synchronization. This is the default value.
     * - **bidirectional**: two-way synchronization.
     */
    readonly syncArchitecture?: string | ros.IResolvable;

    /**
     * Property usedTime: The subscription duration.
     * - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export class Instance extends ros.Resource {

    /**
     * Attribute InstanceId: The ID of the DTS instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute JobId: The ID of the task.
     */
    public readonly attrJobId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            resourceGroupId: props.resourceGroupId,
            feeType: props.feeType,
            computeUnit: props.computeUnit,
            period: props.period,
            destinationRegion: props.destinationRegion,
            instanceClass: props.instanceClass,
            sourceEndpointEngineName: props.sourceEndpointEngineName,
            payType: props.payType,
            autoPay: props.autoPay,
            destinationEndpointEngineName: props.destinationEndpointEngineName,
            sourceRegion: props.sourceRegion,
            du: props.du,
            type: props.type,
            databaseCount: props.databaseCount,
            usedTime: props.usedTime,
            autoStart: props.autoStart,
            jobId: props.jobId,
            syncArchitecture: props.syncArchitecture,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrJobId = rosInstance.attrJobId;
    }
}
