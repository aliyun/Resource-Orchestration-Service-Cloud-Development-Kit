using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::EIPAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.EIPAssociationProps")]
    public class EIPAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPAssociationProps
    {
        /// <summary>Property allocationId: EIP instance id to bind.</summary>
        [JsiiProperty(name: "allocationId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AllocationId
        {
            get;
            set;
        }

        /// <summary>Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
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
        [JsiiProperty(name: "mode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Mode
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddress: An IP address in the CIDR block of the VSwitch.</summary>
        /// <remarks>
        /// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }
    }
}
