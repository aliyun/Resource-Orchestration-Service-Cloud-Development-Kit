using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::WaitCondition`.</summary>
    [JsiiInterface(nativeType: typeof(IWaitConditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.WaitConditionProps")]
    public interface IWaitConditionProps
    {
        /// <summary>Property handle: A reference to the wait condition handle used to signal this wait condition.</summary>
        [JsiiProperty(name: "handle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Handle
        {
            get;
        }

        /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Timeout
        {
            get;
        }

        /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Count
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property showProgressEvent: Whether to generate progress changed event.</summary>
        /// <remarks>
        /// Default to Disabled.
        /// </remarks>
        [JsiiProperty(name: "showProgressEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShowProgressEvent
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
            [JsiiProperty(name: "handle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Handle
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property timeout: The number of seconds to wait for the correct number of signals to arrive.</summary>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property count: The number of success signals that must be received before the stack creation process continues.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Count
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property showProgressEvent: Whether to generate progress changed event.</summary>
            /// <remarks>
            /// Default to Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "showProgressEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShowProgressEvent
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
