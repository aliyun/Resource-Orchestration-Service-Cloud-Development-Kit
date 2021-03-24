using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS resource type:  `ALIYUN::ResourceManager::ResourceGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ResourceGroup), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ResourceGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ResourceGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::ResourceGroup`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ResourceGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceGroupProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceGroup(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAccountId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisplayName: The display name of the resource group.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDisplayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Id: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: The unique identifier of the resource group.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionStatuses: The status of the resource group in all regions.</summary>
        [JsiiProperty(name: "attrRegionStatuses", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionStatuses
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
