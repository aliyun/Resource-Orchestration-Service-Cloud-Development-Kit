using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairsProps")]
    public interface IDiskReplicaPairsProps
    {
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

        /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaPairsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
