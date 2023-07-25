using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SLS::Logstores`.</summary>
    [JsiiInterface(nativeType: typeof(IRosLogstoresProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosLogstoresProps")]
    public interface IRosLogstoresProps
    {
        /// <remarks>
        /// <strong>Property</strong>: project: Project name.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogstoreName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::SLS::Logstores`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosLogstoresProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosLogstoresProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.IRosLogstoresProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: project: Project name.
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstoreName: Logstore name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogstoreName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
