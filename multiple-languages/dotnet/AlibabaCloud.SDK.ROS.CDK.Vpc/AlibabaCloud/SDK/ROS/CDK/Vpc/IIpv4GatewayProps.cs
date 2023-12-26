using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `Ipv4Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv4GatewayProps")]
    public interface IIpv4GatewayProps
    {
        /// <summary>Property vpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property ipv4GatewayDescription: Description information.</summary>
        [JsiiProperty(name: "ipv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv4GatewayName: Resource name.</summary>
        [JsiiProperty(name: "ipv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Ipv4Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpv4GatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.Ipv4GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv4GatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipv4GatewayDescription: Description information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv4GatewayName: Resource name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
