using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ACM::Configurations`.</summary>
    [JsiiInterface(nativeType: typeof(IConfigurationsProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.ConfigurationsProps")]
    public interface IConfigurationsProps
    {
        /// <summary>Property namespaceId: The namespace ID of configuration.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <summary>Property appName: The app name of configuration.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataId: The data ID of configuration.</summary>
        [JsiiProperty(name: "dataId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property group: The group of configuration.</summary>
        [JsiiProperty(name: "group", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Group
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ACM::Configurations`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConfigurationsProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.ConfigurationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IConfigurationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespaceId: The namespace ID of configuration.</summary>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appName: The app name of configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataId: The data ID of configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property group: The group of configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "group", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Group
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
