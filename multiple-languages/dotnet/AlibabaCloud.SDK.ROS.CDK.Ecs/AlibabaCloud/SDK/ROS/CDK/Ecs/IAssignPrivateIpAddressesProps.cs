using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
    [JsiiInterface(nativeType: typeof(IAssignPrivateIpAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps")]
    public interface IAssignPrivateIpAddressesProps
    {
        /// <summary>Property networkInterfaceId: The ID of the ENI.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.</summary>
        /// <remarks>
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

        /// <summary>Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.</summary>
        [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryPrivateIpAddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssignPrivateIpAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AssignPrivateIpAddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAssignPrivateIpAddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkInterfaceId: The ID of the ENI.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddresses
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryPrivateIpAddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryPrivateIpAddressCount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
