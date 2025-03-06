using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `Invocation`.</summary>
    [JsiiInterface(nativeType: typeof(IInvocation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IInvocation")]
    public interface IInvocation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InvokeId: The id of command execution.</summary>
        [JsiiProperty(name: "attrInvokeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInvokeId
        {
            get;
        }

        /// <summary>Attribute InvokeInstances: The InvokeInstances of command.</summary>
        [JsiiProperty(name: "attrInvokeInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInvokeInstances
        {
            get;
        }

        /// <summary>Attribute InvokeResults: The results of invoke command.</summary>
        [JsiiProperty(name: "attrInvokeResults", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInvokeResults
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InvocationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocationProps Props
        {
            get;
        }

        /// <summary>Represents a `Invocation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInvocation), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IInvocation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InvokeId: The id of command execution.</summary>
            [JsiiProperty(name: "attrInvokeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInvokeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InvokeInstances: The InvokeInstances of command.</summary>
            [JsiiProperty(name: "attrInvokeInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInvokeInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InvokeResults: The results of invoke command.</summary>
            [JsiiProperty(name: "attrInvokeResults", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInvokeResults
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.InvocationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocationProps>()!;
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
