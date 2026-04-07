using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Represents a `AccessControl`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessControl), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.IAccessControl")]
    public interface IAccessControl : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccessControlListName: The name of the ACL.</summary>
        [JsiiProperty(name: "attrAccessControlListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessControlListName
        {
            get;
        }

        /// <summary>Attribute AclEntrys: Information list of access control policies.</summary>
        [JsiiProperty(name: "attrAclEntrys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclEntrys
        {
            get;
        }

        /// <summary>Attribute AclId: The ID of the access control list (ACL).</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
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

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apigateway.AccessControlProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.IAccessControlProps Props
        {
            get;
        }

        /// <summary>Represents a `AccessControl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessControl), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.IAccessControl")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IAccessControl
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccessControlListName: The name of the ACL.</summary>
            [JsiiProperty(name: "attrAccessControlListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessControlListName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclEntrys: Information list of access control policies.</summary>
            [JsiiProperty(name: "attrAclEntrys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclEntrys
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclId: The ID of the access control list (ACL).</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
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

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apigateway.AccessControlProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.IAccessControlProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.IAccessControlProps>()!;
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
