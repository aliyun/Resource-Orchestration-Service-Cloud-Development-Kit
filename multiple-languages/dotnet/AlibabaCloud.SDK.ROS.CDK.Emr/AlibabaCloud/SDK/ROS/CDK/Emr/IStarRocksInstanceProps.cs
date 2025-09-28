using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `StarRocksInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStarRocksInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.StarRocksInstanceProps")]
    public interface IStarRocksInstanceProps
    {
        /// <summary>Property adminPassword: Password of admin user.</summary>
        [JsiiProperty(name: "adminPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdminPassword
        {
            get;
        }

        /// <summary>Property clusterZoneId: Primary ZoneId of StarRocks instance.</summary>
        [JsiiProperty(name: "clusterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterZoneId
        {
            get;
        }

        /// <summary>Property instanceName: The name of the StarRocks instance.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.</summary>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageType
        {
            get;
        }

        /// <summary>Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>**shared_data: Storage and calculation separation.</description>
        /// <description>**lakehouse: Data lake analysis.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "runMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RunMode
        {
            get;
        }

        /// <summary>Property version: The version of the StarRocks instance.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Version
        {
            get;
        }

        /// <summary>Property vpcId: The VPC ID of the StarRocks instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property autoRenew: Whether to enable automatic renewal.</summary>
        /// <remarks>
        /// This is only meaningful when payType is set to PrePaid. Disabled by default.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backendNodeGroups: List of BE or CN compute group information.</summary>
        [JsiiProperty(name: "backendNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.BackendNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendNodeGroups
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: Duration of purchase.</summary>
        /// <remarks>
        /// It is only meaningful when PayType is set to PrePaid.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Whether encrypted.</summary>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property frontendNodeGroups: List of FE Node Group Information.</summary>
        [JsiiProperty(name: "frontendNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.FrontendNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FrontendNodeGroups
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property observerNodeGroups: list of Observer calculates group information.</summary>
        [JsiiProperty(name: "observerNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.ObserverNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ObserverNodeGroups
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orderId: Order ID.</summary>
        [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossAccessingRoleName: Role name used for password-free access to OSS.</summary>
        [JsiiProperty(name: "ossAccessingRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssAccessingRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property promotionOptionNo: Promotion ID.</summary>
        [JsiiProperty(name: "promotionOptionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionOptionNo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceType: Resource type.</summary>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of StarRocks.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Emr.RosStarRocksInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vswitches: The VSwitches info of the StarRocks instance.</summary>
        [JsiiProperty(name: "vswitches", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.VswitchesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Vswitches
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `StarRocksInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStarRocksInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.StarRocksInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IStarRocksInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property adminPassword: Password of admin user.</summary>
            [JsiiProperty(name: "adminPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdminPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterZoneId: Primary ZoneId of StarRocks instance.</summary>
            [JsiiProperty(name: "clusterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The name of the StarRocks instance.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.</summary>
            [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.</summary>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>**shared_data: Storage and calculation separation.</description>
            /// <description>**lakehouse: Data lake analysis.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "runMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RunMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property version: The version of the StarRocks instance.</summary>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Version
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The VPC ID of the StarRocks instance.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: Whether to enable automatic renewal.</summary>
            /// <remarks>
            /// This is only meaningful when payType is set to PrePaid. Disabled by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backendNodeGroups: List of BE or CN compute group information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.BackendNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendNodeGroups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: Duration of purchase.</summary>
            /// <remarks>
            /// It is only meaningful when PayType is set to PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Whether encrypted.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property frontendNodeGroups: List of FE Node Group Information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "frontendNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.FrontendNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FrontendNodeGroups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property observerNodeGroups: list of Observer calculates group information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "observerNodeGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.ObserverNodeGroupsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ObserverNodeGroups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property orderId: Order ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossAccessingRoleName: Role name used for password-free access to OSS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessingRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssAccessingRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property promotionOptionNo: Promotion ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "promotionOptionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionOptionNo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceType: Resource type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of StarRocks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Emr.RosStarRocksInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.RosStarRocksInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vswitches: The VSwitches info of the StarRocks instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vswitches", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosStarRocksInstance.VswitchesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Vswitches
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
