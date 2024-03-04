using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `Ipv4Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.Ipv4GatewayProps")]
    public interface IIpv4GatewayProps
    {
        /// <summary>Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
        [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Ipv4GatewayId
        {
            get;
        }

        /// <summary>Properties for defining a `Ipv4Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.Ipv4GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
            [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Ipv4GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
