using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `TraceResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITraceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.TraceResourceProps")]
    public interface ITraceResourceProps
    {
        /// <summary>Property appType: The application type of the trace resource.</summary>
        /// <remarks>
        /// Allowed values: default, trace, cms.
        /// </remarks>
        [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createAllResource: Whether to create all trace resources.</summary>
        [JsiiProperty(name: "createAllResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateAllResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspace: The workspace of the trace resource.</summary>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Workspace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TraceResource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITraceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.TraceResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.ITraceResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appType: The application type of the trace resource.</summary>
            /// <remarks>
            /// Allowed values: default, trace, cms.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createAllResource: Whether to create all trace resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "createAllResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateAllResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspace: The workspace of the trace resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Workspace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
