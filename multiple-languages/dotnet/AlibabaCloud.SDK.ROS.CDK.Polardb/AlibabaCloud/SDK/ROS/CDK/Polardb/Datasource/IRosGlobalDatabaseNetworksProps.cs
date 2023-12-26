using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `RosGlobalDatabaseNetworks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGlobalDatabaseNetworksProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosGlobalDatabaseNetworksProps")]
    public interface IRosGlobalDatabaseNetworksProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gdnId: The ID of the GDN.
        /// </remarks>
        [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GdnId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosGlobalDatabaseNetworks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGlobalDatabaseNetworksProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosGlobalDatabaseNetworksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IRosGlobalDatabaseNetworksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gdnId: The ID of the GDN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GdnId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
