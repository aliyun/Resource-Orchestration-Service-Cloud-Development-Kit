using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>A ROS resource type:  `ALIYUN::UIS::Uis`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Uis.Uis), fullyQualifiedName: "@alicloud/ros-cdk-uis.Uis", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-uis.UisProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Uis : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::UIS::Uis`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Uis(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Uis.IUisProps? props = null, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Uis(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Uis(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClientInfoDB: The client info DB.</summary>
        [JsiiProperty(name: "attrClientInfoDb", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClientInfoDb
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClientInfoDBAccount: The client info DB account.</summary>
        [JsiiProperty(name: "attrClientInfoDbAccount", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClientInfoDbAccount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClientInfoDBPassword: The client info DB password.</summary>
        [JsiiProperty(name: "attrClientInfoDbPassword", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClientInfoDbPassword
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SslClientCertUrl: The ssl client cert url.</summary>
        [JsiiProperty(name: "attrSslClientCertUrl", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSslClientCertUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UisId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrUisId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUisId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
