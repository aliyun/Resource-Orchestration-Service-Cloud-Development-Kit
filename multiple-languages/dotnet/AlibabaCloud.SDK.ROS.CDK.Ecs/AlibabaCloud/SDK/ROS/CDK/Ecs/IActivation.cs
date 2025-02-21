using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `Activation`.</summary>
    [JsiiInterface(nativeType: typeof(IActivation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IActivation")]
    public interface IActivation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ActivationCode: Activation code.</summary>
        [JsiiProperty(name: "attrActivationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActivationCode
        {
            get;
        }

        /// <summary>Attribute ActivationId: Activation code ID.</summary>
        [JsiiProperty(name: "attrActivationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActivationId
        {
            get;
        }

        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute DeregisteredCount: The number of instances that have been logged out.</summary>
        [JsiiProperty(name: "attrDeregisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeregisteredCount
        {
            get;
        }

        /// <summary>Attribute RegisteredCount: The number of registered instances.</summary>
        [JsiiProperty(name: "attrRegisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegisteredCount
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.ActivationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IActivationProps Props
        {
            get;
        }

        /// <summary>Represents a `Activation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IActivation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IActivation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IActivation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ActivationCode: Activation code.</summary>
            [JsiiProperty(name: "attrActivationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActivationCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ActivationId: Activation code ID.</summary>
            [JsiiProperty(name: "attrActivationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActivationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeregisteredCount: The number of instances that have been logged out.</summary>
            [JsiiProperty(name: "attrDeregisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeregisteredCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegisteredCount: The number of registered instances.</summary>
            [JsiiProperty(name: "attrRegisteredCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegisteredCount
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.ActivationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IActivationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IActivationProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
