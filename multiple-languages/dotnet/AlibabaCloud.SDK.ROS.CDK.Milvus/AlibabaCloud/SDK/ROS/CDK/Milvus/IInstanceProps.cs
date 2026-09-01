using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Milvus
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-milvus.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property components: The component specifications of the instance.</summary>
        [JsiiProperty(name: "components", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.ComponentsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Components
        {
            get;
        }

        /// <summary>Property dbAdminPassword: The database administrator password.</summary>
        /// <remarks>
        /// The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
        /// </remarks>
        [JsiiProperty(name: "dbAdminPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbAdminPassword
        {
            get;
        }

        /// <summary>Property dbVersion: The database engine version.</summary>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbVersion
        {
            get;
        }

        /// <summary>Property instanceName: The name of the instance.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property paymentType: The billing method of the instance.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property vpcId: The VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchIds: The vSwitch configurations.</summary>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.VSwitchIdsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object VSwitchIds
        {
            get;
        }

        /// <summary>Property zoneId: The primary zone ID of the instance.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property aiFunction: Whether the AI function is enabled.</summary>
        [JsiiProperty(name: "aiFunction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AiFunction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoBackup: Whether automatic backup is enabled.</summary>
        [JsiiProperty(name: "autoBackup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoBackup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Whether the order is automatically paid.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether the subscription is automatically renewed.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupRestoreInfo: The backup restore information.</summary>
        [JsiiProperty(name: "backupRestoreInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.BackupRestoreInfoProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupRestoreInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property configuration: The instance configuration in YAML format.</summary>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Configuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Whether OSS encryption is enabled.</summary>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ha: Whether high availability is enabled.</summary>
        [JsiiProperty(name: "ha", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ha
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isMultiAzStorage: Whether multi-zone storage is enabled.</summary>
        [JsiiProperty(name: "isMultiAzStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsMultiAzStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the KMS key used for encryption.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadReplicas: The number of load replicas.</summary>
        [JsiiProperty(name: "loadReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadReplicas
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiZoneMode: The multi-zone deployment mode.</summary>
        [JsiiProperty(name: "multiZoneMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiZoneMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentDuration: The subscription duration.</summary>
        [JsiiProperty(name: "paymentDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentDurationUnit: The unit of the subscription duration.</summary>
        [JsiiProperty(name: "paymentDurationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentDurationUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property promotionNo: The promotion number.</summary>
        [JsiiProperty(name: "promotionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionNo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to Milvus instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Milvus.RosInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-milvus.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Milvus.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property components: The component specifications of the instance.</summary>
            [JsiiProperty(name: "components", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.ComponentsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Components
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbAdminPassword: The database administrator password.</summary>
            /// <remarks>
            /// The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
            /// </remarks>
            [JsiiProperty(name: "dbAdminPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbAdminPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbVersion: The database engine version.</summary>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The name of the instance.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property paymentType: The billing method of the instance.</summary>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The VPC ID.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchIds: The vSwitch configurations.</summary>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.VSwitchIdsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object VSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The primary zone ID of the instance.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aiFunction: Whether the AI function is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aiFunction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AiFunction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoBackup: Whether automatic backup is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoBackup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoBackup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: Whether the order is automatically paid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether the subscription is automatically renewed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupRestoreInfo: The backup restore information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupRestoreInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.BackupRestoreInfoProperty\"}]}}", isOptional: true)]
            public object? BackupRestoreInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property configuration: The instance configuration in YAML format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Configuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Whether OSS encryption is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ha: Whether high availability is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ha", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ha
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isMultiAzStorage: Whether multi-zone storage is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isMultiAzStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsMultiAzStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the KMS key used for encryption.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadReplicas: The number of load replicas.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadReplicas
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiZoneMode: The multi-zone deployment mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "multiZoneMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiZoneMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentDuration: The subscription duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentDurationUnit: The unit of the subscription duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentDurationUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentDurationUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property promotionNo: The promotion number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "promotionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionNo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to Milvus instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-milvus.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Milvus.RosInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Milvus.RosInstance.ITagsProperty[]?>();
            }
        }
    }
}
