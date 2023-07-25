using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::PVTZ::Zones`.</summary>
    [JsiiInterface(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.ZonesProps")]
    public interface IZonesProps
    {
        /// <summary>Property resourceGroupId: ResourceGroupId.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::PVTZ::Zones`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.ZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceGroupId: ResourceGroupId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
