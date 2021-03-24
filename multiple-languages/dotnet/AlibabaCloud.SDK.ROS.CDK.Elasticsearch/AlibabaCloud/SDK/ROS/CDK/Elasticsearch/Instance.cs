using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Elasticsearch
{
    /// <summary>A ROS resource type:  `ALIYUN::ElasticSearch::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Elasticsearch.Instance), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearch.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-elasticsearch.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ElasticSearch::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Elasticsearch.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute Domain: Instance connection domain (only VPC network access supported).</summary>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceChargeType: Instance charge type.</summary>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of the Elasticsearch instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute KibanaDomain: Kibana console domain (Internet access supported).</summary>
        [JsiiProperty(name: "attrKibanaDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrKibanaDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute KibanaPort: Kibana console port.</summary>
        [JsiiProperty(name: "attrKibanaPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrKibanaPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Port:  Instance connection port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicDomain: Instance public connection domain.</summary>
        [JsiiProperty(name: "attrPublicDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Status: The Elasticsearch instance status.</summary>
        /// <remarks>
        /// Includes active, activating, inactive. Some operations are denied when status is not active.
        /// </remarks>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Version: Elasticsearch version.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The ID of VSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
