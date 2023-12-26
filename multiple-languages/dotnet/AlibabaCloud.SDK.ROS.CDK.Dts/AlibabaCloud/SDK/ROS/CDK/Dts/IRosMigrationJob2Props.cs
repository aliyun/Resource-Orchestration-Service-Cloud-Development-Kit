using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosMigrationJob2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMigrationJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob2Props")]
    public interface IRosMigrationJob2Props
    {
        /// <remarks>
        /// <strong>Property</strong>: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataInitialization
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSynchronization
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbList: The objects that you want to migrate or synchronize.
        /// </remarks>
        [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object DbList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Destination instance configuration.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.DestinationEndpointProperty\"}]}}")]
        object DestinationEndpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobName: The name of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DtsJobName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Source instance configuration.
        /// </remarks>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.SourceEndpointProperty\"}]}}")]
        object SourceEndpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StructureInitialization
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        /// </remarks>
        [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Checkpoint
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        /// </remarks>
        [JsiiProperty(name: "dataCheckConfigure", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.DataCheckConfigureProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCheckConfigure
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        /// </remarks>
        [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        /// </remarks>
        [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayNotice
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        /// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        /// </remarks>
        [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayPhone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        /// </remarks>
        [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayRuleTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        /// </remarks>
        [JsiiProperty(name: "disasterRecoveryJob", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisasterRecoveryJob
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        /// </remarks>
        [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsBisLabel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsInstanceId: The ID of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobId: The ID of the DTS task.
        /// </remarks>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsJobId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        /// </remarks>
        [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorNotice
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        /// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        /// </remarks>
        [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorPhone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        /// </remarks>
        [JsiiProperty(name: "fileOssUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileOssUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Reserve
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the resource. Valid values:
        /// - **Migrating**: Start the task.
        /// - **Suspending**: Suspend the task.
        /// - **Stopping**: Stop the task.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMigrationJob2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMigrationJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosMigrationJob2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataInitialization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSynchronization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbList: The objects that you want to migrate or synchronize.
            /// </remarks>
            [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object DbList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpoint: Destination instance configuration.
            /// </remarks>
            [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.DestinationEndpointProperty\"}]}}")]
            public object DestinationEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobName: The name of the DTS instance.
            /// </remarks>
            [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DtsJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEndpoint: Source instance configuration.
            /// </remarks>
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.SourceEndpointProperty\"}]}}")]
            public object SourceEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StructureInitialization
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Checkpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCheckConfigure", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob2.DataCheckConfigureProperty\"}]}}", isOptional: true)]
            public object? DataCheckConfigure
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
            /// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayRuleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disasterRecoveryJob", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisasterRecoveryJob
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsBisLabel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsInstanceId: The ID of the DTS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobId: The ID of the DTS task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsJobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
            /// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileOssUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileOssUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Reserve
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of the resource. Valid values:
            /// - **Migrating**: Start the task.
            /// - **Suspending**: Suspend the task.
            /// - **Stopping**: Stop the task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
