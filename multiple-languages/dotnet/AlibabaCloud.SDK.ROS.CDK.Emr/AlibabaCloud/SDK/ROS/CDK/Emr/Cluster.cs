using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>A ROS resource type:  `ALIYUN::EMR::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Emr.Cluster), fullyQualifiedName: "@alicloud/ros-cdk-emr.Cluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-emr.ClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Cluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::EMR::Cluster`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Cluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Emr.IClusterProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostGroups: The host group list of the cluster.</summary>
        [JsiiProperty(name: "attrHostGroups", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostGroups
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.</summary>
        [JsiiProperty(name: "attrMasterNodeInnerIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterNodeInnerIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterNodePubIps: The public ip list of the cluster master nodes.</summary>
        [JsiiProperty(name: "attrMasterNodePubIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterNodePubIps
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
