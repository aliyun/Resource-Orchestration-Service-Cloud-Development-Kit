using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CR::Repositories`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRepositoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RosRepositoriesProps")]
    public interface IRosRepositoriesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: The namespace of repository.
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNamespace
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of repository.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosRepositoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RosRepositoriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.Datasource.IRosRepositoriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNamespace: The namespace of repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoNamespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
