using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
    [JsiiInterface(nativeType: typeof(IFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionInvokerProps")]
    public interface IFunctionInvokerProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Property async: Invocation type, Sync or Async.</summary>
        /// <remarks>
        /// Defaults to Sync.
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

        /// <summary>Property checkError: Whether check error for function invocation result.</summary>
        /// <remarks>
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

        /// <summary>Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.</summary>
        [JsiiProperty(name: "event", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Event
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.</summary>
        /// <remarks>
        /// The change of the property leads to the invoke of the function.
        /// </remarks>
        [JsiiProperty(name: "executeVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ExecuteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property qualifier: service version, can be versionId or aliasName.</summary>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceRegionId: Which region service belongs to.</summary>
        [JsiiProperty(name: "serviceRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ServiceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionInvokerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property async: Invocation type, Sync or Async.</summary>
            /// <remarks>
            /// Defaults to Sync.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Async
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property checkError: Whether check error for function invocation result.</summary>
            /// <remarks>
            /// If set true and function invocation result has error, the resource creation will be regard as failed.
            /// Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckError
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "event", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Event
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.</summary>
            /// <remarks>
            /// The change of the property leads to the invoke of the function.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executeVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ExecuteVersion
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property qualifier: service version, can be versionId or aliasName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Qualifier
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property serviceRegionId: Which region service belongs to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ServiceRegionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
