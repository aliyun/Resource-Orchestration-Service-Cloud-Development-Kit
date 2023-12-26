using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dcdn
{
    /// <summary>Properties for defining a `RosDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dcdn.RosDomainProps")]
    public interface IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: The DCDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sources: The list of origin URLs.
        /// </remarks>
        [JsiiProperty(name: "sources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.SourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Sources
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: checkUrl: The validation of the origin.
        /// </remarks>
        [JsiiProperty(name: "checkUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        /// </remarks>
        [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Dcdn.RosDomain.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        /// </remarks>
        [JsiiProperty(name: "topLevelDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopLevelDomain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dcdn.RosDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dcdn.IRosDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The DCDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sources: The list of origin URLs.
            /// </remarks>
            [JsiiProperty(name: "sources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.SourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Sources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: checkUrl: The validation of the origin.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Dcdn.RosDomain.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dcdn.RosDomain.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topLevelDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopLevelDomain
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
