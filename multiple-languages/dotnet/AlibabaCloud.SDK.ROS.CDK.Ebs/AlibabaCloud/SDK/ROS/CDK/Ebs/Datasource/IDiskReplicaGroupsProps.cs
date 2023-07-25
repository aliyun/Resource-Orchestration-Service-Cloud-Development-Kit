using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupsProps")]
    public interface IDiskReplicaGroupsProps
    {
        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property site: Site information sources for replication pairs and consistent replication groups.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description>production: production site.</description>
        /// <description>backup: disaster recovery site.</description>
        /// </list>
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
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceGroupId: The ID of resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property site: Site information sources for replication pairs and consistent replication groups.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description>production: production site.</description>
            /// <description>backup: disaster recovery site.</description>
            /// </list>
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
