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
