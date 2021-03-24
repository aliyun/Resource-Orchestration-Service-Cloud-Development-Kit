using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::EIPAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPAssociationProps")]
    public interface IEIPAssociationProps
    {
        /// <summary>Property allocationId: EIP instance id to bind.</summary>
        [JsiiProperty(name: "allocationId", typeJson: "{\"primitive\":\"string\"}")]
        string AllocationId
        {
            get;
        }

        /// <summary>Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
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
        [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Mode
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
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::EIPAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property allocationId: EIP instance id to bind.</summary>
            [JsiiProperty(name: "allocationId", typeJson: "{\"primitive\":\"string\"}")]
            public string AllocationId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Mode
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateIpAddress: An IP address in the CIDR block of the VSwitch.</summary>
            /// <remarks>
            /// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateIpAddress
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
