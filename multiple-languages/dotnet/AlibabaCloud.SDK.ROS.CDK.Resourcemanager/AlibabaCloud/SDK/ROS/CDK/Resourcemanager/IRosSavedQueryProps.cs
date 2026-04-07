using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosSavedQuery`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSavedQueryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosSavedQueryProps")]
    public interface IRosSavedQueryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: expression: The expression of the template.
        /// </remarks>
        [JsiiProperty(name: "expression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Expression
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: savedQueryName: The name of the template.
        /// * The name must be 1 to 64 characters in length.
        /// * The name can contain letters, digits, underscores (_), and hyphens (-).
        /// * The template name must be unique.
        /// </remarks>
        [JsiiProperty(name: "savedQueryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SavedQueryName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the template. The description must be 1 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSavedQuery`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSavedQueryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosSavedQueryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosSavedQueryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: expression: The expression of the template.
            /// </remarks>
            [JsiiProperty(name: "expression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Expression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: savedQueryName: The name of the template.
            /// * The name must be 1 to 64 characters in length.
            /// * The name can contain letters, digits, underscores (_), and hyphens (-).
            /// * The template name must be unique.
            /// </remarks>
            [JsiiProperty(name: "savedQueryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SavedQueryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the template. The description must be 1 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
