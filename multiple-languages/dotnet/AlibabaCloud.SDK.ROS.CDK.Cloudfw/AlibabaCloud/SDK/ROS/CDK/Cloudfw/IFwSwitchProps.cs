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

        /// <summary>Property ipVersion: The IP version number.</summary>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memberUid: The member unique identifier.</summary>
        [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemberUid
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

        /// <summary>Property resourceTypeList: The list of asset types.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>BastionHostEgressIP: the egress IP address of a bastion host.</description>
        /// <description>BastionHostIngressIP: the ingress IP address of a bastion host.</description>
        /// <description>EcsEIP: the EIP of an ECS instance.</description>
        /// <description>EcsPublicIP: the public IP address of an ECS instance.</description>
        /// <description>EIP: an EIP.</description>
        /// <description>EniEIP: the EIP of an ENI.</description>
        /// <description>NatEIP: the EIP of a NAT gateway.</description>
        /// <description>SlbEIP: the EIP of an SLB instance or a CLB instance.</description>
        /// <description>SlbPublicIP: the public IP address of an SLB instance or a CLB instance.</description>
        /// <description>NatPublicIP: the public IP address of a NAT gateway.</description>
        /// <description>HAVIP: an HAVIP.</description>
        /// <description>NlbEIP: the EIP of an NLB instance.</description>
        /// <description>ApiGatewayEIP: the public IP address of an API gateway.</description>
        /// <description>AlbEIP: the EIP of an ALB instance.</description>
        /// <description>AiGatewayEIP: the public IP address of an AI gateway.</description>
        /// <description>GaEIP: the EIP of a GA instance.</description>
        /// <description>SwasEIP: the public IP address of a Simple Application Server instance.</description>
        /// <description>EcdEIP: the public IP address of an Elastic Desktop Service instance.</description>
        /// <description>BastionHostIP: the IP address of a bastion host.</description>
        /// </list>
        ///
        ///     You must specify at least one of the <c>IpaddrList</c>, <c>RegionList</c>, and
        ///     <c>ResourceTypeList</c> parameters.
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

            /// <summary>Property ipVersion: The IP version number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memberUid: The member unique identifier.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemberUid
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

            /// <summary>Property resourceTypeList: The list of asset types.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>BastionHostEgressIP: the egress IP address of a bastion host.</description>
            /// <description>BastionHostIngressIP: the ingress IP address of a bastion host.</description>
            /// <description>EcsEIP: the EIP of an ECS instance.</description>
            /// <description>EcsPublicIP: the public IP address of an ECS instance.</description>
            /// <description>EIP: an EIP.</description>
            /// <description>EniEIP: the EIP of an ENI.</description>
            /// <description>NatEIP: the EIP of a NAT gateway.</description>
            /// <description>SlbEIP: the EIP of an SLB instance or a CLB instance.</description>
            /// <description>SlbPublicIP: the public IP address of an SLB instance or a CLB instance.</description>
            /// <description>NatPublicIP: the public IP address of a NAT gateway.</description>
            /// <description>HAVIP: an HAVIP.</description>
            /// <description>NlbEIP: the EIP of an NLB instance.</description>
            /// <description>ApiGatewayEIP: the public IP address of an API gateway.</description>
            /// <description>AlbEIP: the EIP of an ALB instance.</description>
            /// <description>AiGatewayEIP: the public IP address of an AI gateway.</description>
            /// <description>GaEIP: the EIP of a GA instance.</description>
            /// <description>SwasEIP: the public IP address of a Simple Application Server instance.</description>
            /// <description>EcdEIP: the public IP address of an Elastic Desktop Service instance.</description>
            /// <description>BastionHostIP: the IP address of a bastion host.</description>
            /// </list>
            ///
            ///     You must specify at least one of the <c>IpaddrList</c>, <c>RegionList</c>, and
            ///     <c>ResourceTypeList</c> parameters.
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
