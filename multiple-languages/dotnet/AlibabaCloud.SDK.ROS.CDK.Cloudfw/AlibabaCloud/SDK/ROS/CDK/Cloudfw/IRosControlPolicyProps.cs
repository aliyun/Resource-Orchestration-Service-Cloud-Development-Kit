using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosControlPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosControlPolicyProps")]
    public interface IRosControlPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclAction: Traffic access control policy set by the cloud of a firewall.
        /// accept: Release
        /// drop: rejected
        /// log: Observation
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclAction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationName: Application types supported by the security policy.
        /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        /// NOTE ANY indicates that the policy is applied to all types of applications.
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Security access control policy description information.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destination: Security Access Control destination address policy.
        /// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
        /// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        /// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        /// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Destination
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationType: Security Access Control destination address type of policy.
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

        /// <remarks>
        /// <strong>Property</strong>: direction: Security access control traffic direction policies.
        /// in: internal and external traffic access control
        /// out: within the flow of external access control
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Direction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        /// Description -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NewOrder
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        /// Allowed values: ANY, TCP, UDP, ICMP
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Proto
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: source: Security access control source address policy.
        /// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
        /// When SourceType as a group, Source name for the source address book. For example: db_group
        /// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Security access control source address type of policy.
        /// net: Source segment (CIDR)
        /// group: source address book
        /// location: the source area
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPort: Security access control policy access traffic destination port.
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

        /// <remarks>
        /// <strong>Property</strong>: destPortGroup: Security access control policy access traffic destination port address book name.
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

        /// <remarks>
        /// <strong>Property</strong>: destPortType: Security access control policy access destination port traffic type.
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

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
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

        /// <summary>Properties for defining a `RosControlPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosControlPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosControlPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosControlPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclAction: Traffic access control policy set by the cloud of a firewall.
            /// accept: Release
            /// drop: rejected
            /// log: Observation
            /// </remarks>
            [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationName: Application types supported by the security policy.
            /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
            /// NOTE ANY indicates that the policy is applied to all types of applications.
            /// </remarks>
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Security access control policy description information.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destination: Security Access Control destination address policy.
            /// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
            /// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
            /// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
            /// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
            /// </remarks>
            [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Destination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationType: Security Access Control destination address type of policy.
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

            /// <remarks>
            /// <strong>Property</strong>: direction: Security access control traffic direction policies.
            /// in: internal and external traffic access control
            /// out: within the flow of external access control
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Direction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
            /// Description -1 indicates the lowest priority.
            /// </remarks>
            [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NewOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
            /// Allowed values: ANY, TCP, UDP, ICMP
            /// </remarks>
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Proto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: source: Security access control source address policy.
            /// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
            /// When SourceType as a group, Source name for the source address book. For example: db_group
            /// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Security access control source address type of policy.
            /// net: Source segment (CIDR)
            /// group: source address book
            /// location: the source area
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destPort: Security access control policy access traffic destination port.
            /// Note When DestPortType to port, set the item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destPortGroup: Security access control policy access traffic destination port address book name.
            /// Description DestPortType is group, set the item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destPortType: Security access control policy access destination port traffic type.
            /// port: Port
            /// group: port address book
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPortType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
