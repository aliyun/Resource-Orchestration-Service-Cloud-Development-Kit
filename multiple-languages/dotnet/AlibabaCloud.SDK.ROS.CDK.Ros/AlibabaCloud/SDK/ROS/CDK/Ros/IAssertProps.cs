using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `Assert`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAssertProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.AssertProps")]
    public interface IAssertProps
    {
        /// <summary>Property values: A list of values to assert.</summary>
        /// <remarks>
        /// The items in the list are compared in order. The range of length is one to three.
        ///
        /// <list type="bullet">
        /// <description>Three values are supported only if the operation is Equal or NotEqual.</description>
        /// <description>One value is supported only if the operation is Not.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Values
        {
            get;
        }

        /// <summary>Property abortCreation: Whether to abort creation when the assert fails.</summary>
        /// <remarks>
        /// Default is True.
        /// </remarks>
        [JsiiProperty(name: "abortCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AbortCreation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property errorMessage: The error message to be returned when the assert fails.</summary>
        [JsiiProperty(name: "errorMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorMessage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property operation: The type of assertion to make.</summary>
        /// <remarks>
        /// The supported operations are:
        /// Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
        /// Default is Equal.
        /// </remarks>
        [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Operation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Assert`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAssertProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.AssertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IAssertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property values: A list of values to assert.</summary>
            /// <remarks>
            /// The items in the list are compared in order. The range of length is one to three.
            ///
            /// <list type="bullet">
            /// <description>Three values are supported only if the operation is Equal or NotEqual.</description>
            /// <description>One value is supported only if the operation is Not.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Values
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property abortCreation: Whether to abort creation when the assert fails.</summary>
            /// <remarks>
            /// Default is True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "abortCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AbortCreation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property errorMessage: The error message to be returned when the assert fails.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "errorMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorMessage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operation: The type of assertion to make.</summary>
            /// <remarks>
            /// The supported operations are:
            /// Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
            /// Default is Equal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "operation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Operation
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
