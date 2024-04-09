using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `Network`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkProps")]
    public interface INetworkProps
    {
        /// <summary>Property cidrBlock: The CIDR block of the network.</summary>
        /// <remarks>
        /// You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
        /// 10.0.0.0/8 (default)
        /// 172.16.0.0/12
        /// 192.168.0.0/16
        /// </remarks>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CidrBlock
        {
            get;
        }

        /// <summary>Property ensRegionId: The ID of the edge node.</summary>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnsRegionId
        {
            get;
        }

        /// <summary>Property description: The description of the network.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
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

        /// <summary>Property networkName: The name of the network.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        /// The name must be 2 to 128 characters in length.
        /// The name must start with a letter but cannot start with http:// or https://.
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

        /// <summary>Properties for defining a `Network`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.INetworkProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cidrBlock: The CIDR block of the network.</summary>
            /// <remarks>
            /// You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
            /// 10.0.0.0/8 (default)
            /// 172.16.0.0/12
            /// 192.168.0.0/16
            /// </remarks>
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ensRegionId: The ID of the edge node.</summary>
            [JsiiProperty(name: "ensRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnsRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the network.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkName: The name of the network.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            /// The name must be 2 to 128 characters in length.
            /// The name must start with a letter but cannot start with http:// or https://.
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
