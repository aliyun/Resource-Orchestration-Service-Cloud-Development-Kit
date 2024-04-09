using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `RosDisk`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosDiskProps")]
    public interface IRosDiskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: category: The category of the disk. Valid values:
        /// cloud_efficiency: ultra disk.
        /// cloud_ssd: all-flash disk.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Category
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ensRegionId: The ID of the edge node.
        /// </remarks>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnsRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: The billing method of the instance. Set the value to PostPaid.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceChargeType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: size: The size of the disk. Unit: GiB.
        /// </remarks>
        [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Size
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskName: The name of the disk.
        /// </remarks>
        [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: encrypted: Specifies whether to encrypt the new system disk. Valid values:
        /// true
        /// false (default): no
        /// </remarks>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
        /// Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
        /// </remarks>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: The ID of the snapshot that you want to use to create the disk.
        /// The following limits apply to the SnapshotId and Size parameters:
        /// If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
        /// If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDisk`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosDiskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IRosDiskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The category of the disk. Valid values:
            /// cloud_efficiency: ultra disk.
            /// cloud_ssd: all-flash disk.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ensRegionId: The ID of the edge node.
            /// </remarks>
            [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnsRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: The billing method of the instance. Set the value to PostPaid.
            /// </remarks>
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of the disk. Unit: GiB.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Size
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskName: The name of the disk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt the new system disk. Valid values:
            /// true
            /// false (default): no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
            /// Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: The ID of the snapshot that you want to use to create the disk.
            /// The following limits apply to the SnapshotId and Size parameters:
            /// If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
            /// If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
