using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `Namespaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.NamespacesProps")]
    public interface INamespacesProps
    {
        /// <summary>Property namespace: Indicator warehouse name.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Namespaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.NamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.INamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespace: Indicator warehouse name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
