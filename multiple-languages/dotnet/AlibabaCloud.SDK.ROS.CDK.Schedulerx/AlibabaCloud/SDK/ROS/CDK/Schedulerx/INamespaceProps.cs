using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Schedulerx
{
    /// <summary>Properties for defining a `Namespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property name: The name of the namespace.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property description: The description of the namespace.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uid: Namespace UID is globally unique;</summary>
        /// <remarks>
        /// it is recommended to generate it using UUID.
        /// </remarks>
        [JsiiProperty(name: "uid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Uid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Namespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Schedulerx.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the namespace.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uid: Namespace UID is globally unique;</summary>
            /// <remarks>
            /// it is recommended to generate it using UUID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uid
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
