using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
    [JsiiInterface(nativeType: typeof(IRosFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunctionInvokerProps")]
    public interface IRosFunctionInvokerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: async: Invocation type, Sync or Async. Defaults to Sync.
        /// </remarks>
        [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Async
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: checkError: Whether check error for function invocation result.
        /// If set true and function invocation result has error, the resource creation will be regard as failed.
        /// Default is false
        /// </remarks>
        [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckError
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        /// If the value needs to be binary, encode it via base64 before passing to this property.
        /// </remarks>
        [JsiiProperty(name: "event", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Event
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        /// </remarks>
        [JsiiProperty(name: "executeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecuteVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: service version, can be versionId or aliasName
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceRegionId: Which region service belongs to.
        /// </remarks>
        [JsiiProperty(name: "serviceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunctionInvokerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosFunctionInvokerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: async: Invocation type, Sync or Async. Defaults to Sync.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Async
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: checkError: Whether check error for function invocation result.
            /// If set true and function invocation result has error, the resource creation will be regard as failed.
            /// Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckError
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
            /// If the value needs to be binary, encode it via base64 before passing to this property.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "event", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Event
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecuteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: service version, can be versionId or aliasName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Qualifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceRegionId: Which region service belongs to.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceRegionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
