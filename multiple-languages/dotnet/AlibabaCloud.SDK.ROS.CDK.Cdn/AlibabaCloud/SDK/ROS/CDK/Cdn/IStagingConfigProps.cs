using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `StagingConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStagingConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.StagingConfigProps")]
    public interface IStagingConfigProps
    {
        /// <summary>Property domainName: The domain name of the CDN.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property functions: The functions of the staging config.</summary>
        [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object Functions
        {
            get;
        }

        /// <summary>Properties for defining a `StagingConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStagingConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.StagingConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IStagingConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The domain name of the CDN.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property functions: The functions of the staging config.</summary>
            [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object Functions
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
