using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::Ipv4Gateways`.</summary>
    [JsiiInterface(nativeType: typeof(IRosIpv4GatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewaysProps")]
    public interface IRosIpv4GatewaysProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        /// </remarks>
        [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayId
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

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC associated with the IPv4 Gateway.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::Ipv4Gateways`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosIpv4GatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewaysProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosIpv4GatewaysProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayId
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

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC associated with the IPv4 Gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
