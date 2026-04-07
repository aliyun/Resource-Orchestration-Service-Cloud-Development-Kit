using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosTrafficQosRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosTrafficQosRuleProps")]
    public class RosTrafficQosRuleProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosTrafficQosRuleProps
    {
        private object _priority;

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the QoS rule. Valid values: 1 to 9000. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Priority
        {
            get => _priority;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _priority = value;
            }
        }

        private object _protocol;

        /// <remarks>
        /// <strong>Property</strong>: protocol: QoS rule protocol type, value:
        /// - **ALL**
        /// - **ICMP(IPv4)**
        /// - **ICMPv6(IPv6)* *
        /// - **TCP**
        /// - **UDP**
        /// - **GRE**
        /// - **SSH**
        /// - **Telnet**
        /// - **HTTP**
        /// - **HTTPS**
        /// - **MS SQL**
        /// - **Oracle**
        /// - **MySql**
        /// - **RDP**
        /// - **PostgreSQL**
        /// - **Redis**.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Protocol
        {
            get => _protocol;
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
                _protocol = value;
            }
        }

        private object _qosId;

        /// <remarks>
        /// <strong>Property</strong>: qosId: The QoS policy ID.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QosId
        {
            get => _qosId;
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
                _qosId = value;
            }
        }

        private object _queueId;

        /// <remarks>
        /// <strong>Property</strong>: queueId: The QoS queue ID.
        /// </remarks>
        [JsiiProperty(name: "queueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QueueId
        {
            get => _queueId;
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
                _queueId = value;
            }
        }

        private object? _dstCidr;

        /// <remarks>
        /// <strong>Property</strong>: dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
        /// > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dstCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DstCidr
        {
            get => _dstCidr;
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
                _dstCidr = value;
            }
        }

        private object? _dstIpv6Cidr;

        /// <remarks>
        /// <strong>Property</strong>: dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
        /// > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dstIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DstIpv6Cidr
        {
            get => _dstIpv6Cidr;
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
                _dstIpv6Cidr = value;
            }
        }

        private object? _dstPortRange;

        /// <remarks>
        /// <strong>Property</strong>: dstPortRange: QoS rule traffic matches the destination port number range. Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types. The values are as follows:
        /// - **ALL**:-1\/-1, not editable.
        /// - **ICMP(IPv4)**:-1\/-1, non-editable.
        /// - **ICMPv6(IPv6)**:-1\/-1, non-editable.
        /// - **TCP**:-1\/-1, editable.
        /// - **UDP**:-1\/-1, editable.
        /// - **GRE**:-1\/-1, not editable.
        /// - **SSH**:22\/22, not editable.
        /// - **Telnet**:23\/23, not editable.
        /// - **HTTP**:80\/80, non-editable.
        /// - **HTTPS**:443\/443, which cannot be edited.
        /// - **MS SQL**:1443\/1443, which cannot be edited.
        /// - **Oracle**:1521\/1521, non-editable.
        /// - **MySql**:3306\/3306, non-editable.
        /// - **RDP**:3389\/3389, non-editable.
        /// - **PostgreSQL**:5432\/5432, non-editable.
        /// - **Redis**:6379\/6379, non-editable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dstPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DstPortRange
        {
            get => _dstPortRange;
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
                _dstPortRange = value;
            }
        }

        private object? _matchDscp;

        /// <remarks>
        /// <strong>Property</strong>: matchDscp: The DSCP value that matches the QoS rule traffic. Valid values: 0 to 63. If no value is matched, the value is -1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "matchDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MatchDscp
        {
            get => _matchDscp;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _matchDscp = value;
            }
        }

        private object? _remarkingDscp;

        /// <remarks>
        /// <strong>Property</strong>: remarkingDscp: The new DSCP value. Valid values: 0 to 63. If you do not change the value, set the value to -1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remarkingDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemarkingDscp
        {
            get => _remarkingDscp;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _remarkingDscp = value;
            }
        }

        private object? _ruleDescription;

        /// <remarks>
        /// <strong>Property</strong>: ruleDescription: The description of the QoS rule.
        /// The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RuleDescription
        {
            get => _ruleDescription;
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
                _ruleDescription = value;
            }
        }

        private object? _ruleName;

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the QoS rule.
        /// The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RuleName
        {
            get => _ruleName;
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
                _ruleName = value;
            }
        }

        private object? _srcCidr;

        /// <remarks>
        /// <strong>Property</strong>: srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
        /// > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SrcCidr
        {
            get => _srcCidr;
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
                _srcCidr = value;
            }
        }

        private object? _srcIpv6Cidr;

        /// <remarks>
        /// <strong>Property</strong>: srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
        /// > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SrcIpv6Cidr
        {
            get => _srcIpv6Cidr;
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
                _srcIpv6Cidr = value;
            }
        }

        private object? _srcPortRange;

        /// <remarks>
        /// <strong>Property</strong>: srcPortRange: The source port number of the QoS rule traffic matching. The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SrcPortRange
        {
            get => _srcPortRange;
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
                _srcPortRange = value;
            }
        }
    }
}
