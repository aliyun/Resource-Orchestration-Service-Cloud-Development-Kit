using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    /// <summary>A ROS resource type:  `ALIYUN::GWS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Gws.Instance), fullyQualifiedName: "@alicloud/ros-cdk-gws.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-gws.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::GWS::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Gws.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClusterId: Cluster id.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceChargeType: Instance charge type.</summary>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: Instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).</summary>
        [JsiiProperty(name: "attrMaxBandwidthIn", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMaxBandwidthIn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).</summary>
        [JsiiProperty(name: "attrMaxBandwidthOut", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMaxBandwidthOut
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: Instance name.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
