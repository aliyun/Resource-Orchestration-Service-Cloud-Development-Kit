using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAssignPrivateIpAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignPrivateIpAddressesProps")]
    public interface IRosAssignPrivateIpAddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: The ID of the ENI.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. 
        /// Valid values of number of private ip addresses:
        /// When the ENI is in the Available state: 1 to 10.
        /// When the ENI is in the InUse state: limited by the instance type. 
        /// For more information, see Instance type families.
        /// You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
        /// </remarks>
        [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? SecondaryPrivateIpAddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAssignPrivateIpAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosAssignPrivateIpAddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAssignPrivateIpAddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: The ID of the ENI.
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkInterfaceId
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? SecondaryPrivateIpAddressCount
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
