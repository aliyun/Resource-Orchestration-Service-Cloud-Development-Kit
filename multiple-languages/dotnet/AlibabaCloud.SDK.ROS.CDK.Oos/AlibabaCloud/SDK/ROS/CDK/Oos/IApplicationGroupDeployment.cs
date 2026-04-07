using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Represents a `ApplicationGroupDeployment`.</summary>
    [JsiiInterface(nativeType: typeof(IApplicationGroupDeployment), fullyQualifiedName: "@alicloud/ros-cdk-oos.IApplicationGroupDeployment")]
    public interface IApplicationGroupDeployment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApplicationName: The name of the application.</summary>
        [JsiiProperty(name: "attrApplicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApplicationName
        {
            get;
        }

        /// <summary>Attribute ExecutionId: The execution ID of the application group deployment.</summary>
        [JsiiProperty(name: "attrExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExecutionId
        {
            get;
        }

        /// <summary>Attribute Name: The name of the application group.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.ApplicationGroupDeploymentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationGroupDeploymentProps Props
        {
            get;
        }

        /// <summary>Represents a `ApplicationGroupDeployment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApplicationGroupDeployment), fullyQualifiedName: "@alicloud/ros-cdk-oos.IApplicationGroupDeployment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationGroupDeployment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApplicationName: The name of the application.</summary>
            [JsiiProperty(name: "attrApplicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExecutionId: The execution ID of the application group deployment.</summary>
            [JsiiProperty(name: "attrExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExecutionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the application group.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.ApplicationGroupDeploymentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationGroupDeploymentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationGroupDeploymentProps>()!;
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
