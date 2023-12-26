using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosDomainGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainGroupProps")]
    public interface IRosDomainGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Domain name group name
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `RosDomainGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Domain name group name
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
