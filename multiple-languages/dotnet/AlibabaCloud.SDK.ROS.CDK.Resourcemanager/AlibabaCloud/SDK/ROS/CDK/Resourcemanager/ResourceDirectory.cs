using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS resource type:  `ALIYUN::ResourceManager::ResourceDirectory`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ResourceDirectory), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceDirectory", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ResourceDirectory : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::ResourceDirectory`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ResourceDirectory(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectoryProps? props = null, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceDirectory(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceDirectory(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute MasterAccountId: The ID of the master account.</summary>
        [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterAccountId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterAccountName: The name of the master account.</summary>
        [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterAccountName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceDirectoryId: The ID of the resource directory.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceDirectoryId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RootFolderId: The ID of the root folder.</summary>
        [JsiiProperty(name: "attrRootFolderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRootFolderId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
