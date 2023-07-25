using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::FC::Aliases`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAliasesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.RosAliasesProps")]
    public interface IRosAliasesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
        /// </remarks>
        [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Prefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::FC::Aliases`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAliasesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.RosAliasesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.IRosAliasesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Prefix
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
