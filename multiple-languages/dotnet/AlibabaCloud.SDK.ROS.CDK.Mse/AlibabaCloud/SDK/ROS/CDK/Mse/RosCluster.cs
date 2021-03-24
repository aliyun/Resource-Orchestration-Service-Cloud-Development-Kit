using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>A ROS template type:  `ALIYUN::MSE::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mse.RosCluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::MSE::Cluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mse.IRosClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Mse.RosCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AclEntryList: acl entry list
        /// </remarks>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAclEntryList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AclId: acl id
        /// </remarks>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAclId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AppVersion: app version
        /// </remarks>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAppVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterAliasName: cluster alias name
        /// </remarks>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterAliasName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: cluster id
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterName: cluster name
        /// </remarks>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        /// </remarks>
        [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterSpecification
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterType: cluster type
        /// </remarks>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        /// </remarks>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Cpu: cpu core size
        /// </remarks>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCpu
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DiskCapacity: disk capacity, unit: G
        /// </remarks>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDiskCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DiskType: disk type
        /// </remarks>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDiskType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HealthStatus: health status
        /// </remarks>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHealthStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED
        /// </remarks>
        [JsiiProperty(name: "attrInitStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInitStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceCount: instance count
        /// </remarks>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: instance id
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternetAddress: internet address
        /// </remarks>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternetDomain: internet domain
        /// </remarks>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternetPort: internet port
        /// </remarks>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IntranetAddress: intranet address
        /// </remarks>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IntranetDomain: intranet domain
        /// </remarks>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IntranetPort: intranet port
        /// </remarks>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MemoryCapacity: memory capacity
        /// </remarks>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMemoryCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: NetType: network type, Enum: privatenet,pubnet
        /// </remarks>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNetType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: order id
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PayInfo: pay info
        /// </remarks>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPayInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PubNetworkFlow: pub network flow
        /// </remarks>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPubNetworkFlow
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RegionId: region id
        /// </remarks>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcId: vpc id
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VSwitchId: switcher Id
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        /// </remarks>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterSpecification
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: cluster type
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        /// </remarks>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterVersion
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceCount: instance count
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double InstanceCount
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: network type, Enum: privatenet,pubnet
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string NetType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: disk type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DiskType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: privateSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PrivateSlbSpecification
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pubNetworkFlow: pub network flow
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PubNetworkFlow
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pubSlbSpecification:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PubSlbSpecification
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: vpc id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: switcher Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
