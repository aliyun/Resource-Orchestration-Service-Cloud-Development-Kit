using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `Namespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property instanceId: Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property namespace: Project space name.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property resourceSpec: Resource specifications.</summary>
        [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespace.ResourceSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Namespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespace: Project space name.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceSpec: Resource specifications.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-flink.RosNamespace.ResourceSpecProperty\"}]}}", isOptional: true)]
            public object? ResourceSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
