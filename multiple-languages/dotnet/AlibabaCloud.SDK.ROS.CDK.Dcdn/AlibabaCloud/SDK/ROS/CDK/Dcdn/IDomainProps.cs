using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dcdn
{
    /// <summary>Properties for defining a `Domain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dcdn.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property domainName: The DCDN domain name.</summary>
        /// <remarks>
        /// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property sources: The list of origin URLs.</summary>
        [JsiiProperty(name: "sources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.SourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Sources
        {
            get;
        }

        /// <summary>Property checkUrl: The validation of the origin.</summary>
        [JsiiProperty(name: "checkUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// If this is left blank, the system automatically fills in the ID of the default resource group.
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

        /// <summary>Property scope: Valid values: domestic, overseas, and global.</summary>
        /// <remarks>
        /// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.</summary>
        [JsiiProperty(name: "topLevelDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopLevelDomain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Domain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dcdn.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dcdn.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The DCDN domain name.</summary>
            /// <remarks>
            /// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sources: The list of origin URLs.</summary>
            [JsiiProperty(name: "sources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.SourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Sources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property checkUrl: The validation of the origin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "checkUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            /// <remarks>
            /// If this is left blank, the system automatically fills in the ID of the default resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scope: Valid values: domestic, overseas, and global.</summary>
            /// <remarks>
            /// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dcdn.RosDomain.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Dcdn.RosDomain.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dcdn.RosDomain.ITagsProperty[]?>();
            }

            /// <summary>Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "topLevelDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopLevelDomain
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
