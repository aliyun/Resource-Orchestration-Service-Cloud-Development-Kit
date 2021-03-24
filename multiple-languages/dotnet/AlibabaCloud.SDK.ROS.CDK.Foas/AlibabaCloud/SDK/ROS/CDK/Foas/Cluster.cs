using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>A ROS resource type:  `ALIYUN::FOAS::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Foas.Cluster), fullyQualifiedName: "@alicloud/ros-cdk-foas.Cluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-foas.ClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Cluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::FOAS::Cluster`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Cluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Foas.IClusterProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute ClusterId: Cluster ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineVersions: Engine Versions.</summary>
        [JsiiProperty(name: "attrEngineVersions", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEngineVersions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterInstanceInfos: Master instance infos.</summary>
        [JsiiProperty(name: "attrMasterInstanceInfos", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterInstanceInfos
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: Order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: Security group Id.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SlaveInstanceInfos: Slave instance infos.</summary>
        [JsiiProperty(name: "attrSlaveInstanceInfos", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSlaveInstanceInfos
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute State: Cluster status.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchIds: VSwitch Ids.</summary>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchIds
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
