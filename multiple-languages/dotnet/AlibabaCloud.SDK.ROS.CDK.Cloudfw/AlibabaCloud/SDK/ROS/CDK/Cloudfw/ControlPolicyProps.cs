using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.ControlPolicyProps")]
    public class ControlPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IControlPolicyProps
    {
        /// <summary>Property aclAction: Traffic access control policy set by the cloud of a firewall.</summary>
        /// <remarks>
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

        /// <summary>Property applicationName: Application types supported by the security policy.</summary>
        /// <remarks>
        /// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        /// NOTE ANY indicates that the policy is applied to all types of applications.
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ApplicationName
        {
            get;
            set;
        }

        /// <summary>Property description: Security access control policy description information.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Description
        {
            get;
            set;
        }

        /// <summary>Property destination: Security Access Control destination address policy.</summary>
        /// <remarks>
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

        /// <summary>Property destinationType: Security Access Control destination address type of policy.</summary>
        /// <remarks>
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

        /// <summary>Property direction: Security access control traffic direction policies.</summary>
        /// <remarks>
        /// in: internal and external traffic access control
        /// out: within the flow of external access control
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Direction
        {
            get;
            set;
        }

        /// <summary>Property newOrder: Security access control priority policy in force.</summary>
        /// <remarks>
        /// Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        /// Description -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double NewOrder
        {
            get;
            set;
        }

        /// <summary>Property proto: The type of security protocol for traffic access in the security access control policy.</summary>
        /// <remarks>
        /// Can be set to ANY when you are not sure of the specific protocol type.
        /// Allowed values: ANY, TCP, UDP, ICMP
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Proto
        {
            get;
            set;
        }

        /// <summary>Property source: Security access control source address policy.</summary>
        /// <remarks>
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

        /// <summary>Property sourceType: Security access control source address type of policy.</summary>
        /// <remarks>
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

        /// <summary>Property destPort: Security access control policy access traffic destination port.</summary>
        /// <remarks>
        /// Note When DestPortType to port, set the item.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPort", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestPort
        {
            get;
            set;
        }

        /// <summary>Property destPortGroup: Security access control policy access traffic destination port address book name.</summary>
        /// <remarks>
        /// Description DestPortType is group, set the item.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPortGroup", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestPortGroup
        {
            get;
            set;
        }

        /// <summary>Property destPortType: Security access control policy access destination port traffic type.</summary>
        /// <remarks>
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

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to cn-hangzhou.
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
