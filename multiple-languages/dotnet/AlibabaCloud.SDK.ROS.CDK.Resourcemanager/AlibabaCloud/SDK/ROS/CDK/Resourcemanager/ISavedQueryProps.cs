using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `SavedQuery`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISavedQueryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.SavedQueryProps")]
    public interface ISavedQueryProps
    {
        /// <summary>Property expression: The expression of the template.</summary>
        [JsiiProperty(name: "expression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Expression
        {
            get;
        }

        /// <summary>Property savedQueryName: The name of the template.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The name must be 1 to 64 characters in length.</description>
        /// <description>The name can contain letters, digits, underscores (_), and hyphens (-).</description>
        /// <description>The template name must be unique.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "savedQueryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SavedQueryName
        {
            get;
        }

        /// <summary>Property description: The description of the template.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length.
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

        /// <summary>Properties for defining a `SavedQuery`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISavedQueryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.SavedQueryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISavedQueryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property expression: The expression of the template.</summary>
            [JsiiProperty(name: "expression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Expression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property savedQueryName: The name of the template.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>The name must be 1 to 64 characters in length.</description>
            /// <description>The name can contain letters, digits, underscores (_), and hyphens (-).</description>
            /// <description>The template name must be unique.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "savedQueryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SavedQueryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the template.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length.
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
