using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.HandshakeProps")]
    public class HandshakeProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps
    {
        /// <summary>Property targetEntity: Invited account ID or login email.</summary>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetEntity
        {
            get;
            set;
        }

        /// <summary>Property targetType: Type of account being invited.</summary>
        /// <remarks>
        /// Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetType
        {
            get;
            set;
        }

        /// <summary>Property note: Remarks.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Note
        {
            get;
            set;
        }
    }
}
