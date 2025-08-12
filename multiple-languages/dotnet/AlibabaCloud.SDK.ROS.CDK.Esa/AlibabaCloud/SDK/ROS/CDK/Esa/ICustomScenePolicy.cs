using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `CustomScenePolicy`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomScenePolicy), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICustomScenePolicy")]
    public interface ICustomScenePolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the policy takes effect.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CustomScenePolicyName: The name of the policy.</summary>
        [JsiiProperty(name: "attrCustomScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomScenePolicyName
        {
            get;
        }

        /// <summary>Attribute EndTime: The time when the policy expires.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute Objects: The IDs of websites associated.</summary>
        [JsiiProperty(name: "attrObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrObjects
        {
            get;
        }

        /// <summary>Attribute PolicyId: The Id of the Policy.</summary>
        [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyId
        {
            get;
        }

        /// <summary>Attribute Template: The name of the policy template.</summary>
        [JsiiProperty(name: "attrTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CustomScenePolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.ICustomScenePolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `CustomScenePolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomScenePolicy), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICustomScenePolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICustomScenePolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the policy takes effect.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CustomScenePolicyName: The name of the policy.</summary>
            [JsiiProperty(name: "attrCustomScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomScenePolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTime: The time when the policy expires.</summary>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Objects: The IDs of websites associated.</summary>
            [JsiiProperty(name: "attrObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrObjects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyId: The Id of the Policy.</summary>
            [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Template: The name of the policy template.</summary>
            [JsiiProperty(name: "attrTemplate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CustomScenePolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.ICustomScenePolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.ICustomScenePolicyProps>()!;
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
