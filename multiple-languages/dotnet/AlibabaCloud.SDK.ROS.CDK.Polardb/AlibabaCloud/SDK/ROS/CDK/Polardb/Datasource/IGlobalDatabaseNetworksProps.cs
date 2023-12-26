using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `GlobalDatabaseNetworks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGlobalDatabaseNetworksProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps")]
    public interface IGlobalDatabaseNetworksProps
    {
        /// <summary>Property dbClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gdnId: The ID of the GDN.</summary>
        [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GdnId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `GlobalDatabaseNetworks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGlobalDatabaseNetworksProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gdnId: The ID of the GDN.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GdnId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
