using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns.Datasource
{
    /// <summary>Properties for defining a `Domains`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainsProps")]
    public interface IDomainsProps
    {
        /// <summary>Property groupId: The ID of the domain name group.</summary>
        /// <remarks>
        /// If you do not specify this parameter, all domain names are queried by default.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
        /// <remarks>
        /// The value is not case-sensitive.
        /// </remarks>
        [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lang: The language type.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
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

        /// <summary>Property searchMode: The search mode.</summary>
        [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property starmark: Specifies whether to query the starmark of the domain name.</summary>
        [JsiiProperty(name: "starmark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Starmark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Domains`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: The ID of the domain name group.</summary>
            /// <remarks>
            /// If you do not specify this parameter, all domain names are queried by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
            /// <remarks>
            /// The value is not case-sensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lang: The language type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
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

            /// <summary>Property searchMode: The search mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "searchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property starmark: Specifies whether to query the starmark of the domain name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "starmark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Starmark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
