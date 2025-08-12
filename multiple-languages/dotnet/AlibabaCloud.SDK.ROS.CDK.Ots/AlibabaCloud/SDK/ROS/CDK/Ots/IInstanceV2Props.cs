using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `InstanceV2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-ots.InstanceV2Props")]
    public interface IInstanceV2Props
    {
        /// <summary>Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <summary>Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property instanceDescription: Example description.</summary>
        /// <remarks>
        /// The length is limited to between 3-256 characters.
        /// </remarks>
        [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkSourceAcl: The allowed-network source list.</summary>
        /// <remarks>
        /// All networks are allowed by default.
        /// </remarks>
        [JsiiProperty(name: "networkSourceAcl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkSourceAcl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkTypeAcl: The instance allows the network type list, which is allowed by default.</summary>
        [JsiiProperty(name: "networkTypeAcl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkTypeAcl
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosInstanceV2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ots.RosInstanceV2.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `InstanceV2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-ots.InstanceV2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.IInstanceV2Props
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

            /// <summary>Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceDescription: Example description.</summary>
            /// <remarks>
            /// The length is limited to between 3-256 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkSourceAcl: The allowed-network source list.</summary>
            /// <remarks>
            /// All networks are allowed by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkSourceAcl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NetworkSourceAcl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkTypeAcl: The instance allows the network type list, which is allowed by default.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "networkTypeAcl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NetworkTypeAcl
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
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ots.RosInstanceV2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ots.RosInstanceV2.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ots.RosInstanceV2.ITagsProperty[]?>();
            }
        }
    }
}
