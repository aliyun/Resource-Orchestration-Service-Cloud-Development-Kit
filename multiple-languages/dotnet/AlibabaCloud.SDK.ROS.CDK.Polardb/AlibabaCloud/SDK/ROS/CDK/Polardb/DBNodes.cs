using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>A ROS resource type:  `ALIYUN::POLARDB::DBNodes`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.DBNodes), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBNodes", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-polardb.DBNodesProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBNodes : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::POLARDB::DBNodes`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public DBNodes(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBNodesProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBNodes(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBNodes(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DBNodeIds: The ID list of added cluster nodes.</summary>
        [JsiiProperty(name: "attrDbNodeIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbNodeIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderIds: The order ID list of added cluster nodes.</summary>
        [JsiiProperty(name: "attrOrderIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderIds
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
