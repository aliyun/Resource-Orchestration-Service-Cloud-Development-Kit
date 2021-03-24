using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Trigger`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosTriggerProps")]
    public class RosTriggerProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosTriggerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name.
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FunctionName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOverride: true)]
        public object TriggerConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerName: Trigger name.
        /// Example : "image_resize"
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TriggerName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        /// Example : "oss"
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TriggerType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        /// Example : "acs:ram::1234567890:role/fc-test"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "invocationRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InvocationRole
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: service version or alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Qualifier
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        /// Example : "acs:oss:cn-shanghai:12345:mybucket"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceArn
        {
            get;
            set;
        }
    }
}
