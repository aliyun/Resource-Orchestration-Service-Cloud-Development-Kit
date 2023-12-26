using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `RosNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: Project space name.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceSpec: Resource specifications.
        /// </remarks>
        [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespace.ResourceSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: Project space name.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceSpec: Resource specifications.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespace.ResourceSpecProperty\"}]}}", isOptional: true)]
            public object? ResourceSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
