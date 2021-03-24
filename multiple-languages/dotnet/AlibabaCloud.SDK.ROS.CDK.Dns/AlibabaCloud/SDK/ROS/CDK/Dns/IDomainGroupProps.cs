using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainGroupProps")]
    public interface IDomainGroupProps
    {
        /// <summary>Property groupName: Domain name group name.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IDomainGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Domain name group name.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
