using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `ClientFileProtect`.</summary>
    [JsiiInterface(nativeType: typeof(IClientFileProtect), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IClientFileProtect")]
    public interface IClientFileProtect : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AlertLevel: The severity of alerts.</summary>
        [JsiiProperty(name: "attrAlertLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlertLevel
        {
            get;
        }

        /// <summary>Attribute FileOps: The operations that you want to perform on the files.</summary>
        [JsiiProperty(name: "attrFileOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileOps
        {
            get;
        }

        /// <summary>Attribute FilePaths: The paths to the monitored files.</summary>
        /// <remarks>
        /// Wildcard characters are supported.
        /// </remarks>
        [JsiiProperty(name: "attrFilePaths", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFilePaths
        {
            get;
        }

        /// <summary>Attribute Platform: The type of the operating system.</summary>
        [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlatform
        {
            get;
        }

        /// <summary>Attribute ProcPaths: The paths to the monitored processes.</summary>
        [JsiiProperty(name: "attrProcPaths", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProcPaths
        {
            get;
        }

        /// <summary>Attribute RuleAction: The handling method of the rule.</summary>
        [JsiiProperty(name: "attrRuleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleAction
        {
            get;
        }

        /// <summary>Attribute RuleId: The ID of the rule.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleId
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute SwitchId: The switch ID of the rule.</summary>
        [JsiiProperty(name: "attrSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSwitchId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ClientFileProtectProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IClientFileProtectProps Props
        {
            get;
        }

        /// <summary>Represents a `ClientFileProtect`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClientFileProtect), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IClientFileProtect")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IClientFileProtect
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AlertLevel: The severity of alerts.</summary>
            [JsiiProperty(name: "attrAlertLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlertLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FileOps: The operations that you want to perform on the files.</summary>
            [JsiiProperty(name: "attrFileOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileOps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FilePaths: The paths to the monitored files.</summary>
            /// <remarks>
            /// Wildcard characters are supported.
            /// </remarks>
            [JsiiProperty(name: "attrFilePaths", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFilePaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Platform: The type of the operating system.</summary>
            [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlatform
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProcPaths: The paths to the monitored processes.</summary>
            [JsiiProperty(name: "attrProcPaths", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProcPaths
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleAction: The handling method of the rule.</summary>
            [JsiiProperty(name: "attrRuleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleId: The ID of the rule.</summary>
            [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SwitchId: The switch ID of the rule.</summary>
            [JsiiProperty(name: "attrSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ClientFileProtectProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IClientFileProtectProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IClientFileProtectProps>()!;
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
