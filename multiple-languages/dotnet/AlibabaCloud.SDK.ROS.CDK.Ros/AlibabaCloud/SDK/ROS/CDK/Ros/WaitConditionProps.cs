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
        [JsiiProperty(name: "handle", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Handle
        {
            get;
            set;
        }

        /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Timeout
        {
            get;
            set;
        }

        /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Count
        {
            get;
            set;
        }
    }
}
