using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosWaitConditionProps")]
    public class RosWaitConditionProps : AlibabaCloud.SDK.ROS.CDK.Ros.IRosWaitConditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: handle: A reference to the wait condition handle used to signal this wait condition.
        /// </remarks>
        [JsiiProperty(name: "handle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Handle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The number of seconds to wait for the correct number of signals to arrive.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Timeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: count: The number of success signals that must be received before the stack creation process continues.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Count
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: showProgressEvent: Whether to generate progress changed event. Default to Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "showProgressEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ShowProgressEvent
        {
            get;
            set;
        }
    }
}
