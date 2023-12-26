using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `CenInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICenInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenInstancesProps")]
    public interface ICenInstancesProps
    {
        /// <summary>Property filter: Filter value when querying resources.</summary>
        [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenInstances.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CenInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICenInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property filter: Filter value when querying resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenInstances.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filter
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
