using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosEIPAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosEIPAssociationProps")]
    public interface IRosEIPAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: allocationId: EIP instance id to bind.
        /// </remarks>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AllocationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: The mode of association. Valid values:
        /// NAT(Default): NAT mode.
        /// BINDED: Cut-through mode.
        /// MULTI_BINDED: Multi-EIP to ENI mode.
        /// This is required only when the value of InstanceType is NetworkInterface.
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: An IP address in the CIDR block of the VSwitch.
        /// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosEIPAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosEIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: allocationId: EIP instance id to bind.
            /// </remarks>
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AllocationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: mode: The mode of association. Valid values:
            /// NAT(Default): NAT mode.
            /// BINDED: Cut-through mode.
            /// MULTI_BINDED: Multi-EIP to ENI mode.
            /// This is required only when the value of InstanceType is NetworkInterface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateIpAddress: An IP address in the CIDR block of the VSwitch.
            /// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
