using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `VpcFirewallControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps")]
    public interface IVpcFirewallControlPolicyProps
    {
        /// <summary>Property aclAction: The action that Cloud Firewall performs on the traffic.</summary>
        /// <remarks>
        /// Valid values:
        /// accept: allows the traffic.
        /// drop: denies the traffic.
        /// log: monitors the traffic.
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclAction
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
        /// Set this parameter in the following way:
        /// If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
        /// Example: 10.2.3.0/24.
        /// If the DestinationType parameter is set to group, set the value to the name of an address book.
        /// Example: db_group.
        /// If the DestinationType parameter is set to domain, set the value to a domain name.
        /// Example: *.aliyuncs.com.
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

        /// <summary>Property newOrder: The priority of the access control policy.</summary>
        /// <remarks>
        /// The priority value starts from 1. A smaller priority value indicates a higher priority.
        /// Note The value of -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewOrder
        {
            get;
        }

        /// <summary>Property proto: The type of the security protocol in the access control policy.</summary>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Proto
        {
            get;
        }

        /// <summary>Property source: The source address in the access control policy.</summary>
        /// <remarks>
        /// If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
        /// If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property sourceType: The type of the source address in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// net: CIDR block
        /// group: address book
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.</summary>
        /// <remarks>
        /// If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
        /// that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
        /// If the VPC firewall is used to protect Express Connect, set the value to the ID of
        /// the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
        /// Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        /// </remarks>
        [JsiiProperty(name: "vpcFirewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcFirewallId
        {
            get;
        }

        /// <summary>Property applicationName: The application type that the access control policy supports.</summary>
        /// <remarks>
        /// Valid values:
        /// ANY (indicates that all application types are supported)
        /// FTP
        /// HTTP
        /// HTTPS
        /// MySQL
        /// SMTP
        /// SMTPS
        /// RDP
        /// VNC
        /// SSH
        /// Redis
        /// MQTT
        /// MongoDB
        /// Memcache
        /// SSL
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property applicationNameList: List of application types supported by the access control policy.</summary>
        [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationNameList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPort: The destination port in the access control policy.</summary>
        /// <remarks>
        /// Note This parameter must be specified if the DestPortType parameter is set to port.
        /// </remarks>
        [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPortGroup: The address book of destination ports in the access control policy.</summary>
        /// <remarks>
        /// Note This parameter must be specified if the DestPortType parameter is set to group.
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

        /// <summary>Property destPortType: The type of the destination port in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// port: port
        /// group: address book
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

        /// <summary>Property endTime: The end time of the policy validity period for an access control policy.</summary>
        /// <remarks>
        /// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        /// Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lang: The natural language of the request and response.</summary>
        /// <remarks>
        /// Valid values:
        /// zh: Chinese
        /// en: English
        /// </remarks>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memberUid: Member account UID of current Alibaba Cloud account.</summary>
        [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemberUid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property release: The enabled state of the access control policy.</summary>
        /// <remarks>
        /// This policy is enabled by default when it is created. Value:
        ///
        /// <list type="bullet">
        /// <description>true: Access control policy is enabled</description>
        /// <description>false: Access control policy is not enabled</description>
        /// </list>
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

        /// <summary>Property repeatDays: A collection of repeated dates of policy validity for an access control policy.</summary>
        /// <remarks>
        /// When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        /// When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        /// Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        /// When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        /// Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        /// </remarks>
        [JsiiProperty(name: "repeatDays", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.</summary>
        /// <remarks>
        /// For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        /// Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
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

        /// <summary>Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.</summary>
        /// <remarks>
        /// For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        /// Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
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

        /// <summary>Property repeatType: The repetition type of the policy validity period for an access control policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Permanent (default)</description>
        /// <description>None</description>
        /// <description>Daily</description>
        /// <description>Weekly</description>
        /// <description>Monthly.</description>
        /// </list>
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

        /// <summary>Property startTime: The start time of the policy validity period for an access control policy.</summary>
        /// <remarks>
        /// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        /// Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VpcFirewallControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcFirewallControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclAction: The action that Cloud Firewall performs on the traffic.</summary>
            /// <remarks>
            /// Valid values:
            /// accept: allows the traffic.
            /// drop: denies the traffic.
            /// log: monitors the traffic.
            /// </remarks>
            [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclAction
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
            /// Set this parameter in the following way:
            /// If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
            /// Example: 10.2.3.0/24.
            /// If the DestinationType parameter is set to group, set the value to the name of an address book.
            /// Example: db_group.
            /// If the DestinationType parameter is set to domain, set the value to a domain name.
            /// Example: *.aliyuncs.com.
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

            /// <summary>Property newOrder: The priority of the access control policy.</summary>
            /// <remarks>
            /// The priority value starts from 1. A smaller priority value indicates a higher priority.
            /// Note The value of -1 indicates the lowest priority.
            /// </remarks>
            [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property proto: The type of the security protocol in the access control policy.</summary>
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Proto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property source: The source address in the access control policy.</summary>
            /// <remarks>
            /// If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
            /// If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: The type of the source address in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// net: CIDR block
            /// group: address book
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.</summary>
            /// <remarks>
            /// If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
            /// that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
            /// If the VPC firewall is used to protect Express Connect, set the value to the ID of
            /// the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
            /// Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
            /// </remarks>
            [JsiiProperty(name: "vpcFirewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcFirewallId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property applicationName: The application type that the access control policy supports.</summary>
            /// <remarks>
            /// Valid values:
            /// ANY (indicates that all application types are supported)
            /// FTP
            /// HTTP
            /// HTTPS
            /// MySQL
            /// SMTP
            /// SMTPS
            /// RDP
            /// VNC
            /// SSH
            /// Redis
            /// MQTT
            /// MongoDB
            /// Memcache
            /// SSL
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplicationName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property applicationNameList: List of application types supported by the access control policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "applicationNameList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ApplicationNameList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPort: The destination port in the access control policy.</summary>
            /// <remarks>
            /// Note This parameter must be specified if the DestPortType parameter is set to port.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortGroup: The address book of destination ports in the access control policy.</summary>
            /// <remarks>
            /// Note This parameter must be specified if the DestPortType parameter is set to group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortType: The type of the destination port in the access control policy.</summary>
            /// <remarks>
            /// Valid values:
            /// port: port
            /// group: address book
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endTime: The end time of the policy validity period for an access control policy.</summary>
            /// <remarks>
            /// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
            /// Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lang: The natural language of the request and response.</summary>
            /// <remarks>
            /// Valid values:
            /// zh: Chinese
            /// en: English
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memberUid: Member account UID of current Alibaba Cloud account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemberUid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Default to cn-hangzhou.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property release: The enabled state of the access control policy.</summary>
            /// <remarks>
            /// This policy is enabled by default when it is created. Value:
            ///
            /// <list type="bullet">
            /// <description>true: Access control policy is enabled</description>
            /// <description>false: Access control policy is not enabled</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "release", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Release
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatDays: A collection of repeated dates of policy validity for an access control policy.</summary>
            /// <remarks>
            /// When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
            /// When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
            /// Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
            /// When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
            /// Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatDays", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RepeatDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.</summary>
            /// <remarks>
            /// For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
            /// Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.</summary>
            /// <remarks>
            /// For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
            /// Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatType: The repetition type of the policy validity period for an access control policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Permanent (default)</description>
            /// <description>None</description>
            /// <description>Daily</description>
            /// <description>Weekly</description>
            /// <description>Monthly.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startTime: The start time of the policy validity period for an access control policy.</summary>
            /// <remarks>
            /// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
            /// Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
