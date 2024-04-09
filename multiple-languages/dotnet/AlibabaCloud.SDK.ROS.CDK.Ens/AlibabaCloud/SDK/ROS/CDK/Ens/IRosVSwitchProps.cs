using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `RosVSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosVSwitchProps")]
    public interface IRosVSwitchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
        /// The subnet mask must be 16 to 29 bits in length.
        /// The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
        /// The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
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
        /// <strong>Property</strong>: networkId: The ID of the network to which the vSwitch that you want to create belongs.
        /// </remarks>
        [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the vSwitch.
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
        /// <strong>Property</strong>: vSwitchName: The name of the vSwitch. The name must meet the following requirements:
        /// The name must be 2 to 128 characters in length.
        /// The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// Default value: null.
        /// </remarks>
        [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVSwitch`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosVSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IRosVSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cidrBlock: The CIDR block of the vSwitch. Take note of the following limits:
            /// The subnet mask must be 16 to 29 bits in length.
            /// The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
            /// The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
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
            /// <strong>Property</strong>: networkId: The ID of the network to which the vSwitch that you want to create belongs.
            /// </remarks>
            [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the vSwitch.
            /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchName: The name of the vSwitch. The name must meet the following requirements:
            /// The name must be 2 to 128 characters in length.
            /// The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// Default value: null.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
