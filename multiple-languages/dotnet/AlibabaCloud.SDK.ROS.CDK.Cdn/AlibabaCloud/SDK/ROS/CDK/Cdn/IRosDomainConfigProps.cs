using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
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
        /// <strong>Property</strong>: functions: function list, please refer to the CDN documentation for details.
        /// </remarks>
        [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Functions
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
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
            /// <strong>Property</strong>: functions: function list, please refer to the CDN documentation for details.
            /// </remarks>
            [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Functions
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
