using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `Zones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.datasource.ZonesProps")]
    public class ZonesProps : AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IZonesProps
    {
        private object? _addressIpVersion;

        /// <summary>Property addressIpVersion: The type of IP address.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AddressIpVersion
        {
            get => _addressIpVersion;
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
                _addressIpVersion = value;
            }
        }

        private object? _addressType;

        /// <summary>Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AddressType
        {
            get => _addressType;
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
                _addressType = value;
            }
        }
    }
}
