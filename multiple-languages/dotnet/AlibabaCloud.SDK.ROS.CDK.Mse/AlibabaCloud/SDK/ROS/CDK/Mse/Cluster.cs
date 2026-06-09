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

        /// <summary>Attribute AclEntryList: The list of ACL entries.</summary>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclEntryList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclId: The ID of the ACL.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AppVersion: The version of the application.</summary>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAppVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterAliasName: The alias name of the cluster.</summary>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterAliasName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterName: The name of the cluster.</summary>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterSpecification: The specification of the cluster.</summary>
        [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterSpecification
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterType: The type of the cluster.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterVersion: The version of the cluster.</summary>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.</summary>
        [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigAuthEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigSecretEnabled: Whether to enable the configuration secret.</summary>
        [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigSecretEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionType: The connection type.</summary>
        [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cpu: The number of CPU cores.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskCapacity: The disk capacity.</summary>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskType: The disk type.</summary>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthStatus: The health status of the cluster.</summary>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceCount: The number of instances.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of the cluster instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetAddress: The public network address of the cluster.</summary>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetDomain: The public network domain of the cluster.</summary>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetPort: The public network port of the cluster.</summary>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetAddress: The intranet address of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetDomain: The intranet domain of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetPort: The intranet port of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIntranetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MCPEnabled: Whether to enable the MCP.</summary>
        [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMcpEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemoryCapacity: The memory capacity.</summary>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMemoryCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MseVersion: The MSE version.</summary>
        [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMseVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetType: The network type.</summary>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PayInfo: The payment information.</summary>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPayInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PubNetworkFlow: The public network flow.</summary>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPubNetworkFlow
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The ID of the VSwitch.</summary>
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
