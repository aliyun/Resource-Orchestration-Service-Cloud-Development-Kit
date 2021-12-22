using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.WaitConditionProps")]
    public class WaitConditionProps : AlibabaCloud.SDK.ROS.CDK.Ros.IWaitConditionProps
    {
        /// <summary>Property handle: A reference to the wait condition handle used to signal this wait condition.</summary>
        [JsiiProperty(name: "handle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Handle
        {
            get;
            set;
        }

        /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Timeout
        {
            get;
            set;
        }

        /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Count
        {
            get;
            set;
        }

        /// <summary>Property showProgressEvent: Whether to generate progress changed event.</summary>
        /// <remarks>
        /// Default to Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "showProgressEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ShowProgressEvent
        {
            get;
            set;
        }
    }
}
