using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    /// <summary>A ROS resource type:  `ALIYUN::ACM::Configuration`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Acm.Configuration), fullyQualifiedName: "@alicloud/ros-cdk-acm.Configuration", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-acm.ConfigurationProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Configuration : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ACM::Configuration`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Configuration(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Configuration(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Configuration(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DataId: The ID of the configuration.</summary>
        [JsiiProperty(name: "attrDataId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDataId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Group: Group.</summary>
        [JsiiProperty(name: "attrGroup", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGroup
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NamespaceId: ID of namespace.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNamespaceId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
