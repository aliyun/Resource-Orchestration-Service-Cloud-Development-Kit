using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `AccessControl`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessControl), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.IAccessControl")]
    public interface IAccessControl : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclEntries: The IP entries that you want to remove from the network ACL.</summary>
        [JsiiProperty(name: "attrAclEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclEntries
        {
            get;
        }

        /// <summary>Attribute AclId: The ID of the ACL.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
        {
            get;
        }

        /// <summary>Attribute AclName: The ACL name.</summary>
        [JsiiProperty(name: "attrAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclName
        {
            get;
        }

        /// <summary>Attribute AddressIpVersion: The IP version.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressIpVersion
        {
            get;
        }

        /// <summary>Attribute RelatedListeners: The listeners that are associated with the network ACL.</summary>
        [JsiiProperty(name: "attrRelatedListeners", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRelatedListeners
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.AccessControlProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IAccessControlProps Props
        {
            get;
        }

        /// <summary>Represents a `AccessControl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessControl), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.IAccessControl")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IAccessControl
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclEntries: The IP entries that you want to remove from the network ACL.</summary>
            [JsiiProperty(name: "attrAclEntries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclEntries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclId: The ID of the ACL.</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclName: The ACL name.</summary>
            [JsiiProperty(name: "attrAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AddressIpVersion: The IP version.</summary>
            /// <remarks>
            /// Valid values: ipv4 and ipv6.
            /// </remarks>
            [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressIpVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RelatedListeners: The listeners that are associated with the network ACL.</summary>
            [JsiiProperty(name: "attrRelatedListeners", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRelatedListeners
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the resource.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.AccessControlProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IAccessControlProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IAccessControlProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
