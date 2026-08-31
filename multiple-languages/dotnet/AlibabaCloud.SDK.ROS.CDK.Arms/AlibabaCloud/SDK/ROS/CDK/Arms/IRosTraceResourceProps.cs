using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosTraceResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTraceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosTraceResourceProps")]
    public interface IRosTraceResourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appType: The application type of the trace resource. Allowed values: default, trace, cms.
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

        /// <remarks>
        /// <strong>Property</strong>: createAllResource: Whether to create all trace resources.
        /// </remarks>
        [JsiiProperty(name: "createAllResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateAllResource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: workspace: The workspace of the trace resource.
        /// </remarks>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Workspace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTraceResource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTraceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosTraceResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosTraceResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appType: The application type of the trace resource. Allowed values: default, trace, cms.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: createAllResource: Whether to create all trace resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createAllResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateAllResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workspace: The workspace of the trace resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Workspace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
