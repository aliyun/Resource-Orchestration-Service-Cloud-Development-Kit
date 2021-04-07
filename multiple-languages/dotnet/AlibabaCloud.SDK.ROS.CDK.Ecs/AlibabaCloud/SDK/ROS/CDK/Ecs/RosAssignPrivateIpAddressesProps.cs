using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAssignPrivateIpAddressesProps")]
    public class RosAssignPrivateIpAddressesProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAssignPrivateIpAddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: The ID of the ENI.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
        /// Valid values of number of private ip addresses:
        /// When the ENI is in the Available state: 1 to 10.
        /// When the ENI is in the InUse state: limited by the instance type.
        /// For more information, see Instance type families.
        /// You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PrivateIpAddresses
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecondaryPrivateIpAddressCount
        {
            get;
            set;
        }
    }
}
