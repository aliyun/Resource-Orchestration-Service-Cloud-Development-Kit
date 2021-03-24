using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS resource type:  `ALIYUN::ResourceManager::Account`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.Account), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.Account", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.AccountProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Account : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::Account`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Account(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Account(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Account(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccountId: This ID of Resource Manager Account.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAccountId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisplayName: Member name.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDisplayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FolderId: The ID of the parent folder.</summary>
        [JsiiProperty(name: "attrFolderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFolderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JoinMethod: Ways for members to join the resource directory.</summary>
        /// <remarks>
        /// Valid values: invited, created
        /// </remarks>
        [JsiiProperty(name: "attrJoinMethod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrJoinMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceDirectoryId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Type: Member type.</summary>
        /// <remarks>
        /// The value of ResourceAccount indicates the resource account
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
