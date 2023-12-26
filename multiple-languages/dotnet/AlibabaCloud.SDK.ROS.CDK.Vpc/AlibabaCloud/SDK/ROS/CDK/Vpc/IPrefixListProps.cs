using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `PrefixList`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PrefixListProps")]
    public interface IPrefixListProps
    {
        /// <summary>Property entries: The CIDR address block list of the prefix list.</summary>
        [JsiiProperty(name: "entries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPrefixList.EntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Entries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipVersion: The IP version of the prefix list.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><strong>IPvv4</strong>:IPv4 version.</description>
        /// <description><strong>IPv6</strong>:IPv6.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.</summary>
        [JsiiProperty(name: "maxEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxEntries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prefixListDescription: The description of the prefix list.</summary>
        /// <remarks>
        /// It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
        /// </remarks>
        [JsiiProperty(name: "prefixListDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrefixListDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prefixListName: The name of the prefix list.</summary>
        [JsiiProperty(name: "prefixListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrefixListName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the VPC belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of prefix list.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPrefixList.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosPrefixList.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PrefixList`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PrefixListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IPrefixListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property entries: The CIDR address block list of the prefix list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "entries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPrefixList.EntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Entries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipVersion: The IP version of the prefix list.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><strong>IPvv4</strong>:IPv4 version.</description>
            /// <description><strong>IPv6</strong>:IPv6.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prefixListDescription: The description of the prefix list.</summary>
            /// <remarks>
            /// It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prefixListDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrefixListDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prefixListName: The name of the prefix list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "prefixListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrefixListName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the VPC belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of prefix list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPrefixList.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosPrefixList.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosPrefixList.ITagsProperty[]?>();
            }
        }
    }
}
