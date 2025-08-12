using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property instanceClass: The instance class.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>DTS supports the following instance classes for a data migration instance: <strong>xxlarge</strong>, <strong>xlarge</strong>, <strong>large</strong>, <strong>medium</strong>, and <strong>small</strong>.</description>
        /// <description>DTS supports the following instance classes for a data synchronization instance: <strong>large</strong>, <strong>medium</strong>, <strong>small</strong>, and <strong>micro</strong>.
        /// <strong>Note</strong>: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceClass
        {
            get;
        }

        /// <summary>Property payType: The billing method.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>PrePaid</strong>: subscription</description>
        /// <description><strong>PostPaid</strong>: pay-as-you-go</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property type: The type of the DTS instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>*<em>MIGRATION</em>: data migration instance</description>
        /// <description><strong>SYNC</strong>: data synchronization instance</description>
        /// <description><strong>SUBSCRIBE</strong>: change tracking instance</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>false</strong>: does not automatically renew the DTS instance when it expires. This is the default value.</description>
        /// <description><strong>true</strong>: automatically renews the DTS instance when it expires.</description>
        /// </list>
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

        /// <summary>Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>false</strong>: does not automatically start the task after the DTS instance is purchased. This is the default value.</description>
        /// <description><strong>true</strong>: automatically starts the task after the DTS instance is purchased.</description>
        /// </list>
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

        /// <summary>Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.</summary>
        /// <remarks>
        /// The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
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

        /// <summary>Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.</summary>
        /// <remarks>
        /// Default value: <strong>1</strong>.
        /// <strong>Note</strong>: You must specify this parameter only if the <strong>SourceEndpointEngineName</strong> parameter is set to <strong>drds</strong>.
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

        /// <summary>Property destinationEndpointEngineName: The database engine of the destination instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</description>
        /// <description><strong>PolarDB</strong>: PolarDB for MySQL cluster</description>
        /// <description><strong>polardb_o</strong>: PolarDB for Oracle cluster</description>
        /// <description><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</description>
        /// <description><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</description>
        /// <description><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</description>
        /// <description><strong>PostgreSQL</strong>: self-managed PostgreSQL database</description>
        /// <description><strong>odps</strong>: MaxCompute project</description>
        /// <description><strong>oracle</strong>: self-managed Oracle database</description>
        /// <description><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</description>
        /// <description><strong>tidb</strong>: TiDB database</description>
        /// <description><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</description>
        /// <description><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</description>
        /// <description><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</description>
        /// <description><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</description>
        /// <description><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</description>
        /// <description><strong>DataHub</strong>: DataHub project</description>
        /// <description><strong>DB2</strong>: self-managed Db2 for LUW database</description>
        /// <description><strong>as400</strong>: AS/400</description>
        /// <description><strong>Tablestore</strong>: Tablestore instance
        /// <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</description>
        /// </list>
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

        /// <summary>Property destinationRegion: The ID of the region in which the destination instance resides.</summary>
        /// <remarks>
        /// <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
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

        /// <summary>Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.</summary>
        /// <remarks>
        /// Valid values: <strong>1</strong> to <strong>100</strong>.
        /// <strong>Note</strong>: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
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

        /// <summary>Property feeType: The billing type for a change tracking instance.</summary>
        /// <remarks>
        /// Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
        ///
        /// <list type="bullet">
        /// <description><strong>ONLY_CONFIGURATION_FEE</strong>: charges only configuration fees.</description>
        /// <description><strong>CONFIGURATION_FEE_AND_DATA_FEE</strong>: charges configuration fees and data traffic fees.</description>
        /// </list>
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

        /// <summary>Property jobId: The ID of the task.</summary>
        /// <remarks>
        /// <strong>Note</strong>: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
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

        /// <summary>Property maxDu: The upper limit of DU.</summary>
        /// <remarks>
        ///     Only Serverless instances are supported.
        /// </remarks>
        [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxDu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minDu: The lower limit of DU.</summary>
        /// <remarks>
        ///     Only Serverless instances are supported.
        /// </remarks>
        [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinDu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values: <strong>Year</strong> and <strong>Month</strong>.
        /// <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>.
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceEndpointEngineName: The database engine of the source instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</description>
        /// <description><strong>PolarDB</strong>: PolarDB for MySQL cluster</description>
        /// <description><strong>polardb_o</strong>: PolarDB for Oracle cluster</description>
        /// <description><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</description>
        /// <description><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</description>
        /// <description><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</description>
        /// <description><strong>PostgreSQL</strong>: self-managed PostgreSQL database</description>
        /// <description><strong>odps</strong>: MaxCompute project</description>
        /// <description><strong>oracle</strong>: self-managed Oracle database</description>
        /// <description><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</description>
        /// <description><strong>tidb</strong>: TiDB database</description>
        /// <description><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</description>
        /// <description><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</description>
        /// <description><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</description>
        /// <description><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</description>
        /// <description><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</description>
        /// <description><strong>DataHub</strong>: DataHub project</description>
        /// <description><strong>DB2</strong>: self-managed Db2 for LUW database</description>
        /// <description><strong>as400</strong>: AS/400</description>
        /// <description><strong>Tablestore</strong>: Tablestore instance
        /// <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</description>
        /// </list>
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

        /// <summary>Property sourceRegion: The ID of the region in which the source instance resides.</summary>
        /// <remarks>
        /// <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
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

        /// <summary>Property syncArchitecture: The synchronization topology.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>oneway</strong>: one-way synchronization. This is the default value.</description>
        /// <description><strong>bidirectional</strong>: two-way synchronization.</description>
        /// </list>
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

        /// <summary>Property usedTime: The subscription duration.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Valid values if the <strong>Period</strong> parameter is set to <strong>Month</strong>: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</description>
        /// <description>Valid values if the <strong>Period</strong> parameter is set to <strong>Year</strong>: 1, 2, 3, and 5.
        /// <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>. You can set the <strong>Period</strong> parameter to specify the unit of the subscription duration.</description>
        /// </list>
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

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceClass: The instance class.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>DTS supports the following instance classes for a data migration instance: <strong>xxlarge</strong>, <strong>xlarge</strong>, <strong>large</strong>, <strong>medium</strong>, and <strong>small</strong>.</description>
            /// <description>DTS supports the following instance classes for a data synchronization instance: <strong>large</strong>, <strong>medium</strong>, <strong>small</strong>, and <strong>micro</strong>.
            /// <strong>Note</strong>: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The billing method.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>PrePaid</strong>: subscription</description>
            /// <description><strong>PostPaid</strong>: pay-as-you-go</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the DTS instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>*<em>MIGRATION</em>: data migration instance</description>
            /// <description><strong>SYNC</strong>: data synchronization instance</description>
            /// <description><strong>SUBSCRIBE</strong>: change tracking instance</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>false</strong>: does not automatically renew the DTS instance when it expires. This is the default value.</description>
            /// <description><strong>true</strong>: automatically renews the DTS instance when it expires.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>false</strong>: does not automatically start the task after the DTS instance is purchased. This is the default value.</description>
            /// <description><strong>true</strong>: automatically starts the task after the DTS instance is purchased.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.</summary>
            /// <remarks>
            /// The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "computeUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.</summary>
            /// <remarks>
            /// Default value: <strong>1</strong>.
            /// <strong>Note</strong>: You must specify this parameter only if the <strong>SourceEndpointEngineName</strong> parameter is set to <strong>drds</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointEngineName: The database engine of the destination instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</description>
            /// <description><strong>PolarDB</strong>: PolarDB for MySQL cluster</description>
            /// <description><strong>polardb_o</strong>: PolarDB for Oracle cluster</description>
            /// <description><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</description>
            /// <description><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</description>
            /// <description><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</description>
            /// <description><strong>PostgreSQL</strong>: self-managed PostgreSQL database</description>
            /// <description><strong>odps</strong>: MaxCompute project</description>
            /// <description><strong>oracle</strong>: self-managed Oracle database</description>
            /// <description><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</description>
            /// <description><strong>tidb</strong>: TiDB database</description>
            /// <description><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</description>
            /// <description><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</description>
            /// <description><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</description>
            /// <description><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</description>
            /// <description><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</description>
            /// <description><strong>DataHub</strong>: DataHub project</description>
            /// <description><strong>DB2</strong>: self-managed Db2 for LUW database</description>
            /// <description><strong>as400</strong>: AS/400</description>
            /// <description><strong>Tablestore</strong>: Tablestore instance
            /// <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointEngineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationRegion: The ID of the region in which the destination instance resides.</summary>
            /// <remarks>
            /// <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.</summary>
            /// <remarks>
            /// Valid values: <strong>1</strong> to <strong>100</strong>.
            /// <strong>Note</strong>: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "du", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Du
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property feeType: The billing type for a change tracking instance.</summary>
            /// <remarks>
            /// Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
            ///
            /// <list type="bullet">
            /// <description><strong>ONLY_CONFIGURATION_FEE</strong>: charges only configuration fees.</description>
            /// <description><strong>CONFIGURATION_FEE_AND_DATA_FEE</strong>: charges configuration fees and data traffic fees.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "feeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FeeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jobId: The ID of the task.</summary>
            /// <remarks>
            /// <strong>Note</strong>: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxDu: The upper limit of DU.</summary>
            /// <remarks>
            ///     Only Serverless instances are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minDu: The lower limit of DU.</summary>
            /// <remarks>
            ///     Only Serverless instances are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values: <strong>Year</strong> and <strong>Month</strong>.
            /// <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceEndpointEngineName: The database engine of the source instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</description>
            /// <description><strong>PolarDB</strong>: PolarDB for MySQL cluster</description>
            /// <description><strong>polardb_o</strong>: PolarDB for Oracle cluster</description>
            /// <description><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</description>
            /// <description><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</description>
            /// <description><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</description>
            /// <description><strong>PostgreSQL</strong>: self-managed PostgreSQL database</description>
            /// <description><strong>odps</strong>: MaxCompute project</description>
            /// <description><strong>oracle</strong>: self-managed Oracle database</description>
            /// <description><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</description>
            /// <description><strong>tidb</strong>: TiDB database</description>
            /// <description><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</description>
            /// <description><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</description>
            /// <description><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</description>
            /// <description><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</description>
            /// <description><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</description>
            /// <description><strong>DataHub</strong>: DataHub project</description>
            /// <description><strong>DB2</strong>: self-managed Db2 for LUW database</description>
            /// <description><strong>as400</strong>: AS/400</description>
            /// <description><strong>Tablestore</strong>: Tablestore instance
            /// <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceEndpointEngineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceRegion: The ID of the region in which the source instance resides.</summary>
            /// <remarks>
            /// <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property syncArchitecture: The synchronization topology.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>oneway</strong>: one-way synchronization. This is the default value.</description>
            /// <description><strong>bidirectional</strong>: two-way synchronization.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "syncArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SyncArchitecture
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property usedTime: The subscription duration.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Valid values if the <strong>Period</strong> parameter is set to <strong>Month</strong>: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</description>
            /// <description>Valid values if the <strong>Period</strong> parameter is set to <strong>Year</strong>: 1, 2, 3, and 5.
            /// <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>. You can set the <strong>Period</strong> parameter to specify the unit of the subscription duration.</description>
            /// </list>
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
