using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CDN::Domains`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.datasource.RosDomainsProps")]
    public interface IRosDomainsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: The accelerated domain name. You can specify only one domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::CDN::Domains`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.datasource.RosDomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource.IRosDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The accelerated domain name. You can specify only one domain name.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
