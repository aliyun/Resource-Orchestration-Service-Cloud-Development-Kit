using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>A ROS resource type:  `ALIYUN::MSE::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mse.Cluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.Cluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Cluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::MSE::Cluster`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Cluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
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

        /// <summary>Attribute AclEntryList: acl entry list.</summary>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAclEntryList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclId: acl id.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAclId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AppVersion: app version.</summary>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAppVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterAliasName: cluster alias name.</summary>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterAliasName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterId: cluster id.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterName: cluster name.</summary>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.</summary>
        [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterSpecification
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterType: cluster type.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.</summary>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cpu: cpu core size.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskCapacity: disk capacity, unit: G.</summary>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDiskCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskType: disk type.</summary>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDiskType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthStatus: health status.</summary>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHealthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED.</summary>
        [JsiiProperty(name: "attrInitStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInitStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceCount: instance count.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetAddress: internet address.</summary>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetDomain: internet domain.</summary>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetPort: internet port.</summary>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetAddress: intranet address.</summary>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetDomain: intranet domain.</summary>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetPort: intranet port.</summary>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MemoryCapacity: memory capacity.</summary>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMemoryCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetType: network type, Enum: privatenet,pubnet.</summary>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNetType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: order id.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PayInfo: pay info.</summary>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPayInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PubNetworkFlow: pub network flow.</summary>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPubNetworkFlow
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionId: region id.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: vpc id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: switcher Id.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
