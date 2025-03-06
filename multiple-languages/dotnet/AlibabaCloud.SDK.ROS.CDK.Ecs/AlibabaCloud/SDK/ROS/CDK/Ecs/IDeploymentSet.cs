using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `DeploymentSet`.</summary>
    [JsiiInterface(nativeType: typeof(IDeploymentSet), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IDeploymentSet")]
    public interface IDeploymentSet : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DeploymentSetId: The ID of the deployment set.</summary>
        [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeploymentSetId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.DeploymentSetProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSetProps Props
        {
            get;
        }

        /// <summary>Represents a `DeploymentSet`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeploymentSet), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IDeploymentSet")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSet
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DeploymentSetId: The ID of the deployment set.</summary>
            [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeploymentSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.DeploymentSetProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSetProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSetProps>()!;
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
