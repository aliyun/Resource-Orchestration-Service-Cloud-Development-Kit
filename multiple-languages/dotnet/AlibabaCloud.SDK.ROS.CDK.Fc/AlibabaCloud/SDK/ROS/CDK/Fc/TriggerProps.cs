using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Trigger`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.TriggerProps")]
    public class TriggerProps : AlibabaCloud.SDK.ROS.CDK.Fc.ITriggerProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FunctionName
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <summary>Property triggerConfig: Event source specific trigger configuration.</summary>
        /// <remarks>
        /// The value is different according to trigger type.
        /// </remarks>
        [JsiiProperty(name: "triggerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOverride: true)]
        public object TriggerConfig
        {
            get;
            set;
        }

        /// <summary>Property triggerName: Trigger name.</summary>
        /// <remarks>
        /// Example : "image_resize"
        /// </remarks>
        [JsiiProperty(name: "triggerName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TriggerName
        {
            get;
            set;
        }

        /// <summary>Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".</summary>
        [JsiiProperty(name: "triggerType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TriggerType
        {
            get;
            set;
        }

        /// <summary>Property invocationRole: The role grants event source the permission to run function on behalf of user.</summary>
        /// <remarks>
        /// This is optional for some triggers.
        /// Example : "acs:ram::1234567890:role/fc-test"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "invocationRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InvocationRole
        {
            get;
            set;
        }

        /// <summary>Property qualifier: service version or alias.</summary>
        /// <remarks>
        /// Example : "LATEST"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Qualifier
        {
            get;
            set;
        }

        /// <summary>Property sourceArn: The Aliyun Resource Name (ARN) of event source.</summary>
        /// <remarks>
        /// This is optional for some triggers.
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
