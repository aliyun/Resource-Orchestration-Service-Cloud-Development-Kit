using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Operation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.OperationProps")]
    public interface IOperationProps
    {
        /// <summary>Property httpApiId: The HTTP API ID to which the interface belongs.</summary>
        [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HttpApiId
        {
            get;
        }

        /// <summary>Property method: The method of http protocol.</summary>
        [JsiiProperty(name: "method", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Method
        {
            get;
        }

        /// <summary>Property operationName: The name of the operation.</summary>
        [JsiiProperty(name: "operationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OperationName
        {
            get;
        }

        /// <summary>Property path: The interface path of the operation.</summary>
        [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Path
        {
            get;
        }

        /// <summary>Property description: The description of the operation.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mock: Mock configuration.</summary>
        [JsiiProperty(name: "mock", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosOperation.MockProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Operation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.OperationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IOperationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property httpApiId: The HTTP API ID to which the interface belongs.</summary>
            [JsiiProperty(name: "httpApiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HttpApiId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property method: The method of http protocol.</summary>
            [JsiiProperty(name: "method", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Method
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property operationName: The name of the operation.</summary>
            [JsiiProperty(name: "operationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OperationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property path: The interface path of the operation.</summary>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Path
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the operation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mock: Mock configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mock", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosOperation.MockProperty\"}]}}", isOptional: true)]
            public object? Mock
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
