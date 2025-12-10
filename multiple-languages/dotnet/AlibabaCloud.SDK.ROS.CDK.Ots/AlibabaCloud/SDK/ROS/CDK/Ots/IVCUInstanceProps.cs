using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `VCUInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVCUInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.VCUInstanceProps")]
    public interface IVCUInstanceProps
    {
        /// <summary>Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <summary>Property periodInMonth: Purchase duration.</summary>
        /// <remarks>
        /// Unit: month. Value range: 1~24.
        /// </remarks>
        [JsiiProperty(name: "periodInMonth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodInMonth
        {
            get;
        }

        /// <summary>Property vcu: Number of VCU units.</summary>
        /// <remarks>
        /// Value range: 0~2000.
        /// </remarks>
        [JsiiProperty(name: "vcu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Vcu
        {
            get;
        }

        /// <summary>Property aliasName: Instance alias name.</summary>
        [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AliasName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriodInMonth: Automatic renewal cycle.</summary>
        /// <remarks>
        /// When automatic renewal is enabled, it is required. Value range: 1~24.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriodInMonth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriodInMonth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAutoRenew: Whether to enable automatic renewal.</summary>
        [JsiiProperty(name: "enableAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableElasticVcu: Whether to enable instance elasticity.</summary>
        /// <remarks>
        /// If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
        /// </remarks>
        [JsiiProperty(name: "enableElasticVcu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableElasticVcu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceDescription: Instance description.</summary>
        [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource Group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of instance tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags for instance.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosVCUInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ots.RosVCUInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VCUInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVCUInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.VCUInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.IVCUInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.</summary>
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property periodInMonth: Purchase duration.</summary>
            /// <remarks>
            /// Unit: month. Value range: 1~24.
            /// </remarks>
            [JsiiProperty(name: "periodInMonth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodInMonth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vcu: Number of VCU units.</summary>
            /// <remarks>
            /// Value range: 0~2000.
            /// </remarks>
            [JsiiProperty(name: "vcu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Vcu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aliasName: Instance alias name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AliasName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriodInMonth: Automatic renewal cycle.</summary>
            /// <remarks>
            /// When automatic renewal is enabled, it is required. Value range: 1~24.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriodInMonth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriodInMonth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAutoRenew: Whether to enable automatic renewal.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableElasticVcu: Whether to enable instance elasticity.</summary>
            /// <remarks>
            /// If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableElasticVcu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableElasticVcu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceDescription: Instance description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource Group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of instance tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags for instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosVCUInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ots.RosVCUInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ots.RosVCUInstance.ITagsProperty[]?>();
            }
        }
    }
}
