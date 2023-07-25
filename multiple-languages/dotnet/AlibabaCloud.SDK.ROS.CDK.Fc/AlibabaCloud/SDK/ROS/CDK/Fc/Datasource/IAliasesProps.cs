using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::FC::Aliases`.</summary>
    [JsiiInterface(nativeType: typeof(IAliasesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.AliasesProps")]
    public interface IAliasesProps
    {
        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property prefix: Qualified returned alias names must be prefixed with Prefix.</summary>
        /// <remarks>
        /// For example, if the Prefix is "a", the returned alias names should be started with "a".
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
        [JsiiTypeProxy(nativeType: typeof(IAliasesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.AliasesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.IAliasesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property prefix: Qualified returned alias names must be prefixed with Prefix.</summary>
            /// <remarks>
            /// For example, if the Prefix is "a", the returned alias names should be started with "a".
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
