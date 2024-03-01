using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosIpv4Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps")]
    public interface IRosIpv4GatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        /// </remarks>
        [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Ipv4GatewayId
        {
            get;
        }

        /// <summary>Properties for defining a `RosIpv4Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosIpv4GatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
            /// </remarks>
            [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Ipv4GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
