using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainConfigProps")]
    public interface IDomainConfigProps
    {
        /// <summary>Property domainNames: Your accelerated domain name, separated by commas in English.</summary>
        [JsiiProperty(name: "domainNames", typeJson: "{\"primitive\":\"string\"}")]
        string DomainNames
        {
            get;
        }

        /// <summary>Property functions: function list, please refer to the CDN documentation for details.</summary>
        [JsiiProperty(name: "functions", typeJson: "{\"primitive\":\"string\"}")]
        string Functions
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IDomainConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainNames: Your accelerated domain name, separated by commas in English.</summary>
            [JsiiProperty(name: "domainNames", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainNames
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property functions: function list, please refer to the CDN documentation for details.</summary>
            [JsiiProperty(name: "functions", typeJson: "{\"primitive\":\"string\"}")]
            public string Functions
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
