using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Represents a `DataSourceSharedRule`.</summary>
    [JsiiInterface(nativeType: typeof(IDataSourceSharedRule), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IDataSourceSharedRule")]
    public interface IDataSourceSharedRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the data source sharing rule.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CreateUser: Creator of the data source permission policy.</summary>
        [JsiiProperty(name: "attrCreateUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateUser
        {
            get;
        }

        /// <summary>Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.</summary>
        [JsiiProperty(name: "attrDataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceId
        {
            get;
        }

        /// <summary>Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.</summary>
        [JsiiProperty(name: "attrDataSourceSharedRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceSharedRuleId
        {
            get;
        }

        /// <summary>Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).</summary>
        [JsiiProperty(name: "attrEnvType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvType
        {
            get;
        }

        /// <summary>Attribute SharedDataSourceName: The name of the data source shared to the target space.</summary>
        /// <remarks>
        /// Consists of the name of the source space and the name of the data source, separated by dots.
        /// </remarks>
        [JsiiProperty(name: "attrSharedDataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSharedDataSourceName
        {
            get;
        }

        /// <summary>Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.</summary>
        [JsiiProperty(name: "attrSharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSharedUser
        {
            get;
        }

        /// <summary>Attribute SourceProjectId: The ID of the project to which the data source is originally created.</summary>
        [JsiiProperty(name: "attrSourceProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceProjectId
        {
            get;
        }

        /// <summary>Attribute TargetProjectId: The ID of the project to which the data source is shared.</summary>
        [JsiiProperty(name: "attrTargetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetProjectId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.DataSourceSharedRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dataworks.IDataSourceSharedRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `DataSourceSharedRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDataSourceSharedRule), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IDataSourceSharedRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IDataSourceSharedRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the data source sharing rule.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateUser: Creator of the data source permission policy.</summary>
            [JsiiProperty(name: "attrCreateUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateUser
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.</summary>
            [JsiiProperty(name: "attrDataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.</summary>
            [JsiiProperty(name: "attrDataSourceSharedRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceSharedRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).</summary>
            [JsiiProperty(name: "attrEnvType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SharedDataSourceName: The name of the data source shared to the target space.</summary>
            /// <remarks>
            /// Consists of the name of the source space and the name of the data source, separated by dots.
            /// </remarks>
            [JsiiProperty(name: "attrSharedDataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSharedDataSourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.</summary>
            [JsiiProperty(name: "attrSharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSharedUser
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceProjectId: The ID of the project to which the data source is originally created.</summary>
            [JsiiProperty(name: "attrSourceProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetProjectId: The ID of the project to which the data source is shared.</summary>
            [JsiiProperty(name: "attrTargetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.DataSourceSharedRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dataworks.IDataSourceSharedRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dataworks.IDataSourceSharedRuleProps>()!;
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
