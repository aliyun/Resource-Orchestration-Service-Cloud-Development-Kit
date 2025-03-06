using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource
{
    /// <summary>Represents a `AntiBruteForceRules`.</summary>
    [JsiiInterface(nativeType: typeof(IAntiBruteForceRules), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.datasource.IAntiBruteForceRules")]
    public interface IAntiBruteForceRules : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.</summary>
        [JsiiProperty(name: "attrAntiBruteForceRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAntiBruteForceRuleIds
        {
            get;
        }

        /// <summary>Attribute AntiBruteForceRules: The list of anti brute force rules.</summary>
        [JsiiProperty(name: "attrAntiBruteForceRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAntiBruteForceRules
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRulesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource.IAntiBruteForceRulesProps Props
        {
            get;
        }

        /// <summary>Represents a `AntiBruteForceRules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAntiBruteForceRules), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.datasource.IAntiBruteForceRules")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource.IAntiBruteForceRules
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.</summary>
            [JsiiProperty(name: "attrAntiBruteForceRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAntiBruteForceRuleIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AntiBruteForceRules: The list of anti brute force rules.</summary>
            [JsiiProperty(name: "attrAntiBruteForceRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAntiBruteForceRules
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRulesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource.IAntiBruteForceRulesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource.IAntiBruteForceRulesProps>()!;
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
