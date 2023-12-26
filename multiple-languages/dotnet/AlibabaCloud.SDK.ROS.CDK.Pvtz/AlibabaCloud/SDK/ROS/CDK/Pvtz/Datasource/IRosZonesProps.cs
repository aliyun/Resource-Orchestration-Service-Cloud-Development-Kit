using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Properties for defining a `RosZones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RosZonesProps")]
    public interface IRosZonesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: ResourceGroupId
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosZones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RosZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRosZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: ResourceGroupId
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
