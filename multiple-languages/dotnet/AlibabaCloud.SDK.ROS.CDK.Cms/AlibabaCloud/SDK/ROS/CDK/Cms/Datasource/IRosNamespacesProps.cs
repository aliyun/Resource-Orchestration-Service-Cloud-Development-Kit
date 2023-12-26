using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `RosNamespaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosNamespacesProps")]
    public interface IRosNamespacesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespace: Indicator warehouse name.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosNamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IRosNamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: Indicator warehouse name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
