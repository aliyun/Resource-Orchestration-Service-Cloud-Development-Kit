using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>A ROS resource type:  `ALIYUN::POLARDB::DBCluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.DBCluster), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBCluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBCluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::POLARDB::DBCluster`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public DBCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBCluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClusterConnectionString: The cluster connection string of the db cluster.</summary>
        [JsiiProperty(name: "attrClusterConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.</summary>
        [JsiiProperty(name: "attrClusterEndpointId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterEndpointId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CustomConnectionStrings: The custom connection strings of the db cluster.</summary>
        [JsiiProperty(name: "attrCustomConnectionStrings", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCustomConnectionStrings
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.</summary>
        [JsiiProperty(name: "attrCustomEndpointIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCustomEndpointIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.</summary>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBNodeIds: The ID list of cluster nodes.</summary>
        [JsiiProperty(name: "attrDbNodeIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbNodeIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The Order ID.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrimaryConnectionString: The primary connection string of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrimaryConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.</summary>
        [JsiiProperty(name: "attrPrimaryEndpointId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrimaryEndpointId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
