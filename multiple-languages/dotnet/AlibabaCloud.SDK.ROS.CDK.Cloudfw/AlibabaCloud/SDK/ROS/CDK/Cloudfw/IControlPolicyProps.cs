using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `ControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.ControlPolicyProps")]
    public interface IControlPolicyProps
    {
        /// <summary>Property aclAction: Traffic access control policy set by the cloud of a firewall.</summary>
        /// <remarks>
        /// accept: Release
        /// drop: rejected
        /// log: Observation
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclAction
        {
            get;
        }

        /// <summary>Property description: Security access control policy description information.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property destination: Security Access Control destination address policy.</summary>
        /// <remarks>
        /// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        /// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        /// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        /// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Destination
        {
            get;
        }

        /// <summary>Property destinationType: Security Access Control destination address type of policy.</summary>
        /// <remarks>
        /// net: Destination network segment (CIDR)
        /// group: destination address book
        /// domain: The purpose domain
        /// location: The purpose area
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationType
        {
            get;
        }

        /// <summary>Property direction: Security access control traffic direction policies.</summary>
        /// <remarks>
        /// in: internal and external traffic access control
        /// out: within the flow of external access control
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Direction
        {
            get;
        }

        /// <summary>Property newOrder: Security access control priority policy in force.</summary>
        /// <remarks>
        /// Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        /// Description -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewOrder
        {
            get;
        }

        /// <summary>Property proto: The type of security protocol for traffic access in the security access control policy.</summary>
        /// <remarks>
        /// Can be set to ANY when you are not sure of the specific protocol type.
        /// Allowed values: ANY, TCP, UDP, ICMP
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Proto
        {
            get;
        }

        /// <summary>Property source: Security access control source address policy.</summary>
        /// <remarks>
        /// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        /// When SourceType as a group, Source name for the source address book. For example: db_group
        /// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property sourceType: Security access control source address type of policy.</summary>
        /// <remarks>
        /// net: Source segment (CIDR)
        /// group: source address book
        /// location: the source area
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property applicationName: Application types supported by the security policy.</summary>
        /// <remarks>
        /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        /// NOTE ANY indicates that the policy is applied to all types of applications.
        /// Either ApplicationNameList or ApplicationName must be passed, not both.
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

        /// <summary>Property destPort: Security access control policy access traffic destination port.</summary>
        /// <remarks>
        /// Note When DestPortType to port, set the item.
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

        /// <summary>Property destPortGroup: Security access control policy access traffic destination port address book name.</summary>
        /// <remarks>
        /// Description DestPortType is group, set the item.
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

        /// <summary>Property destPortType: Security access control policy access destination port traffic type.</summary>
        /// <remarks>
        /// port: Port
        /// group: port address book
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
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>FQDN: Based on FQDN</description>
        /// <description>DNS: Based on DNS dynamic resolution</description>
        /// <description>FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "domainResolveType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainResolveType
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

        /// <summary>Property ipVersion: IP version.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>4: IPv4</description>
        /// <description>6: IPv6</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
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
        /// This policy is enabled by default when it is created. Valid values:
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

        /// <summary>Properties for defining a `ControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.ControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclAction: Traffic access control policy set by the cloud of a firewall.</summary>
            /// <remarks>
            /// accept: Release
            /// drop: rejected
            /// log: Observation
            /// </remarks>
            [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Security access control policy description information.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destination: Security Access Control destination address policy.</summary>
            /// <remarks>
            /// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
            /// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
            /// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
            /// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
            /// </remarks>
            [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Destination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationType: Security Access Control destination address type of policy.</summary>
            /// <remarks>
            /// net: Destination network segment (CIDR)
            /// group: destination address book
            /// domain: The purpose domain
            /// location: The purpose area
            /// </remarks>
            [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property direction: Security access control traffic direction policies.</summary>
            /// <remarks>
            /// in: internal and external traffic access control
            /// out: within the flow of external access control
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Direction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property newOrder: Security access control priority policy in force.</summary>
            /// <remarks>
            /// Priority number increments sequentially from 1, lower the priority number, the higher the priority.
            /// Description -1 indicates the lowest priority.
            /// </remarks>
            [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property proto: The type of security protocol for traffic access in the security access control policy.</summary>
            /// <remarks>
            /// Can be set to ANY when you are not sure of the specific protocol type.
            /// Allowed values: ANY, TCP, UDP, ICMP
            /// </remarks>
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Proto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property source: Security access control source address policy.</summary>
            /// <remarks>
            /// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
            /// When SourceType as a group, Source name for the source address book. For example: db_group
            /// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: Security access control source address type of policy.</summary>
            /// <remarks>
            /// net: Source segment (CIDR)
            /// group: source address book
            /// location: the source area
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property applicationName: Application types supported by the security policy.</summary>
            /// <remarks>
            /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
            /// NOTE ANY indicates that the policy is applied to all types of applications.
            /// Either ApplicationNameList or ApplicationName must be passed, not both.
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

            /// <summary>Property destPort: Security access control policy access traffic destination port.</summary>
            /// <remarks>
            /// Note When DestPortType to port, set the item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortGroup: Security access control policy access traffic destination port address book name.</summary>
            /// <remarks>
            /// Description DestPortType is group, set the item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPortType: Security access control policy access destination port traffic type.</summary>
            /// <remarks>
            /// port: Port
            /// group: port address book
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainResolveType: The domain name resolution method of the access control policy.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>FQDN: Based on FQDN</description>
            /// <description>DNS: Based on DNS dynamic resolution</description>
            /// <description>FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainResolveType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainResolveType
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

            /// <summary>Property ipVersion: IP version.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>4: IPv4</description>
            /// <description>6: IPv6</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
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
            /// This policy is enabled by default when it is created. Valid values:
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
