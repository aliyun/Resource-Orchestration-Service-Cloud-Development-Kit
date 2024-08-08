using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `NatFirewallControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INatFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicyProps")]
    public interface INatFirewallControlPolicyProps
    {
        /// <summary>Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.</summary>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclAction
        {
            get;
        }

        /// <summary>Property applicationNameList: The application types supported by the access control policy.</summary>
        [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ApplicationNameList
        {
            get;
        }

        /// <summary>Property description: The description of the access control policy.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property destination: The destination address in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// If DestinationType is set to net, the value of this parameter is a CIDR block.
        /// Example: 1.2.XX.XX/24
        /// If DestinationType is set to group, the value of this parameter is an address book.
        /// Example: db_group
        /// If DestinationType is set to domain, the value of this parameter is a domain name.
        /// Example: *.aliyuncs.com
        /// DestinationType is set to location, the value of this parameter is a location.
        /// Example: ["BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Destination
        {
            get;
        }

        /// <summary>Property destinationType: The type of the destination address in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// net: CIDR block
        /// group: address book
        /// domain: domain name
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationType
        {
            get;
        }

        /// <summary>Property direction: The direction of the traffic to which the access control policy applies.</summary>
        /// <remarks>
        /// Valid values:
        /// out: outbound traffic
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Direction
        {
            get;
        }

        /// <summary>Property natGatewayId: The ID of the NAT gateway.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <summary>Property newOrder: The priority of the access control policy.</summary>
        /// <remarks>
        /// The priority value starts from 1. A small priority value indicates a high priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewOrder
        {
            get;
        }

        /// <summary>Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.</summary>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Proto
        {
            get;
        }

        /// <summary>Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property destPort: The destination port in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// If Proto is set to ICMP, DestPort is automatically left empty.
        /// If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
        /// If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
        /// </remarks>
        [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPortGroup: The name of the destination port address book in the access control policy.</summary>
        [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPortGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPortType: The type of the destination port in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// net: source CIDR block
        /// group: source address book
        /// </remarks>
        [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPortType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainResolveType: The domain name resolution method of the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: fully qualified domain name (FQDN)-based resolution
        /// 1: Domain Name System (DNS)-based dynamic resolution
        /// 2: FQDN and DNS-based dynamic resolution
        /// </remarks>
        [JsiiProperty(name: "domainResolveType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainResolveType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endTime: The time when the access control policy stops taking effect.</summary>
        /// <remarks>
        /// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipVersion: The IP version supported by the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// 4: IPv4 (default)
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property release: Specifies whether to enable the access control policy.</summary>
        /// <remarks>
        /// By default, an access control policy is enabled after it is created. Valid values:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "release", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Release
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatDays: The days of a week or of a month on which the access control policy takes effect.</summary>
        /// <remarks>
        /// If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
        /// If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
        /// If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
        /// </remarks>
        [JsiiProperty(name: "repeatDays", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatEndTime: The point in time when the recurrence ends.</summary>
        /// <remarks>
        /// Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
        /// </remarks>
        [JsiiProperty(name: "repeatEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatEndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatStartTime: The point in time when the recurrence starts.</summary>
        /// <remarks>
        /// Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
        /// </remarks>
        [JsiiProperty(name: "repeatStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatStartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatType: The recurrence type for the access control policy to take effect.</summary>
        /// <remarks>
        /// Valid values:
        /// Permanent (default): The policy always takes effect.
        /// None: The policy takes effect for only once.
        /// Daily: The policy takes effect on a daily basis.
        /// Weekly: The policy takes effect on a weekly basis.
        /// Monthly: The policy takes effect on a monthly basis.
        /// </remarks>
        [JsiiProperty(name: "repeatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startTime: The time when the access control policy starts to take effect.</summary>
        /// <remarks>
        /// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NatFirewallControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INatFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.INatFirewallControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.</summary>
            [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property applicationNameList: The application types supported by the access control policy.</summary>
            [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ApplicationNameList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the access control policy.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destination: The destination address in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// If DestinationType is set to net, the value of this parameter is a CIDR block.
            /// Example: 1.2.XX.XX/24
            /// If DestinationType is set to group, the value of this parameter is an address book.
            /// Example: db_group
            /// If DestinationType is set to domain, the value of this parameter is a domain name.
            /// Example: *.aliyuncs.com
            /// DestinationType is set to location, the value of this parameter is a location.
            /// Example: ["BJ11", "ZB"]
            /// </remarks>
            [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Destination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationType: The type of the destination address in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// net: CIDR block
            /// group: address book
            /// domain: domain name
            /// </remarks>
            [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property direction: The direction of the traffic to which the access control policy applies.</summary>
            /// <remarks>
            /// Valid values:
            /// out: outbound traffic
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Direction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natGatewayId: The ID of the NAT gateway.</summary>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property newOrder: The priority of the access control policy.</summary>
            /// <remarks>
            /// The priority value starts from 1. A small priority value indicates a high priority.
            /// </remarks>
            [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.</summary>
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Proto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.</summary>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.</summary>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destPort: The destination port in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// If Proto is set to ICMP, DestPort is automatically left empty.
            /// If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
            /// If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortGroup: The name of the destination port address book in the access control policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortType: The type of the destination port in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// net: source CIDR block
            /// group: source address book
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainResolveType: The domain name resolution method of the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: fully qualified domain name (FQDN)-based resolution
            /// 1: Domain Name System (DNS)-based dynamic resolution
            /// 2: FQDN and DNS-based dynamic resolution
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainResolveType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainResolveType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endTime: The time when the access control policy stops taking effect.</summary>
            /// <remarks>
            /// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipVersion: The IP version supported by the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// 4: IPv4 (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property release: Specifies whether to enable the access control policy.</summary>
            /// <remarks>
            /// By default, an access control policy is enabled after it is created. Valid values:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "release", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Release
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatDays: The days of a week or of a month on which the access control policy takes effect.</summary>
            /// <remarks>
            /// If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
            /// If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
            /// If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatDays", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatEndTime: The point in time when the recurrence ends.</summary>
            /// <remarks>
            /// Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatStartTime: The point in time when the recurrence starts.</summary>
            /// <remarks>
            /// Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatType: The recurrence type for the access control policy to take effect.</summary>
            /// <remarks>
            /// Valid values:
            /// Permanent (default): The policy always takes effect.
            /// None: The policy takes effect for only once.
            /// Daily: The policy takes effect on a daily basis.
            /// Weekly: The policy takes effect on a weekly basis.
            /// Monthly: The policy takes effect on a monthly basis.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startTime: The time when the access control policy starts to take effect.</summary>
            /// <remarks>
            /// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
