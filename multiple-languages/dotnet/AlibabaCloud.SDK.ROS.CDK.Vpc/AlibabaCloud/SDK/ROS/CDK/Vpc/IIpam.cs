using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `Ipam`.</summary>
    [JsiiInterface(nativeType: typeof(IIpam), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpam")]
    public interface IIpam : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the IPAM.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.</summary>
        [JsiiProperty(name: "attrDefaultResourceDiscoveryAssociationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultResourceDiscoveryAssociationId
        {
            get;
        }

        /// <summary>Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.</summary>
        [JsiiProperty(name: "attrDefaultResourceDiscoveryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultResourceDiscoveryId
        {
            get;
        }

        /// <summary>Attribute IpamDescription: The description of IPAM.</summary>
        [JsiiProperty(name: "attrIpamDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamDescription
        {
            get;
        }

        /// <summary>Attribute IpamId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrIpamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamId
        {
            get;
        }

        /// <summary>Attribute IpamName: The name of the IPAM.</summary>
        [JsiiProperty(name: "attrIpamName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamName
        {
            get;
        }

        /// <summary>Attribute OperatingRegionList: List of IPAM effective regions.</summary>
        [JsiiProperty(name: "attrOperatingRegionList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperatingRegionList
        {
            get;
        }

        /// <summary>Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.</summary>
        [JsiiProperty(name: "attrPrivateDefaultScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateDefaultScopeId
        {
            get;
        }

        /// <summary>Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.</summary>
        [JsiiProperty(name: "attrPublicDefaultScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicDefaultScopeId
        {
            get;
        }

        /// <summary>Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.</summary>
        [JsiiProperty(name: "attrResourceDiscoveryAssociationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceDiscoveryAssociationCount
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Tags: The tag of the IPAM.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipam`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpam), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpam")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpam
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the IPAM.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.</summary>
            [JsiiProperty(name: "attrDefaultResourceDiscoveryAssociationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultResourceDiscoveryAssociationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.</summary>
            [JsiiProperty(name: "attrDefaultResourceDiscoveryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultResourceDiscoveryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamDescription: The description of IPAM.</summary>
            [JsiiProperty(name: "attrIpamDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrIpamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamName: The name of the IPAM.</summary>
            [JsiiProperty(name: "attrIpamName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperatingRegionList: List of IPAM effective regions.</summary>
            [JsiiProperty(name: "attrOperatingRegionList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperatingRegionList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.</summary>
            [JsiiProperty(name: "attrPrivateDefaultScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateDefaultScopeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.</summary>
            [JsiiProperty(name: "attrPublicDefaultScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicDefaultScopeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.</summary>
            [JsiiProperty(name: "attrResourceDiscoveryAssociationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceDiscoveryAssociationCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag of the IPAM.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamProps>()!;
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
