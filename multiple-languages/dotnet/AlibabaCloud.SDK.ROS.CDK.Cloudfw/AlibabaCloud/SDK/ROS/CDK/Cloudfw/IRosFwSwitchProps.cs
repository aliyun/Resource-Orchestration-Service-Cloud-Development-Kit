using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosFwSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosFwSwitchProps")]
    public interface IRosFwSwitchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipaddrList: The IP address list.
        /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        /// </remarks>
        [JsiiProperty(name: "ipaddrList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpaddrList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionList: The region list.
        /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        /// </remarks>
        [JsiiProperty(name: "regionList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceTypeList: The asset type list. Valid values:
        /// - BastionHostIP: Bastion machine exit IP.
        /// - BastionHostIngressIP: The entrance IP of the fortress machine.
        /// - EcsEIP: ECS EIP.
        /// - EcsPublicIP: ECS public network IP.
        /// - EIP: Elastic Public IP.
        /// - EniEIP: Elastic Network card EIP.
        /// - NatEIP: NAT EIP.
        /// - SlbEIP: SLB EIP.
        /// - SlbPublicIP: SLB public network IP.
        /// - NatPublicIP: NAT public IP
        /// - HAVIP: High Availability Virtual IP.
        /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        /// </remarks>
        [JsiiProperty(name: "resourceTypeList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceTypeList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosFwSwitch`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosFwSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosFwSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipaddrList: The IP address list.
            /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipaddrList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpaddrList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionList: The region list.
            /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceTypeList: The asset type list. Valid values:
            /// - BastionHostIP: Bastion machine exit IP.
            /// - BastionHostIngressIP: The entrance IP of the fortress machine.
            /// - EcsEIP: ECS EIP.
            /// - EcsPublicIP: ECS public network IP.
            /// - EIP: Elastic Public IP.
            /// - EniEIP: Elastic Network card EIP.
            /// - NatEIP: NAT EIP.
            /// - SlbEIP: SLB EIP.
            /// - SlbPublicIP: SLB public network IP.
            /// - NatPublicIP: NAT public IP
            /// - HAVIP: High Availability Virtual IP.
            /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceTypeList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceTypeList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
