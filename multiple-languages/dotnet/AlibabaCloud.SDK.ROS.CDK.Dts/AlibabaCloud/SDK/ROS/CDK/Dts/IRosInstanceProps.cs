using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceClass: The instance class.
        /// - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
        /// - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
        /// **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceClass
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method. Valid values:
        /// - **PrePaid**: subscription
        /// - **PostPaid**: pay-as-you-go
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the DTS instance. Valid values:
        /// - **MIGRATION*: data migration instance
        /// - **SYNC**: data synchronization instance
        /// - **SUBSCRIBE**: change tracking instance
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
        /// - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
        /// - **true**: automatically renews the DTS instance when it expires.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
        /// - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
        /// - **true**: automatically starts the task after the DTS instance is purchased.
        /// </remarks>
        [JsiiProperty(name: "autoStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStart
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
        /// </remarks>
        [JsiiProperty(name: "computeUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeUnit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
        /// **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
        /// </remarks>
        [JsiiProperty(name: "databaseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatabaseCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointEngineName: The database engine of the destination instance. Valid values:
        /// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        /// - **PolarDB**: PolarDB for MySQL cluster
        /// - **polardb_o**: PolarDB for Oracle cluster
        /// - **polardb_pg**: PolarDB for PostgreSQL cluster
        /// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        /// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        /// - **PostgreSQL**: self-managed PostgreSQL database
        /// - **odps**: MaxCompute project
        /// - **oracle**: self-managed Oracle database
        /// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        /// - **tidb**: TiDB database
        /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
        /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        /// - **Greenplum**: AnalyticDB for PostgreSQL instance
        /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        /// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        /// - **DataHub**: DataHub project
        /// - **DB2**: self-managed Db2 for LUW database
        /// - **as400**: AS\/400
        /// - **Tablestore**: Tablestore instance
        /// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointEngineName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationRegion: The ID of the region in which the destination instance resides.
        /// **Note**: You must specify one of this parameter and the **JobId** parameter.
        /// </remarks>
        [JsiiProperty(name: "destinationRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
        /// **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
        /// </remarks>
        [JsiiProperty(name: "du", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Du
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
        /// - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
        /// - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
        /// </remarks>
        [JsiiProperty(name: "feeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FeeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: jobId: The ID of the task.
        /// **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
        /// </remarks>
        [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JobId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The unit of the subscription duration. Valid values: **Year** and **Month**.
        /// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpointEngineName: The database engine of the source instance. Valid values:
        /// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        /// - **PolarDB**: PolarDB for MySQL cluster
        /// - **polardb_o**: PolarDB for Oracle cluster
        /// - **polardb_pg**: PolarDB for PostgreSQL cluster
        /// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        /// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        /// - **PostgreSQL**: self-managed PostgreSQL database
        /// - **odps**: MaxCompute project
        /// - **oracle**: self-managed Oracle database
        /// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        /// - **tidb**: TiDB database
        /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
        /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        /// - **Greenplum**: AnalyticDB for PostgreSQL instance
        /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        /// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        /// - **DataHub**: DataHub project
        /// - **DB2**: self-managed Db2 for LUW database
        /// - **as400**: AS\/400
        /// - **Tablestore**: Tablestore instance
        /// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        /// </remarks>
        [JsiiProperty(name: "sourceEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceEndpointEngineName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceRegion: The ID of the region in which the source instance resides.
        /// **Note**: You must specify one of this parameter and the **JobId** parameter.
        /// </remarks>
        [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: syncArchitecture: The synchronization topology. Valid values:
        /// - **oneway**: one-way synchronization. This is the default value.
        /// - **bidirectional**: two-way synchronization.
        /// </remarks>
        [JsiiProperty(name: "syncArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SyncArchitecture
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: The subscription duration.
        /// - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        /// - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
        /// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
        /// </remarks>
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceClass: The instance class.
            /// - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
            /// - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
            /// **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
            /// </remarks>
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method. Valid values:
            /// - **PrePaid**: subscription
            /// - **PostPaid**: pay-as-you-go
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the DTS instance. Valid values:
            /// - **MIGRATION*: data migration instance
            /// - **SYNC**: data synchronization instance
            /// - **SUBSCRIBE**: change tracking instance
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
            /// - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
            /// - **true**: automatically renews the DTS instance when it expires.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
            /// - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
            /// - **true**: automatically starts the task after the DTS instance is purchased.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "computeUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
            /// **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointEngineName: The database engine of the destination instance. Valid values:
            /// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **polardb_o**: PolarDB for Oracle cluster
            /// - **polardb_pg**: PolarDB for PostgreSQL cluster
            /// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
            /// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
            /// - **PostgreSQL**: self-managed PostgreSQL database
            /// - **odps**: MaxCompute project
            /// - **oracle**: self-managed Oracle database
            /// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **tidb**: TiDB database
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
            /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
            /// - **Greenplum**: AnalyticDB for PostgreSQL instance
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            /// - **DataHub**: DataHub project
            /// - **DB2**: self-managed Db2 for LUW database
            /// - **as400**: AS\/400
            /// - **Tablestore**: Tablestore instance
            /// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointEngineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationRegion: The ID of the region in which the destination instance resides.
            /// **Note**: You must specify one of this parameter and the **JobId** parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
            /// **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "du", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Du
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
            /// - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
            /// - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "feeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FeeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jobId: The ID of the task.
            /// **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The unit of the subscription duration. Valid values: **Year** and **Month**.
            /// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEndpointEngineName: The database engine of the source instance. Valid values:
            /// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            /// - **PolarDB**: PolarDB for MySQL cluster
            /// - **polardb_o**: PolarDB for Oracle cluster
            /// - **polardb_pg**: PolarDB for PostgreSQL cluster
            /// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
            /// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
            /// - **PostgreSQL**: self-managed PostgreSQL database
            /// - **odps**: MaxCompute project
            /// - **oracle**: self-managed Oracle database
            /// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            /// - **tidb**: TiDB database
            /// - **ADS**: AnalyticDB for MySQL V2.0 cluster
            /// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
            /// - **Greenplum**: AnalyticDB for PostgreSQL instance
            /// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            /// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            /// - **DataHub**: DataHub project
            /// - **DB2**: self-managed Db2 for LUW database
            /// - **as400**: AS\/400
            /// - **Tablestore**: Tablestore instance
            /// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceEndpointEngineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRegion: The ID of the region in which the source instance resides.
            /// **Note**: You must specify one of this parameter and the **JobId** parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: syncArchitecture: The synchronization topology. Valid values:
            /// - **oneway**: one-way synchronization. This is the default value.
            /// - **bidirectional**: two-way synchronization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "syncArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SyncArchitecture
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: usedTime: The subscription duration.
            /// - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
            /// - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
            /// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsedTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
