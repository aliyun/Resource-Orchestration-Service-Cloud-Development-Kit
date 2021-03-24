using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps")]
    public class AssignPrivateIpAddressesProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignPrivateIpAddressesProps
    {
        /// <summary>Property networkInterfaceId: The ID of the ENI.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.</summary>
        /// <remarks>
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

        /// <summary>Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? SecondaryPrivateIpAddressCount
        {
            get;
            set;
        }
    }
}
