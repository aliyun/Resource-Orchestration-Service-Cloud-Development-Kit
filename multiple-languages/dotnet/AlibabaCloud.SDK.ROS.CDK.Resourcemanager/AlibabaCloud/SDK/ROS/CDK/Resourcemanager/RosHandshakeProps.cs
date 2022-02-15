using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosHandshakeProps")]
    public class RosHandshakeProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosHandshakeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: targetEntity: Invited account ID or login email
        /// </remarks>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetEntity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: Type of account being invited. Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: note: Remarks
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Note
        {
            get;
            set;
        }
    }
}
