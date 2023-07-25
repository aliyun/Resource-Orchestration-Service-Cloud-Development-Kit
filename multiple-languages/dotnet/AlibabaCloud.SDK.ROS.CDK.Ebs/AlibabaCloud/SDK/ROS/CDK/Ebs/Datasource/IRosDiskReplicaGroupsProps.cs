using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDiskReplicaGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroupsProps")]
    public interface IRosDiskReplicaGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
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

        /// <remarks>
        /// <strong>Property</strong>: site: Site information sources for replication pairs and consistent replication groups. Possible values:
        /// - production: production site.
        /// - backup: disaster recovery site.
        /// </remarks>
        [JsiiProperty(name: "site", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Site
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskReplicaGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IRosDiskReplicaGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: site: Site information sources for replication pairs and consistent replication groups. Possible values:
            /// - production: production site.
            /// - backup: disaster recovery site.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "site", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Site
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
