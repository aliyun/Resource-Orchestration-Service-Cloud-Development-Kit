using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosNatFirewallControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNatFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicyProps")]
    public interface IRosNatFirewallControlPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
        /// accept: allows the traffic.
        /// drop: denies the traffic.
        /// log: monitors the traffic.
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclAction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationNameList: The application types supported by the access control policy.
        /// </remarks>
        [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ApplicationNameList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the access control policy.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destination: The destination address in the access control policy.
        /// Valid values:
        /// If DestinationType is set to net, the value of this parameter is a CIDR block.
        /// Example: 1.2.XX.XX\/24
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

        /// <remarks>
        /// <strong>Property</strong>: destinationType: The type of the destination address in the access control policy. Valid values:
        /// net: CIDR block
        /// group: address book
        /// domain: domain name
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: The direction of the traffic to which the access control policy applies. Valid values:
        /// out: outbound traffic
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Direction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natGatewayId: The ID of the NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewOrder
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: proto: The protocol type in the access control policy.Valid values:
        /// ANY: all types of protocols
        /// TCP
        /// UDP
        /// ICMP
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Proto
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: source: The source address in the access control policy.Valid values:
        /// If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
        /// If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: The type of the source address in the access control policy.Valid values:
        /// net: source CIDR block
        /// group: source address book
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPort: The destination port in the access control policy. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: destPortGroup: The name of the destination port address book in the access control policy.
        /// </remarks>
        [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPortGroup
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortType: The type of the destination port in the access control policy. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: domainResolveType: The domain name resolution method of the access control policy. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
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

        /// <remarks>
        /// <strong>Property</strong>: ipVersion: The IP version supported by the access control policy. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: repeatDays: The days of a week or of a month on which the access control policy takes effect.
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

        /// <remarks>
        /// <strong>Property</strong>: repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
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

        /// <remarks>
        /// <strong>Property</strong>: repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
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

        /// <remarks>
        /// <strong>Property</strong>: repeatType: The recurrence type for the access control policy to take effect. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
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

        /// <summary>Properties for defining a `RosNatFirewallControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNatFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosNatFirewallControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
            /// accept: allows the traffic.
            /// drop: denies the traffic.
            /// log: monitors the traffic.
            /// </remarks>
            [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationNameList: The application types supported by the access control policy.
            /// </remarks>
            [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ApplicationNameList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the access control policy.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destination: The destination address in the access control policy.
            /// Valid values:
            /// If DestinationType is set to net, the value of this parameter is a CIDR block.
            /// Example: 1.2.XX.XX\/24
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

            /// <remarks>
            /// <strong>Property</strong>: destinationType: The type of the destination address in the access control policy. Valid values:
            /// net: CIDR block
            /// group: address book
            /// domain: domain name
            /// </remarks>
            [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: direction: The direction of the traffic to which the access control policy applies. Valid values:
            /// out: outbound traffic
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Direction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natGatewayId: The ID of the NAT gateway.
            /// </remarks>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
            /// </remarks>
            [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: proto: The protocol type in the access control policy.Valid values:
            /// ANY: all types of protocols
            /// TCP
            /// UDP
            /// ICMP
            /// </remarks>
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Proto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: source: The source address in the access control policy.Valid values:
            /// If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
            /// If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: The type of the source address in the access control policy.Valid values:
            /// net: source CIDR block
            /// group: source address book
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destPort: The destination port in the access control policy. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: destPortGroup: The name of the destination port address book in the access control policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destPortType: The type of the destination port in the access control policy. Valid values:
            /// net: source CIDR block
            /// group: source address book
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainResolveType: The domain name resolution method of the access control policy. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: The IP version supported by the access control policy. Valid values:
            /// 4: IPv4 (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "release", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Release
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repeatDays: The days of a week or of a month on which the access control policy takes effect.
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

            /// <remarks>
            /// <strong>Property</strong>: repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repeatType: The recurrence type for the access control policy to take effect. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
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
