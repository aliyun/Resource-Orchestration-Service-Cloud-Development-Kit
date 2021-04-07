using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS template type:  `ALIYUN::FC::Function`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunctionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosFunction : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::FC::Function`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosFunction(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IRosFunctionProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosFunction(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosFunction(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ARN: The ARN for ALIYUN::ROS::CustomResource
        /// </remarks>
        [JsiiProperty(name: "attrArn", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrArn
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: FunctionId: The function ID
        /// </remarks>
        [JsiiProperty(name: "attrFunctionId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrFunctionId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: FunctionName: The function name
        /// </remarks>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrFunctionName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceId: The service ID
        /// </remarks>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceName: The service name
        /// </remarks>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object FunctionName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: handler: The function execution entry point.
        /// </remarks>
        [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Handler
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Runtime
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServiceName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: asyncConfiguration: Configuration of asynchronous function calls
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "asyncConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? AsyncConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CaPort
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: code: The code that contains the function implementation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true)]
        public virtual object? Code
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true)]
        public virtual object? CustomContainerConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Function description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public virtual object? EnvironmentVariables
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: initializationTimeout: the max execution time of the initializer, in second
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initializationTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InitializationTimeout
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: initializer: the entry point of the initializer
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initializer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Initializer
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceConcurrency
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MemorySize
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Timeout
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAsyncConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty")]
        public interface IAsyncConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: destination: Set destination of asynchronous function calls
            /// </remarks>
            [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.DestinationProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Destination
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
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
            /// <strong>Property</strong>: maxAsyncRetryAttempts: Configure the number of retries
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

            [JsiiTypeProxy(nativeType: typeof(IAsyncConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.IAsyncConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: destination: Set destination of asynchronous function calls
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.DestinationProperty\"}]}}", isOptional: true)]
                public object? Destination
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxAsyncEventAgeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxAsyncEventAgeInSeconds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxAsyncRetryAttempts: Configure the number of retries
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxAsyncRetryAttempts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxAsyncRetryAttempts
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty")]
        public class AsyncConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.IAsyncConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: destination: Set destination of asynchronous function calls
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destination", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.DestinationProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? Destination
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAsyncEventAgeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MaxAsyncEventAgeInSeconds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAsyncRetryAttempts: Configure the number of retries
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAsyncRetryAttempts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MaxAsyncRetryAttempts
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ICodeProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.CodeProperty")]
        public interface ICodeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ossBucketName: OSS bucket name.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssBucketName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossObjectName: OSS object name.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiProperty(name: "ossObjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssObjectName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
            /// Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiProperty(name: "sourceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SourceCode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: zipFile: Base64 encoded zip file content.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiProperty(name: "zipFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ZipFile
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICodeProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.CodeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.ICodeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ossBucketName: OSS bucket name.
                /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssBucketName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossObjectName: OSS object name.
                /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossObjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssObjectName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
                /// Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
                /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sourceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SourceCode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: zipFile: Base64 encoded zip file content.
                /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "zipFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ZipFile
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosFunction.CodeProperty")]
        public class CodeProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.ICodeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ossBucketName: OSS bucket name.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssBucketName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossObjectName: OSS object name.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossObjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssObjectName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
            /// Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SourceCode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: zipFile: Base64 encoded zip file content.
            /// Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zipFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ZipFile
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ICustomContainerConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty")]
        public interface ICustomContainerConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Image
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: accelerationType: Whether to enable image acceleration. Valid Values:
            /// Default: Indicates that image acceleration is enabled.
            /// None: Indicates that image acceleration is disabled.
            /// </remarks>
            [JsiiProperty(name: "accelerationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AccelerationType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: args: Container startup parameters. For example: ["-arg1", "value1"]
            /// </remarks>
            [JsiiProperty(name: "args", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Args
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: command: Container start command. For example: ["/code/myserver"]
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Command
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICustomContainerConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.ICustomContainerConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
                /// </remarks>
                [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Image
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: accelerationType: Whether to enable image acceleration. Valid Values:
                /// Default: Indicates that image acceleration is enabled.
                /// None: Indicates that image acceleration is disabled.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "accelerationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AccelerationType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: args: Container startup parameters. For example: ["-arg1", "value1"]
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "args", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Args
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: command: Container start command. For example: ["/code/myserver"]
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Command
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty")]
        public class CustomContainerConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.ICustomContainerConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Image
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: accelerationType: Whether to enable image acceleration. Valid Values:
            /// Default: Indicates that image acceleration is enabled.
            /// None: Indicates that image acceleration is disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accelerationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AccelerationType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: args: Container startup parameters. For example: ["-arg1", "value1"]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "args", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Args
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: command: Container start command. For example: ["/code/myserver"]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Command
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDestinationProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.DestinationProperty")]
        public interface IDestinationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
            /// </remarks>
            [JsiiProperty(name: "onFailure", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OnFailure
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
            /// </remarks>
            [JsiiProperty(name: "onSuccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OnSuccess
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDestinationProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunction.DestinationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.IDestinationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "onFailure", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OnFailure
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "onSuccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OnSuccess
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosFunction.DestinationProperty")]
        public class DestinationProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosFunction.IDestinationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onFailure", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OnFailure
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onSuccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OnSuccess
            {
                get;
                set;
            }
        }
    }
}
