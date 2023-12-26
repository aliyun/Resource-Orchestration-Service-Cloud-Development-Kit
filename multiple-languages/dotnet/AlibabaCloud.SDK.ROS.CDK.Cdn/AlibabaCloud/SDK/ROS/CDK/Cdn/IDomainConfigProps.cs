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
        /// <summary>Property domainNames: Your accelerated domain name, separated by commas in English.</summary>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainNames
        {
            get;
        }

        /// <summary>Property functions: function list, please refer to the CDN documentation for details.</summary>
        [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Functions
        {
            get;
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

            /// <summary>Property domainNames: Your accelerated domain name, separated by commas in English.</summary>
            [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property functions: function list, please refer to the CDN documentation for details.</summary>
            [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Functions
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
