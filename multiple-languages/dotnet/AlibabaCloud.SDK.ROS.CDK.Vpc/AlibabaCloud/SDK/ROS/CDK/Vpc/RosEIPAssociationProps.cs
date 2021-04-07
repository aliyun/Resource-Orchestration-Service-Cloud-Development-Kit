using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::EIPAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosEIPAssociationProps")]
    public class RosEIPAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosEIPAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: allocationId: EIP instance id to bind.
        /// </remarks>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AllocationId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: The mode of association. Valid values:
        /// NAT(Default): NAT mode.
        /// BINDED: Cut-through mode.
        /// MULTI_BINDED: Multi-EIP to ENI mode.
        /// This is required only when the value of InstanceType is NetworkInterface.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Mode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: An IP address in the CIDR block of the VSwitch.
        /// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PrivateIpAddress
        {
            get;
            set;
        }
    }
}
