using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `IpamScope`.</summary>
    [JsiiInterface(nativeType: typeof(IIpamScope), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpamScope")]
    public interface IIpamScope : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the IPAM scope.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute IpamId: The id of the Ipam instance.</summary>
        [JsiiProperty(name: "attrIpamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamId
        {
            get;
        }

        /// <summary>Attribute IpamScopeDescription: The description of the IPAM's scope of action.</summary>
        [JsiiProperty(name: "attrIpamScopeDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamScopeDescription
        {
            get;
        }

        /// <summary>Attribute IpamScopeId: The ID of the IPAM scope.</summary>
        [JsiiProperty(name: "attrIpamScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamScopeId
        {
            get;
        }

        /// <summary>Attribute IpamScopeName: The name of the IPAM scope.</summary>
        [JsiiProperty(name: "attrIpamScopeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamScopeName
        {
            get;
        }

        /// <summary>Attribute IpamScopeType: IPAM scope of action type.</summary>
        [JsiiProperty(name: "attrIpamScopeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamScopeType
        {
            get;
        }

        /// <summary>Attribute Tags: The tag of the IPAM scope.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamScopeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamScopeProps Props
        {
            get;
        }

        /// <summary>Represents a `IpamScope`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpamScope), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpamScope")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamScope
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the IPAM scope.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamId: The id of the Ipam instance.</summary>
            [JsiiProperty(name: "attrIpamId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamScopeDescription: The description of the IPAM's scope of action.</summary>
            [JsiiProperty(name: "attrIpamScopeDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamScopeDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamScopeId: The ID of the IPAM scope.</summary>
            [JsiiProperty(name: "attrIpamScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamScopeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamScopeName: The name of the IPAM scope.</summary>
            [JsiiProperty(name: "attrIpamScopeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamScopeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamScopeType: IPAM scope of action type.</summary>
            [JsiiProperty(name: "attrIpamScopeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamScopeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag of the IPAM scope.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamScopeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamScopeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamScopeProps>()!;
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
