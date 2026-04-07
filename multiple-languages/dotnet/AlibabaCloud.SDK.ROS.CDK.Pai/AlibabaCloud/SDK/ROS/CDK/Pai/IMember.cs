using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Represents a `Member`.</summary>
    [JsiiInterface(nativeType: typeof(IMember), fullyQualifiedName: "@alicloud/ros-cdk-pai.IMember")]
    public interface IMember : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Create UTC time in ISO8601 format.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DisplayName: Member display name.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisplayName
        {
            get;
        }

        /// <summary>Attribute MemberId: The member ID.</summary>
        [JsiiProperty(name: "attrMemberId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemberId
        {
            get;
        }

        /// <summary>Attribute MemberName: The name of user.</summary>
        [JsiiProperty(name: "attrMemberName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemberName
        {
            get;
        }

        /// <summary>Attribute Roles: The list of roles.</summary>
        [JsiiProperty(name: "attrRoles", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoles
        {
            get;
        }

        /// <summary>Attribute UserId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.MemberProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.IMemberProps Props
        {
            get;
        }

        /// <summary>Represents a `Member`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMember), fullyQualifiedName: "@alicloud/ros-cdk-pai.IMember")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IMember
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Create UTC time in ISO8601 format.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisplayName: Member display name.</summary>
            [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemberId: The member ID.</summary>
            [JsiiProperty(name: "attrMemberId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemberId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemberName: The name of user.</summary>
            [JsiiProperty(name: "attrMemberName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemberName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Roles: The list of roles.</summary>
            [JsiiProperty(name: "attrRoles", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoles
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.MemberProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.IMemberProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.IMemberProps>()!;
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
