using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Config::DeliveryChannel`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-config.RosDeliveryChannelProps")]
    public class RosDeliveryChannelProps : AlibabaCloud.SDK.ROS.CDK.Config.IRosDeliveryChannelProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
        /// This parameter is required when you create a delivery method.
        /// Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        /// the ARN in the format of the provided example and replace the account ID with the
        /// ID of your Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelAssumeRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeliveryChannelAssumeRoleArn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
        /// delivery method. The value must be in one of the following formats:
        /// acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        /// acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        /// acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeliveryChannelTargetArn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
        /// method. Valid values:
        /// OSS
        /// MNS
        /// SLS
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeliveryChannelType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
        /// methods of the MNS type.
        /// This parameter allows you to specify the lowest risk level for the events to subscribe
        /// to and the resource types for which you want to subscribe to events.
        /// To specify the lowest risk level for the events to subscribe to, use the following
        /// format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
        /// The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
        /// indicates the high risk level, the medium risk level, and the low risk level, respectively.
        /// To specify the resource types for which you want to subscribe to events, use the following
        /// format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
        /// The values field indicates the resource types. Its value is a JSON array.
        /// Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deliveryChannelCondition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeliveryChannelCondition
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelName: The name of the delivery method.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeliveryChannelName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the delivery method.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
