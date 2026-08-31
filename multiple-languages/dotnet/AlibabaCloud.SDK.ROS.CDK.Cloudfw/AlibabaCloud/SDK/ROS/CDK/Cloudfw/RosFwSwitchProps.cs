using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosFwSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.RosFwSwitchProps")]
    public class RosFwSwitchProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosFwSwitchProps
    {
        private object? _ipaddrList;

        /// <remarks>
        /// <strong>Property</strong>: ipaddrList: The IP address list.
        /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
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

        /// <remarks>
        /// <strong>Property</strong>: ipVersion: The IP version number.
        /// </remarks>
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

        /// <remarks>
        /// <strong>Property</strong>: memberUid: The member unique identifier.
        /// </remarks>
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

        /// <remarks>
        /// <strong>Property</strong>: regionList: The region list.
        /// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceTypeList: The list of asset types.
        /// Valid values:
        /// - BastionHostEgressIP: the egress IP address of a bastion host.
        /// - BastionHostIngressIP: the ingress IP address of a bastion host.
        /// - EcsEIP: the EIP of an ECS instance.
        /// - EcsPublicIP: the public IP address of an ECS instance.
        /// - EIP: an EIP.
        /// - EniEIP: the EIP of an ENI.
        /// - NatEIP: the EIP of a NAT gateway.
        /// - SlbEIP: the EIP of an SLB instance or a CLB instance.
        /// - SlbPublicIP: the public IP address of an SLB instance or a CLB instance.
        /// - NatPublicIP: the public IP address of a NAT gateway.
        /// - HAVIP: an HAVIP.
        /// - NlbEIP: the EIP of an NLB instance.
        /// - ApiGatewayEIP: the public IP address of an API gateway.
        /// - AlbEIP: the EIP of an ALB instance.
        /// - AiGatewayEIP: the public IP address of an AI gateway.
        /// - GaEIP: the EIP of a GA instance.
        /// - SwasEIP: the public IP address of a Simple Application Server instance.
        /// - EcdEIP: the public IP address of an Elastic Desktop Service instance.
        /// - BastionHostIP: the IP address of a bastion host.
        /// > You must specify at least one of the `IpaddrList`, `RegionList`, and
        /// `ResourceTypeList` parameters.
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
