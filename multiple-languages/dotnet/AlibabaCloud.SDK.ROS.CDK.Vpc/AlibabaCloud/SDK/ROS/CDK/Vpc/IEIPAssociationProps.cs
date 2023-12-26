using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `EIPAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPAssociationProps")]
    public interface IEIPAssociationProps
    {
        /// <summary>Property allocationId: EIP instance id to bind.</summary>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AllocationId
        {
            get;
        }

        /// <summary>Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property mode: The mode of association.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property privateIpAddress: An IP address in the CIDR block of the VSwitch.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `EIPAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property allocationId: EIP instance id to bind.</summary>
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AllocationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mode: The mode of association.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property privateIpAddress: An IP address in the CIDR block of the VSwitch.</summary>
            /// <remarks>
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
