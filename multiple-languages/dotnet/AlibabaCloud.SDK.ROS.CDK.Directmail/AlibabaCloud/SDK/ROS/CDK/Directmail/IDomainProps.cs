using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail
{
    /// <summary>Properties for defining a `ALIYUN::DirectMail::Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property domainName: The name of the domain.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DirectMail::Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The name of the domain.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
