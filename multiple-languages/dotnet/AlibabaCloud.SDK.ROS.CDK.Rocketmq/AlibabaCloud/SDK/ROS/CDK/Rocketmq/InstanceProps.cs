using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rocketmq.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Rocketmq.IInstanceProps
    {
        /// <summary>Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceName
        {
            get;
            set;
        }

        /// <summary>Property remark: The remark of instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Remark
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
