using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `AttackPathWhitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IAttackPathWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAttackPathWhitelist")]
    public interface IAttackPathWhitelist : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AttackPathAssetList: List of attack path assets.</summary>
        [JsiiProperty(name: "attrAttackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttackPathAssetList
        {
            get;
        }

        /// <summary>Attribute AttackPathWhitelistId: The attack path whitelist ID.</summary>
        [JsiiProperty(name: "attrAttackPathWhitelistId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttackPathWhitelistId
        {
            get;
        }

        /// <summary>Attribute PathName: The whitelist path name.</summary>
        [JsiiProperty(name: "attrPathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPathName
        {
            get;
        }

        /// <summary>Attribute PathType: The whitelist path type.</summary>
        [JsiiProperty(name: "attrPathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPathType
        {
            get;
        }

        /// <summary>Attribute Remark: Remark information.</summary>
        [JsiiProperty(name: "attrRemark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemark
        {
            get;
        }

        /// <summary>Attribute WhitelistName: The whitelist name.</summary>
        [JsiiProperty(name: "attrWhitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWhitelistName
        {
            get;
        }

        /// <summary>Attribute WhitelistType: The whitelist type.</summary>
        [JsiiProperty(name: "attrWhitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWhitelistType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathWhitelistProps Props
        {
            get;
        }

        /// <summary>Represents a `AttackPathWhitelist`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAttackPathWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAttackPathWhitelist")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathWhitelist
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AttackPathAssetList: List of attack path assets.</summary>
            [JsiiProperty(name: "attrAttackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttackPathAssetList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttackPathWhitelistId: The attack path whitelist ID.</summary>
            [JsiiProperty(name: "attrAttackPathWhitelistId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttackPathWhitelistId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PathName: The whitelist path name.</summary>
            [JsiiProperty(name: "attrPathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPathName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PathType: The whitelist path type.</summary>
            [JsiiProperty(name: "attrPathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPathType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Remark: Remark information.</summary>
            [JsiiProperty(name: "attrRemark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemark
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WhitelistName: The whitelist name.</summary>
            [JsiiProperty(name: "attrWhitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWhitelistName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WhitelistType: The whitelist type.</summary>
            [JsiiProperty(name: "attrWhitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWhitelistType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathWhitelistProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathWhitelistProps>()!;
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
