using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::RAM::User`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ram.User), fullyQualifiedName: "@alicloud/ros-cdk-ram.User", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.UserProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class User : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ram.IUser, AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public User(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
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

        /// <summary>Add to the policy of this principal.</summary>
        [JsiiMethod(name: "addToPolicy", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"name\":\"policyDocument\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy AddToPolicy(AlibabaCloud.SDK.ROS.CDK.Ram.RosManagedPolicy.IPolicyDocumentProperty policyDocument)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.RosManagedPolicy.IPolicyDocumentProperty)}, new object[]{policyDocument})!;
        }

        /// <summary>Attribute CreateDate: Create date of ram user.</summary>
        [JsiiProperty(name: "attrCreateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LastLoginDate: Last login date of ram user.</summary>
        [JsiiProperty(name: "attrLastLoginDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLastLoginDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: Id of ram user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserName: Name of ram user.</summary>
        [JsiiProperty(name: "attrUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>The principal to grant permissions to.</summary>
        [JsiiProperty(name: "grantPrincipal", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal GrantPrincipal
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal>()!;
        }

        /// <summary>The principal to grant permissions to.</summary>
        [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object PrincipalName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>The principal type, such as 'Group', 'Role', 'User'.</summary>
        [JsiiProperty(name: "principalType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PrincipalType
        {
            get => GetInstanceProperty<string>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.UserProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
