using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RosNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespace: The name of the namespace.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoCreate: Specifies whether to automatically create an image repository.
        /// </remarks>
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoCreate
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "defaultVisibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultVisibility
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The name of the namespace.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoCreate: Specifies whether to automatically create an image repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoCreate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultVisibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultVisibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
