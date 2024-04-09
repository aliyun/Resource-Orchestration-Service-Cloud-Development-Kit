using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `VSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.VSwitchProps")]
    public interface IVSwitchProps
    {
        /// <summary>Property cidrBlock: The CIDR block of the vSwitch.</summary>
        /// <remarks>
        /// Take note of the following limits:
        /// The subnet mask must be 16 to 29 bits in length.
        /// The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
        /// The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
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

        /// <summary>Property networkId: The ID of the network to which the vSwitch that you want to create belongs.</summary>
        [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkId
        {
            get;
        }

        /// <summary>Property description: The description of the vSwitch.</summary>
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

        /// <summary>Property vSwitchName: The name of the vSwitch.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        /// The name must be 2 to 128 characters in length.
        /// The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
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

        /// <summary>Properties for defining a `VSwitch`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.VSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IVSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cidrBlock: The CIDR block of the vSwitch.</summary>
            /// <remarks>
            /// Take note of the following limits:
            /// The subnet mask must be 16 to 29 bits in length.
            /// The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
            /// The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
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

            /// <summary>Property networkId: The ID of the network to which the vSwitch that you want to create belongs.</summary>
            [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the vSwitch.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchName: The name of the vSwitch.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            /// The name must be 2 to 128 characters in length.
            /// The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
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
