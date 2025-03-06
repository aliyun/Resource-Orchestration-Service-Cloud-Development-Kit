using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Represents a `SecurityPreference`.</summary>
    [JsiiInterface(nativeType: typeof(ISecurityPreference), fullyQualifiedName: "@alicloud/ros-cdk-ram.ISecurityPreference")]
    public interface ISecurityPreference : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.</summary>
        [JsiiProperty(name: "attrAllowUserToChangePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllowUserToChangePassword
        {
            get;
        }

        /// <summary>Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.</summary>
        [JsiiProperty(name: "attrAllowUserToManageAccessKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllowUserToManageAccessKeys
        {
            get;
        }

        /// <summary>Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.</summary>
        [JsiiProperty(name: "attrAllowUserToManageMfaDevices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllowUserToManageMfaDevices
        {
            get;
        }

        /// <summary>Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.</summary>
        [JsiiProperty(name: "attrAllowUserToManagePublicKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllowUserToManagePublicKeys
        {
            get;
        }

        /// <summary>Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.</summary>
        [JsiiProperty(name: "attrEnableSaveMfaTicket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableSaveMfaTicket
        {
            get;
        }

        /// <summary>Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.</summary>
        [JsiiProperty(name: "attrLoginNetworkMasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoginNetworkMasks
        {
            get;
        }

        /// <summary>Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.</summary>
        [JsiiProperty(name: "attrLoginSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoginSessionDuration
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.SecurityPreferenceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ram.ISecurityPreferenceProps Props
        {
            get;
        }

        /// <summary>Represents a `SecurityPreference`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecurityPreference), fullyQualifiedName: "@alicloud/ros-cdk-ram.ISecurityPreference")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.ISecurityPreference
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.</summary>
            [JsiiProperty(name: "attrAllowUserToChangePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllowUserToChangePassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.</summary>
            [JsiiProperty(name: "attrAllowUserToManageAccessKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllowUserToManageAccessKeys
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.</summary>
            [JsiiProperty(name: "attrAllowUserToManageMfaDevices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllowUserToManageMfaDevices
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.</summary>
            [JsiiProperty(name: "attrAllowUserToManagePublicKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllowUserToManagePublicKeys
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.</summary>
            [JsiiProperty(name: "attrEnableSaveMfaTicket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableSaveMfaTicket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.</summary>
            [JsiiProperty(name: "attrLoginNetworkMasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoginNetworkMasks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.</summary>
            [JsiiProperty(name: "attrLoginSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoginSessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.SecurityPreferenceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.ISecurityPreferenceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.ISecurityPreferenceProps>()!;
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
