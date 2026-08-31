using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `SparkWorkspace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISparkWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.SparkWorkspaceProps")]
    public interface ISparkWorkspaceProps
    {
        /// <summary>Property ossBucket: The OSS bucket path of the workspace.</summary>
        /// <remarks>
        /// The path must start with oss://<bucket-name xmlns="http://www.w3.org/1999/xhtml"></bucket-name>/.
        /// </remarks>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OssBucket
        {
            get;
        }

        /// <summary>Property paymentType: The billing method of the workspace.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property ramRoleName: The RAM role used to run Spark jobs.</summary>
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RamRoleName
        {
            get;
        }

        /// <summary>Property resourceSpec: The resource specifications of the workspace.</summary>
        [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.ResourceSpecProperty\"}]}}")]
        object ResourceSpec
        {
            get;
        }

        /// <summary>Property workspaceName: The workspace name.</summary>
        /// <remarks>
        /// The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceName
        {
            get;
        }

        /// <summary>Property autoRenew: Whether to enable automatic renewal for a subscription.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: The automatic renewal duration.</summary>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriodUnit: The unit of the automatic renewal duration.</summary>
        [JsiiProperty(name: "autoRenewPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoStartSessionCluster: Whether to automatically start a session cluster.</summary>
        [JsiiProperty(name: "autoStartSessionCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStartSessionCluster
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dlfCatalogId: The ID of the DLF catalog.</summary>
        [JsiiProperty(name: "dlfCatalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DlfCatalogId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dlfType: The DLF type bound to the workspace.</summary>
        [JsiiProperty(name: "dlfType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DlfType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: The subscription duration.</summary>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuSpec: The GPU instance types of the workspace.</summary>
        [JsiiProperty(name: "gpuSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuSubscription: The GPU subscription configuration.</summary>
        /// <remarks>
        /// This configuration is applied after the workspace is created.
        /// </remarks>
        [JsiiProperty(name: "gpuSubscription", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.GpuSubscriptionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuSubscription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipWhiteList: The IP whitelist of the workspace.</summary>
        /// <remarks>
        /// This configuration is applied after the workspace is created.
        /// </remarks>
        [JsiiProperty(name: "ipWhiteList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpWhiteList
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

        /// <summary>Property releaseType: The release type of the workspace.</summary>
        [JsiiProperty(name: "releaseType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseType
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

        /// <summary>Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace.</summary>
        /// <remarks>
        /// This configuration is applied after the workspace is created.
        /// </remarks>
        [JsiiProperty(name: "subscription", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.SubscriptionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Subscription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to workspace.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Emr.RosSparkWorkspace.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SparkWorkspace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISparkWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.SparkWorkspaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.ISparkWorkspaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ossBucket: The OSS bucket path of the workspace.</summary>
            /// <remarks>
            /// The path must start with oss://<bucket-name xmlns="http://www.w3.org/1999/xhtml"></bucket-name>/.
            /// </remarks>
            [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OssBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property paymentType: The billing method of the workspace.</summary>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ramRoleName: The RAM role used to run Spark jobs.</summary>
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RamRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceSpec: The resource specifications of the workspace.</summary>
            [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.ResourceSpecProperty\"}]}}")]
            public object ResourceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceName: The workspace name.</summary>
            /// <remarks>
            /// The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: Whether to enable automatic renewal for a subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: The automatic renewal duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriodUnit: The unit of the automatic renewal duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoStartSessionCluster: Whether to automatically start a session cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoStartSessionCluster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoStartSessionCluster
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dlfCatalogId: The ID of the DLF catalog.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dlfCatalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DlfCatalogId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dlfType: The DLF type bound to the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dlfType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DlfType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: The subscription duration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuSpec: The GPU instance types of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gpuSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? GpuSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuSubscription: The GPU subscription configuration.</summary>
            /// <remarks>
            /// This configuration is applied after the workspace is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuSubscription", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.GpuSubscriptionProperty\"}]}}", isOptional: true)]
            public object? GpuSubscription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipWhiteList: The IP whitelist of the workspace.</summary>
            /// <remarks>
            /// This configuration is applied after the workspace is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipWhiteList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IpWhiteList
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

            /// <summary>Property releaseType: The release type of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "releaseType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseType
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

            /// <summary>Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace.</summary>
            /// <remarks>
            /// This configuration is applied after the workspace is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subscription", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.SubscriptionProperty\"}]}}", isOptional: true)]
            public object? Subscription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to workspace.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosSparkWorkspace.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Emr.RosSparkWorkspace.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.RosSparkWorkspace.ITagsProperty[]?>();
            }
        }
    }
}
