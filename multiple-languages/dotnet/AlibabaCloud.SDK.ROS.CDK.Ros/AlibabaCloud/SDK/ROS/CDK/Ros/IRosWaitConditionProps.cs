using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
    [JsiiInterface(nativeType: typeof(IRosWaitConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosWaitConditionProps")]
    public interface IRosWaitConditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: handle: A reference to the wait condition handle used to signal this wait condition.
        /// </remarks>
        [JsiiProperty(name: "handle", typeJson: "{\"primitive\":\"string\"}")]
        string Handle
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The number of seconds to wait for the correct number of signals to arrive.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
        double Timeout
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: count: The number of success signals that must be received before the stack creation process continues.
        /// </remarks>
        [JsiiProperty(name: "count", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Count
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosWaitConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosWaitConditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IRosWaitConditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: handle: A reference to the wait condition handle used to signal this wait condition.
            /// </remarks>
            [JsiiProperty(name: "handle", typeJson: "{\"primitive\":\"string\"}")]
            public string Handle
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The number of seconds to wait for the correct number of signals to arrive.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
            public double Timeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: count: The number of success signals that must be received before the stack creation process continues.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Count
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
