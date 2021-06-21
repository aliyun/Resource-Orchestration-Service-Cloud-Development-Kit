using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps")]
    public class VpcFirewallControlPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallControlPolicyProps
    {
        /// <summary>Property aclAction: The action that Cloud Firewall performs on the traffic.</summary>
        /// <remarks>
        /// Valid values:
        /// accept: allows the traffic.
        /// drop: denies the traffic.
        /// log: monitors the traffic.
        /// </remarks>
        [JsiiProperty(name: "aclAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AclAction
        {
            get;
            set;
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
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApplicationName
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the access control policy.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Description
        {
            get;
            set;
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
        [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Destination
        {
            get;
            set;
        }

        /// <summary>Property destinationType: The type of the destination address in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// net: CIDR block
        /// group: address book
        /// domain: domain name
        /// </remarks>
        [JsiiProperty(name: "destinationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DestinationType
        {
            get;
            set;
        }

        /// <summary>Property newOrder: The priority of the access control policy.</summary>
        /// <remarks>
        /// The priority value starts from 1. A smaller priority value indicates a higher priority.
        /// Note The value of -1 indicates the lowest priority.
        /// </remarks>
        [JsiiProperty(name: "newOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object NewOrder
        {
            get;
            set;
        }

        /// <summary>Property proto: The type of the security protocol in the access control policy.</summary>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Proto
        {
            get;
            set;
        }

        /// <summary>Property source: The source address in the access control policy.</summary>
        /// <remarks>
        /// If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
        /// If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Source
        {
            get;
            set;
        }

        /// <summary>Property sourceType: The type of the source address in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// net: CIDR block
        /// group: address book
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceType
        {
            get;
            set;
        }

        /// <summary>Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.</summary>
        /// <remarks>
        /// If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
        /// that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
        /// If the VPC firewall is used to protect Express Connect, set the value to the ID of
        /// the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
        /// Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        /// </remarks>
        [JsiiProperty(name: "vpcFirewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcFirewallId
        {
            get;
            set;
        }

        /// <summary>Property destPort: The destination port in the access control policy.</summary>
        /// <remarks>
        /// Note This parameter must be specified if the DestPortType parameter is set to port.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestPort
        {
            get;
            set;
        }

        /// <summary>Property destPortGroup: The address book of destination ports in the access control policy.</summary>
        /// <remarks>
        /// Note This parameter must be specified if the DestPortType parameter is set to group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPortGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestPortGroup
        {
            get;
            set;
        }

        /// <summary>Property destPortType: The type of the destination port in the access control policy.</summary>
        /// <remarks>
        /// Valid values:
        /// port: port
        /// group: address book
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destPortType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestPortType
        {
            get;
            set;
        }

        /// <summary>Property lang: The natural language of the request and response.</summary>
        /// <remarks>
        /// Valid values:
        /// zh: Chinese
        /// en: English
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Lang
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to cn-hangzhou.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RegionId
        {
            get;
            set;
        }
    }
}
