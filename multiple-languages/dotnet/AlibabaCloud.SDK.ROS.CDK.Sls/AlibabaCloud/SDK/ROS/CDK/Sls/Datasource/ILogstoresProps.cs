using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    /// <summary>Properties for defining a `Logstores`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILogstoresProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.LogstoresProps")]
    public interface ILogstoresProps
    {
        /// <summary>Property project: Project name.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property logstoreName: Logstore name.</summary>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogstoreName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Logstores`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILogstoresProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.LogstoresProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.ILogstoresProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property project: Project name.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logstoreName: Logstore name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogstoreName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
