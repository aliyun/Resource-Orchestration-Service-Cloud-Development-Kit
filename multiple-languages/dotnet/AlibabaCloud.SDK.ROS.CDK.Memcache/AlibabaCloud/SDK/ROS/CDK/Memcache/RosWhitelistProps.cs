using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosWhitelist`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-whitelist
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-memcache.RosWhitelistProps")]
    public class RosWhitelistProps : AlibabaCloud.SDK.ROS.CDK.Memcache.IRosWhitelistProps
    {
        private object _instanceId;

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get => _instanceId;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _instanceId = value;
            }
        }

        private object _securityIps;

        /// <remarks>
        /// <strong>Property</strong>: securityIps: The IP addresses in the whitelist. Up to 1,000 IP addresses can be specified in a
        /// whitelist. Separate multiple IP addresses with a comma (,). Specify an IP address
        /// in the 0.0.0.0\/0, 10.23.12.24, or 10.23.12.24\/24 format. In CIDR block
        /// 10.23.12.24\/24, \/24 specifies the length of the prefix of an IP address. The
        /// prefix length ranges from 1 to 32.
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SecurityIps
        {
            get => _securityIps;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _securityIps = value;
            }
        }

        private object? _securityIpGroupAttribute;

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityIpGroupAttribute
        {
            get => _securityIpGroupAttribute;
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
                _securityIpGroupAttribute = value;
            }
        }

        private object? _securityIpGroupName;

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupName: The name of the IP address whitelist.
        /// ><warning>You cannot modify the whitelist that is generated by the system. If you
        /// do not specify this parameter, the default whitelist is modified by
        /// default.><\/warning>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityIpGroupName
        {
            get => _securityIpGroupName;
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
                _securityIpGroupName = value;
            }
        }
    }
}
