using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property category: The edition of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Basic: Single-replica Edition
        /// HighAvailability: Double-replica Edition
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Category
        {
            get;
        }

        /// <summary>Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.</summary>
        [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterNetworkType
        {
            get;
        }

        /// <summary>Property dbClusterType: The specification of the cluster.</summary>
        /// <remarks>
        /// If the cluster is of the Single-replica Edition, the following values are valid:
        /// S4: 4 cores, 16 GB.
        /// S8: 8 cores, 32 GB.
        /// S16: 16 cores, 64 GB.
        /// S32: 32 cores, 128 GB.
        /// S64: 64 cores, 256 GB.
        /// S104: 104 cores, 384 GB.
        /// If the cluster is of the Double-replica Edition, the following values are valid:
        /// C4: 4 cores, 16 GB.
        /// C8: 8 cores, 32 GB.
        /// C16: 16 cores, 64 GB.
        /// C32: 32 cores, 128 GB.
        /// C64: 64 cores, 256 GB.
        /// C104: 104 cores, 384 GB.
        /// </remarks>
        [JsiiProperty(name: "dbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterType
        {
            get;
        }

        /// <summary>Property dbClusterVersion: Version, value:  19.15.2.2.</summary>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterVersion
        {
            get;
        }

        /// <summary>Property dbNodeCount: The number of nodes.</summary>
        /// <remarks>
        /// If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
        /// If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
        /// </remarks>
        [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeCount
        {
            get;
        }

        /// <summary>Property dbNodeStorage: The storage capacity of a single node.</summary>
        /// <remarks>
        /// Valid values: 100 to 32000. Unit: GB.
        /// Note self value is a multiple of 100.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeStorage
        {
            get;
        }

        /// <summary>Property dbNodeStorageType: Instance node storage type.</summary>
        /// <remarks>
        /// Valid values:  cloud_essd, cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeStorageType
        {
            get;
        }

        /// <summary>Property paymentType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKey: KMS key ID.</summary>
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.</summary>
        [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The unit of the subscription duration.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usedTime: The subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// When Period is Month, it could be from 1 to 9, 12, 24, 36.
        /// When Period is Year, it could be from 1 to 3.
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

        /// <summary>Property vpcId: VpcId.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: VSwitchId.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: ZoneId.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property category: The edition of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Basic: Single-replica Edition
            /// HighAvailability: Double-replica Edition
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.</summary>
            [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterType: The specification of the cluster.</summary>
            /// <remarks>
            /// If the cluster is of the Single-replica Edition, the following values are valid:
            /// S4: 4 cores, 16 GB.
            /// S8: 8 cores, 32 GB.
            /// S16: 16 cores, 64 GB.
            /// S32: 32 cores, 128 GB.
            /// S64: 64 cores, 256 GB.
            /// S104: 104 cores, 384 GB.
            /// If the cluster is of the Double-replica Edition, the following values are valid:
            /// C4: 4 cores, 16 GB.
            /// C8: 8 cores, 32 GB.
            /// C16: 16 cores, 64 GB.
            /// C32: 32 cores, 128 GB.
            /// C64: 64 cores, 256 GB.
            /// C104: 104 cores, 384 GB.
            /// </remarks>
            [JsiiProperty(name: "dbClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterVersion: Version, value:  19.15.2.2.</summary>
            [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeCount: The number of nodes.</summary>
            /// <remarks>
            /// If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
            /// If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
            /// </remarks>
            [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeStorage: The storage capacity of a single node.</summary>
            /// <remarks>
            /// Valid values: 100 to 32000. Unit: GB.
            /// Note self value is a multiple of 100.
            /// </remarks>
            [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeStorageType: Instance node storage type.</summary>
            /// <remarks>
            /// Valid values:  cloud_essd, cloud_efficiency.
            /// </remarks>
            [JsiiProperty(name: "dbNodeStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property paymentType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKey: KMS key ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The unit of the subscription duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property usedTime: The subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// When Period is Month, it could be from 1 to 9, 12, 24, 36.
            /// When Period is Year, it could be from 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsedTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: VpcId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: VSwitchId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: ZoneId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
