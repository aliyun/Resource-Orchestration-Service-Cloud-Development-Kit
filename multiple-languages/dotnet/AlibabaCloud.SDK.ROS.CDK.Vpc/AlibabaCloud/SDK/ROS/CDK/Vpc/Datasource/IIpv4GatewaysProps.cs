using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `Ipv4Gateways`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpv4GatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps")]
    public interface IIpv4GatewaysProps
    {
        /// <summary>Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
        [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv4GatewayId
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

        /// <summary>Property vpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Ipv4Gateways`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpv4GatewaysProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewaysProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv4GatewayId
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

            /// <summary>Property vpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
