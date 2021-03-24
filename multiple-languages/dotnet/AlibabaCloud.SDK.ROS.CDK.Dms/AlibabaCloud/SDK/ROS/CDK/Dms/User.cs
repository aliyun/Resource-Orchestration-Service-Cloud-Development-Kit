using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>A ROS resource type:  `ALIYUN::DMS::User`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dms.User), fullyQualifiedName: "@alicloud/ros-cdk-dms.User", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dms.UserProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class User : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DMS::User`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public User(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dms.IUserProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected User(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected User(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Mobile: UserMobile.</summary>
        [JsiiProperty(name: "attrMobile", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMobile
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ParentUid: ParentAliYunUid.</summary>
        [JsiiProperty(name: "attrParentUid", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrParentUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RoleIds: UserRoleId.</summary>
        [JsiiProperty(name: "attrRoleIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRoleIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RoleNames: UserRole.</summary>
        [JsiiProperty(name: "attrRoleNames", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRoleNames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Uid: UserAliYunUid.</summary>
        [JsiiProperty(name: "attrUid", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: UserId.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserName: UserNickName.</summary>
        [JsiiProperty(name: "attrUserName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
