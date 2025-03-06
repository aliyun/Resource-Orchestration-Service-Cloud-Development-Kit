using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `Command`.</summary>
    [JsiiInterface(nativeType: typeof(ICommand), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ICommand")]
    public interface ICommand : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CommandContent: Command content, encoded in Base64 and transmitted.</summary>
        [JsiiProperty(name: "attrCommandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommandContent
        {
            get;
        }

        /// <summary>Attribute CommandId: Command ID.</summary>
        [JsiiProperty(name: "attrCommandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommandId
        {
            get;
        }

        /// <summary>Attribute CommandName: Command name.</summary>
        [JsiiProperty(name: "attrCommandName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommandName
        {
            get;
        }

        /// <summary>Attribute CreateTime: Command creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: Command description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EnableParameter: Whether to use parameters.</summary>
        [JsiiProperty(name: "attrEnableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableParameter
        {
            get;
        }

        /// <summary>Attribute ParameterNames: Parameter name.</summary>
        [JsiiProperty(name: "attrParameterNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterNames
        {
            get;
        }

        /// <summary>Attribute Tags: The label information of the command.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Timeout: Timeout.</summary>
        [JsiiProperty(name: "attrTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimeout
        {
            get;
        }

        /// <summary>Attribute Type: Command type.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute WorkingDir: Execution path.</summary>
        [JsiiProperty(name: "attrWorkingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkingDir
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.CommandProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommandProps Props
        {
            get;
        }

        /// <summary>Represents a `Command`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommand), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ICommand")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommand
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CommandContent: Command content, encoded in Base64 and transmitted.</summary>
            [JsiiProperty(name: "attrCommandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommandContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommandId: Command ID.</summary>
            [JsiiProperty(name: "attrCommandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommandId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommandName: Command name.</summary>
            [JsiiProperty(name: "attrCommandName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommandName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Command creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Command description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableParameter: Whether to use parameters.</summary>
            [JsiiProperty(name: "attrEnableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableParameter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterNames: Parameter name.</summary>
            [JsiiProperty(name: "attrParameterNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The label information of the command.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Timeout: Timeout.</summary>
            [JsiiProperty(name: "attrTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: Command type.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkingDir: Execution path.</summary>
            [JsiiProperty(name: "attrWorkingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkingDir
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.CommandProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommandProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommandProps>()!;
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
