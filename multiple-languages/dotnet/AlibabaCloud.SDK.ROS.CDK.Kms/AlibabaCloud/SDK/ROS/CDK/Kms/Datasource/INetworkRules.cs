using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Represents a `NetworkRules`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkRules), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.INetworkRules")]
    public interface INetworkRules : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NetworkRuleNames: The list of network rule names.</summary>
        [JsiiProperty(name: "attrNetworkRuleNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkRuleNames
        {
            get;
        }

        /// <summary>Attribute NetworkRules: The list of network rules.</summary>
        [JsiiProperty(name: "attrNetworkRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkRules
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.NetworkRulesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.INetworkRulesProps Props
        {
            get;
        }

        /// <summary>Represents a `NetworkRules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkRules), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.INetworkRules")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.INetworkRules
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NetworkRuleNames: The list of network rule names.</summary>
            [JsiiProperty(name: "attrNetworkRuleNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkRuleNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkRules: The list of network rules.</summary>
            [JsiiProperty(name: "attrNetworkRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkRules
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.NetworkRulesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.INetworkRulesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.INetworkRulesProps>()!;
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
