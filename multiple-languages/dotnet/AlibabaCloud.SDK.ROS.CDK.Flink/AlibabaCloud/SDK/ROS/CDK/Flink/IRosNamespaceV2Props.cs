using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `RosNamespaceV2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosNamespaceV2Props")]
    public interface IRosNamespaceV2Props
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
        [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespaceV2.ResourceSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespaceV2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespacev2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceV2Props), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosNamespaceV2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.IRosNamespaceV2Props
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
            [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespaceV2.ResourceSpecProperty\"}]}}", isOptional: true)]
            public object? ResourceSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
