using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `FwSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.FwSwitchProps")]
    public interface IFwSwitchProps
    {
        /// <summary>Property ipaddrList: The IP address list.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
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

        /// <summary>Property regionList: The region list.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
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

        /// <summary>Property resourceTypeList: The asset type list.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>BastionHostIP: Bastion machine exit IP.</description>
        /// <description>BastionHostIngressIP: The entrance IP of the fortress machine.</description>
        /// <description>EcsEIP: ECS EIP.</description>
        /// <description>EcsPublicIP: ECS public network IP.</description>
        /// <description>EIP: Elastic Public IP.</description>
        /// <description>EniEIP: Elastic Network card EIP.</description>
        /// <description>NatEIP: NAT EIP.</description>
        /// <description>SlbEIP: SLB EIP.</description>
        /// <description>SlbPublicIP: SLB public network IP.</description>
        /// <description>NatPublicIP: NAT public IP</description>
        /// <description>HAVIP: High Availability Virtual IP.
        /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</description>
        /// </list>
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

        /// <summary>Properties for defining a `FwSwitch`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.FwSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IFwSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipaddrList: The IP address list.</summary>
            /// <remarks>
            /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipaddrList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpaddrList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionList: The region list.</summary>
            /// <remarks>
            /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceTypeList: The asset type list.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>BastionHostIP: Bastion machine exit IP.</description>
            /// <description>BastionHostIngressIP: The entrance IP of the fortress machine.</description>
            /// <description>EcsEIP: ECS EIP.</description>
            /// <description>EcsPublicIP: ECS public network IP.</description>
            /// <description>EIP: Elastic Public IP.</description>
            /// <description>EniEIP: Elastic Network card EIP.</description>
            /// <description>NatEIP: NAT EIP.</description>
            /// <description>SlbEIP: SLB EIP.</description>
            /// <description>SlbPublicIP: SLB public network IP.</description>
            /// <description>NatPublicIP: NAT public IP</description>
            /// <description>HAVIP: High Availability Virtual IP.
            /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</description>
            /// </list>
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
