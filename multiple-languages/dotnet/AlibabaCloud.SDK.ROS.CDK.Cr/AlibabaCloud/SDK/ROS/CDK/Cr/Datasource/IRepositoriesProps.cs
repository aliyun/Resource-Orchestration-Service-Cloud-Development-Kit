using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CR::Repositories`.</summary>
    [JsiiInterface(nativeType: typeof(IRepositoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RepositoriesProps")]
    public interface IRepositoriesProps
    {
        /// <summary>Property repoNamespace: The namespace of repository.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNamespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of repository.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CR::Repositories`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRepositoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RepositoriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.Datasource.IRepositoriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property repoNamespace: The namespace of repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoNamespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
