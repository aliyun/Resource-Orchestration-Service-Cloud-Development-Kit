using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosResourceProps")]
    public class RosResourceProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceProps
    {
        /// <summary>ROS template resource type (e.g. `ALIYUN::ECS::Instance`).</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Resource properties.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No resource properties.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "properties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? Properties
        {
            get;
            set;
        }
    }
}
