using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainGroupProps")]
    public interface IRosDomainGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Domain name group name
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Domain name group name
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
