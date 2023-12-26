using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosIpv4Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv4GatewayProps")]
    public interface IRosIpv4GatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC associated with the IPv4 Gateway.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv4GatewayDescription: Description information.
        /// </remarks>
        [JsiiProperty(name: "ipv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv4GatewayName: Resource name.
        /// </remarks>
        [JsiiProperty(name: "ipv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosIpv4Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpv4GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosIpv4GatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC associated with the IPv4 Gateway.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv4GatewayDescription: Description information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv4GatewayName: Resource name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
