using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CR::Namespaces`.</summary>
    [JsiiInterface(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.NamespacesProps")]
    public interface INamespacesProps
    {
        /// <summary>Property status: The status of namespace.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CR::Namespaces`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.NamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.Datasource.INamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property status: The status of namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
