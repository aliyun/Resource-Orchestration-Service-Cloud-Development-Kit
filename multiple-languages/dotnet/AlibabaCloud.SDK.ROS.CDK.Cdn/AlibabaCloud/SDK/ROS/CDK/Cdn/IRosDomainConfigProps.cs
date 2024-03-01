using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `RosDomainConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosDomainConfigProps")]
    public interface IRosDomainConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainNames: Your accelerated domain name, separated by commas in English.
        /// </remarks>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainNames
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: functionList: Function list. This property is required.
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

        /// <summary>Properties for defining a `RosDomainConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosDomainConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IRosDomainConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainNames: Your accelerated domain name, separated by commas in English.
            /// </remarks>
            [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: functionList: Function list. This property is required.
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
