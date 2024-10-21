using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `Namespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property namespace: Indicator warehouse name.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Namespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespace: Indicator warehouse name.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
