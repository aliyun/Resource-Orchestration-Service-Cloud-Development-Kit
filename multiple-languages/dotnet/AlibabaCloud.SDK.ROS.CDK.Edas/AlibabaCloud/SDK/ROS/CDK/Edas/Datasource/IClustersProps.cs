using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EDAS::Clusters`.</summary>
    [JsiiInterface(nativeType: typeof(IClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.datasource.ClustersProps")]
    public interface IClustersProps
    {
        /// <summary>Property logicalRegionId: The ID of the namespace.</summary>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::EDAS::Clusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.datasource.ClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.Datasource.IClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property logicalRegionId: The ID of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogicalRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
