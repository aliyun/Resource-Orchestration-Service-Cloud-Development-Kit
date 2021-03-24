using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>A ROS resource type:  `ALIYUN::EDAS::UserDefineRegion`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Edas.UserDefineRegion), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegion", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-edas.UserDefineRegionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class UserDefineRegion : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::EDAS::UserDefineRegion`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public UserDefineRegion(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected UserDefineRegion(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected UserDefineRegion(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BelongRegion: Under the physical region ID.</summary>
        [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBelongRegion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DebugEnable: Whether debug is enable.</summary>
        [JsiiProperty(name: "attrDebugEnable", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDebugEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Id: Resource ID.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionName: Region name.</summary>
        [JsiiProperty(name: "attrRegionName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: User account ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
