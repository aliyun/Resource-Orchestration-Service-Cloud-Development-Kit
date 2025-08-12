using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Cluster`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mse.Cluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.Cluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Cluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Mse.ICluster
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Cluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Cluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Cluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.</summary>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclEntryList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclId: acl id.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AppVersion: app version.</summary>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAppVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterAliasName: cluster alias name.</summary>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterAliasName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterId: cluster id.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterName: cluster name.</summary>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterName
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
        public virtual object AttrClusterSpecification
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterType: cluster type.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.</summary>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigAuthEnabled: Whether the configuration supports it.</summary>
        /// <remarks>
        /// Valid values: true: false: not supported
        /// </remarks>
        [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigAuthEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigSecretEnabled: Whether the configuration password takes effect.</summary>
        /// <remarks>
        /// The value is as follows: true: valid false: not valid
        /// </remarks>
        [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigSecretEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionType: network connect type.</summary>
        [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cpu: cpu core size.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskCapacity: disk capacity, unit: G.</summary>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskType: disk type.</summary>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthStatus: health status.</summary>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceCount: instance count.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetAddress: internet address.</summary>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetDomain: internet domain.</summary>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetPort: internet port.</summary>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetAddress: intranet address.</summary>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetDomain: intranet domain.</summary>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetPort: intranet port.</summary>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.</summary>
        [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMcpEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemoryCapacity: memory capacity.</summary>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemoryCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MseVersion: Required, the value is as follows:.</summary>
        /// <remarks>
        /// -'mse_dev': indicates the development version.
        /// -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        /// </remarks>
        [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMseVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetType: Network type (whether private network is enabled or not).</summary>
        /// <remarks>
        /// privatenet indicates that private network is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PayInfo: pay info.</summary>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPayInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PubNetworkFlow: Public network bandwidth.</summary>
        /// <remarks>
        /// If the bandwidth is greater than 0, the public network is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPubNetworkFlow
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: vpc id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: switcher Id.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
