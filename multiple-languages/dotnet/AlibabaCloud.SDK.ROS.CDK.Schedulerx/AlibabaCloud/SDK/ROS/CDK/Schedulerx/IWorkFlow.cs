using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Schedulerx
{
    /// <summary>Represents a `WorkFlow`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkFlow), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.IWorkFlow")]
    public interface IWorkFlow : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: Workflow description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.</summary>
        [JsiiProperty(name: "attrGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupId
        {
            get;
        }

        /// <summary>Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.</summary>
        /// <remarks>
        /// The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        /// </remarks>
        [JsiiProperty(name: "attrMaxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxConcurrency
        {
            get;
        }

        /// <summary>Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.</summary>
        [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespace
        {
            get;
        }

        /// <summary>Attribute TimeExpression: Time expression, which is set based on the selected time type.</summary>
        [JsiiProperty(name: "attrTimeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimeExpression
        {
            get;
        }

        /// <summary>Attribute TimeType: Time type.</summary>
        [JsiiProperty(name: "attrTimeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimeType
        {
            get;
        }

        /// <summary>Attribute WorkFlowId: workflow id.</summary>
        [JsiiProperty(name: "attrWorkFlowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkFlowId
        {
            get;
        }

        /// <summary>Attribute WorkflowName: Workflow Name.</summary>
        [JsiiProperty(name: "attrWorkflowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkflowName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-schedulerx.WorkFlowProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Schedulerx.IWorkFlowProps Props
        {
            get;
        }

        /// <summary>Represents a `WorkFlow`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkFlow), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.IWorkFlow")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Schedulerx.IWorkFlow
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: Workflow description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.</summary>
            [JsiiProperty(name: "attrGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.</summary>
            /// <remarks>
            /// The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
            /// </remarks>
            [JsiiProperty(name: "attrMaxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxConcurrency
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.</summary>
            [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TimeExpression: Time expression, which is set based on the selected time type.</summary>
            [JsiiProperty(name: "attrTimeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimeExpression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TimeType: Time type.</summary>
            [JsiiProperty(name: "attrTimeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkFlowId: workflow id.</summary>
            [JsiiProperty(name: "attrWorkFlowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkFlowId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkflowName: Workflow Name.</summary>
            [JsiiProperty(name: "attrWorkflowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkflowName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-schedulerx.WorkFlowProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Schedulerx.IWorkFlowProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Schedulerx.IWorkFlowProps>()!;
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
