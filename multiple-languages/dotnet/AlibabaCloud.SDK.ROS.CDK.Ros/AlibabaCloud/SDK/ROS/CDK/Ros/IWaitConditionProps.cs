using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
    [JsiiInterface(nativeType: typeof(IWaitConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.WaitConditionProps")]
    public interface IWaitConditionProps
    {
        /// <summary>Property handle: A reference to the wait condition handle used to signal this wait condition.</summary>
        [JsiiProperty(name: "handle", typeJson: "{\"primitive\":\"string\"}")]
        string Handle
        {
            get;
        }

        /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
        double Timeout
        {
            get;
        }

        /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IWaitConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.WaitConditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IWaitConditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property handle: A reference to the wait condition handle used to signal this wait condition.</summary>
            [JsiiProperty(name: "handle", typeJson: "{\"primitive\":\"string\"}")]
            public string Handle
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
            public double Timeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Count
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
