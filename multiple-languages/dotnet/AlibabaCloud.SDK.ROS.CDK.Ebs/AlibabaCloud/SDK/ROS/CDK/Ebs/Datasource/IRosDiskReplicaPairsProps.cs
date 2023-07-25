using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDiskReplicaPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaPairsProps")]
    public interface IRosDiskReplicaPairsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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

        /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskReplicaPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaPairsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IRosDiskReplicaPairsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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
