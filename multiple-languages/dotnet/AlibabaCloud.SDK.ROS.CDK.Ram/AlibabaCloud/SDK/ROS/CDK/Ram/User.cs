using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>A ROS resource type:  `ALIYUN::RAM::User`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ram.User), fullyQualifiedName: "@alicloud/ros-cdk-ram.User", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.UserProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class User : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::RAM::User`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public User(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute CreateDate: Create date of ram user.</summary>
        [JsiiProperty(name: "attrCreateDate", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCreateDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LastLoginDate: Last login date of ram user.</summary>
        [JsiiProperty(name: "attrLastLoginDate", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLastLoginDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: Id of ram user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserName: Name of ram user.</summary>
        [JsiiProperty(name: "attrUserName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
