using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `DomainConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainConfigProps")]
    public interface IDomainConfigProps
    {
        /// <summary>Property domainNames: The domain names to configure for acceleration.</summary>
        /// <remarks>
        /// Separate multiple domain names
        /// with a comma (,). Note the following limits:
        ///
        /// <list type="bullet">
        /// <description>You can specify up to 20 domain names.</description>
        /// <description>The number of domain names multiplied by the number of features cannot exceed</description>
        /// </list>
        ///
        /// <list type="number">
        /// <description></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainNames
        {
            get;
        }

        /// <summary>Property functionList: Function list.</summary>
        /// <remarks>
        /// This property is required.
        /// </remarks>
        [JsiiProperty(name: "functionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FunctionList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DomainConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IDomainConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainNames: The domain names to configure for acceleration.</summary>
            /// <remarks>
            /// Separate multiple domain names
            /// with a comma (,). Note the following limits:
            ///
            /// <list type="bullet">
            /// <description>You can specify up to 20 domain names.</description>
            /// <description>The number of domain names multiplied by the number of features cannot exceed</description>
            /// </list>
            ///
            /// <list type="number">
            /// <description></description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property functionList: Function list.</summary>
            /// <remarks>
            /// This property is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FunctionList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
