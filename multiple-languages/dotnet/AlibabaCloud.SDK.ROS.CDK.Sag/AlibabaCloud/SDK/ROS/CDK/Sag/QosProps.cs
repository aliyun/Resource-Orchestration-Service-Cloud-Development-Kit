using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::Qos`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.QosProps")]
    public class QosProps : AlibabaCloud.SDK.ROS.CDK.Sag.IQosProps
    {
        /// <summary>Property qosName: The name of the QoS policy.</summary>
        /// <remarks>
        /// The name must be 2 to 100 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "qosName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QosName
        {
            get;
            set;
        }

        /// <summary>Property qosDescription: The description of the QoS policy.</summary>
        /// <remarks>
        /// The description must be 1 to 512 characters in length and can contain letters, digits,
        /// underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qosDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? QosDescription
        {
            get;
            set;
        }
    }
}
