using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Represents a `MigrationJobs`.</summary>
    [JsiiInterface(nativeType: typeof(IMigrationJobs), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IMigrationJobs")]
    public interface IMigrationJobs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DtsInstanceIds: The list of dts instance IDs.</summary>
        [JsiiProperty(name: "attrDtsInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsInstanceIds
        {
            get;
        }

        /// <summary>Attribute MigrationInstances: The list of migration instances.</summary>
        [JsiiProperty(name: "attrMigrationInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMigrationInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.MigrationJobsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IMigrationJobsProps Props
        {
            get;
        }

        /// <summary>Represents a `MigrationJobs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMigrationJobs), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IMigrationJobs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IMigrationJobs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DtsInstanceIds: The list of dts instance IDs.</summary>
            [JsiiProperty(name: "attrDtsInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MigrationInstances: The list of migration instances.</summary>
            [JsiiProperty(name: "attrMigrationInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMigrationInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.MigrationJobsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IMigrationJobsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IMigrationJobsProps>()!;
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
