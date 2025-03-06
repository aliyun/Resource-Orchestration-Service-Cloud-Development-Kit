using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `Policy`.</summary>
    [JsiiInterface(nativeType: typeof(IPolicy), fullyQualifiedName: "@alicloud/ros-cdk-apig.IPolicy")]
    public interface IPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PolicyClassId: The ID of policy class.</summary>
        [JsiiProperty(name: "attrPolicyClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyClassId
        {
            get;
        }

        /// <summary>Attribute PolicyClassName: The name of policy class.</summary>
        [JsiiProperty(name: "attrPolicyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyClassName
        {
            get;
        }

        /// <summary>Attribute PolicyConfig: Policy Configuration.</summary>
        [JsiiProperty(name: "attrPolicyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyConfig
        {
            get;
        }

        /// <summary>Attribute PolicyId: The ID of the policy.</summary>
        [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyId
        {
            get;
        }

        /// <summary>Attribute PolicyName: The name of the policy.</summary>
        [JsiiProperty(name: "attrPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.PolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `Policy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPolicy), fullyQualifiedName: "@alicloud/ros-cdk-apig.IPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PolicyClassId: The ID of policy class.</summary>
            [JsiiProperty(name: "attrPolicyClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyClassId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyClassName: The name of policy class.</summary>
            [JsiiProperty(name: "attrPolicyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyConfig: Policy Configuration.</summary>
            [JsiiProperty(name: "attrPolicyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyId: The ID of the policy.</summary>
            [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyName: The name of the policy.</summary>
            [JsiiProperty(name: "attrPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.PolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IPolicyProps>()!;
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
