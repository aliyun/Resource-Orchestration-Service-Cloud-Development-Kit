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
