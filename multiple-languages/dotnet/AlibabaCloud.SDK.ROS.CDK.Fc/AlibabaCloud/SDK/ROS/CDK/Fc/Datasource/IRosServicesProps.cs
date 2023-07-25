using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::FC::Services`.</summary>
    [JsiiInterface(nativeType: typeof(IRosServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.RosServicesProps")]
    public interface IRosServicesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
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

        /// <summary>Properties for defining a `DATASOURCE::FC::Services`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.RosServicesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.IRosServicesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
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
