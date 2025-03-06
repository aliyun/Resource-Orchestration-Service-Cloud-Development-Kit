using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Represents a `Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(ICluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.ICluster")]
    public interface ICluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.</summary>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclEntryList
        {
            get;
        }

        /// <summary>Attribute AclId: acl id.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
        {
            get;
        }

        /// <summary>Attribute AppVersion: app version.</summary>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppVersion
        {
            get;
        }

        /// <summary>Attribute ClusterAliasName: cluster alias name.</summary>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterAliasName
        {
            get;
        }

        /// <summary>Attribute ClusterId: cluster id.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute ClusterName: cluster name.</summary>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterName
        {
            get;
        }

        /// <summary>Attribute ClusterSpecification: Cluster specifications.</summary>
        /// <remarks>
        /// Note the msversion requirements of the version parameter,
        /// Optional parameters:
        /// "MSE_ SC <em>1_2_60_c",
        /// "MSE</em> SC <em>2_4_60_c",
        /// "MSE</em> SC <em>4_8_60_c",
        /// "MSE</em> SC <em>8_16_60_c",
        /// "MSE</em> SC _16_32_60_c"
        /// </remarks>
        [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterSpecification
        {
            get;
        }

        /// <summary>Attribute ClusterType: cluster type.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterType
        {
            get;
        }

        /// <summary>Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.</summary>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterVersion
        {
            get;
        }

        /// <summary>Attribute ConfigAuthEnabled: Whether the configuration supports it.</summary>
        /// <remarks>
        /// Valid values: true: false: not supported
        /// </remarks>
        [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigAuthEnabled
        {
            get;
        }

        /// <summary>Attribute ConfigSecretEnabled: Whether the configuration password takes effect.</summary>
        /// <remarks>
        /// The value is as follows: true: valid false: not valid
        /// </remarks>
        [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigSecretEnabled
        {
            get;
        }

        /// <summary>Attribute ConnectionType: network connect type.</summary>
        [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionType
        {
            get;
        }

        /// <summary>Attribute Cpu: cpu core size.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpu
        {
            get;
        }

        /// <summary>Attribute DiskCapacity: disk capacity, unit: G.</summary>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskCapacity
        {
            get;
        }

        /// <summary>Attribute DiskType: disk type.</summary>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskType
        {
            get;
        }

        /// <summary>Attribute HealthStatus: health status.</summary>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthStatus
        {
            get;
        }

        /// <summary>Attribute InstanceCount: instance count.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceCount
        {
            get;
        }

        /// <summary>Attribute InstanceId: instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InternetAddress: internet address.</summary>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetAddress
        {
            get;
        }

        /// <summary>Attribute InternetDomain: internet domain.</summary>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetDomain
        {
            get;
        }

        /// <summary>Attribute InternetPort: internet port.</summary>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetPort
        {
            get;
        }

        /// <summary>Attribute IntranetAddress: intranet address.</summary>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetAddress
        {
            get;
        }

        /// <summary>Attribute IntranetDomain: intranet domain.</summary>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetDomain
        {
            get;
        }

        /// <summary>Attribute IntranetPort: intranet port.</summary>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetPort
        {
            get;
        }

        /// <summary>Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.</summary>
        [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMcpEnabled
        {
            get;
        }

        /// <summary>Attribute MemoryCapacity: memory capacity.</summary>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemoryCapacity
        {
            get;
        }

        /// <summary>Attribute MseVersion: Required, the value is as follows:.</summary>
        /// <remarks>
        /// -'mse_dev': indicates the development version.
        /// -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        /// </remarks>
        [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMseVersion
        {
            get;
        }

        /// <summary>Attribute NetType: Network type (whether private network is enabled or not).</summary>
        /// <remarks>
        /// privatenet indicates that private network is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetType
        {
            get;
        }

        /// <summary>Attribute PayInfo: pay info.</summary>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPayInfo
        {
            get;
        }

        /// <summary>Attribute PubNetworkFlow: Public network bandwidth.</summary>
        /// <remarks>
        /// If the bandwidth is greater than 0, the public network is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPubNetworkFlow
        {
            get;
        }

        /// <summary>Attribute VpcId: vpc id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: switcher Id.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.ICluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.ICluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.</summary>
            [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclEntryList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclId: acl id.</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppVersion: app version.</summary>
            [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterAliasName: cluster alias name.</summary>
            [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterAliasName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterId: cluster id.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterName: cluster name.</summary>
            [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterSpecification: Cluster specifications.</summary>
            /// <remarks>
            /// Note the msversion requirements of the version parameter,
            /// Optional parameters:
            /// "MSE_ SC <em>1_2_60_c",
            /// "MSE</em> SC <em>2_4_60_c",
            /// "MSE</em> SC <em>4_8_60_c",
            /// "MSE</em> SC <em>8_16_60_c",
            /// "MSE</em> SC _16_32_60_c"
            /// </remarks>
            [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterSpecification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterType: cluster type.</summary>
            [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.</summary>
            [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigAuthEnabled: Whether the configuration supports it.</summary>
            /// <remarks>
            /// Valid values: true: false: not supported
            /// </remarks>
            [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigAuthEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigSecretEnabled: Whether the configuration password takes effect.</summary>
            /// <remarks>
            /// The value is as follows: true: valid false: not valid
            /// </remarks>
            [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigSecretEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionType: network connect type.</summary>
            [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cpu: cpu core size.</summary>
            [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskCapacity: disk capacity, unit: G.</summary>
            [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskType: disk type.</summary>
            [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthStatus: health status.</summary>
            [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceCount: instance count.</summary>
            [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: instance id.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetAddress: internet address.</summary>
            [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetDomain: internet domain.</summary>
            [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetPort: internet port.</summary>
            [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetAddress: intranet address.</summary>
            [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetDomain: intranet domain.</summary>
            [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetPort: intranet port.</summary>
            [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.</summary>
            [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMcpEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemoryCapacity: memory capacity.</summary>
            [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemoryCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MseVersion: Required, the value is as follows:.</summary>
            /// <remarks>
            /// -'mse_dev': indicates the development version.
            /// -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
            /// </remarks>
            [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMseVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetType: Network type (whether private network is enabled or not).</summary>
            /// <remarks>
            /// privatenet indicates that private network is enabled.
            /// </remarks>
            [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PayInfo: pay info.</summary>
            [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPayInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PubNetworkFlow: Public network bandwidth.</summary>
            /// <remarks>
            /// If the bandwidth is greater than 0, the public network is enabled.
            /// </remarks>
            [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPubNetworkFlow
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: vpc id.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: switcher Id.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
