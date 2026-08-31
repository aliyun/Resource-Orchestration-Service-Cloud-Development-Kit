using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `FwSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.FwSwitchProps")]
    public class FwSwitchProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IFwSwitchProps
    {
        private object? _ipaddrList;

        /// <summary>Property ipaddrList: The IP address list.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipaddrList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IpaddrList
        {
            get => _ipaddrList;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipaddrList = value;
            }
        }

        private object? _ipVersion;

        /// <summary>Property ipVersion: The IP version number.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IpVersion
        {
            get => _ipVersion;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipVersion = value;
            }
        }

        private object? _memberUid;

        /// <summary>Property memberUid: The member unique identifier.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MemberUid
        {
            get => _memberUid;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _memberUid = value;
            }
        }

        private object? _regionList;

        /// <summary>Property regionList: The region list.</summary>
        /// <remarks>
        /// <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RegionList
        {
            get => _regionList;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _regionList = value;
            }
        }

        private object? _resourceTypeList;

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
            get => _resourceTypeList;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceTypeList = value;
            }
        }
    }
}
