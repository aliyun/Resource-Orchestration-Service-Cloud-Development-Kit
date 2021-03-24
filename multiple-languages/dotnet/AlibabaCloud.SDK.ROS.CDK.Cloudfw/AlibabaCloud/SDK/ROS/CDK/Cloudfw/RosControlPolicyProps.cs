using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.RosControlPolicyProps")]
    public class RosControlPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosControlPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclAction: Traffic access control policy set by the cloud of a firewall.
        /// accept: Release
        /// drop: rejected
        /// log: Observation
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AclAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationName: Application types supported by the security policy.
        /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        /// NOTE ANY indicates that the policy is applied to all types of applications.
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ApplicationName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Security access control policy description information.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destination: Security Access Control destination address policy.
        /// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        /// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        /// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        /// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "destination", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Destination
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationType: Security Access Control destination address type of policy.
        /// net: Destination network segment (CIDR)
        /// group: destination address book
        /// domain: The purpose domain
        /// location: The purpose area
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: Security access control traffic direction policies.
        /// in: internal and external traffic access control
        /// out: within the flow of external access control
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Direction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        /// Description -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double NewOrder
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        /// Allowed values: ANY, TCP, UDP, ICMP
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Proto
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: source: Security access control source address policy.
        /// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        /// When SourceType as a group, Source name for the source address book. For example: db_group
        /// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Source
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Security access control source address type of policy.
        /// net: Source segment (CIDR)
        /// group: source address book
        /// location: the source area
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPort: Security access control policy access traffic destination port.
        /// Note When DestPortType to port, set the item.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortGroup: Security access control policy access traffic destination port address book name.
        /// Description DestPortType is group, set the item.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPortGroup", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestPortGroup
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortType: Security access control policy access destination port traffic type.
        /// port: Port
        /// group: port address book
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPortType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestPortType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RegionId
        {
            get;
            set;
        }
    }
}
