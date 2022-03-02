using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::Namespace`.</summary>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property namespace: The name of the namespace.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property autoCreate: Specifies whether to automatically create an image repository.</summary>
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoCreate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultVisibility: The default type of the repository that is automatically created.</summary>
        /// <remarks>
        /// Valid values: PUBLIC, PRIVATE.
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

        /// <summary>Property instanceId: The ID of the enterprise edition instance which namespace belongs to.</summary>
        /// <remarks>
        /// If not provided, will use personal edition instance as default.
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

        /// <summary>Properties for defining a `ALIYUN::CR::Namespace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespace: The name of the namespace.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoCreate: Specifies whether to automatically create an image repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoCreate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultVisibility: The default type of the repository that is automatically created.</summary>
            /// <remarks>
            /// Valid values: PUBLIC, PRIVATE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultVisibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultVisibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the enterprise edition instance which namespace belongs to.</summary>
            /// <remarks>
            /// If not provided, will use personal edition instance as default.
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
