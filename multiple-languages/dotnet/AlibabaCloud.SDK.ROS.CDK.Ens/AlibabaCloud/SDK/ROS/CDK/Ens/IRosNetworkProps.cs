using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `RosNetwork`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosNetworkProps")]
    public interface IRosNetworkProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
        /// 10.0.0.0\/8 (default)
        /// 172.16.0.0\/12
        /// 192.168.0.0\/16
        /// </remarks>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CidrBlock
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ensRegionId: The ID of the edge node.
        /// </remarks>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnsRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the network.
        /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: networkName: The name of the network. The name must meet the following requirements:
        /// The name must be 2 to 128 characters in length.
        /// The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
        /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNetwork`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosNetworkProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IRosNetworkProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
            /// 10.0.0.0\/8 (default)
            /// 172.16.0.0\/12
            /// 192.168.0.0\/16
            /// </remarks>
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ensRegionId: The ID of the edge node.
            /// </remarks>
            [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnsRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the network.
            /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkName: The name of the network. The name must meet the following requirements:
            /// The name must be 2 to 128 characters in length.
            /// The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
