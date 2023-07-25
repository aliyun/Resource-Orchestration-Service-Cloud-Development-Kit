using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CDN::Domains`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.datasource.DomainsProps")]
    public interface IDomainsProps
    {
        /// <summary>Property domainName: The accelerated domain name.</summary>
        /// <remarks>
        /// You can specify only one domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::CDN::Domains`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.datasource.DomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource.IDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The accelerated domain name.</summary>
            /// <remarks>
            /// You can specify only one domain name.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
