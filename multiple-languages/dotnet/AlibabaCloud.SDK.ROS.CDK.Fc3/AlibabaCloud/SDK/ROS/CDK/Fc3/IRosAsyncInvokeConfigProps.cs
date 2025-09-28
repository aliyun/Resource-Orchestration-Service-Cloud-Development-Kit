using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `RosAsyncInvokeConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAsyncInvokeConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfigProps")]
    public interface IRosAsyncInvokeConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name.
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: asyncTask: Whether to enable asynchronous tasks (optional).
        /// </remarks>
        [JsiiProperty(name: "asyncTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AsyncTask
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationConfig: Configuration structure of asynchronous invocation target (optional).
        /// </remarks>
        [JsiiProperty(name: "destinationConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.DestinationConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
        /// </remarks>
        [JsiiProperty(name: "maxAsyncEventAgeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxAsyncEventAgeInSeconds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
        /// </remarks>
        [JsiiProperty(name: "maxAsyncRetryAttempts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxAsyncRetryAttempts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAsyncInvokeConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAsyncInvokeConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IRosAsyncInvokeConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name.
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: asyncTask: Whether to enable asynchronous tasks (optional).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "asyncTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AsyncTask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationConfig: Configuration structure of asynchronous invocation target (optional).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.DestinationConfigProperty\"}]}}", isOptional: true)]
            public object? DestinationConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAsyncEventAgeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAsyncEventAgeInSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAsyncRetryAttempts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAsyncRetryAttempts
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
